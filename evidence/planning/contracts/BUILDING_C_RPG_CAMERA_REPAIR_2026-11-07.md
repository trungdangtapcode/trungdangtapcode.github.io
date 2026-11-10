# Building C - RPG camera repair and school asset research

## User correction and deliverable

The user rejected the floor-plan wall presentation and supplied a compact RPG room
reference: a tall north wall, thick side returns, a low foreground wall face and an
axis-aligned floor with a readable character. "Top-down" does not mean a 90-degree
nadir camera. The canonical rule is now at the start of
[ART_DIRECTION](../ART_DIRECTION.md), [AGENT_NOTICE](../AGENT_NOTICE.md) and
[ASSETS](../ASSETS.md). Preserve old artwork, but retire its normal visual consumers.

Root owns all three Building C floor groups, projected room/blocker boundaries,
native placement and final scene review. This remains editable Tiled/source authoring,
not floor-aware gameplay. BL-122 owns this repair; BL-123 owns actual stair traversal.
No C++ engine rewrite, duplicate renderer or CI is part of this work.

## References actually inspected

- [Official RPG Maker MZ asset standards](https://rpgmakerofficial.com/product/MZ_help-en/01_11_01.html):
  separates A3 buildings, A4 walls and upper-layer tile banks. The documentation's
  general autotile illustration has a center plus eight surrounding positions;
  it is not a requirement for a complete wall bank to contain exactly eight PNGs.
  Downloaded official diagrams stay in `build/wall_reference_research/rpg_maker/`.
- [LPC Walls](https://opengameart.org/content/lpc-walls): downloaded `lpc-walls.zip`
  SHA-256 `604871bda6e4ece50270f0db9d8674351dab861e2d2624430346d1c4eda2aa8e`.
  Inspected the source atlas, matching Tiled terrain metadata and actual room preview.
  The unchanged atlas/TSX/attribution are pinned in `art/third_party/lpc_walls/` under
  CC BY-SA 3.0. Native source tiles are 32px; there is no need to resize them.
- [Tiled terrain sets](https://doc.mapeditor.org/en/stable/manual/terrain/) and
  [JSON format](https://doc.mapeditor.org/en/stable/reference/json-map-format/):
  reuse actual tile images and selected terrain definitions, retaining editable layers.

The downloaded examples show why connected line edges were insufficient: the cap,
face and foreground treatment establish room volume. Alpha-edge continuity only
checks connectivity. Camera/room quality must be judged with actual furniture,
characters, openings and the intended native rendering scale.

## User-provided school catalog

Catalog: <https://itch.io/game-assets/tag-rpgmaker/tag-school>.

| Pack | Verified author-page facts | Current decision |
| --- | --- | --- |
| [Haunted School Tiles](https://thurraya.itch.io/haunted-school-rpmmz) | 48x48, A1/A2/A4/B plus signs and character; personal/non-commercial, CC BY-NC 4.0 shown | User explicitly chose reference-only to preserve commercial release. Download returned HTTP 429; no archive or native contents verified. No files from it are integrated. |
| [Japanese Horror School](https://cjtouhey.itch.io/horror-school-japanese-style-tile-palette-for-unity-or-rpg-maker-32x32) | 32x32, walls/window/door openings, cracks, blood and school props; paid, any-engine use described | Strong horror/school reference; no purchase or download claimed. |
| [Japanese School Interior](https://guttykreum.itch.io/japanese-school) | 437 32x32 school tiles, any-engine main PNG, paid license | Coherent school reference; no purchase or download claimed. |
| [16 Bit School Asset Pack](https://ghostdatamedia.itch.io/school-assets) | Free 32x32 subset, CC BY-SA 4.0; expanded pack separately paid | Ordinary free-download flow hit HTTP 429; stopped. No archive obtained or contents accepted. |
| [2D Classroom by styloo](https://styloo.itch.io/2dclassroom) | CC0, eight views and a large sprite collection | Reference only; tags/counts alone do not establish pixel style or seamless wall modules. |
| [Back to School free demo](https://just-uris.itch.io/free-demo-back-to-school-pack) | Explicit 64x64 isometric artwork | Excluded from the normal orthogonal-camera bank. |

These facts are the inspected pages, not a purchase, permission from an artist or
acceptance of a complete bank. Do not adopt a restricted school pack silently into
the future product library. Research screenshots remain ignored; no paid asset
download, account action, payment or message to a creator was performed.

The public Haunted School screenshot was downloaded and visually inspected separately
from the blocked archive. It shows a straight-on corridor wall, doors/windows embedded
in its vertical face, stairs with horizontal treads, ground blood trails and wall/floor
damage; it does not use a 90-degree floor-plan wall convention. The research-only PNG is
`build/wall_reference_research/haunted_school/public-preview.png`, SHA-256
`873b5467291e41d5378ce3b5953cf4680d9c86bdb64c4ae1b5fb21d41676c7a3`.
It is not a production texture, generation input or a source of extracted tiles.

## Producer, data and consumers

`room_projection.json` owns the camera, pinned upstream hashes, selected terrain
families, face height, window mounting and floor-content placement transform.
The Tiled adapter selects existing trim, plaster-face and structural-masonry terrain
families from the upstream TSX and preserves source pixels. The registered empty
background color is keyed by standard Tiled tileset metadata so it cannot conceal
the authored structural-masonry layer. Selected plaster tiles contain no key-color
pixels. This does not draw substitute walls or bake a room image. Runtime import
must preserve/bake that color-key behavior before the source map becomes playable.

Each floor has visible structural-mass, wall-face, cap and foreground-skirt layers. The old connected
nadir-strip layer is hidden and explicitly an editor footprint guide, retained for
existing wall-plan/blocker checks. It must never be presented as the accepted wall
art. Room regions exclude the north face band. South-wing north portals extend
through that band; their doors/blockers sit at the visible wall base. Existing
furniture is reflowed within the room and wall attachments retain their explicit
mounts. Windows, columns and stair flights use the matching three-quarter packet.

## Validation and next extension

Render all three floors and inspect neighboring rooms, a shared partition, north
and south-wing door thresholds, windows, column tops, stair risers and a native
character inside a room. Require no isometric yaw, floor-plan-only room treatment,
unexplained gaps, furniture behind the projected wall face or invisible blockers.
Technical checks cover the producer/data contract, not the user's art approval.

The nearest extension remains an actual floor-aware encounter with continuous stair
movement through the existing implementation. Match logical footprints to projected
faces and foreground occlusion at that boundary; do not flatten floors or turn a
decorative stair PNG into a teleport. The unfinished runtime gate remains explicit.
