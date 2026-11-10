# Escape Industrial Facade Join Audit — 2026-10-29

## Scope and verdict

This audit covers the six native modules in `art/environment/escape_industrial_v2/native/`, their
source crop registration, and their practical role beside the existing escape-map ground, coastal,
and building studies. V2 remains an **unreviewed authoring candidate**. This audit gives bounded
authoring guidance; it does not accept artwork, a Tiled tileset, collision, or runtime use.

No crop-registration defect was found. V2 preserves the six V1 crop rectangles and output sizes,
and the current native hashes match `metadata.json`. No export or registration change is justified.
The kit supports shallow facade composition, but it is not a complete measured building or roof kit.

## Evidence checked

- V2 source: `art/environment/escape_industrial_v2/source/industrial_facade_modules_candidate.png`
  (1536×1024, SHA-256 `595dff5adfc515734033ed8f8fa85132243747726e96397e8760ddf1a1f46eae`).
- Crop/export recipe: `art/environment/escape_industrial_v2/export_industrial.ps1`; it crops the
  listed source rectangles with `SourceCopy`, then nearest-neighbor resizes without keying alpha.
- Module dimensions, crop rectangles, suggested anchors, and hashes:
  `art/environment/escape_industrial_v2/metadata.json`.
- Existing collection alignment: `content/maps/escape_route_assets/industrial.tsj` sets
  `objectalignment: bottom`; its V1 images and collision properties are explicitly authoring-only.
- V1 notes say return A/B are distinct views, not verified mirror-compatible connectors, and warn
  against assuming seamless tiling or arbitrary rotation:
  `art/environment/escape_industrial_v1/README.md`.
- The map asset brief classifies `art/environment/district_b/warehouse_source.png` and the wider
  building pictures as studies, not a measured walkable facade kit:
  `planning/contracts/ESCAPE_MAP_ASSET_BRIEF_2026-10-25.md`.
- All six native PNGs were visually inspected through capped JPEG previews. Since previews flatten
  alpha, they were used only for silhouette, orientation, and broad appearance. V2 metadata records
  an exact source alpha scan: it found no alpha-255 pixels and a maximum alpha of 254. A separate
  exact native scan found zero alpha-255 pixels in each crop. That slight translucency remains a
  visual acceptance risk.

## Registration and module guidance

All modules use a 32 px authoring grid. `anchor_px` below is the suggested bottom-center reference
in the native image; align it to the intended facade baseline on tile coordinates. The V1 Tiled
collection uses bottom alignment, consistent with this anchor convention. The grid footprint is a
planning envelope, not a collision footprint. Do not infer walkability or occlusion from it.

| Module | Native / footprint | Anchor | Visual role and safe use | Join status |
| --- | --- | --- | --- | --- |
| `brick_straight` | 160×96 / 5×3 | (80, 96) | Straight orange-brick facade with steel cap, posts, and base. Use as a horizontal facade run. Repeat only by explicit placement at grid-aligned intervals. | Straight continuation is plausible by matching the cap/base baseline, but exact edge-pixel continuity has not been proven. Do not stretch it. |
| `corrugated_straight` | 128×96 / 4×3 | (64, 96) | Straight teal corrugated panel in a steel frame. Use as a distinct facade bay, not as a texture tile. | Do not butt against brick and claim a seamless material transition; no transition strip exists. |
| `loading_shutter` | 128×128 / 4×4 | (64, 128) | Framed roll-up shutter with hazard-striped jambs. Use as a self-contained loading opening in an otherwise open yard-side facade. | It is not a walk-through opening contract: gameplay/collision width is not authored. Leave the visual approach clear and author passage/collision separately. |
| `brick_return_a` | 64×128 / 2×4 | (32, 128) | Narrow brick side-return view; cap/base and dark steel framing visible. Suitable as a short facade return/recess side when its visible face matches the intended screen direction. | Do not flip/rotate as a presumed connector. Exact cap, base, and corner overlap with straight modules is unverified. |
| `brick_return_b` | 64×128 / 2×4 | (32, 128) | Distinct opposite-looking side-return view, visually complementary to A. Use only where this face/orientation is needed. | Not proven to be a pixel-exact mirror of A or a seamless complementary join. Do not substitute one for the other without checking the rendered overlap. |
| `outer_corner` | 128×128 / 4×4 | (64, 128) | Brick exterior 90-degree corner with steel cap/base and posts. Use as the visible junction landmark for an outside corner. | The silhouette reads as a corner, but exact straight-to-corner seams and rear/inside closure are not proven. It is not an inside-corner piece. |

## Practical composition rules

1. Place these as shallow building-edge/facade art over the appropriate ground layer. Keep asphalt
   lanes, the court, and intended player traversal clear. Use the already-authored ground material
   appropriate to each zone; this kit contains no ground texture or ground-to-wall saddle.
2. Keep a consistent facade baseline. Use multiples of the 32 px tile grid for placement and the
   bottom-center anchor references above. Do not use native image bounds as collision bounds.
3. Use `brick_straight` and `corrugated_straight` as individual facade bays. Their nominal lengths
   are five and four cells; changing material is a visible design break, not a seamless tiling seam.
4. Place `loading_shutter` as a complete framed bay, with enough clear ground in front for the
   freight-yard approach. Do not put it across a required route until an authored passage contract
   exists.
5. Use `outer_corner` only for an outside corner. A/B returns can suggest short side walls or
   recessed facade edges, but current evidence does not establish which one should attach to each
   corner without overlap. Treat adjacency as a composition gap/overlap to be reviewed in Tiled,
   not a guaranteed connector.
6. Avoid arbitrary 90-degree rotation and horizontal flipping as a substitute for authored
   orientation variants. The source and metadata do not define a transform-safe connector contract.
7. Keep ground, facade, and overhead/roof layers separate. The six-piece kit has no roof/eave,
   top-down building footprint, interior wall, end-cap, inside-corner, brick-to-corrugated
   transition, or collision module. Existing wider warehouse concept images are not measured roof
   pieces, so they cannot close those gaps by assumption.

## Crop and file checks

The six V2 crop rectangles are inherited unchanged from V1:

| Module | Source crop `[x, y, width, height]` | Native size | 32 px cells |
| --- | --- | --- | --- |
| `brick_straight` | `[55, 65, 535, 365]` | 160×96 | 5×3 |
| `loading_shutter` | `[620, 35, 440, 390]` | 128×128 | 4×4 |
| `corrugated_straight` | `[1070, 65, 420, 370]` | 128×96 | 4×3 |
| `brick_return_a` | `[225, 450, 220, 525]` | 64×128 | 2×4 |
| `brick_return_b` | `[525, 445, 200, 530]` | 64×128 | 2×4 |
| `outer_corner` | `[920, 460, 435, 520]` | 128×128 | 4×4 |

All crops fit inside the 1536×1024 source; every exported dimension equals its footprint in 32 px
cells. A SHA-256 check confirmed all six exported PNGs match the hashes in V2 metadata. This proves
file/registration consistency only, not seam quality, transparency acceptance, art direction,
Tiled rendering, or in-game alignment.

## Unresolved before promotion

- Review the six native assets in a Tiled board on both light and dark ground and inspect actual
  seams at 1×. The capped JPEG previews do not establish alpha quality or exact pixel joins.
- Author or select the missing interior/inside-corner, end-cap, material-transition, roof/overhead,
  and collision/occlusion data if the map composition requires them.
- Verify any intended shutter passage and all wall collision/occlusion as separate map data.
- Do not replace the currently used V1 collection or alter its consumers as part of this audit.
