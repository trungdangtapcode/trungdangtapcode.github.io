# Source review: cutaway world-depth composition

Scope: read-only review of commit `bab94a5`, focused on duplicate composition, terrain-memory/behind-actor leaks, cutaway opacity semantics, and call sites. No build or game run performed. Existing untracked `todo.txt` was not touched.

## Findings

No source-level blocker found in the requested paths.

- The remap in `TileMapResources::draw_world_object` applies only to `Live` bound world objects; it passes `DynamicOverlay` into the one `draw_object` invocation at the existing world-depth queue position (`src/presentation/resources/TileMapResources.cpp:309-331`, called from `src/presentation/render/WorldRenderer.cpp:258`). There is no second World pass in `Renderer.cpp`; normal map passes draw Ground before and Overhead after the actor queue (`src/presentation/render/Renderer.cpp:270-305`). Map world objects are excluded from `memory_only` queue construction (`WorldRenderer.cpp:100-110`), so this remap does not stamp roofs into persistent terrain memory.
- `DynamicOverlay` suppresses unbound content but bound content proceeds to `base * cutaway_.opacity(binding)` (`TileMapResources.cpp:290-307`). The remapped roof therefore retains inherited authored opacity and the same active cutaway fade while moving to the depth-sorted live composition. `SurfaceRegistration` keeps authored base alpha, and `StaticMemory` suppresses bound surfaces, consistent with separate static surface registration and live roof composition.
- Sight composition still wraps this draw at its sorted ground depth. Since remapped opacity no longer hits the `Live && sight` suppression branch, the roof is rendered by `dim_terrain` at that depth, retaining the shader's live visibility treatment rather than being drawn later over actors (`TileMapResources.cpp:320-329`; `SightComposite.cpp` / `SightShader.h`). I found no second invocation that would double-composite the same object.
- The schema change is bounded: world-pass cutaway-bound object layers require schema 10, while lower schemas reject them (`src/content/maps/TileMapLoader.cpp:275-288`; accepted root versions at 701-706). Existing checks cover schema10 acceptance, lower-version rejection, depth validation, and binding (`tests/content/TileMapWorldPassTests.cpp:69-145`). The loader still requires `sort_ground_y` for each runtime world visual.

## Limit

This is source-path review only. It does not validate the authored map's pixel alpha, exact collision/opening geometry, runtime render output, or the running integrated check. Those remain with the root's native-pixel audit and full-check result.
