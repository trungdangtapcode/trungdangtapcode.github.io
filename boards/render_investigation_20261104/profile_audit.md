# Scene and Build Profile Audit

Date: 2026-11-04  
Scope: read-only source/build-profile audit. No source, executable, or game was changed or run.  
Source revision: `9bb0968efa086bcd62346daefff7329595a1314a`.

## Verdict

The inspected runtime uses one shared Tiled map resource and world-render path for maps. The inspected
scene-specific behavior is selected from loaded encounter/map data (for example, whether the encounter
has an authored escape route), rather than branching on a scene name or map ID. This is evidence against
the claim that every scene has its own separately optimized renderer.

The workspace retains many separately packaged candidate directories with different launch profiles
and content selections. These include historical experiments; their existence alone does not establish
that the current handoff has a provenance problem or that the user ran one of them. Root integration
verification identifies `build/level_depth_revision/candidate` as the current handoff candidate, with
executable SHA-256 `A0A17088BE0269943053A546570FB4EA94B2CF9BE8E045EA07CA2EDFFEAD4CC4`, a matching
3,253-file receipt, and source checks matching the last passed report. The historical
`service_court_runtime` bundle is not the current candidate. A user running an older bundle remains a
hypothesis, not a confirmed explanation for the reported rendering defects.

## Confirmed source behavior

1. **Map identity is data-driven at load.** `TileMapLoader.cpp:738-747` reads `map_id` and dimensions
   from the Tiled map and validates the ID; the inspected renderer/resource code does not compare the
   ID against `escape_route_v1`, `service_court`, or `lighting` to select a renderer.
2. **A common renderer owns the optional map resource.** `Renderer.cpp:29-48` constructs the same
   `Renderer` and creates `TileMapResources` whenever a map is supplied. `Renderer.cpp:250-310` runs
   the same sight composition, map Ground/Overhead draws, actor/effect draws, and dynamic-overlay
   passes. A no-map fallback draws the Street sprite at lines 283-286; this is a legacy fallback, not
   evidence of a second map renderer.
3. **Map drawing is prepared and shared.** `TileMapResources.cpp:130-193` prepares tile-layer draw
   records from map data. Lines 195-263 prepare image-object records and sort by authored pass/order.
   Texture loading and validation are handled by the same constructor at lines 50-99.
4. **Encounter-specific render branches are capability-driven.** `WorldRenderer.cpp:152-185` renders
   interaction controls and gate snapshots when `has_escape_route()` is true; otherwise it uses the
   single-objective/exit path. The gate depth adjustment at lines 251-270 is also guarded by that
   capability and uses the current gate blocker. These branches follow encounter data, not a named
   scene/profile.
5. **The build packages multiple map packages and fixed demo-content files.** `CMakeLists.txt:232-240`
   first exports the default Tiled assets and then exports the escape-route manifest to the same
   `assets/world` destination. The target later exports the lighting manifest to the same destination
   at lines 530-532. It also copies fixed demo encounter/presentation/gameplay assets (for example
   lines 300-320). The final launch selection is supplied separately by the launch profile or command
   line; the shared executable is not intrinsically tied to one map.

## Historical profile examples and current-candidate correction

- `build/service_court_runtime/candidate/play.cmd` launches
  `assets/world/content/maps/escape_route_v1/escape_route_v1.tmj`,
  `assets/demo/gameplay_sight.json`, `presentation_inventory.json`, and
  `service_court_escape.json`.
- Its `launch_profile.json` declares the same inputs, calls itself a “Service Court A local escape
  slice,” and points `technical_report` to `build/service_court_runtime/project_checks.json`.
- That report records `started_utc` as `2026-10-30T14:28:59.9198332Z` and status `passed`.
- This is a historical profile/bundle. Its October 30 report describes that historical run, as
  expected; it is not the current handoff candidate and is not evidence of a current-candidate defect.
- The repository contains dozens of `build/*/candidate/launch_profile.json` variants. The inspected
  list includes candidates for `lighting/power_station.tmj`, `urban_integration/power_station.tmj`,
  `escape_route_v1/escape_route_v1.tmj`, and `sight_corner_v1/power_station.tmj`. These are separate
  content/encounter experiments, despite using the same `zombie_demo.exe` filename. The profiles are
  evidence of distinct launch content, not distinct engine implementations.

## Design comparison

`planning/contracts/SHARED_MAP_RUNTIME_DESIGN_2026-10-30.md` explicitly calls itself a research/design
study, not an implemented runtime slice (section 1). It proposes retaining Raylib, World, Encounter,
the Tiled loader and their accepted behavior, and extending current ownership boundaries rather than
creating a generic Engine class. Its section 4 assigns map resources/prepared draw records to
`presentation/resources`, map/mission state to existing content/game owners, and composition to the
existing Raylib path. The source inspected here already has the common `TileMapResources` and
`Renderer` path, and pre-prepares per-map draw records. The design's proposed further work—such as
package identity, explicit revisions, spatial query indexes, bounded illumination residency and
chunking—is not established as implemented by this profile audit.

The source design is therefore partly realized in existing shared boundaries, while the proposed
runtime-cache/lifecycle extensions remain design items. A new abstract “engine” layer is not justified
by the evidence gathered here. The more immediate demonstrated operational weakness is that candidate
profiles and receipts do not guarantee that the executable/assets match the current source revision.

## Findings versus hypotheses

### Confirmed

- No named-map renderer switch was found in the inspected loader, `Renderer`, `WorldRenderer`, or
  `TileMapResources` paths. Map identity is loaded as content metadata; shared rendering consumes the
  resulting map representation.
- Encounter capability branches do exist. They distinguish escape-route encounters from legacy
  objective/exit encounters, and authored gate control/depth data affects drawing.
- Candidate directories include historical profiles and content bundles. The current handoff is
  `build/level_depth_revision/candidate`; root integration reports that its executable SHA-256 is
  `A0A17088BE0269943053A546570FB4EA94B2CF9BE8E045EA07CA2EDFFEAD4CC4`, its receipt matches 3,253
  files, and source checks match the last passed report. The game title/config branding is newer than
  that candidate, so its older title is expected and is not a false acceptance of current branding.

### Not established here

- That the user recently ran any particular historical bundle. Running an old candidate remains a
  hypothesis until the executable path/hash is observed.
- That stale content caused a particular black-light, missing-asset, gate, or depth-order symptom.
- Whether any particular symptom is due to asset authoring, occlusion, render ordering, GPU state, or
  map profile settings; sibling audits cover those deeper pipelines.
- Current FPS or visual acceptance. No executable or game was run for this audit.

## Suggested concrete next step

When diagnosing a particular user-visible failure, first compare the executable path/hash and launch
profile with the current handoff receipt. The current candidate already has the reported matching
source checks and 3,253-file receipt. Keep historical candidates labeled as historical; do not infer
that their existence explains a symptom without evidence that the user launched one. This preserves
the distinction between shared render architecture and which exact bundle was run.
