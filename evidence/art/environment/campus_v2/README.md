# VNUHCM-inspired campus detail library

The packet supplies 288 additional designs across 18 families, extending the preserved
36-design [campus v1 library](../campus_v1/README.md): **324 separately registered native PNGs
across 22 families**. All 324 output hashes are distinct; the 36 v1 native hashes are unchanged.
Proposed entries, recolors and placement instances are not counted as additional artwork.
See the generated registration/export reports and review for scoped acceptance.

## Reference and visual identity

The user selected VNUHCM as the theme after the initial generic campus study. Official
[VNUHCM campus photography](https://stg.vnuhcm.edu.vn/tin-tuc_32343364/khu-do-thi-xanh-dhqg-hcm/353935373364.html)
and the [UIT campus tour](https://tuyensinh.uit.edu.vn/uit-tour-360/) inform the vocabulary:
pale concrete frames, colonnades, shaded galleries, horizontal parapets, tinted glazing,
broad steps/ramps, low pool and planter coping, conical trees, clipped shrubs and patterned
paving. These are reference observations; this kit is an interpretation for the game, not
an exact campus survey, official building replica or implemented university mission.

The source plates are GPT Image artwork, not downloaded campus photographs. Their square
four-by-four sheets preserve 16 individually registered silhouettes each. Exact prompts,
provider generation IDs, dimensions and SHA-256 values live in [generation.json](generation.json).
All original selected PNGs stay in `source/`; discarded or provisional findings must be
identified in the review. The project's muted pixel palette and south-facing orthographic
camera remain the game convention; photographic perspective is not imported into gameplay.

## Content and ownership

The canonical extension recipe is
[collection.json](../../../content/art/authoring/campus_v2/collection.json). It owns native
dimensions, support intent, explicit source cells, stable asset IDs and tile IDs 36-323.
The original v1 recipe continues owning IDs 0-35. Do not edit a generated combined manifest
to change an asset; change its authored recipe and regenerate.

Families cover classroom furniture, teaching tools, stationery, biology, chemistry,
engineering, design studios, library services, administration, cafeteria furniture/smallwares,
dormitory, athletics, medical/emergency equipment, tropical grounds, courtyard services,
architecture pieces and localized evacuation/damage cues. Sparse purposeful clusters should
give places a function; a larger asset bank is not permission to fill every movement lane.

The registration adapter computes source rectangles from explicit cells and recorded source
dimensions, keeping non-divisible sheet dimensions bounded. It emits bottom-center pivots
and transparent-padding contact guides, not reviewed physical footprints. Every decorative
collision field remains null. Physics, illumination, loot and interactions require their own
authored runtime definitions. Wall-mounted assets are placement intent only.

## Rebuild the native library and review

Run from the repository root after the source ledger is complete:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File tools/assets/campus/register_expansion.ps1
powershell -NoProfile -ExecutionPolicy Bypass -File tools/assets/campus/export_assets.ps1 -ImportFile build/vnuhcm_campus_review/props_import.json -OutputDirectory build/vnuhcm_campus_review/native
powershell -NoProfile -ExecutionPolicy Bypass -File tools/assets/campus/build_study.ps1 -ImportFile build/vnuhcm_campus_review/props_import.json -NativeDirectory build/vnuhcm_campus_review/native -PlacementFile content/art/authoring/campus_v2/lecture_court.json -OutputDirectory build/vnuhcm_campus_review/tiled -CatalogByFamily
powershell -NoProfile -ExecutionPolicy Bypass -File tools/assets/campus/export_gallery.ps1 -ImportFile build/vnuhcm_campus_review/props_import.json -GenerationFile art/environment/campus_v2/generation.json -NativeDirectory build/vnuhcm_campus_review/native -OutputDirectory build/vnuhcm_campus_review -ReadmeFile art/environment/campus_v2/README.md -BriefFile planning/contracts/CAMPUS_LIBRARY_EXPANSION_2026-11-07.md
```

`-AllowIncomplete` on registration is for explicitly labeled work-in-progress review only;
the ordinary command rejects missing plates. Combined manifests, separated PNGs, receipts,
Tiled files, renders and HTML stay under ignored `build/`. No game build, image API fallback
or CI run is needed to export these sources. Existing material/actor/Tiled prerequisites are
documented in the v1 guide.

The [local gallery](../../../build/vnuhcm_campus_review/index.html) contains searchable 1x/2x
cards and 22 compact native family catalogs. Three editable placement inputs cover the
lecture court (55 objects), library/lab (48) and canteen/dormitory (50). For the other studies,
select `library_lab.json` or `canteen_dorm.json` as `-PlacementFile` and use a separate output
directory. Tiled or its existing `tmxrasterizer --no-smoothing` command can export their maps.
These are sparse support/placement worksheets, not campus level composition or route acceptance.

Native-scale review recalibrated 67 extension entries, including smaller binders/readers and
larger stretchers, shelters and sports fixtures. IDs and source PNGs remain unchanged; original
generation prompts remain historical provenance rather than overriding the current recipe.
The worksheets explicitly support tabletop equipment or declare a floor-scatter override.

The existing palette/alpha exporter remains the single native pixel conversion path.
Authoring import schema 2 adds `wall` support; schema 1 retains its previous support set.
This version is separate from any runtime game-content schema. The Tiled builder keeps new
campus props and old reused furniture in separate collection ID namespaces, so appending
native assets cannot overwrite a reused furniture tile. Family catalogs use compact row
positions independently of stable tile identity. Each includes the registered Survivor
reference; the full catalog remains editable without rendering an enormous overview PNG.

## Limits and next integration

Individual asset presence does not accept an architectural connection kit, seamless terrain,
roof cutaways, real collisions, wall attachment/depth, actor/combat readability, map pacing
or a complete mission. Architecture/glass pieces and micro-props need placement and native
review before use in a final building. Do not infer stairs or a traversable ramp from artwork
alone. Preserve existing art and current playable mission defaults.

The next consumer is an approved campus area through the existing Tiled/resource path:
assign its building/route/interaction owners, author connected indoor/outdoor spaces and
verify visible silhouettes, supports, ground contacts, lighting and movement in the encounter.
The supplied catalogs and dressing composition are source-art evidence, not that encounter.
