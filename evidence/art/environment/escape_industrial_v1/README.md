# Escape Industrial Facade Art Packet

Status: authored image-collection study for the continuous escape map. The packet contains
source artwork and six deterministic native-size PNG exports. It is not integrated runtime art,
collision geometry, or a production acceptance claim.

## Files

- `source/industrial_facade_modules_source.png`: selected GPT Image source sheet, 1536x1024.
- `native/`: six 32 px-grid-scale facade modules registered in
  `content/maps/escape_route_assets/industrial.tsj`.
- `export_industrial.ps1`: deterministic crop, background extraction, and nearest-neighbor
  sizing recipe. Run from any working directory with PowerShell 7 or Windows PowerShell:

  ```powershell
  powershell -NoProfile -ExecutionPolicy Bypass -File .\art\environment\escape_industrial_v1\export_industrial.ps1
  ```

The generated source sheet has an opaque checkerboard background despite depicting a transparency
grid. The export script removes only edge-connected, light, near-neutral pixels and preserves
enclosed highlights. This is a deterministic extraction, not authored alpha; inspect edges against
light and dark map backgrounds before production use. A few pale specks remain near some module
silhouettes, likely from source matte details not connected to the crop edge; remove them through a
properly authored transparent source before production use. No source pixels are changed.

## Module map

| Tile ID | Stable asset ID | Native PNG | Suggested footprint |
| ---: | --- | --- | --- |
| 0 | `industrial.wall.brick_straight` | `brick_straight.png` | 5x3 cells |
| 1 | `industrial.loading.shutter` | `loading_shutter.png` | 4x4 cells |
| 2 | `industrial.wall.corrugated_straight` | `corrugated_straight.png` | 4x3 cells |
| 3 | `industrial.wall.return_a` | `brick_return_a.png` | 2x4 cells |
| 4 | `industrial.wall.return_b` | `brick_return_b.png` | 2x4 cells |
| 5 | `industrial.wall.corner_outer` | `outer_corner.png` | 4x4 cells |

The grid size is 32x32 world pixels. Suggested footprints are authoring hints derived from the
native image sizes; they are not walkability, collision, projectile, sight, or occlusion contracts.
The two returns are distinct views from the generated sheet, not verified mirror-compatible
connectors. Do not assume seamless edge tiling or arbitrary rotation.

## Provenance and limitations

The selected built-in GPT Image source is recorded by path and SHA-256 in `metadata.json`. The
original generation prompt was not present in the inherited authoring record at export time; the
metadata labels its prompt summary as a reconstruction rather than an exact transcript. The source
is stylized pixel-art-like concept imagery with crisp clusters, not pixel-certified production
artwork. Review crop edges and player-scale readability before promoting it.

`industrial.tsj` is an editable Tiled image-collection tileset. The current runtime import path has
not been verified to support image collections, so this packet makes no runtime compatibility
claim. The map author must inspect image alignment in Tiled and create collision/occlusion geometry
as separate authored map data.
# Straight-run placement correction

The native canvas includes transparent margins; it is not the repeat pitch. See
[join_geometry.json](join_geometry.json) for measured, ordered brick/corrugated contact spans.
The current escape map overlaps these original authored modules at native scale, preserving
its collision walls and door openings. Mixed-material pitches are directional because the
padding is asymmetric. Inspect straight joins, endpoints and separate corner art; changing
placement does not certify the old source's alpha extraction or every facade combination.
