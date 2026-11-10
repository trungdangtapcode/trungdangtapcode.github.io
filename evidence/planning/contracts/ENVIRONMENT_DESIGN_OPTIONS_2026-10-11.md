# Environment composition consultation · 2026-10-11

Round01 source/layout delivery now available:
[A/B artwork, editable Tiled, renders and eight answers](ENVIRONMENT_DESIGN_ROUND_01_2026-10-11.md).
This prior request/consultation remains historical input. Neither option is selected or default;
the rendered studies do not establish production environment acceptance.

**Deliverable: design consultation and authoring brief, not an integrated map or artwork packet.**
Requested after the user rejected the visual result shown in `image8.png`. This is an AI
consultation in the shared workspace; it is not a message from the user's separate design
session and does not assign that session work. Keep BL-029 source ownership with **Codex asset
preparation** and BL-024/S01-12 integration with **Codex Sprint 01 integration**. Environment
production-art acceptance remains **Unassigned**. Task status stays in BACKLOG.

User clarification after consultation: deliver through chat or Markdown; design should propose
both layouts and return rendered images for user selection. These text briefs are inputs to
that next delivery, not the requested A/B renders. See the concrete round-one artifact list in
[DEV_ENVIRONMENT_DESIGN_RETURN](DEV_ENVIRONMENT_DESIGN_RETURN_2026-10-11.md).

Read PRODUCT_CONTINUITY, AGENT_NOTICE, planning README/VISION/CODING_GUIDE, ART_DIRECTION,
WORKFLOW section 8, the current map README, [art request](ENVIRONMENT_ART_REQUEST_2026-10-10.md)
and independent visual reviews [004](../reviews/2026-10-10-004-tiled-map-visual-qa.md) /
[005](../reviews/2026-10-10-005-tiled-map-visual-recheck.md).

## What the images establish

Viewed the user's `image8.png`, before/after native full-map rasters, before/after actual
east/south GPU captures and the corrected combat capture. Also viewed the existing crossroad,
extraction street, warehouse, car-state and fence-state source sheets.

The user's crop contains the old raised curb island visible in the baseline raster; that island
is absent from the corrected raster. This alone cannot identify which executable the user ran.
The corrected capture removes the obvious pasted asphalt panels, but the criticism still
applies: it reads as a broad noisy asphalt sheet with a mirrored frontage and weak destinations.
Neither an asset count nor the previous 65/100 AI score accepts its composition.

The missing design is a spatial hierarchy: where we arrive, what we defend, where we leave,
what the lower half of the map is for, and which edges frame those decisions. Randomly adding
cars, rubbish and cracks would increase visual competition without answering those questions.
Keep quiet ground beneath actors/VFX; concentrate authored detail at meaningful boundaries
and destinations. Reserve stronger shapes and accents for station and extraction landmarks.

## Fixed inputs for either proposal

Use the same finite 40 × 20 native Tiled grid, 32px cells, 1280 × 640 world. Use existing
ground/overhead passes, rectangle Collision objects, named Gameplay markers, current World,
weapons, deployment and encounter. No renderer rewrite, new combat tuning or hidden marker move.

| Existing marker | World position | Design consequence |
| --- | --- | --- |
| Survivor spawn | (320,160) | Arrival must read separately from the station without obstructing preparation |
| Station objective | (360,178) | Existing station remains the interactive focus; added frontage is contextual art |
| Extraction | (1100,164) | Needs its own recognizable destination, not another copy of the station frontage |
| West wave | (26,160) | Preserve the west approach to the objective |
| North wave | (340,58) | Preserve the north approach and show emerging walkers; a new canopy must not conceal it |
| South wave | (340,296) | Preserve the south approach, deployment space and movement back toward the station |

Existing six crate markers and the perimeter spawn-bounds rectangle also remain unless a
separate layout change is accepted. Exact positions remain in the TMJ; this table is a brief.

## Option A · Street leading to a utility station

