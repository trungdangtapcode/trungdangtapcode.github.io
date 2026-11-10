# UIT Building C - Three-floor Tiled authoring slice

## Accepted scope and ownership

The user requests Building C first, following their UIT campus satellite reference:
three floors, two parallel wings with ten room footprints per wing on every floor
(60 total). Not all rooms need to be accessible. Tone: an original zombie-pandemic
survival-horror campus, informed by Resident Evil's exploration and aftermath,
without copying its characters, insignia, layouts or story. Root owns geometry,
architectural assets, Tiled integration, research, validation and final review.
The bounded room-program owner supplies stable identities and access intent.

Deliver an editable, textured Tiled building map and visual review board. This is
an authoring slice, not a playable multi-floor mission. The existing game loader
uses one plane and roof cutaways; it does not implement floor-aware collision,
AI, sight or stair traversal. Do not pretend toggling Tiled visibility supplies
those systems. Preserve the current playable maps and runtime defaults.

## Reference observations and inference

Primary source: [official UIT 360 tour](https://tuyensinh.uit.edu.vn/uit-tour-360/).
Root inspected low-resolution cube faces for Building C, its upper gallery and
standard classroom (scenes `5-nh-c`, `6-tng-2-nh-c`, `7-phng-hc-nh-c`). These show:

- Cream walls, teal/blue square columns and beams, and open galleries around a void.
- Metal gallery railings, a broad straight staircase and landing, open ground foyer.
- Ochre/orange radial-pattern lobby flooring, patterned classroom floor, long
  varnished wooden desk/bench sets, blackboard/projection area, barred windows
  and ventilating blocks above some window openings.

Reference cube faces stay in ignored `build/uit_building_c/research/`; they are not
game textures and no redistribution/license permission is inferred. Prompts and
new authored art have separate provenance. The historical tour is not a current
as-built survey; exact room count, dimensions, functions, stair arrangement and
the infection story are user/design inputs, not verified photographic facts.

## Spatial and floor contract

Use one shared XY footprint for three aligned floor groups in the main `.tmj`.
Each floor group has a stable `floor_index` and owns surfaces, walls/windows,
doors, props, railings, ceiling/roof, room regions, physical blockers, light
anchors and stair endpoints. Metadata/debug objects are hidden in artwork renders.
Only the selected floor group is visible in the editor by default. Generated
per-floor render maps are review output, not separate gameplay levels.

Two elongated classroom wings face a planted/light-well strip and galleries.
West, central and east cross-links provide loop structure. The entrance/lobby and
central stair core form a landmark; distinct end stairs form alternate vertical
routes. Stair endpoints pair explicit stable IDs and floor targets; authored
design metadata never claims runtime traversal has been implemented.

Every room has its own ID, function, initial access and threshold. Closed rooms
retain the same footprint, silhouette and plausible contents; closed thresholds
have visible doors/barricades and explicit blocker objects. Do not create invisible
hitboxes in the visual layer. Open-room interiors must support exploration space
around furniture, not fill every square with clutter. Keep an unobstructed gallery
route and stairs at the intended actor scale.

## Visual and validation gates

Reuse campus V2/V3 props, floor banks and the existing native palette exporter and
Tiled rasterizer. New architectural source art covers only gaps revealed by the
photo audit. Use texture files and explicit pivots/regions, not code-drawn walls
or a baked whole-building image. Keep room decor, doors, structure and roofs
separate so later access and cutaways do not require repainting the building.

Acceptance for this slice: all 60 identities, 20 per floor, ten per wing; aligned
floor footprints and paired stair endpoints; authored visual/blocker consistency;
resolved Tiled image/GID references; no room/prop outside its bounds; render all
three floors and inspect bounded native details as well as the overview. Board
links to the editable source, renders, floor selection, provenance and honest
missing-art/runtime gates. Build output stays outside Git and Actions stay disabled.

Next product increment: implement a floor-aware selected-floor/session boundary,
with collision, sight, actors and stair transitions sharing floor identity, then
prove one flight and one reopenable room in the existing encounter implementation.
The authoring data must migrate through that boundary before calling this playable.

## Native repair after user rejection

The first renders were rejected for disconnected-looking wall endcaps, skewed column
tops, frontal stairs and grass gaps between neighboring classrooms. Preserve those
source PNGs as legacy studies; do not reuse their visual verdict for the replacement.

Rooms within each five-room block now share one wall cell: successive origins differ
by room width minus one tile. The two blocks are separated by the central circulation
core; grass belongs to the exterior and the two courtyards between wings. Room regions
describe interiors, excluding shared partitions. The new wall layer selects authored
corner/T/cross/endcap pieces from actual N/E/S/W neighbors. Native edge-alpha profiles
must agree with the registered straight pieces, not only their declared connection bits.

New overhead flights and a tiled landing replace the rejected stairwell picture.
Hidden `stair_path` polylines record a continuous U route, alternating handedness on
the next floor and elevation fractions at each path point. Runtime traversal is still
unimplemented under BL-123; endpoint/path metadata must not become teleport behavior.

Overhead threshold art uses its registered pivot. A door assembly spans the gap between
the neighboring wall-end centers; do not assume its PNG width equals a single map tile.
Closed-door blockers describe the central clear opening; surrounding jambs belong to
the wall structure. Furniture keeps the existing bottom-aligned placement convention.

Long galleries use calmer terrazzo. Ochre medallions remain entrance and central
intersection landmarks. Blood trails lead toward selected room thresholds and stair
approaches, corpses remain discrete authored floor props, and bins/litter sit beside
circulation rather than uniformly occupying every room. These are environmental clues,
not loot, enemies or quest interactions. Native and browser review evidence must be
regenerated after each spatial/registration change.
