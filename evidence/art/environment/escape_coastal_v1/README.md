# Coastal Escape Environment Study

This is a source study for the continuous escape route, not a production-accepted
tileset. It contains six seawall image props and three extraction landmark props.
The seawall edges have not been proven seam-compatible; suggested footprints are
approximate and require placement/collision review in the encounter.

## Files

- `source/`: original generated sheets, exact prompts, and the repeatable native
  crop/export script.
- `native/`: transparent PNG cutouts referenced by the Tiled image-collection
  tileset at `content/maps/escape_route_assets/coastal.tsj`.
- `../..`: generated previews and review output belong under `build/`, not here.

## Export

Run from the repository root:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\art\environment\escape_coastal_v1\source\Export-Coastal.ps1
```

The script extracts the listed source rectangles and scales them to 25% using
nearest-neighbor sampling into RGBA PNG. Native PNG dimensions and hashes are
recorded in `source/generation.json` and `content/maps/escape_route_assets/coastal_metadata.json`.

The extraction beacon is an arrival landmark only. No vehicle, additional hold
encounter, or gameplay behavior is implied by these images.
