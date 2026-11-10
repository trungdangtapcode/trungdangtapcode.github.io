# Environment artwork return · BL-024 / S01-12

User return: the editable map looks patchy and unfinished. This is a concrete art request,
not a new coding standard or a new renderer. Integration owner: Codex Sprint 01 integration.
Existing BL-029 inventory/source owner stays assigned; environment acceptance owner is Unassigned.
Independent AI visual review: RV-20261010-004 baseline and RV-20261010-005 corrected candidate.
Human route/setup evaluation still belongs to S01-15/16 and has not been performed.

The user's additional return on 2026-10-11 requires composition before further asset batches:
[design questions and staged receipt](DEV_ENVIRONMENT_DESIGN_RETURN_2026-10-11.md), with
[two AI consultation options](ENVIRONMENT_DESIGN_OPTIONS_2026-10-11.md). Neither layout is
selected. Return annotated blockouts first; quantities below do not replace place identity,
quiet ground, purposeful playable space or actual footprint/layer review. User confirmed
chat/Markdown delivery and requested two layouts for selection by renders. This is the shared-
workspace handoff; another session reading it is not independently confirmed.

## Already repaired and available for reuse

- 16 native32px asphalt variants, plus16 transparent road/detail tiles: urban_ground.tsj and
  urban_details.tsj. Source, exact GPT Image prompts and hashes: art/environment/tiles/urban_v1/.
- Ground, sidewalk, road markings, surface details and facade have separate native tile layers.
  Opaque stripe patches/cut scene-curb islands are removed from the walkable road.
- TMJ/TSJ, rectangle collision and named gameplay markers are the existing integration path.
  No new private map/asset loader or runtime drawing of scenery is required.
- Actual corrected core/east/south captures: build/tiled_world_polish/runtime/.
  Preserve the current dark street palette and readable actor/gore/muzzle silhouettes.

## Next artwork packet, in priority order

| Priority / packet | Concrete deliverable | Where it helps | Receipt required |
| --- | --- | --- | --- |
| 1 · Place identity | Two distinct authored landmarks: utility-station frontage and extraction/end-of-street frontage, source layers and native32px-grid exports | Objective near (360,178), exit near (1100,164) should read as different destinations | Landmark silhouette at game scale, normal/occluded footprint, walkable versus solid regions, before/after at both destinations |
| 1 · Unique frontage | Four compatible shop/utility frontage modules, each2–4 tiles wide; facade and ground/threshold exported separately | Replace the repeated/mirrored640px building strip | Compatible left/right boundaries and lighting, variation without changing tile/actor detail scale, modular arrangement in Tiled |
| 2 · Edge dressing | Eight coherent curb/sidewalk edge/corner/transition tiles at32px; source art with road-compatible perimeter colors | Give north/south edges intentional structure without islands cut from a scene | Every intended adjacency rendered in a native tile swatch; continuous joins and clear flat-paving/raised-curb cues |
| 2 · Sparse ground fixtures | Six authored flat/nonblocking accents: two drain variants, two pavement repairs and two litter/weed groups; reuse suitable urban_v1 variants first | Break broad empty street areas around existing routes while keeping combat readable | Sparse composed placements in Tiled, true transparent PNGs, no dark opaque rectangles, no clutter in objective/placement telegraphs |
| 3 · Parked vehicle coverage | Select existing car_states_source first; deliver two compatible parked/wrecked variants with native scale and explicit footprint | Future purposeful perimeter landmarks/cover, after route validation | Intact/damaged/destroyed source and native crops, pivots and collision/state mapping; no claim of destructible vehicles until gameplay consumer exists |

Review the existing crossroad_source, extraction_street_source, warehouse_source, car_states_source
and fence_states_source before generating new concepts. They are source studies; register and
inspect selected crops at native resolution rather than treating the whole scene as ground tiles.
Quantity above is a bounded next packet, not a requirement to fill every empty cell. Deliver
priority1 first; defer packet3 until its existing gameplay/navigation boundary is proved.

## Formats and integration constraints for this packet

Source lives under art/environment; recipes/TSJ/mapping under content/maps. Native runtime
PNG RGBA8 uses32px tiles, nearest sampling and the existing straight/binary alpha convention.
Include exact crop rectangles, stable per-tile asset IDs, palette/reference, source/provenance,
native TSJ image path and a small editable Tiled arrangement. Generated atlases/previews stay
under build/. The extraction revision2 already supports opaque and straight_binary assets.
Buildings/landmarks can occupy multiple cells; their authored layer split and footprint must
match the selected ground/overhead passes. Avoid artwork that implies an obstacle while the
gameplay rectangle/prop contract treats it as open floor.

Do not silently move spawn/objective/exit or retune combat to fit artwork. Proposed footprint
changes need an integrated layout and spawn-safety/placement/hitscan check. Before adding a
concave blocked route, accept navigation through the existing World under BL-024; preserve
current open horde lanes. Static scenery and destructible props have different consumers.

## Review the next packet in the game

Render full map, objective preparation/combat, exit and both south camera locations with
the same gameplay/character profile and resolution as this candidate. Review edge joins,
material scale, place identity, actor contrast and occlusion while moving. Keep the existing
baseline comparison; ask QA to record pass/needs changes per defect and score against its same
rubric. A passing build or asset count does not accept this artwork packet.

Current deliverable is the patch-layout correction. Parent map/nav/two-district/visual/human
gates remain open in BACKLOG. This file is in the workspace; no external design message sent.
