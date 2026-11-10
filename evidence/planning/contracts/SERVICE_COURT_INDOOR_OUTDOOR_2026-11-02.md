# Service Court: workshop, checkpoint and open loading yard

Scope: replacement content for the existing runtime slice, not a new map or engine.
Integration owner: Codex Sprint 01 integration. The user rejected the symmetric two-wing
court after revision `7410021`: two closed warehouses and small attached rooms still read
as an empty square. Previous technical results do not accept this composition.

## Playable spaces and decisions

The south entry opens into an outdoor loading yard. The west destination is an enterable
electrical workshop, with a broad south entrance and a second court-facing service opening.
Restoring power creates noise while the player is inside; the two exits allow a retreat
choice. Cross the exposed yard to the larger security/archive complex. Clear that
interior before releasing security, then return outdoors to the north gate motor.

Starting the motor powers the courtyard lamps and starts the existing heavy response.
Freight and a parked forklift divide the outdoor circulation into two lanes that reconnect
before the gate. Lighting improves observation in specific lanes; walls and cargo still
occlude it. Survive the opening cycle, cross Gate A, close it from the north control and
continue through the same World toward Gate B and the coast.

The west workshop and east checkpoint have different dimensions and interiors. They must
be places the player traverses, not flat doors on inaccessible exterior images. The outdoor
space retains room for horde movement and equipment, with meaningful loading aprons and
door approaches. Avoid filling circulation with unrelated decoration.

## Bounded content work

| Owner | Deliverable | Integration boundary |
| --- | --- | --- |
| Character-independent environment artist | Authored workshop and security interior/roof pairs, measured door geometry and export metadata | New `art/environment/service_court_interiors_v1`; preserve old building assets |
| Freight artist | Separate pallet stacks, forklift and utility freight PNGs with measured anchors/footprints | New `art/environment/service_court_freight_v1`; no baked map or runtime primitives |
| Root integration | Asymmetric Tiled placement, wall/door collision, cutaway regions, purposeful ground, wave-anchor and route-fixture migration | Existing `escape_route_v1.tmj`, selected scenarios and route tests |
| Lighting contributor + root | Load actual map sources and prove motor-driven illumination | Existing Tiled `role=lighting`, World event state, Perception and renderer |

Keep objective IDs and the ordered escape implementation. The workshop control remains
`(896,2784)`; the security control moves into its office at `(2336,3232)`.
Gate A remains `(1600,2136)` and far-side close remains `(1536,1936)`.
Change approach waypoints to match the measured doors; do not preserve a waypoint through
a new wall merely to avoid migrating tests. Spawn anchors must remain outside fixed walls
and show plausible approach routes. Furniture with a solid footprint needs matching art;
pure surface details must not acquire invisible hitboxes.

The workshop is a 512 x 640 module at `(640,2368)`. The user rejected the subsequent
704 x 800 security plan because its three rooms remained cramped. The selected v3 source
is registered proportionally into a 1536 x 1536 canvas at `(2016,2176)`. The same World
extends to 3840 x 4096; the south threshold moves to y=3840 and spawn to `(1536,3968)`.
The earlier small office and v2 complex remain preserved studies.

Measured artwork floor estimates before loose furnishings are: archive 1124 x 627,
office 556 x 427, lobby 570 x 427 and corridor 188 x 1214. These are visual traces,
not collision-derived usable area. The office/lobby depth is 21 units below the initial
448-unit target; report that difference rather than asserting the proposed dimensions.
Measure actual usable floor after subtracting placed wall/furniture footprints, doorway
widths and connected routes. The archive has one internal corridor door and one exterior
west exit; it does not have two internal corridor doors. Exterior, corridor, archive,
lobby and office connect into a route with a meaningful alternative exit.

The source images are 1254 x 1254, imported with nearest-neighbor sampling; 1536 is the
registered gameplay canvas, not a claim about generator output resolution. Final wall rectangles, roof
registration, doorway centers and cutaway polygons must come from the inspected native
exports, not from the image prompt. Use the existing independent roof-group contract.
Separate PNG dressing includes archival shelves/files, desks/chairs, lockers, tools,
electrical equipment, pallet freight and roof details. Paper and wall-mounted surface
details have no movement blockers. Roof equipment shares its building's cutaway binding.
Existing inventory does not implement world pickups, so these props do not promise loot.
The six existing security defenders are distributed among office, archive and corridor
anchors; their count and trigger remain unchanged, and clearance covers the full complex.

## Confirmed lighting defect

The three operational points `service_court_lamp_west`, `service_court_lamp_east` and
`service_court_lamp_motor_apron` were placed in layer 9, `role=authoring`. The Tiled loader
skips that layer, so the loaded map contained none of these event-driven light sources.
The event flag alone could not illuminate the yard. Move operational points into an
explicit runtime `role=lighting` layer; preserve unrelated authoring-only light studies.

Replace the regression that appended synthetic light sources with assertions against the
actual source map, then drive its real encounter through GateActivated. Check activation,
illumination under four observer bearings and reset on retry. Native pre/post-motor images
must show the pool in the real scene. Keep the generic light pipeline and collision-based
occlusion; do not grant unconditional reveal or increase global visibility to conceal this
content-wiring defect.

## Review sequence

1. Inspect native roof/interior registration, alpha, doors and furniture; retain rejected
   sources separately. Render the edited Tiled court with roofs both visible and hidden.
2. Walk through both interiors and both workshop doors, activate the two controls, start
   the motor and inspect the lights facing toward and away. Check wall/cargo occlusion.
3. Exercise both full routes with authored pressure, roof fade, north close-behind and
   continuation. Keep combat tuning unchanged to preserve meaningful comparison.
4. Run the stable integrated technical entry and package its matching executable/assets,
   with `play.cmd`, `index.html`, native captures and explicit remaining art/player gates.

The earlier gate-leaf and visible north-blocker fixes remain in place. Whole-map art,
player navigation and combat pacing are still open. Task status remains in BACKLOG.

## Motor response after the world expansion

Gate A's 120-actor response uses dedicated west/east/loading-lane Tiled anchors near the hold
area; general court anchors retain the earlier arrival and room-response phases. The first
expanded candidate could win with 128 actors alive far from the motor, so population/Victory
alone is insufficient evidence of defense pressure. Check arrival before motor midpoint and
actual approach traffic in the application. Keep counts, combat tuning and the 30-second motor
unchanged. See [arrival review](../reviews/2026-11-02-006-court-motor-pressure-arrival.md).
