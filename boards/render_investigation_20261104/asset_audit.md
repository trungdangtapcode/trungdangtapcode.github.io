# Shared Asset and Map Rendering Audit

Date: 2026-11-04  
Scope: read-only source audit of Tiled loading, map texture preparation, draw passes/depth,
cutaway, actor composition, camera integration, and existing sight/memory optimization.  
Source revision: `9bb0968efa086bcd62346daefff7329595a1314a`.  
Classification: source-backed architecture/risk audit; no source edits, build, game run, screenshot,
or fresh performance measurement was performed.

## Verdict

The current runtime has a shared content-to-render path. I found no renderer branch keyed to
Service Court, Black Tide, Last Shift, or the escape map ID. Scene/map differences are mostly
authored through Tiled layers, render-pass properties, cutaway bindings, gameplay profiles, and
asset manifests. There is one explicit old no-map fallback that draws the Street sprite.

The main correctness boundary is split authoring: visual placement/depth and collision/sight
geometry are loaded through different records and are not derived from one shared placed-asset
instance. This can produce art/hitbox/occlusion disagreement when authoring data drifts; this audit
does not establish that the current screenshots are caused by that mismatch. The nearest useful
fix is a source-backed native audit of the current map that compares each placed visual against its
collision/sight footprint and pass/depth, followed by repair at the Tiled object/metadata boundary.
The evidence does not support adding a new generic engine or rewriting the renderer.

## Shared path and authored responsibilities

1. `content::load_tile_map` resolves Tiled maps, tilesets, image collections, object groups and
   nested groups into a typed `TileMap`. Tiled dependencies must be relative and exist
   (`src/content/maps/TileMapLoader.cpp:24-48`). Visual layers require a declared `render_pass`
   of `ground`, `world`, or `overhead`; world objects require a typed, in-bounds `sort_ground_y`
   (`TileMapLoader.cpp:264-330`). Tile layers are restricted to ground/overhead
   (`TileMapLoader.cpp:609-633`). The typed pass and visual object fields are defined in
   `src/content/maps/TileMap.h:19-24,63-95`.
2. `TileMapResources` owns a copy of the validated map, loads/caches each referenced texture by
   normalized path, checks expected image dimensions, and prepares UVs/vertices once at resource
   construction (`src/presentation/resources/TileMapResources.cpp:50-98,130-249`). Draw-time
   tile culling uses the camera's world rectangle (`TileMapResources.cpp:361-425`). This is a
   shared path, not a per-scene implementation.
3. `Renderer` composes the passes in the same order: ground and overhead under sight shading,
   ground objects, Y-sorted world actors/props/map objects, then overhead (`src/presentation/render/Renderer.cpp:253-309`).
   `WorldRenderer` sorts actors and Tiled world visuals by their authored/actor ground Y, with a
   stable kind/index tie-break (`src/presentation/render/WorldRenderer.cpp:114-124,239-248`).
4. Actor animation and full-body presentation are selected through the shared presentation
   manifest and `EncounterActors`; the actor renderer consumes those samples in the same
   `WorldRenderer` pass. The map renderer does not own per-scene actor art selection
   (`src/presentation/animation/EncounterActors.cpp:76-112,179-224`; `WorldRenderer.cpp:295-330`).
5. Camera parameters load from `app/camera.json`, while the submitted frame camera is shared by
   sight projection, map rendering, pointer inversion and HUD composition
   (`src/presentation/render/Renderer.cpp:29-39,233-257,388-420`). Camera aim/follow/zoom are
   config-driven in `src/presentation/render/WorldCamera.cpp:140-160,184-214`.

## Scene-specific behavior found

- **Legacy fallback:** when there is no Tiled map resource, `Renderer` draws the old Street sprite
  (`Renderer.cpp:283-286`). This is an explicit fallback path, not a Service Court-specific path.
- **Map-authored behavior:** render pass, object depth, group opacity/visibility, cutaway, sight
  projection, static lights, obstacles and markers come from Tiled data/config. Gameplay combines
  map placements with existing lighting policy in `src/content/maps/MapLayout.cpp:26-40,56-89`.
- **Cutaway:** `RoofCutaway` fades bindings based on the player position and validated map regions;
  no map-name condition appears in the implementation (`src/presentation/maps/RoofCutaway.cpp:31-78,125-135`).
- **Gate art is a separate runtime visual:** escape gates are drawn from the encounter snapshot's
  visual position/frame (`src/presentation/render/WorldRenderer.cpp:449-461`), while map collision
  and sight blockers are independently applied from the Tiled map (`MapLayout.cpp:26-40`). This
  separation permits placement drift but is intentional for a stateful gate.

