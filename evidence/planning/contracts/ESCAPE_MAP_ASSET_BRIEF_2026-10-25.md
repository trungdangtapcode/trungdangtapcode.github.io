# Escape map concept and asset breakdown

Design deliverable: 2026-10-25. This brief accompanies the
[continuous escape mission](ESCAPE_MISSION_DESIGN_2026-10-25.md), decision D-089 and BL-098.
The top-down image is a composition concept. It is not a Tiled map, pixel-art tile source,
collision map, lighting mask, production building atlas or accepted runtime art.

## Spatial concept

![Top-down continuous escape route concept](../../art/environment/escape_route_concept_v1/concept.png)

Start at the west service court. The first landmark is the power-control point and closed
Gate A. Crossing the opening leads into a real traversal space with a short exposed loading
lane and a longer covered service lane. Both join at the freight yard and Gate B. A separate
clear corridor beyond Gate B ends at the eastern extraction pad. The small service recess in
the center is reserved space for a possible later physical checkpoint; the first route does
not turn it into a shop, safe room, map transition or resource refill.

The image suggests a coastal industrial block and a helipad as readable extraction landmark.
That is one concept interpretation, not required canon. If the selected map's story does not
use aircraft, replace the landing pad with an equally visible evacuation vehicle or outbound
service gate while keeping its ID, approach and collision footprint in authored map/content.

Composition check against runtime: the chosen `content/maps/urban_integration/power_station.tmj`
is still a 40-by-20, 32-pixel Tiled map. It is a short loading-court candidate, not this entire
route. Preserve its useful content and extend the editable Tiled world with connected space.
An initial expanded authoring study around 64-by-32 cells is a sizing hypothesis only; adjust
dimensions after drawing collision/route footprints and measuring live-player traversal. It
must keep all route choices within one TMJ/World/session. Dimensions are Tiled content, never
a C++ gameplay constant.

## Map authoring and gameplay footprints

| Tiled responsibility | Data to author | Existing support / gap |
| --- | --- | --- |
| Ground surfaces | Asphalt route, concrete service court, limited paving, sidewalks/curbs | Multiple authored TSJ banks exist; only some masked transitions have bounded proof coverage |
| Urban edge | Walkable road surrounded by shallow facades, service walls and overhead foreground | Existing street/storefront layers work; selected runtime city landmarks and facade diversity are incomplete |
| Tactical objects | Crates, damaged vehicle, fence segments, pallet/cargo stacks and concrete cover | Supply crate has a live pipeline; other state PNGs are source studies and need footprint/art/runtime review |
| Gate A and B | Two separate visual placements, closed/open states, one dynamic physical footprint each, open clearance and forward crossing region | Existing gate sheet/render exists; map object binding, repeated state snapshots and collision agreement are not accepted for two gates |
| Objective points | Entry, power controls, per-gate crossing markers and final extraction | Existing loader accepts named spawn/objective/exit/wave markers only; escape roles require a versioned loader extension |
| Spawn approach | Valid connected approach regions behind/fanning around players, outside cameras/LOS/obstacles | Distributed anchors and local exclusions exist; connected path fairness must be proved on the expanded map |
| Sight and light | Emission points separate from fixture sprites; occlusion walls align with physical footprints | Authored lamps and Tiled emissions exist. Broad partial-source visibility is still under BL-093 Review |
| Visual separation | Color/value boundary between asphalt, court, curb, route choice and blocked edges | Reuse registered material palette and render samples at game zoom; concept does not settle native pixel scale |

Keep static walls in static collision and each sliding/lifting gate in a separately identified
dynamic-footprint layer/object contract. Do not leave an immutable wall under an opened gate.
On the same authoritative tick, gate passability must update player/zombie navigation,
projectile collision and sight blocking. The objective/successor IDs and opening times belong
to validated mission content; Tiled owns only identity, position and geometric footprint.

## Existing asset inventory

Status key: **selected source** means a usable project source/resource already exists; **limited**
means use only within its inspected scope; **missing** means a new authored deliverable or
runtime integration is still required. Existing source presence does not certify art acceptance.

