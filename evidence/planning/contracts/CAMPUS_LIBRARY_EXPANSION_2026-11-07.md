# VNUHCM Campus Library Expansion · 2026-11-07

Delivered source-art evidence: [324-asset handoff and remaining gates](../reviews/2026-11-07-002-vnuhcm-campus-library.md).
The specification below remains authoring intent; the report records the actual sources,
native calibration, validation and worksheet limitations separately from mission acceptance.

## Scope and status

This is a source-art catalog and art-generation brief for a reusable university-campus library expansion. It defines 288 additional designs in 18 plates of 16 objects each. The canonical IDs, suggested native sizes, placement supports and descriptions are in [collection.json](../../content/art/authoring/campus_v2/collection.json). Existing campus v1 IDs 0–35 remain unchanged. Root-owned artwork generation and export are separate steps; catalog entries do not prove that artwork exists or has passed visual acceptance.

The setting is inspired by a contemporary VNUHCM campus and student life: shaded tropical grounds, concrete covered walkways, motorbike parking, faculty and administration services, classrooms, laboratories, library services, and canteen furniture/smallwares. Use verified visual references supplied for this work. Do not invent official logos, exact institutional colors, named buildings, signs or architectural details. Any lettering should be absent or non-legible decoration. Do not depict identifiable real people or add character assets, animations, a mission story or plot-specific clues.

Verified reference cues for this packet include pale gray/cream rectilinear concrete frames, tall light colonnades, broad horizontal parapets, bronze/tinted glazing wings, broad stairs with a central ramp, low pale pool/planter edges, symmetric conical evergreens, clipped round shrubs, broad-leaf shade trees, curving raised lawn strips, patterned gray paving and rows of flagpoles. Use these as broad visual vocabulary only; do not assert an exact campus building replica. Avoid a Western red-brick/gothic campus look.

## Use and authoring rules

- Treat each entry as a distinct functional object design with its own recognizable silhouette or construction. The list includes some purposefully distinct damage/evacuation cues; do not count palette swaps, arbitrary recolors, slight rotations or duplicate states as additional designs.
- Keep the collection visually coherent with the existing frontal orthographic/top-down-front campus v1 presentation and the project's crisp authored pixel-art style. Use calm, empty or recently evacuated environments with practical purpose, not random prop piles.
- The size_px values target mostly small objects calibrated against the existing 48-pixel visible Survivor height. They are proposed logical native sizes, not claims about source plate cells or completed exports. A few architecture modules reach 96×64 pixels to read as useful building pieces.
- suggested_support identifies placement context (floor, ground, tabletop, or wall). Tabletop objects need an explicit supporting surface and placement offset; wall pieces need appropriate wall depth/order. This catalog does not define runtime height attachment, collision, lighting, interaction, loot, or gameplay behavior.
- Preserve v1 source files and IDs. New IDs use the stable environment.campus.<family>.<name> form. Do not reuse old v1 designs just to inflate the count; suitable existing desks, chairs, lockers, shelves and general papers remain reusable where appropriate.
- New design count is not a promise of one source image per object. Authored sheets may group objects by plate, while exports must register each silhouette as its own asset without changing IDs.

## Practical placement zones

Use family-specific clusters to establish useful campus places without obscuring movement:

1. Classrooms and teaching rooms: furniture and teaching equipment with a readable front and clear entry/circulation.
2. Science and engineering laboratories: purpose-specific biology, chemistry and engineering equipment on benches or safe storage; no active experiment effects.
3. Design studios: tools and materials grouped around work surfaces, with open floor around routes.
4. Library and administration: service fixtures, return flows, desks and waiting areas with distinct approach space.
5. Canteen: tables, queue/service furniture, tray/cutlery returns and smallwares; retain open circulation through the dining area.
6. Dormitory and athletics: compact practical fixtures in quiet, orderly rooms.
7. Tropical exterior grounds and courtyard services: shaded walkways, drainage, planting-compatible service fixtures and clearly separated pedestrian and motorbike areas.
8. Architecture modules: reusable concrete corridor, canopy, entry and window pieces that can form larger spaces without prescribing a specific VNUHCM building.
9. Evacuation/damage details: sparse, localized environmental cues that leave thresholds and routes readable; no gore.

## Boundary and next step

This remains a source-art library plus an illustrative Tiled study, not a playable or canonical campus map, a mission, or proof of production completeness. Root will create the source plates and later use the established campus exporter/Tiled study pipeline. Review native exports beside the existing Survivor at pixel scale, checking silhouette distinction, value contrast, framing, support placement, family coherence, and source-to-catalog identity. Follow campus v1 workflow and its native exporter rather than creating a second asset pipeline. Runtime integration, actor readability in combat, collision, interaction, objective use, lighting, performance and human playtesting remain separate gates.

The nearest extension is to add each accepted authored source plate to the existing exporter and verify that its 16 catalog entries retain stable IDs and usable native crops, then extend the same Tiled placement study with representative room/exterior clusters. That study remains illustrative; any future playable campus requires an approved route and player decision with an observable consequence, integrated through the existing map/resource workflow.