**Read:** a damaged shopping/service street, station left of centre, recognizable evacuation
checkpoint at the east end. Lowest route-integration risk with current direct-steering walkers.

| Region | Proposed composition | First proof |
| --- | --- | --- |
| North frontage, x0–640 | Reuse intact shop frontage modules; insert a distinct utility frontage visually associated with the station at x256–448 | From the arrival camera, the station and its context read as one destination without hiding the north lane |
| North frontage, x640–1280 | Replace mirrored strip with service/loading frontage and a distinct checkpoint entrance around x1024–1184 | At extraction camera, player recognizes the destination from its silhouette before reading HUD text |
| Core around x192–512, y96–320 | Quiet continuous asphalt, one deliberate pedestrian crossing and existing crates/interactive station | Placement arcs, walkers and gunfire remain legible; crossing connects visible paving rather than floating on empty road |
| East route around y128–224 | Clear visual connection from core toward exit; restrained drainage/paint repeat along an actual curb | Traverse with camera and identify the next destination; no raised island or fake invisible blocker |
| South, y320–608 | An open service/parking apron with coherent material zones and boundary dressing | User/design must choose its playable purpose; do not populate it as unrelated extra scenery |

The crossing, loading marks and paving are flush/nonblocking. Use shop and extraction-street
source as references/crop candidates, not a flattened scene stamped repeatedly. New facade
module footprints and overhangs must respect the existing north walkable lane. Do not place a
whole building into that lane merely because a top-down crop fits the tile grid.

**Tradeoff:** this preserves the street identity and open routes, but requires quieter terrain
and two strong destinations; it will still feel empty if the lower apron has no intended use.

## Option B · Utility service yard

**Read:** the station belongs to a utility/loading yard; the east exit is its guarded service
gate. The same objective and combat routes gain a clearer industrial setting.

| Region | Proposed composition | First proof |
| --- | --- | --- |
| North frontage | Reuse warehouse/utility-source shapes as a consistent service frontage; retain a visible opening for the north wave | Building mass distinguishes the yard while walkers remain visible and spawn-safe |
| Core around the station | Flush maintenance pad/paint and cable-path accents visually tie the existing console to the frontage | The station reads as installed equipment rather than an isolated terminal on road paint |
| East destination | Unique service-gate silhouette and flat threshold markings associated with (1100,164) | Closed/open gate remains the existing authoritative mission gate, with no duplicate decorative gate hiding its state |
| South boundary | Perimeter yard identity: compatible fence/wall modules and restrained storage silhouettes outside playable clearance | Boundary art agrees with existing map bounds; no traversable-looking opening leads into an invisible wall |
| Lower open area | A loading/maneuvering apron framed by material layout and sparse edge detail | Human setup/route review determines whether this space supports repositioning or needs a later authored gameplay purpose |

Fence and warehouse source sheets are reuse candidates, not ready native runtime modules.
For the first visual packet, place solid-looking decoration only where an existing perimeter
solid actually supports it. No interior fence maze, parked-car cover or concave compound yet.
If design wants these features, integration must first prove routes around their actual
footprints through BL-024; preserving a picture of an open lane does not prove navigation.

**Tradeoff:** stronger place identity from fewer modules, but introduces more footprint and
occlusion decisions. Source warehouse detail/perspective may need substantial native-scale
authoring to match current actor/environment art.

## First artwork packet after choosing A or B

Counts below bound a reviewable first packet; they are not a full district inventory.

