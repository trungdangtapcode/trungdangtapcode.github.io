# Escape Route Asset Reuse Audit

Date: 2026-10-25

Audited revision: `835eaaaaa3cc01e81b2c734e383b5bad48c24a548`
Scope: existing native sources, content bindings, export recipes, and audio provenance for the
continuous escape route. This is a source-backed reuse audit, not an art or runtime acceptance.

The machine-readable path/ID inventory is
[`content/maps/escape_route_assets/reuse_inventory.json`](../../content/maps/escape_route_assets/reuse_inventory.json).
It records exact source paths and measured dimensions, tileset IDs, current consumers, evidence
limits, audio license references, and export tools.

## Reusable now, subject to map-scale review

| Need | Existing source and native contract | Reuse boundary |
| --- | --- | --- |
| Walkable city ground | `art/environment/tiles/urban_v1/asphalt_source.png` (1254×1254); `content/maps/urban_ground.tsj`, IDs `environment.urban.asphalt_01`–`environment.urban.asphalt_16`, 32×32 each | Selected addressable asphalt bank. It has no curb, facade, collision, or route identity. |
| Road paint and wear | `art/environment/tiles/urban_v1/details_source.png` (1254×1254); `content/maps/urban_details.tsj` | Selected dash IDs `environment.urban.road_dash_01`–`04`, crossing IDs `environment.urban.crossing_01`–`04`, plus `drain_small`, `drain_large`, `manhole`, `paper_scatter`, `weeds`, `gravel`, `litter_pair`, `hairline_crack`. Use sparsely; none substitute for landmarks or walls. |
| Court material boundaries | `content/maps/material_refinement/proof.tsj`: `straight_v2`, `convex_v2`, `concave_v2`, `paving_v2`; authored sources in `art/environment/tiles/material_refinement_v2/` | Four 32×32 proof tiles only. `content/maps/urban_integration/courtyard.tsj` has `environment.terrain.overlay.asphalt_concrete.*` and `environment.terrain.overlay.concrete_paving.*`, six variants per selected pair. This is not complete transition coverage for every route shape. |
| Existing opening scene | `content/maps/urban_integration/power_station.tmj`, 40×20 cells at 32px (1280×640), plus its referenced tilesets and package | Retain as a service-court start and expand it. It does not yet contain the connected route, two gate beats, both lanes, or extraction. |
| Objective station | `art/environment/objectives/sprint_01/power_station.png` (144×64); `visual.power_station` / `texture.power_station` in `content/presentations/demo.json`; three horizontal 48×64 states, pivot (24,56) | Candidate for Gate A control after overlaying at gameplay scale. It is not an escape-specific or map-native binding yet. |
| Gate visual | `art/environment/objectives/sprint_01/gate.png` (288×96); source `art/environment/objectives/gate_source.png`; `visual.gate` / `texture.gate` in `content/presentations/demo.json`; three horizontal 96×96 states; pivot (48,88) | Reusable for two placements only if the authored route fits its front-facing orientation. States read closed, half-raised, open. No directional gate art, map-object schema, per-instance state/timing, collision clearance, or shared passability agreement is established. Do not claim the two gates are integrated because a reusable sprite exists. |
| Separated street lamp | `art/environment/props/street_lamp_v1/street_lamp_source.png` (965×1629); `content/maps/lighting/street_lamp.tsj` IDs `environment.street_lamp.upper` and `.lower`, exported 32×64 | Reuse fixture separately from emission points. Placement/visibility remains under BL-093 review; sprite bounds do not define the light. |
| Cargo cover candidate | `art/environment/supply_crate.png` (32×32) and `art/environment/supply_crate/debris.png` (28×10) | Existing prop/debris pipeline makes this the strongest current cargo reuse candidate. Choose placements only after checking collider footprint and both route widths. |
| Generic objective cues | `art/ui/sprint_01/world_cues.png` (256×128), `texture.world_cues` in `content/presentations/demo.json` | Existing 4×2 generic cue atlas; no dedicated extraction/evacuation landmark or forward-route sign. First test whether destination geometry alone reads clearly. |

Older alternatives are catalogued in the JSON: `content/maps/street_tiles.tsj` has 16 legacy
32×32 crops without stable per-tile IDs, while `art/environment/market/street.png` is a
640×320 static backdrop, not a walkable map. Prefer the addressable asphalt/detail banks and
editable Tiled layers for new route authoring.

