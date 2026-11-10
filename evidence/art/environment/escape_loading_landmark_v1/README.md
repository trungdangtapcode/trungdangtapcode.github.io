# Freight Loading Landmark Source Study

This folder contains two GPT Image source studies for a freight-yard landmark. Neither is runtime accepted or integrated into a Tiled map or the game.

## Contents

- `source/loading_landmark_sheet_source.png`: unmodified generated source sheet with three separated props: a compact forklift, strapped pallet cargo, and a portable loading ramp.
- `source/forklift_pixel_source.png`: unmodified output of a corrective single-forklift generation using native crate and industrial shutter references.
- `native/forklift_96.png`: deterministic nearest-neighbor 96x96 review export from the corrective source; it retains source alpha without cleanup or thresholding.
- `export_forklift.ps1`: repeatable integer-coordinate nearest-neighbor crop/export script.
- `generation.json`: prompts, style-reference provenance, source dimensions, byte counts, hashes, alpha inspection, and export details.
- `authoring.json`: proposed size, pivot, 3x3 visual footprint, and map anchor; explicitly not an accepted collision or runtime contract.

## Visual Review — First Sheet

The generated sheet has a useful industrial palette and a readable near-top-down prop grouping. The inspection preview shows that the rendering is closer to a polished, anti-aliased illustration than the game's crisp native pixel-art standard. The PNG is 2172x724. Alpha measurement found 972,723 fully transparent pixels, 598,947 partially transparent pixels, and only 858 fully opaque pixels. The partial alpha spans much of the object artwork, so the preview cannot establish clean sprite edges or production-ready transparency.

No crops, resampling, palette conversion, collision geometry, or runtime metadata were authored. Do not treat the image as accepted production art. An artist should redraw or pixel-author these props to the established gameplay scale, verify alpha edges against a contrasting matte, and define pivots/footprints before integration.

## Placement Hint (Unverified)

For a future 32px Tiled grid review only, begin by testing approximate footprints of 3x3 cells for the forklift, 3x2 for the pallet cargo, and 4x3 for the ramp. These are layout estimates from the concept, not measured collision footprints or approved map dimensions. Keep forklift and cargo as separate placements so the lane can remain traversable.

## Corrective Single-Forklift Attempt

The second generation is visibly closer to the project's chunky pixel clusters and has a readable isolated forklift silhouette at 96x96. The source is 1254x1254. The export crops the alpha>=32 main bounds `(97,135)-(1177,1144)` (1080x1009 pixels), samples directly with nearest-neighbor, and centers the resulting 96x90 image in a 96x96 transparent canvas with three pixels of top and bottom margin. Re-running the PowerShell exporter produced the same SHA-256.

The 96x96 export contains 4,573 fully transparent pixels and 4,643 visible pixels. Among visible pixels, median alpha is 253 and 4,290 (92.4%) have alpha >=240. The count of exactly opaque pixels alone is not evidence of ghosting. The exact-size preview shows a clear, chunky forklift silhouette; alpha statistics do not replace visual inspection against contrasting backgrounds.

Status after bounded background comparison: **unaccepted visual candidate**. The 96x96 sprite remains legible on a light matte, a dark matte, and the existing Freight Yard ground crop. At the shown native scale, the fork, mast, canopy, body, and wheels remain distinguishable; its muted yellow body separates from the sampled gray ground. This comparison found no obvious edge fringe, but it is not a pixel-perfect alpha-edge audit across every map surface.

The export has 4,643 visible pixels with inclusive alpha bounds `(0,3)-(95,92)`. Visible median alpha is 253; 4,290/4,643 (92.4%) have alpha >=240. The exact-opaque count is not used as a rejection criterion.

### Proposed layout anchor (not accepted)

For a Tiled placement review, use tile anchor `(28,29)` / world pixel `(912,928)` in the west half of the Freight Yard paved slab. Draw the 96x96 sprite with pivot `(48,93)` from its top-left, giving world top-left `(864,835)`. This approximates a 3x3-cell visual footprint beginning at tile `(27,26)` and leaves the marked Gate B approach clear in the current crop. These are authoring estimates only. The render is a composition check, not proof of gameplay clearance or depth ordering.

The proposal is recorded in `authoring.json`; runtime collision is explicitly unaccepted and unauthored. Before integration, validate the pivot against the object's ground-contact pixels, inspect overlap/depth sorting in the complete map, and confirm that the footprint leaves actual movement and combat lanes clear. No Tiled object, collision shape, or runtime metadata is accepted by this study.

The generated comparison and review are in `build/escape_landmark_review/index.html`. Its ground panel uses the existing `build/escape_route_layout/freight_yard.png` render (`SHA-256 23a25ad2a248ab7183a6342f0f7e5af010611a293cd69f10ae0aa6d415e1c9d5`), cropped without modifying the render, then composites the unchanged native sprite at source size. Reproduce it with `build/escape_landmark_review/make_review.ps1`.

## Acceptance Limits

These source studies only address the missing freight/loading landmark concept. They do not provide a loading building, complete freight-yard set, map layout, collision rules, shadows, approved gameplay dimensions, or accepted production sprites. Do not import either source into runtime content or treat the 96x96 review export as a production asset.
