# BL110 Registration and Clearance Re-review

Review date: 2026-11-03  
Correction commit: `e9a73db` (`Align prop blockers with native anchors and verify registration`)  
Current source revision: `3656b76a4bf18cb28a845bb20089a328ce940741`, with a subsequent working-tree
map-only pump placement adjustment  
Current map SHA-256: `F7F96F4C541BB3435582FC0EF5B166C036A9A2AB748DD5DFCEA7990580EA6A12`  
Scope: read-only verification of GIDs 400–405, native footprint alignment, current workshop/archive
control and loot approaches, route clearances, and any immediate depth-related placement regression.
No source edits, game, build, export, or tests were performed.

## Registration and footprint result

The blocker correction is consistent with native metadata and the implemented image anchor. I
manually checked all 11 visual instances against their paired collision rectangles. Each rectangle
matches the expected bottom-center transform exactly, including the current working-tree move of
workshop pump 1560 and blocker 1554 upward by 128 px. All 11 `sort_ground_y` values equal their
bottom-anchor `y` values.

```text
world_x = visual_anchor_x - native_anchor_x + footprint_x
world_y = visual_anchor_y - native_anchor_y + footprint_y
```

Each native anchor is `[width/2, height]`. `escape_depth.tsj` declares `objectalignment: "bottom"`;
the map loader maps this to bottom-center, and `TileMapResources` subtracts the corresponding
alignment from the image origin. The six registered types have these complete placement counts:

| GID | Instances | Native size | Footprint size | Alignment result |
| ---: | --- | ---: | ---: | --- |
| 400 | workshop and freight generators (2) | 128×96 | 88×16 | exact |
| 401 | workshop and freight pumps (2) | 96×80 | 68×15 | exact |
| 402 | archive dispatch workstation (1) | 128×80 | 88×16 | exact |
| 403 | archive records racks (2) | 64×80 | 54×10 | exact |
| 404 | security triage trolley (1) | 96×64 | 80×10 | exact |
| 405 | service/lobby/coastal baggage (3) | 64×48 | 56×8 | exact |

Current workshop pump anchor/blocker are `(768,2672)` and `(734,2654)`; both the anchor and
`sort_ground_y` use y2672. The corrected collision boxes load from the active collision layer.
`check_asset_registration.ps1` checks the same metadata formula, native paths/hashes/dimensions,
alpha presence, registration and placements. I inspected its logic but did not execute it.

## Control, loot, and route clearance

- **Workshop restore-power control:** control area `(848,2736,96,96)`, visual point `(896,2784)`;
  current pump blocker `(734,2654,68,15)`. It neither overlaps the control area nor its approach
  point. The control rectangle has 46 px horizontal and 67 px vertical separation from the blocker.
- **Workshop loot:** `loot.workshop_spare` is at `(752,2800)`, 131 px below the pump blocker.
  `loot.workshop` is `(880,2880)`. Neither source marker overlaps the blocker; the 48-unit loot
  reach contract and an approach from the south remain clear by source geometry.
- **Archive authorization:** control bounds are `(2936,2736,96,96)` with visual point `(2984,2784)`.
  Dispatch workstation footprint `(3060,2796,88,16)` does not overlap the control area; its edge is
  28 px east of the control rectangle. Its image anchor `(3104,2816)` places the image's left edge
  x3040, 56 px east of the control point, leaving a clear west-side approach.
- **Archive loot:** `loot.archive` is `(2224,2768)`. The overflow records-rack blocker begins at
  `(2197,2901)` and is 133 px south, so it does not overlap the marker.
- **Route centers:** the direct/service archive route ends at `(2984,2784)`. The service-baggage
  blocker `(900,1463,56,8)` is 65 px from the branch centerline at y1536. The security-release
  horizontal route at y3296 passes 19 px north of the trolley blocker, whose top is y3315. The
  packaged player radius is 8, leaving 11 px beyond its collision radius; this is close but does not
  intersect the route centerline or expanded player radius. Root reports the route/checkpoint tests
  pass; I did not replay them.

## Remaining visual issue — relocated pump overdraws existing repair props

The pump was moved north to preserve workshop loot clearance. At its new anchor `(768,2672)`, its
96×80 bottom-center image occupies `[720,816) × [2592,2672)`. Two existing authored maintenance
details sit directly behind it in world-depth order:

- Toolbox: anchor `(736,2656)`, 32×24, image rect `[720,752) × [2632,2656)`, draw depth 2656.
- Cable coil: anchor `(768,2656)`, 32×32, image rect `[752,784) × [2624,2656)`, draw depth 2656.

The pump is drawn later at depth 2672 and covers both details' visible pixel bounds. I compared their
native RGBA files at those exact placements: all 506 nontransparent toolbox pixels and all 388
nontransparent cable-coil pixels land under pump pixels with alpha 251–253/255. They therefore
retain at most about 4/255 of their unoccluded contribution. Their collision rectangles only touch
the pump blocker at the y2654 edge and do not overlap, so this is a render-order/art-cluster issue,
not a movement blocker.

This is the remaining concrete source-level presentation concern: the pump now nearly erases the
two small authored repair details that identify the existing toolbox/cable work cluster. Consider
shifting the pump laterally or relocating the details while retaining the clear spare-loot and
control approaches. A current-map runtime capture should confirm the final composition; the existing
capture set is stale for this change.

## Provenance and limits

- GIDs 400–405 remain registered in `escape_depth.tsj`; native dimensions and paths agree with
  metadata. No missing image mapping or additional anchor/footprint mismatch was found.
- The older packaged capture set under `build/level_depth_revision/20261103T031519Z` records map
  hash `A8D67CD259BC512A8725E7F9F64F86C3B919179D15D17D3AB4C34CB51F6D8A9E`, which differs from the
  current map hash above. It cannot validate the current pump move or current map art.
- Root reports that the registration checker passes and 32 route/checkpoint tests pass with 13,467
  assertions; those results are attributed to root and were not rerun. This source review does not
  establish final pixel composition, route readability, human pacing, engagement, or overall map-art
  acceptance.
