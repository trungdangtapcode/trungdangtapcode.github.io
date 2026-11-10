# Clean tile library · design/dev handoff · 2026-10-11

User request: design từng tile rõ, ghép render clean và chứng minh dùng được trong Tiled.
**Deliverable: authored source/native terrain candidate**, không phải full district hoặc chọn A/B.
[Mở catalog + render + trước/sau](../../build/environment_tile_review/index.html).
Previous [round01](ENVIRONMENT_DESIGN_ROUND_01_2026-10-11.md) remains historical;
new common terrain replaces its four simple material swatches in proof maps only.

## Bộ có thể đối chiếu ngay

| Artifact | Path |
| --- | --- |
| Two GPT Image sources, exact prompts/hash | art/environment/tiles/clean_v1/generation.json |
| Twelve native physical tiles | build/environment_tile_review/native/terrain.png |
| Individual reference for all60 floor/facade/decal tiles used across A/B | content/maps/tile_review/tile_reference.json |
| Thirty-two logical corner cases and exact GIDs | content/maps/tile_review/tile_contract.json |
| Native external TSJ, shared/pair Terrain Sets | content/maps/tile_review/terrain.tsj |
| Editable Tiled project | content/maps/tile_review/tile_review.tiled-project |
| Logical catalog / all transforms / joins | catalog.tmj / transforms.tmj / adjacency.tmj in same folder |
| Clean A/B proof maps | content/maps/tile_review/option_a.tmj / option_b.tmj |
| Whole-map Tiled renders | build/environment_tile_review/option_a.png / option_b.png |
| Equal actor-scale views | build/environment_tile_review/runtime/ |
| Exact edge measurements | build/environment_tile_review/tile_receipt.json |
| Official Tiled vs current cached renderer | build/environment_tile_review/consumer_receipt.json |
| Stable technical snapshot and logs | build/environment_tile_review/project_checks.json / logs/ |
| Source/native/resource revision | build/environment_tile_review/revision.json |

Source art lives in art/, authoritative crop/palette/TMJ/TSJ in content/, generated outputs build/.
Built-in GPT Image was used for generation and the second sheet's geometry-preserving color edit.
No image CLI fallback or procedural artwork substitution. Sources keep original generated paths
and prompts; native palette/alpha/atlas processing uses the user-authorized existing exporter APIs.

## Mỗi tile làm gì?

Each family has six authored32×32 templates. Logical rotations are named in tile_contract.json;
they are native Tiled GID flags, not a private runtime terrain generator.

| ID in asphalt/concrete | ID in concrete/paving | Name | Secondary-material corners |
| --- | --- | --- | --- |
| 0 | 6 | base | none |
| 1 | 7 | fill | NW,NE,SE,SW |
| 2 | 8 | outer_nw | NW |
| 3 | 9 | edge_n | NW,NE |
| 4 | 10 | inner_se | NW,NE,SW; SE is base material |
| 5 | 11 | saddle_nw_se | NW,SE, separated quarter regions |

Corner order NW/NE/SE/SW; bits1/2/4/8. Source IDs1 and6 share identical concrete pixels:
32 cases across two families are31 distinct material signatures, not32 unique new artworks.
Each source tile's stable asset ID, image crop/local ID, role and legal placement is in reference.
Full asphalt `#252E34`, concrete `#39434A`, paving `#494C48`.

Every mixed edge is16px of its first corner material +16px of its second; equal-material
endpoints give a uniform edge. Internal shape is source-authored rounded pixel boundary.
No baked rim, bevel, cast shadow or alpha halo. These are **flush, walkable floor transitions**;
rounded visual boundaries must not be treated as curb/wall collision.

Architecture stays explicit: existing four128×32 frontage modules per option are divided
into four ordered32px pieces. Place a complete module/stamp, not random middle tiles.
No architecture rotation/vertical flip is accepted. All48 old architecture/decal tiles are
catalogued with group/piece/name and placement rule; they are reuse, not newly authored floor.

## Tiled compatibility and measured joins

