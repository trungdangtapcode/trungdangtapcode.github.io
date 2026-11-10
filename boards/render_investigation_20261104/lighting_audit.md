# Lighting and Sight Rendering Audit

Date: 2026-11-04  
Scope: read-only source investigation at repository revision `9bb0968`. This is an architecture/source audit, not a runtime acceptance report. No source files were changed; no build, game, or GPU test was run for this audit.

## Verdict

The project does **not** implement a separate lighting optimizer for each scene. It has one shared gameplay lighting/perception sampler and one shared presentation `SightScene` mask/compositor used by `Renderer`. Maps contribute authored light definitions, obstacle geometry, and ordered draw passes. That is a real shared pipeline, not merely a plan.

It is also not a general rendering engine abstraction: the presentation contract is a concrete `SightScene` owned by `Renderer`, with GPU resources and map callbacks. Its cache invalidation is explicit and mostly source-aware, but several invalidation inputs are implicit (scene/map/lighting definition lifetime). The source audit did not find proof that the currently reported intermittent partial/missing light is caused by a cache bug. The issue must remain open until tied to a reproducible source, location, and matching executable.

## Shared pipeline and scene-specific data

1. `World::refresh_dynamic_lights` assembles portable lamps, mission-activated authored fixtures, and active flares into one world snapshot (`src/game/lighting/WorldLighting.cpp:56-125`). Fixed map fixtures that have an activation condition are included only when the encounter reports that event (`:76-92`).
2. `Perception::set_dynamic_lights` sorts by stable source ID, validates source/profile data, resolves profile IDs once, compares the full source state, and increments a revision only when the snapshot changes (`src/game/perception/Perception.cpp:40-87`). The sampler evaluates enabled authored and dynamic sources through the same implementation (`src/game/perception/Lighting.cpp:59-126`).
3. `Renderer::update_sight` creates one `SightScene` from the map dimensions, world observer config, shared sight style, and map lighting definition, then registers Ground/World/Overhead surface passes (`src/presentation/perception/RendererSight.cpp:26-66`). `RendererCombat::consume` calls that same path (`src/presentation/render/RendererCombat.cpp:6-16`); map rendering receives pass/purpose values, not a second scene-specific lighting implementation.
4. `SightScene::observe` refreshes blocker geometry and dynamic lights, tracks observer changes, actor-memory rows, and source dirty bounds (`src/presentation/perception/SightScene.cpp:115-168`). `SightMask::update_mask` updates the whole static field when needed, otherwise updates bounded dynamic regions, then recomputes observer coverage as needed (`src/presentation/perception/SightMask.cpp:7-90`). The shared compositor binds the same mask/light/reference textures and configured range/lighting values (`src/presentation/perception/SightComposite.cpp:9-84`).
5. Map-specific illumination is primarily data: source profiles/positions/activation and perception config are passed into the shared sampler and compositor. The three named draw passes classify map surfaces, but do not select different light algorithms.

## What has already been reproduced

Review `planning/reviews/2026-10-24-008-light-visibility.md` records one deterministic bug: illuminated visibility accidentally inherited the player's aimed personal range. The source and source power remained active while the lamp and lit pool disappeared on aim release; this depended on observer-to-lamp distance, not random source power (`:12-32`). It was corrected through separate configured personal and illuminated ranges in the shared CPU/GPU path (`:27-37`).

The same review says a follow-up inspected 66 rendered frames and 160 sampled light-core/cone positions through observer-facing and aim/release changes. Those samples remained stable. It explicitly did **not** prove all falloff pixels or every placement, and the report leaves partial/missing sources open (`:92-110`). It also notes the three static sample lamps were eight units from an opaque southern boundary, so LOS clipped their pools (`:103-107`). `planning/BACKLOG.md:526-544` preserves that limitation. Therefore prior evidence rules out neither every geometry placement issue nor every rendering/compositing issue.

## Cache and invalidation audit

### Confirmed behavior

