# Escape Industrial Facade Candidate V2

This is an unreviewed authoring candidate for six industrial facade modules. It is kept separate
from `escape_industrial_v1` and is not connected to a Tiled tileset, map, or runtime consumer.

## Contents

- `source/industrial_facade_modules_candidate.png`: one built-in GPT Image edit of the v1 source.
- `native/`: deterministic crops at the inherited native dimensions.
- `export_industrial.ps1`: repeatable nearest-neighbor crop/export recipe. It preserves source alpha
  and does not apply a color key or remove pixels after generation.
- `metadata.json`: source/output dimensions, identities, inherited crop rectangles, suggested
  bottom-center anchors, hashes, and alpha scan observations.
- `generation_prompt.md`: exact edit prompt.

## Inspection and limitations

The capped JPEG inspection copy shows the six inherited modules in the original sheet arrangement
and no visible checkerboard. That JPEG is flattened, so it is not evidence of transparency. An exact
per-pixel alpha scan of the PNG found 864,667 fully transparent pixels, 708,197 partially
transparent pixels, and no fully opaque pixels; the maximum alpha is 254. Thus the background is
transparent, while the artwork itself is slightly translucent throughout. Review native crops on
both light and dark backgrounds before deciding whether that opacity behavior is acceptable.

The crop rectangles and output dimensions are inherited from v1 and are only shown to remain in
canvas bounds. Their connector seams, collision footprints, in-game alignment, readability, and
registration have not been accepted. The anchors are authoring references at the bottom center of
each exported image, not verified collision or occlusion contracts. Do not promote this candidate
or update consumers from this packet alone.

## Re-export

From the repository root:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\art\environment\escape_industrial_v2\export_industrial.ps1
```