| Map need | Reusable source/ID | Status and use |
| --- | --- | --- |
| Main asphalt | `art/environment/tiles/urban_v1/asphalt_source.png` → `content/maps/urban_ground.tsj`, IDs `environment.urban.asphalt_01`–`16` | Selected tile source/export for the walkable city floor |
| Paint/drains/wear | `art/environment/tiles/urban_v1/details_source.png` → `content/maps/urban_details.tsj`; IDs include `environment.urban.road_dash_01`–`04`, `crossing_01`–`04`, drain, manhole, gravel and litter | Selected subtle variation; place with restraint so detail never obscures paths |
| Court/paving | `content/maps/material_refinement/proof.tsj`: `environment.material_refinement.straight_v2`, `convex_v2`, `concave_v2`, `paving_v2`; sources under `art/environment/tiles/material_refinement_v2/` | Limited authored transitions and court sample; not a complete transition bank or whole-map proof |
| Existing urban encounter shell | `content/maps/urban_integration/power_station.tmj`, its `courtyard.tsj` and `package.json` | Strong starting map: retains seven runtime layers and adds a material court. Current whole footprint remains 40×20 cells |
| More native street tiles | `art/environment/tiles/street_tiles_source.png`, `content/maps/street_tiles.tsj` | Selected older source/crops; no per-tile stable IDs in this TSJ. Prefer ID-addressable urban bank for new placements |
| Objective station | `art/environment/objectives/sprint_01/power_station.png`, `visual.power_station` / `texture.power_station` | Selected three-state 48×64 presentation. Reuse the existing type for the first service control if its appearance fits |
| Sliding gate | `art/environment/objectives/sprint_01/gate.png`, `visual.gate` / `texture.gate` | Selected three-state 96×96 presentation. Test physical clearance, composition and two placements; commission only missing orientation/state art |
| Street light fixture | `art/environment/props/street_lamp_v1/street_lamp_source.png`; `content/maps/lighting/street_lamp.tsj` IDs `environment.street_lamp.upper/lower` | Selected separated pole/light sprite. Keep the fixture separate from map emission records; existing placement/candidate still needs visual light review |
| Destructible object | `art/environment/supply_crate.png`, `art/environment/supply_crate/debris.png`; map `role=prop` | Existing authored crate and debris pipeline. Reuse a few as cargo cover without inventing a static blocking prop pipeline |
| Extraction/objective icons | `art/ui/sprint_01/world_cues.png`; `texture.world_cues` | Selected generic four-by-two cue atlas. It has no dedicated evac arrow, helicopter pad sign or readable directional street sign |
| Gate cue sound | `content/audio/sprint_01.json`, `gate` → `audio/powerUp1.ogg` from Kenney digital CC0 | Existing prototype cue, not approved motor/siren ambience. Keep input/license, then audition against the powered-city scene |
| Walker approach audio | `art/audio/creature_approach_v1/` existing slow/fast footsteps and growls | Existing source alternatives; no accepted full layered city ambience or gate motor sound |
| City facade/warehouse identity | `art/environment/design_round_01/`, `art/environment/district_a/crossroad_source.png`, `art/environment/district_b/warehouse_source.png`, `extraction_street_source.png` | Authored design studies only. Frontage exports cover shallow facade modules; whole buildings/yard/extraction are not selected production assets |
| Current scenic street picture | `art/environment/market/street.png` | 640×320 non-walkable backdrop. Do not use it as the navigable Tiled floor or expand it into a fake map |

## Required design-team packet

### P0 — author the chosen route in native Tiled

1. Start from `content/maps/urban_integration/power_station.tmj`; make the service court,
   Gate A approach, two connected route alternatives, freight yard/Gate B and final extraction
   leg one editable map. Extend the source map rather than flattening the new city into one PNG.
2. Deliver a `.tmj` plus external `.tsj`/source sheets with named layers for ground materials,
   sidewalks, detail, lower facade/walls, upper/overhead foreground, static collision, dynamic
   gates, gameplay markers, spawn regions and light emissions. Provide `role`/ID/property table
   and stable object names for every gate, activation point, forward crossing and extraction.
3. Show static and gate collision footprints over the artwork, with gate closed and open. Walk
   the full corridor geometry in the renderer with actors before adding extra prop density.
   Both routes reconnect; neither gate opening exposes a wall or terrain gap.
4. Include north-up gameplay-scale captures at entry, each terminal, both lane choices, both
   gate crossings and extraction. Add one full-map overview and player-size walkability overlay.
   Keep sight/darkness and fixture emission on a separate capture; unexplored black cannot be
   used to conceal missing ground tiles or route walls.

### P0 — audit needed art, then author only missing modules