## Concrete risks and evidence limits

### 1. Visual depth versus physical footprint can drift (credible, not reproduced here)

Tiled world-object artwork has `anchor_position`, size, rotation, and `sort_ground_y`
(`src/content/maps/TileMap.h:81-95`; validated at `TileMapLoader.cpp:300-330`). Collision and sight
obstacles are separate map collections, then copied into the gameplay arena
(`src/content/maps/MapLayout.cpp:26-40`). Actor sorting uses the actor's runtime position, while
world artwork uses the separately authored `sort_ground_y`
(`src/presentation/render/WorldRenderer.cpp:114-124,196-212,239-248`). Therefore a bad Tiled
placement can have invisible/offset art while the corresponding blocker remains active, or the
right art can sort in front of/behind actors at the wrong depth. Source proves the independent
contracts; it does **not** prove that a particular current prop/gate has mismatched coordinates.

### 2. Map growth has a known large sight-memory allocation (source-backed estimate, not a fresh
measurement)

`SightScene` allocates CPU mask/light arrays on the full map grid and two full-world render textures
(`src/presentation/perception/SightScene.cpp:19-34`). For the current 120×128 map at 32 px,
that is 3840×4096. Two RGBA8 color surfaces alone are about **120 MiB**, excluding depth buffers,
CPU arrays, canvas, driver overhead and other textures. This is a concrete shared resource limit to
address/measure before growing more map content; it is not evidence of the user's intermittent
black-light symptom.

### 3. Earlier optimizations are real but partial

- Commit `afe672a` prepared tile UV/texture/vertex records once and removed per-draw item assembly,
  repeated resource lookup and sorting. Current code retains that path
  (`TileMapResources.cpp:130-273,361-425`). It still iterates prepared tile records and submits
  visible quads per tile; there is no measured GPU batching claim in this audit.
- The same optimization bounds line-of-sight coverage evaluation to the observer's influence and
  updates changed actor snapshot rows (`src/presentation/perception/SightMask.cpp:88-149`).
  However, coverage rebuild clears the full CPU mask and ultimately uploads the full mask texture
  (`SightMask.cpp:88-92,145-148`). Moving the observer therefore still has map-grid fill/upload
  work even though LOS calculations are bounded. This is source evidence of remaining work, not a
  timing result.
- Remembered terrain draws use `TileMapResources::memory_view`, which starts with observer radius
  and unions projected-layer bounds (`src/presentation/resources/TileMapMemoryView.cpp:7-26`).
  If a projected layer spans much of the map, that union can enlarge the memory draw rectangle.
  Current escape map has no `sight_height_units`/`sight_footprint_object_id` properties; do not
  attribute its current cost to this branch without a current map profile.

### 4. Invalidation is construction/lifecycle scoped

`Renderer` creates `TileMapResources` from the map passed to its constructor
(`src/presentation/render/Renderer.cpp:29-48`); prepared geometry and textures are immutable for
that resource's lifetime. `SightScene` also allocates world-size-dependent surfaces at creation
(`SightScene.cpp:15-34`). The inspected code has no in-place map-resource replacement API. This is
consistent with the current local renderer lifecycle, but dynamic same-renderer map replacement
would need explicit resource/sight recreation. No such replacement failure was reproduced.

## Recommended next boundary

Before adding more map content or introducing a renderer/engine abstraction:

1. Audit the exact current integrated map/package revision. For every placed asset, record the
   Tiled object ID, source image/size, anchor/alignment/tile offset, intended ground-depth line,
   collision footprint, sight blocker/projection, cutaway binding, and visibility/pass.
2. Capture native output from that same revision at the affected positions and compare it to the
   source records. Repair confirmed disagreements in Tiled placement/metadata; add a loader or
   content validation rule only for a concrete mismatch class.
3. For intermittent lighting/black output, correlate native captures with sight/light revisions
   and the exact map/profile. Keep that as a separate visual-state invalidation investigation; this
   audit did not run the GPU path and cannot diagnose it.
4. Profile the current map's sight update and render-target residency before changing the accepted
   optimization. Preserve the prepared tile resource path; do not revert it or replace it with a
   scene-specific renderer based on appearance alone.

## Validation and limitations

This was a read-only source audit at the revision above. No local build, test, GPU capture, gameplay
session, asset preview or profiler run was performed. The root agent reports that the existing
current-binary checks cover 53 lighting/sight/cutaway/depth tests and 169,782 assertions; those are
inherited results, not rerun for this audit, and do not establish visual correctness or performance.
The user screenshots and source did not permit attribution of each visual artifact to a particular
branch. Native source/package inspection and a fresh candidate capture are required before filing a
confirmed runtime bug.