| Priority | Deliverable | Reuse assessment and acceptance evidence |
| --- | --- | --- |
| P0 | One annotated layout for the chosen option, marking flat floor, actual solids, canopy/roof extents and the three wave corridors | Native Tiled arrangement plus full-map and arrival/core/east/south views; keep current markers and identify any proposed change explicitly |
| P1 | Two distinct landmark groups: station context and extraction context | Reuse registered station/gate sprites. Review objective/extraction/warehouse sources for context; export native32px-grid RGBA modules with layer split and footprint, not whole scene backgrounds |
| P1 | A quiet ground family and coherent material transition | Reuse `urban_v1` where suitable. Show selected existing exports at actual game scale, then author only variants needed to reduce speckle/repetition; no demand for dozens of new base tiles |
| P1 | Four compatible frontage modules selected for the chosen setting | Existing crossroad/extraction/warehouse sources provide reuse candidates. Need native scale, consistent perspective/value, left/right joins and distinct silhouettes before replacing mirrored frontage |
| P2 | Curb/threshold adjacency sheet: straights, inner/outer corners, ends and flat ramp transition | Reuse suitable original edges; prove joins in a small native Tiled swatch. Clearly distinguish walkable ramp from solid wall/raised barrier |
| P2 | Sparse boundary/fixture accents chosen for actual locations | Existing drains/paint/litter first. Reuse car/fence sources only after footprint/state/route scope is agreed; do not add cars solely to fill empty cells |

Source files remain in `art/environment`, authoring metadata/TSJ in `content/maps`, generated
atlases/previews in `build`. Include source/provenance, native exported PNG, IDs/crop recipe,
material palette, alpha policy, pivot or tile placement, actual footprint and ground/overhead
split. Use existing exporter/resource pipeline and retain BL-029 catalog ownership.

## Questions needed from user/design

1. **Composition:** A street → utility station → evacuation checkpoint, or B utility/loading
   yard → service gate? If undecided, review annotated versions of both before authoring assets.
2. **Lower-half purpose:** should y320–608 stay active maneuvering/preparation space, become an
   explicitly planned alternate route later, or should a smaller navigable map be proposed?
   Dev will not invent loot/tasks or silently crop map/combat to make empty space look busy.
3. **Extraction identity:** does the east exit represent an evacuation pickup, a closed service
   gate or an entrance to the next district? This chooses the landmark, signage and threshold.
4. **Visual target:** provide one accepted reference for pixel density/value and cleanliness,
   or choose the quieter readable direction versus the current dense decayed-street grain.
   Can the ground be materially simplified while retaining the dark palette?
5. **Physical features:** which planned cars, fences, curbs and buildings are solid, destructible
   or walkable? Which are only boundary decoration? Interior blockers require navigation proof;
   art must not imply solid cover where hitscan/movement remain open.
6. **Delivery/review:** who in the actual design workflow authors the first packet and who
   accepts its native-scale composition? Which source/revision and preview will be handed back?
   Do not infer those assignments from this consultation.

## Integration and review order

Choose composition and clarify the lower half/extraction first. Receive a small annotated
layout and native landmark/material swatches. Review actual arrival, objective, exit and south
camera compositions before expanding asset quantity. Then integrate those accepted files
through current TMJ/TSJ; validate any footprint changes against movement, spawn safety,
placement and hitscan. Keep the original 148-wave encounter as a regression scenario, not a
substitute for route interpretation or artwork review.

Any overhang belongs to the current overhead pass and can cover actors; it is not automatic
Y-sorting. Tall interior props need the existing prop pipeline or an explicitly scoped sorting
extension. Buildings, cars and fences require matching authoritative Collision/prop behavior;
closed gates keep the mission-owned collider/state. New concave solids wait for a reused
navigation integration. Flat decals must not secretly change collision or affect blast rules.

For the next review, retain identical camera/character/gameplay profiles for before/after,
provide native full-map raster and actual GPU core/east/south views, plus movement/occlusion
playback. Ask a human reviewer whether they identify station/extraction, understand walkable
edges and can track actors during combat. Build/check results remain a separate technical gate.

No artwork, runtime/source, asset or build changes were made for this consultation; no build,
game execution or new image generation was performed. The proposed layouts are not selected
or accepted yet. This brief supplements the existing art request rather than replacing task
tracking, assigning production owners or claiming full map/Sprint quality.
