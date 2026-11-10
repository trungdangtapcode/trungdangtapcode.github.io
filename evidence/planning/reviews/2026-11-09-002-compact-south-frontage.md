# RV-20261109-002 - Compact south frontage

## Snapshot and responsibility

Date: 2026-11-09, Asia/Saigon. Root owns the data/authoring correction, integration
and visual self-review under BL-122. A bounded read-only peer reviewed the native
crop and shared-placement selector and reported no concrete findings; no changes
or builds were delegated. Base: `1a1c08d`. Unrelated AGENTS.md and todo.txt are excluded.

Deliverable: integrated editable-Tiled authoring slice, not a playable multi-floor
campus candidate. The user requires this sequence directly outside the south wall:
wall, one-tile-deep planter band, benches on the road edge, remaining road, then grass.

Source map SHA-256:
`7fa9a691422d380f2f4df9ca008058520cb875a28bca66af51f3054fdadb1d46`.
Before F0 PNG SHA-256:
`cc231c52608741eb49a0ff21d6decfffe26ae11f19b997ae605cc51e3f55e227`.
Final F0 PNG SHA-256:
`38fe3912b9c335e3184d09f0628c2474753bd22152dbfe39b74c10d6ce5e87ec`.

## Finding and resulting behavior

The former frontage had a two-row forecourt plus three-row planting area. Pots
stood away from the wall, while the benches were nearer the wall than the pots.
That contradicted the requested narrow adjacent planter row and reversed the
intended bench/planter order.

The source now encodes:

| Part | Tile rows / placement |
| --- | --- |
| South wall ground baseline | Y = 51 tiles / 1632 pixels |
| Planter contact band | Row 51, exactly one tile deep |
| Bench / asphalt edge | Row 52; benches directly below selected pot centers |
| Remaining road | Rows 53-58 |
| Sports lawn | Starts row 59 |

The road keeps its seven-row total width, including the bench edge. The lawn starts
immediately after it. The soccer artwork and mature sports-lawn trees remain in their
existing positions. Ground-floor west/east access surfaces are shortened/reconnected
to the new road edge. The twelve-tile main entrance keeps its gap in the pot row.

The 29 south pots and four benches are preserved. Benches move to X positions matching
actual pots. Directory/notice boards and loose clutter move to the entrance sides and
service edges instead of occupying the new planting band. The north-facing pot view
is retained; no artwork is flipped, rotated, resized or replaced. The north planter
row and every original source image remain unchanged.

## Asset contact and layer ownership

The pot PNG is 64x48, while its registered ground-contact rectangle is 64x22 at
local Y=26. A bottom anchor at tile 52 with the explicit -10px authoring offset gives:

`52 * 32 - 10 - 48 + 26 = 1632`

Its contact starts exactly at the wall's ground baseline and ends within the single
32px planting row. The 48px sprite canvas includes projected foliage above that band;
canvas height is not the ground footprint or strip depth.

Putting those leaves beside the wall exposed a real ordering requirement. Dressing
schema 3 extends the existing shared-placement selector with `draw_layer: foreground`.
The new foreground-dressing object layer follows the foreground wall/window layers.
It preserves the leaves instead of letting wall artwork clip them. Default props and
the existing `ground` selector retain their behavior. Foreground use on an older
dressing schema or an unknown layer name rejects construction.

This is one additive authoring selector in the existing Sprite/asset/Tiled path,
not a second renderer or a planter-specific drawing branch. Existing ground artwork
such as the pitch continues through the same shared-placement path. F1/F2 have no
new planter/bench row, and both complete upper-floor PNG hashes match the prior
snapshot exactly. Native campus foreground consumption remains part of BL-123's
separate floor-aware runtime gate.

## Executed validation

- Existing constructor and Tiled rasterizer reconstructed/rendered all three floors.
- `check_south_frontage.ps1` passed on the final source: one-tile contact band touching
  the wall, consecutive road/lawn zones, no old architectural slab under the road,
  four benches on the road edge and directly beneath pots, central pot-row gap,
  zero south pots upstairs, no transforms, and correct foreground layer ownership.
- The same check compared **64,038 opaque native pixels** from all 29 south pots
  and four benches against the actual F0 render. All matched, including foliage that
  would otherwise have been cut by the wall. This establishes image placement and
  preservation within this scope, not overall artistic quality or runtime collision.
- Root inspected a native crop showing wall, pots, bench, road and grass. A read-only
  peer independently inspected that crop and the selector; no concrete layout,
  rendering or schema issue was reported in that limited review.
- Upper-floor whole-image hashes are unchanged. The current integrated map checker
  passed with zero errors, checking 876 images, 571,200 tile GIDs and 2,329 tile
  objects. The before/after browser board passed two images, four local links and
  desktop/mobile overflow checks. Prior source-map passes are not reused as current.

The matching local project command passed with exit 0 and an empty `changed_inputs`
array:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File tools/validation/check_project.ps1 -Configuration Release -ReportPath build/uit_south_frontage_20261109/project_checks.json
```

Format, source structure, Release build, **577 tests / 2,586,558 assertions** and
default packaged-asset checks all passed. Build/export/test jobs ran serially. No CI
was run or enabled. Evidence: [technical JSON](../../build/uit_south_frontage_20261109/project_checks.json),
[entry log](../../build/uit_south_frontage_20261109/project_checks.log),
[build log](../../build/validation/project_runs/1906beb95a714bc69ff9bdd7a4d48d39/build.log),
[headless log](../../build/validation/project_runs/1906beb95a714bc69ff9bdd7a4d48d39/headless_tests.log)
and [asset log](../../build/validation/project_runs/1906beb95a714bc69ff9bdd7a4d48d39/assets.log).
The general gate validates the ordinary package; the separate native frontage/map
checks establish this specific authoring slice. No campus playtest, FPS or runtime
collision acceptance is inferred from either technical report.

Evidence: [before/after board](../../build/uit_south_frontage_20261109/index.html),
[native contact/pixel report](../../build/uit_south_frontage_20261109/frontage_checks.json),
[render identity and upper-floor comparison](../../build/uit_south_frontage_20261109/receipt.json).
[Current map check](../../build/uit_south_frontage_20261109/map_checks.json) and
[browser check](../../build/uit_south_frontage_20261109/checks.json) cover this snapshot.
All output remains under ignored build/. Source changes are layout/dressing data,
the existing placement-layer dispatch and the scoped checker; no C++ file changes.
The local structure gate has zero blockers and 25 review notices; its issues array
matches RV-001's prior passing snapshot. Root retains those existing notices under
their current owners because this authoring correction does not expand their scope.

## Scoped verdict and handoff

The inspected frontage matches the requested order and one-tile planter contact
depth. BL-122 stays in Review for broader visual acceptance; human approval, native
campus play, collision, lighting/FPS, co-op and BL-123 floor traversal remain separate.
No source artwork is discarded. A new front-row decorative model should use registered
contact data and the same layer selector; do not restore a broad paved setback or
special-case individual pot IDs in production drawing code.
