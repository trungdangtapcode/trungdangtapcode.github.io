# RV-20261031-003 - Tiled facade ground-depth correction

## Snapshot and responsibility

- Date/time zone: 2026-10-31, Asia/Saigon.
- Reviewer/integration owner: Codex Sprint 01 integration; implementation self-review with
  a separate read-only depth-consumer audit. This is not independent product acceptance.
- Task: BL-103; runtime slice correcting the player occlusion reported in `image18.png`.
- Base revision: `2cbdcef`; intended changes are map schema 7, prepared map resources,
  the existing world draw queue, sight consumers, five facade placements and two fixtures.
  Unrelated local `AGENTS.md` and `todo.txt` changes are excluded.
- Governing contract: [Tiled world depth](../contracts/TILED_WORLD_DEPTH_2026-10-31.md).
- Nearest extension: four Freight Yard facades consume the same metadata and draw queue as
  the Service Court warehouse. Existing independently fading roofs retain their own pass.
- Previous related evidence: [Service Court performance](2026-10-31-002-service-court-performance-runtime.md).
  Its FPS measurements are historical; they do not certify performance of this changed build.

## Finding and correction

F-01 (P1): The warehouse facade was an `overhead` object drawn after every actor. Approaching
its south wall correctly stops the player at `(570, 2906)`, outside the solid footprint, but
the facade hides the body. The original native fixture reproduces the user's screenshot.

The map now supplies an explicit absolute `sort_ground_y` for world visual objects. The
world renderer inserts these objects into its existing ground-Y queue, drawing ties before
actors. Texture geometry remains prepared once; gameplay collision and artwork are unchanged.
The loader validates the new contract and rejects unsupported combinations. World facades
register sight surfaces and draw once at their sorted depth. Roof cutaways remain separate
so their existing fade/memory lifetime is preserved.

F-02 (P1, found during native re-review): Sorting alone leaves a second defect. A facade drawn
with ordinary visibility alpha exposes the player behind it when looking away. World facades
now reuse the existing single-pass live/remembered/unexplored color composite, preserving
authored alpha. They are excluded from baseline terrain draws and persistent terrain memory.
The shader respects `remember_terrain = false` when choosing its background color.

Relevant files: `src/content/maps/TileMapLoader.cpp`,
`src/presentation/resources/TileMapResources.cpp`,
`src/presentation/render/WorldRenderer.cpp`,
`src/presentation/render/Renderer.cpp`,
`src/presentation/perception/RendererSight.cpp`, and
`content/maps/escape_route_v1/escape_route_v1.tmj`.

## Validation

The integrated Release snapshot passed `check_project.ps1` on 2026-10-31, 07:12-07:24 UTC:
format, source structure, build, 432 tests / 2,572,185 assertions, assets and canonical load
smoke. The report records no changed inputs. See the [JSON report](../../build/warehouse_occlusion/project_checks.json)
and [execution log](../../build/warehouse_occlusion/check_project.log). Build/test success
is separate from the native visual evidence below.

- Native before/after reproduces the obscured actor and verifies the corrected front approach,
  blocked position, corner and east side. A second facade verifies front/behind ordering while
  changing facing, including looking away. The terrain-memory-disabled run also preserves
  physical facade occlusion. Thirteen lossless review crops were inspected in the
  [comparison page](../../build/warehouse_occlusion/comparison.html).
- Both service-room cutaways were exercised through entry, transition, facing, exit and
  reentry. All 16 west/east captures remain hash-identical to the sorting-only build before
  the F-02 shader correction; this comparison does not claim equivalence to the original
  broken overhead ordering. See [cutaway results](../../build/warehouse_occlusion/cutaway_regression.json).
- The packaged selected-encounter smoke passed separately: 2,827 ticks, peak 76 living
  zombies, 64 shots, 28 deaths and 100 player HP. See
  [smoke receipt](../../build/warehouse_occlusion/selected_smoke.json) and
  [log](../../build/warehouse_occlusion/selected_smoke.log). This is not an FPS benchmark
  or a human playtest.
- The [candidate launcher](../../build/warehouse_occlusion/candidate/play.cmd),
  [build board](../../build/warehouse_occlusion/index.html) and comparison page are available.
  Browser checks decoded all 14 board images and 13 comparison images with no missing local
  links. Global historical-build catalog refresh failed on another board's missing
  `display_name`; the current board was exported and checked separately.

Reproduction inputs are `content/qa/warehouse_depth_runtime.json`,
`content/qa/facade_depth_runtime.json` and the existing west/east building-cutaway fixtures.
The [receipt](../../build/warehouse_occlusion/receipt.json) records executable, launch-input,
technical-report and native-probe hashes; per-capture hashes are in
[native evidence](../../build/warehouse_occlusion/native_receipt.json) and
[memory-disabled evidence](../../build/warehouse_occlusion/without_memory/receipt.json).
The intermediate sorting-only F-02 reproduction is archived and is not the final candidate.

Final executable SHA-256:
`C5152098D45665F98392FBFAA51CA0FA6A00E2CEAA824AF10170116834CE8371`.
Native probe SHA-256:
`2F1B7CC3A8349774D112AD7F5033731CDD214C48AC19DEEC11F72480C3371CFF`.

## Verdict and limits

F-01 and F-02 are corrected in the verified runtime slice; BL-103's scoped technical and
native-render acceptance is met. This is implementation self-review, not independent product
acceptance. This review does not accept overall environment composition, lighting,
the full escape mission, multiplayer or human playtest quality. Freight Yard collision is
still an authoring limitation; its fixture tests rendering, not a traversable interior.
No fresh frame-time measurement was taken; BL-101's remaining performance gates stay open.