- Perception snapshots are value-compared, not keyed only by a source count or ID (`src/game/perception/Perception.cpp:70-87`). Changes to position, profile, enable state, intensity, or facing affect the revision (`:73-79`).
- Change bounds are computed from both removed/changed old sources and added/changed new sources; each bound uses the configured profile radius (`src/game/perception/Perception.cpp:129-180`). This is the right shape for a moving or toggled source: stale pixels at the old location can be refreshed as well as the new location.
- `SightScene` reacts to blocker-vector changes with a full lighting rebuild, observer/config changes with coverage refresh, and source revision changes with dirty-region refresh (`src/presentation/perception/SightScene.cpp:129-168`).
- A world tick moving backwards clears actor memory and invalidates the mask before continuing (`src/presentation/perception/SightScene.cpp:117-125`).
- Dynamic-region uploads use the same computed cell region for light pixels and, when coverage is not globally refreshed, mask pixels (`src/presentation/perception/SightMask.cpp:50-80`). Full coverage refresh clears old mask coverage first (`:88-93`).

### Structural risks, not proven runtime defects

- **No explicit map/scene generation in `SightScene` cache identity.** The instance captures map size and lighting at construction and registers surface references once (`src/presentation/perception/RendererSight.cpp:34-58`; `src/presentation/perception/SightScene.cpp:15-34`). Current `Renderer` also constructs its `map_` once (`src/presentation/render/Renderer.cpp:45-48`) and resets `sight_` on feedback/session clear (`:133-145`). That lifecycle appears to make a Renderer/map pair stable today. If a future map swap or lighting hot-reload reuses the same Renderer, no map/content revision is passed to the sight scene to force recreation/re-registration. This is an extension hazard, not evidence of today's bug.
- **Lighting profiles are immutable inside a `Perception` instance.** Dynamic source revisions detect source data changes, but not edits to `LightingDefinition` in place; `SightScene` receives it by value at construction (`src/presentation/perception/SightScene.h:19-20`, `src/game/perception/Perception.h:65-73`). Current lifecycle recreates sight on a new renderer/session, but a future live config reload needs an explicit definition revision/recreate contract.
- **GPU render-target setup has a shared-state boundary.** Surface registration switches to a render texture, disables color blending, enters the shared shader, then restores blending (`src/presentation/perception/SightSurfaces.cpp:6-20`). Correctness depends on callback completion and Raylib state restoration; no exception-safe state guard appears in this function. I found no demonstrated throw during these callbacks, so this is a robustness concern, not an identified intermittent fault.
- Exact floating-point equality is used for source snapshots and observer position/facing (`src/game/perception/Perception.cpp:70-80`; `src/presentation/perception/SightScene.cpp:139-144`). This is deterministic for identical snapshots, but continuous small motion can repeatedly invalidate cells; it is more likely a cost/threshold concern than a cause of missing light.
- Source LOS and observer sight are distinct gates by design. Source contribution checks source-to-sample occlusion (`src/game/perception/Lighting.cpp:79-81`); observer coverage checks observer-to-sample LOS and configured view/range (`src/game/perception/Perception.cpp:195-220`, plus the GPU compositor). A lit floor sample can therefore fail to appear because either ray is blocked or because observer visibility/range rejects it. That is configured behavior, but visual diagnosis needs to expose both results rather than treating every dark pixel as a broken light.

## Conclusion for the scene-hardcoding question

The evidence supports: **one common lighting/sight implementation with map-authored data and common render passes; no indication that each scene has its own optimization algorithm.** There are concrete cache boundaries around `SightScene` construction and world snapshot updates. Those boundaries are ordinary source code, not arbitrary per-scene hacks, but future scene swapping/hot reload must explicitly invalidate/recreate them.

The source audit alone cannot decide why a particular screenshot has partial or missing illumination. Do not respond by increasing all radii, weakening wall occlusion, or adding per-map rendering branches: those would hide symptoms and corrupt intended gameplay.

## Recommended next diagnostic step

On the exact candidate executable and one reproducible map fixture, record the same light's stable ID/profile/enabled/facing/position, `SightScene` update tick and dynamic-light revision, source-to-sample LOS, observer-to-sample LOS, configured personal/illuminated ranges, dirty bounds, and final mask/light-field sample. Capture a grid across the light core and cone, including points on both sides of nearby walls. This separates source registration, gameplay contribution, observer admission, invalidation, and GPU composition. Include at least one fixed street lamp, one deployed directional lamp, one flare, and a wall-adjacent source; do not infer whole-source acceptance from a center sample.

## Validation limits

- Read-only inspection of the listed source and the prior review/backlog evidence.
- No compile, test, render, screenshot, or interactive reproduction was run for this report.
- Prior review results are cited as historical evidence only; they do not certify the current workspace or a different executable.
- Worktree already contained unrelated `M AGENTS.md` and untracked `todo.txt`; neither was changed.
