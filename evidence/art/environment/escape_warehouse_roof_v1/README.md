# Warehouse roof composition study

Authored GPT Image source and repeatable native export for the escape freight warehouse.
This is a source/composition study, not a production or runtime candidate.

The source supplies the missing roof; existing facade modules supply the frontage. No ground,
collision, gate behavior or playable encounter is embedded in this image. The export uses a
rectangular crop and nearest-neighbor sampling, preserves proportions to integer rounding and
bottom-aligns the 576 by 330 roof inside a 576 by 384 transparent canvas. It does not paint,
recolor or reconstruct artwork. See `metadata.json` for crop, anchor and hashes.

The generated roof was wider than the requested 3:2 ratio. Padding preserves its shape rather
than stretching it. The crop excludes faint exterior pixels below alpha 16; this is a crop
choice, not proof of a clean alpha edge. The south eave is an authoring alignment reference,
not a collision boundary. Perspective, facade joins, pixel density and native-scale readability
still require review in the composed map. Do not infer accepted occlusion or traversal.

Initial inspection: the capped native-size JPEG shows a rectangular corrugated roof,
two vents and two fans with a readable outline. The first freight render reads as one
roof/frontage mass rather than detached facade strips. The apron remains a hard rectangle
and surrounding asphalt is sparse/repetitive. The JPEG review cannot certify exact alpha
or pixel registration; these observations do not accept the complete warehouse or map.

Re-export from the repository root:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File art/environment/escape_warehouse_roof_v1/export_roof.ps1
```

`generation_prompt.md` records the exact prompt and original output identity. The original
source remains intact; generated map renders belong under `build/`.