## Gate A / Gate B orientation, states, and clearance

The selected gate source is a 3-column strip of same-registration states. Its existing presentation
binding supplies generic frame slicing and a single visual ID; it does not establish gate
orientation or dynamic physical behavior. The mission design calls for two distinct IDs and
separate dynamic collision footprints. A usable map handoff must show both positions with closed
and open footprints overlaid, retain a clear opening at each, and keep static wall collision out
from under an open gate. Visual state, projectile/sight blocking, and player/zombie navigation
must change on the same authoritative transition. The service control may reuse the same artwork
at both gates only after scale and interaction access are proven. Avoid requesting new art until a
native Tiled overlay shows that the supplied gate does not fit the chosen orientation.

## Barriers, frontage, and extraction identity

- `art/environment/props/fence_states_source.png` (1024×1536),
  `art/environment/props/car_states_source.png` (916×1717), and
  `art/environment/props/crate_damaged_source.png` (1254×1254) are studies, not selected runtime
  props. No stable placement IDs, authored collision footprints, or state consumers were found.
- `art/environment/design_round_01/street_frontage_source.png` (1774×887) and
  `yard_frontage_source.png` (2079×756) have four shallow modules apiece in
  `content/maps/design_round_01/street_frontage.tsj`. They are suitable only as a bounded,
  repetitive boundary study, not a complete industrial building kit.
- `art/environment/district_a/crossroad_source.png` (1774×887),
  `art/environment/district_b/warehouse_source.png` (1983×793), and
  `extraction_street_source.png` (1774×887) are broad composition studies without Tiled-sized
  runtime modules, pivots, collision, or stable consumer IDs.
- `art/environment/market/street.png` is a static scenic image. It cannot complete the playable
  freight yard or coastal extraction path.

Reuse the crate where its measured footprint supports cover. Select additional cargo, vehicle,
fence, loading-dock, and extraction landmark art only where the native route composition exposes
a concrete gap. Keep the distinct destination visible and traversable; do not bake it into a
background image.

## Audio candidates and rights

`art/audio/kenney_digital/powerUp1.ogg` is already bound to `gate` in
`content/audio/sprint_01.json`. Its pack README and `art/audio/kenney_digital/License.txt` identify
Kenney Digital Audio / CC0. Treat it as a temporary generic activation cue, not a mechanical gate
motor or a start/run/stop lifecycle.

The closest existing industrial textures are `art/audio/grenade_foley/metalClick.ogg` (Kenney
RPG Audio, CC0) and `impactMetal_light_000.ogg` / `impactMetal_light_002.ogg` (Kenney Impact
Sounds, CC0). Exact pack IDs, archive hashes, sample hashes, and license files are in
`art/audio/grenade_foley/provenance.json`; retain `LICENSE_RPG.txt` and `LICENSE_IMPACT.txt`.
These are short pin/metal-contact effects, not a motor loop. Audition before repurposing. The
existing creature footsteps and vocalizations also have CC0 provenance, but they do not provide
district ambience. No selected gate-motor lifecycle or coastal ambience set was found.

## Authoring tools and next exact gaps

Existing recipes can export tile sources using `tools/assets/extract_street_tiles.ps1` and
`tools/assets/export_masked_materials.ps1`; `tools/assets/export_tiled_assets.ps1` packages maps
and referenced resources. The JSON inventory records which recipe and tileset belongs to each
reuse candidate.

The actual remaining art/content gap is a measured industrial facade/loading-dock kit, selected
freight-yard barriers/cargo states with footprint metadata, complete transition coverage for the
material pairs used by the chosen map, and a readable final extraction identity. The map also
needs two authored gate instances that share state with collision/passability, plus a typed
mission contract for entry, control, crossing, route branches, and extraction. Request only the
asset modules that fail a scale/orientation/footprint overlay; do not regenerate already selected
ground or objective art. Gate audio can remain a clearly labeled temporary cue while design
authors a properly licensed motor lifecycle if playtest calls for it.

## Audit limits

This audit checked file paths, source dimensions, content bindings, tile IDs, and cited provenance.
It did not visually accept art, build the expanded route, measure movement clearance in a live
encounter, or approve audio by listening. Generated `build/` atlases are outputs, not source of
truth. The concept images and the mission document remain design references; runtime/map gates
must be proven independently.