Native32px, margin0/spacing0, opaque RGBA8. Three Terrain Sets in external TSJ:
shared3-color floor with concrete buffer and two pair-specific sets.
H/V/90-degree transforms are accepted only for unlit floor.
[Tiled JSON fields](https://doc.mapeditor.org/en/stable/reference/json-map-format/#wang-set)
and [native terrain transformations](https://doc.mapeditor.org/en/stable/manual/terrain/#tile-transformations)
are the upstream format; no new parser, editor or renderer.

- 128 logical corner samples match the specified material.
- 320 compatible directed E→W/S→N edge pairs match exact32px RGBA; zero seam/midpoint errors.
- Native atlas uses three colors, alpha255 everywhere, no soft-alpha pixels.
- All96 physical tile ×8 transform cells plus joined adjacency/catalog render through
  existing TileMapLoader/TileMapResources. Compared950,272 pixels to official Tiled:
  zero RGBA mismatches.
- Tiled1.12.2 opens/exports all five maps; JSON editor roundtrip preserves every visual GID.
- Actual A/B composition uses the existing actor resource cache/camera at640×336.
  CLI encounter captures and matching-profile logs are supplied separately.
- Terrain Brush UI painting interaction was **not recorded**; saved/rendered metadata and
  pixel equivalence do not pretend to be footage of an editor gesture.

Use concrete between asphalt and paving. Direct A↔P or three-material corners are not
authored; never paint a missing case and assume the tool generated new art. The proof maps
remove such contacts with a concrete buffer;132/56 paving vertices in A/B become concrete.
All authoritative Collision/Gameplay objects remain byte-equivalent after JSON serialization.
No gameplay/spawn/placement tuning changed; floors still open, no new interior blocker.

## Clean, hoàn hảo hay chưa?

**Tile floor joins are clean in the measured compatible cases.** Source gradients are palette
normalized at scale1; occupied coordinates do not change. Straight, convex, concave, narrow
and diagonal examples were rendered and viewed, with no opaque patch seam or speckle pattern.

**Whole-map visual quality is not perfect or accepted.** New floor is deliberately quiet/flat;
readability and material character need human encounter/scrolling feedback. Existing shallow
frontage is still small beside actors and repeated. Side/south art still does not express
the unchanged perimeter collider. These are recorded findings, not hidden behind the new tile count.
No score, independent art approval or automatic default promotion is inferred.

## Source/export path and integration boundary

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File tools/assets/export_palette_tiles.ps1 -StylePath content/maps/tile_review/native_style.json
```

This thin adapter reuses extract_street_tiles.ps1, ModularRasterExport.ExportPart at scale1
and CopyPixels with metadata coordinates. Bounds/overlap/occupied-coordinate checks apply;
it is not another atlas packer/quantizer. Second material pair proves the same implementation
extends through different source/palette entries. Source PNGs are retained unchanged.

**Packaging caveat:** default export_tiled_assets.ps1 scans top-level maps/recipes and does not
automatically run the new palette adapter for nested study content. Shared integration writer
must add the accepted style export step before packaging chosen native TSJ/atlas dependencies.
Copying recipes to the default folder and running raw extraction alone would lose palette
normalization; do not receive that as the accepted revision. This source/native packet is
already runnable with the source-map override and current consumers; no duplicate package built.

Owner: in-thread Codex design authors this bounded library; BL-029 Codex asset preparation
retains source/inventory, BL-024/S01-12 Codex Sprint01 integration retains shared runtime writer.
Production-art acceptance Unassigned. Delivery is shared-workspace Markdown/chat, not proof
another dev session read it. Status/debt remains only BACKLOG.

Retirement trigger: selected clean native modules are staged by shared writer, with equivalent
scrolling/core/exit/south/occlusion and combat receipt on a matching packaged candidate.
Then retire review-only spawn_bounds/maps/helper consumers; preserve authored source/recipe/TSJ.
User A/B selection and the perimeter/facade fixes precede dependent location content.

## Final technical closure

Fresh integrated Release report passed:680 canonical inputs unchanged, five check steps pass,
151 tests /2,025,608 assertions. Final input hashes were revalidated with zero changes.
Both actual game smokes exit0:9501 ticks, peak17,272 shots,148 deaths,1 blast,HP100;
empty error logs. The final game resource diagnostic was rebuilt and950,272 pixels compared
again after this build; zero RGBA differences. This verifies the supplied native candidate,
not whole-map art quality. [Self-review003](../reviews/2026-10-11-003-environment-tile-library.md)
records scope, observed limits, commands and the matching report/revision.