Before prompting new art, overlay the received station/gate sheets, crate, separated lamp,
urban asphalt/details, paving proof and existing facades at their real world size. Check pixel
scale, palette, alpha, body/vehicle orientation and read distance at the actual camera zoom.

Likely new requests, conditional on that overlay:

| Asset packet | Minimum useful delivery | Why it is missing |
| --- | --- | --- |
| Industrial wall/facade set | Small modular straight/corner/end modules, door/loading-dock modules, front/side/top-compatible view, source sheet + native crops/pivots | Current wider-building/extraction pictures are studies; they do not form a measured walkable facade kit |
| Distinctive yard landmarks | One cargo/loading landmark and one extraction identity/sign; alternate helipad with vehicle/egress sign if narrative chooses | Current generic objective/gate and world cue do not explain the destination or distinguish the two yards |
| Barrier/cargo states | Only missing pallet, vehicle or fence intact/broken visual states needed by designed collision footprints | Source files exist, but selected production metadata/presentation bindings are not established |
| Gate motor audio | Short start, running, clearance and stop cues with CC0/source/license or authorized authored files | Current generic gate cue is a prototype electronic sound, not a mechanical motor profile |
| Route markings | Small set of compatible directional floor paint/arrow/number-free stripes if existing dash/crosswalk cues cannot point forward | Needed only if geometry/landmarks fail readability playtest; avoid painting instructions all over the floor |

Every delivered PNG has a native source, transparent alpha where needed, palette/pixel scale,
actual pivot and measured collision footprint. Include prompt/provenance/authorization, IDs and
export/import recipe. Tiled animation must reference selected frames/metadata; do not fake a
mechanical gate by drawing shapes in the renderer. Reuse assets already on this map wherever
the overlay passes.

### P1 — lighting and combat density review

Compose sight blockers and lamps from current authored asset IDs. Show a lamp visible while
the observer looks away, the obstacle shadow and the route floor; record known BL-093 failures.
Do not solve partial lights by increasing radius or drawing a glowing circle in the map.

Place cover so each route has different exposure and clear counterplay: crate/pallet groups
break a lane without sealing it; a parked vehicle or loading dock provides one broad readably
walkable obstruction; one opening has a flank approach visible early enough to respond. Keep
the terminal out of the only safe bunker. The concept is deliberately denser than the runtime
map; settle real asset scale and path width before populating every spare corner.

## Acceptance of this design packet

- The preview board opens the concept and asset table; concept image prompt and source hash are
  retained. The image is referenced for layout only and never loaded by the game.
- Reuse is linked to the exact source IDs/files above. Studies are not described as accepted
  runtime art.
- The next design handoff returns native Tiled files/render captures and a short delta list of
  reused, missing and rejected assets. Existing BL-024/S01-12 map ownership and BL-029 asset
  inventory remain in force; this brief does not reassign them.
- Runtime gate/objective roles currently exceed the accepted map loader. Design markers are
  requested inputs, not a claim that game code can load them today. Use BL-097 for the typed
  schema/loader/renderer extension and preserve its legacy callers.
- No asset generation/presentation change from this concept is required to start BL-097's
  runtime spike; the selected old station/gate art is available for a bounded integration
  once the first native route is authored.
# Sequential area expansion · 2026-10-25

The [review board](../../build/escape_map_design/index.html) now includes four area concepts
in journey order, alongside the overview. See the
[phase handoff](../../art/environment/escape_route_concept_v1/escape_sections/README.md)
for phase-specific asset requests, reuse and visual-review limits, and its adjacent receipt
for original PNG dimensions/hashes. This is a source study, not a native map delivery.
The images are not seam-aligned chunks and establish no measured actor scale or collision.
The helipad is a proposed destination landmark; extraction remains arrival without a third hold.
Exact phase-generation prompts were not recovered; the overview prompt does not cover them.

## Native asset return

The [native asset handoff](ESCAPE_NATIVE_ASSET_RETURN_2026-10-25.md) records the subsequent
reuse selection, industrial/coastal kits, audio sourcing and editable Tiled route work.
Its [asset board](../../build/escape_asset_review/index.html) separates native files from
concept references and records outstanding alpha, composition, clearance and runtime gates.
These are source deliverables; they do not replace the playable encounter or certify BL-097.

Native authoring remains BL-098 with existing ownership. First prove a continuous one-gate
route for BL-097 using selected current materials and gate art; extend that same Tiled map
to the two transit lanes, second gate and extraction. Review route seams, clearances and
readability with player/crowd captures before expanding decorative content.
