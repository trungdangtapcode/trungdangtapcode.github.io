# First service court / Gate A — approval design

## Scope and ownership

This is a **design study**, not a runtime candidate or accepted asset packet. It refines
only the first court of the continuous escape route under BL-098. Existing layout,
industrial-art and integration owners remain unchanged. Root coordinates this review;
the asset audit was delegated read-only. No Tiled or gameplay changes are included.

References: [mission](ESCAPE_MISSION_DESIGN_2026-10-25.md),
[asset brief](ESCAPE_MAP_ASSET_BRIEF_2026-10-25.md), and
[native return](ESCAPE_NATIVE_ASSET_RETURN_2026-10-25.md).

This study proposed that the player understand an exit, deliberately start its motor,
survive while moving through a readable court, then leave through the opened gate. Its
original one-motor story is historical; the current encounter proposal has a longer route
documented below. This area must establish
the escape objective without becoming a separate survival arena. Subsequent routes,
Gate B and extraction remain in the same World/session.

## Story, physical route and playable script

**Historical story proposal (superseded by the current route below):** emergency security has sealed the industrial service district.
The survivor reaches a loading court while a horde follows the service road. The route
out continues through two powered security gates toward the waterfront extraction exit.
Local gate motors still work, but their opening cycle makes noise. The immediate goal
is to open a way out, not clear the district. No new named NPC, dialogue scene, rescue
vehicle or key-fetching quest is required for this first court.

The first court is the opening section of the mission, not a separate map or a complete
mission by itself. Its north gate is a real boundary: the perimeter buildings/walls
prevent walking around it. Both internal circulation routes reconnect **before** that
same gate. They are tactical alternatives, not ways to bypass the objective.

```text
South service-road arrival
  -> southwest preparation recess (optional shop/equipment preparation)
  -> north apron / control beside Gate A
  -> start motor, then use either side of the cargo island to stay mobile
  -> Gate A becomes physically passable
  -> walk north THROUGH Gate A into the connected loading lanes
  -> direct lane OR longer service lane
  -> freight yard / Gate B
  -> walk THROUGH Gate B
  -> waterfront extraction arrival (no third hold timer)
```

Only the first court and a short north continuation are the next native-scale layout
scope. The remainder above preserves the parent mission's destination and extension;
it does not authorize dressing the entire map before this area is reviewed. The first
runtime slice may terminate at a clearly labelled temporary extraction beyond Gate A,
as specified by BL-097; it must not present the full two-gate mission as implemented.

| Beat | Player action and decision | Environmental cue / pressure | Completion and failure rules |
| --- | --- | --- | --- |
| Arrive | Enter from south; identify the north exit | Gate visible across a quiet floor; service-road pursuit remains physically connected | Arrival does not start the motor or lock the player into a cutscene |
| Prepare | Optionally buy/arrange existing equipment at preparation; choose where to deploy | Recess provides orientation, not guaranteed safety; loading bay and two bypasses are visible | No required purchase, weapon, lamp or sentry; preparation shop follows existing phase restrictions |
| Activate | Reach the gate-side control and hold the configured interaction | Control belongs visibly to this gate; activation feedback shows intent | Pre-commit hit, release, death or leaving range cancels; committed activation happens once |
| Survive the cycle | Move, shoot, reload; choose a bypass and reposition equipment | Motor noise motivates pursuit from rear/east approaches; cue the flank before arrival | Motor runs autonomously; no kill quota, terminal tether, hidden gate HP or repair errand |
| Read the opening | Decide whether to recover gear or leave immediately | Gate motion, motor sound and objective update agree with clearance | Timer ending alone does not advance the mission; shared gate state governs actual passability |
| Escape the court | Cross north through the opened passage, alive | Connected loading lane visible beyond; remaining zombies can pursue | Forward crossing advances once; standing near the gate does not. Gate remains open; backtracking gives no repeat reward |

Opening targets remain the parent design's **test hypotheses**: a 1.5-second activation
and 30-second Gate A cycle, with visible clearance governed by its authored marker.
These are not new config fields or accepted balance. Do not add an artificial second
wait after opening. Death before a successful crossing cannot count as escape.

Suggested objective copy, resolved through the existing presentation/content owner:
`Reach the service gate` -> `Start the gate motor` -> `Keep an escape lane clear`
-> `Gate open - move through` -> `Follow the loading lanes`.
Do not imply that killing every zombie is necessary. The motor alarm explains pressure;
it does not establish a new general sound-attraction AI system.

## Layout selection

**A — loading court (recommended):** a low cargo island creates two connected bypasses.
The west warehouse and east workshop frame a clear north gate. The player chooses the
longer sheltered-looking route or the broad exposed route, can reverse direction, and
can abandon equipment when the exit opens. Low props are not guaranteed ballistic cover.

**B — maintenance court (archived alternative):** an offset maintenance hut separates a narrow west loop from
a broad east apron. It offers a stronger landmark and more occlusion, but requires more
building artwork and makes hidden pursuit and camera readability harder to verify.

**A is selected** for the bounded first-court composition work recorded in BACKLOG.
B remains an archived alternative; the third concept is a detail board for A, not a third
layout. This selection does not approve the concept images as production art. Geometry,
clearance, asset scale and collision must be established in Tiled. Generated doors,
vehicles and props do not imply that corresponding production assets exist.

## Current implementation comparison · 2026-11-01

The current Tiled review is available in the [layout board](../../build/escape_route_layout_review/index.html),
including its [Service Court crop](../../build/escape_route_layout_review/service_court.png)
and [Freight Yard crop](../../build/escape_route_layout_review/freight_yard.png). These are
authoring renders, not visual or gameplay acceptance.

The implemented route content differs from the historical one-motor story. The short
Service Court candidate, [profile](../../content/app/service_court_candidate.json) and
[encounter](../../content/encounters/service_court_escape.json), is a slice ending at
`extraction.a`. The [full-route candidate profile](../../content/app/escape_route_full_candidate.json)
selects [the full encounter](../../content/encounters/escape_route_full.json):
`restore_power` in the west room → `security_release` in the east room → Gate A → direct
or service loading lane → Gate B → coastal extraction. The full-route candidate has not
yet passed integrated validation; these content files and profile selection do not
establish acceptance.

The current Tiled composition still differs from selected layout A in these bounded ways:

- The west warehouse is a detached exterior with a separately authored footprint; the
  east landmark is a small service-room cutaway rather than a workshop frontage. They do
  not yet frame the court as west warehouse and east workshop.
- Six small crate tiles form a compact cluster, not a purposeful low cargo island with
  two visually legible bypasses that reconnect before Gate A.
- Gate A and Gate B have isolated gate sprites over long invisible barrier collider lines.
  Connected wall, jamb, return and end-join artwork is still missing from the composition.
- Broad pavement and sparse detail do not yet distinguish deliberate loading and
  preparation zones from the rest of the court.

Existing registered surfaces, warehouse, crates, service-room, gate and control assets
are reuse candidates only. The industrial facade studies are not accepted connectors;
their seam, corner, alpha and runtime integration gaps remain open. Nothing in these
composition notes constitutes art, visual, runtime or playability acceptance.

## Local blockout proposal

Use a north-up, 32-pixel tile grid. The proposed study envelope is 48 × 40 tiles
(1536 × 1280 world pixels), subject to native-scale/camera review. This does not resize
the current whole-map source or establish a meters-to-pixels conversion. Coordinates
below use the local northwest corner; rectangles are half-open tile ranges.

| Zone | A: local bounds | Purpose and restrictions |
| --- | --- | --- |
| West warehouse | x 0–9, y 6–29 | Boundary landmark; loading recess faces east; avoid playable roof space |
| East workshop | x 39–48, y 8–31 | Different silhouette, service frontage; reserve east approach opening |
| North gate apron | x 18–31, y 3–11 | Clear view of control and gate; no prop blocks exit path |
| Cargo island | x 20–27, y 19–24 | One grouped obstacle, not scattered decoration; both ends bypassable |
| West circulation | x 10–19, y 11–32 | Connected movement route; loading details stay against the facade |
| East circulation | x 28–38, y 11–32 | Wider combat/repositioning route; preserve sight toward gate |
| Preparation recess | x 4–15, y 32–39 | Arrival orientation and optional equipment recovery decision |
| Rear approach | x 18–28, y 35–40 | Visible physical connection to arrival route; not a spawn point on player |
| East service approach | x 39–48, y 30–35 | Second pressure direction, signalled before a flanking arrival |

For B, replace the cargo island with a hut at x 12–21, y 17–25, retain west passage
at x 8–12 and the broad east apron at x 23–38. Its side boundaries and approach links
must still connect; a visually attractive dead end is not an acceptable loop.

These are coarse design zones, not collider rectangles. Minimum bypass widths must be
derived from actual actor collision, avoidance and equipment footprints, then tested
with pursuit from both directions. Do not infer walkability from transparent pixels.

### Gate scale is a constraint

The existing gate has a 96 × 96 presentation, pivot [48, 88], and a 56-pixel passage in
the current study. Preserve its native scale for the first overlay. A wide gate in a
concept is not permission to stretch the sprite or silently enlarge collision. If that
passage fails crowd traversal or visual framing, request a measured wider gate/jamb
variant and matching metadata before adopting wider geometry. Show closed, moving and
open states with the same wall connection and validate visual/collision agreement.

## Player sequence and consequences

1. **Arrival:** the north exit and its associated control read from the southern entry.
   Calm central flooring separates route from boundary detail. No unexplained orange marks.
2. **Inspection/preparation:** the player may place a sentry or lamp near either bypass.
   These are optional tactical positions, not sockets or mandatory puzzle placements.
3. **Commit:** an intentional interaction starts the gate motor. Activation and motor
   durations remain data-driven mission hypotheses from the parent design. The player
   can then move, shoot and reload; staying at the control is not required.
4. **Pressure:** existing spawn rules feed physical rear/east approaches. Sources must
   be reachable and outside prohibited player/camera regions. Do not add pop-in spawn
   anchors inside the court, behind the gate or inside scenery to match the illustration.
5. **Reposition:** the island/hut supports a visible route choice. Crowding one side
   leaves another escape route; avoid prop corners that trap the player accidentally.
6. **Departure:** gate motion, objective update and sound communicate the opening.
   The player chooses to recover equipment or leave it. Living enemies pursue through
   valid routes; gate opening does not clear enemies, refill inventory or end the mission.

If the player can wait safely at the terminal without moving, or both loops collapse
into one unavoidable choke, revise layout/pressure before adding more enemy quantity.

## Art direction by landmark

| Element | Required meaning | Composition rule |
| --- | --- | --- |
| Gate/control | Exit and local cause of opening | Control beside the correct gate post; motor/cable detail follows structure |
| Warehouse | Industrial identity and west boundary | Connected roof, corners and loading bay; no floating facade fragments |
| Cargo group | Loading activity and route split | Pallets/cargo form one plausible working bay; no random single crates |
| Workshop | East boundary and service access | Distinct doorway/roof silhouette; service alley physically connects |
| Preparation recess | Previous human use and arrival reference | Cabinet/cases against wall; reserve player and equipment standing room |
| Lamps | Readable landmarks and tactical visibility | Attach to a plausible fixture; emission remains separate configured data |
| Ground | Route/material hierarchy | Quiet asphalt center, concrete at dock; use only supported transitions |
| Markings | Actual loading/traffic function | Paint only in a measured bay or path; remove decorative isolated fragments |

Keep most small detail at boundaries. Reserve high contrast for actors, gate/control and
interactable objects. Reuse floor variants without uniform random noise. Lamps do not
guarantee safety or reveal enemies through walls. Concepts cannot certify native pixel
clarity, occlusion, darkness, animation or crowd readability.

## Asset feasibility and requests

| Reuse candidate | Source / contract | Remaining verification |
| --- | --- | --- |
| Asphalt and limited details | `art/environment/tiles/urban_v1/{asphalt_source,details_source}.png`; `content/maps/{urban_ground,urban_details}.tsj` | Native-scale repetition, meaningful detail placement |
| Material overlays | `content/maps/urban_integration/courtyard.tsj`; `content/maps/material_refinement/proof.tsj` | Limited transition coverage; no arbitrary unsupported seams |
| Gate and control | `art/environment/objectives/sprint_01/{gate,power_station}.png` | Native gate framing, state readability and passage agreement |
| Lamp | `art/environment/props/street_lamp_v1/street_lamp_source.png`; `content/maps/lighting/street_lamp.tsj` | Upper/lower order, emission position and occlusion |
| Destructible crate | `art/environment/supply_crate.png` and `supply_crate/debris.png` | Footprint, damage state, routes after destruction |
| Industrial modules | `art/environment/escape_industrial_v1/native/`; `content/maps/escape_route_assets/industrial.tsj` | Authoring study only: matte specks, connectors and collision unaccepted |

The industrial v2 pack is also unreviewed, with inherited connector uncertainty and no
TSJ consumer; it is not an accepted replacement. Frontage studies can inform composition
but are not a complete building kit. This audit is metadata/source based.

**Minimum design requests after layout approval:**

- One consistent compact enclosure kit: straight walls, inside/outside corners, end caps,
  gate jamb/returns, warehouse shutter and a coherent roof/facade connection. Reuse and
  repair suitable studies first; provide native PNGs, connectors, pivots and footprints.
- One low cargo/pallet group and one utility/cabinet group only where the approved layout
  needs them. Forklift/van in concepts are optional landmarks, not initial requirements.
- Separate lower/upper facade layers only where actor occlusion requires them. Specify
  what blocks movement/sight independently of visible alpha.
- A replacement gate only if the existing native overlay fails the passage/readability
  review. Record the exact geometry and closed/open relationship rather than stretching it.

### Court asset checklist tied to the script

This is the **required inventory**, not a declaration that artwork is missing. Reuse
and inspect candidate packs before asking design to draw replacements. Quantities
describe unique sets/roles; repeated placements reuse those assets.

| Priority / status | Required set | Purpose and delivery gap |
| --- | --- | --- |
| P0 / reuse and verify | One asphalt/material bank with supported transitions and limited loading markings | Readable movement floor and meaningful loading apron; remove isolated decorative paint |
| P0 / reuse and verify | One Gate A state set: closed, moving, open; matching jambs and clearance marker | Required physical exit; current gate/control sources are listed above. Wider artwork only if measured passage review fails |
| P0 / reuse and verify | One control state set and interaction/progress feedback | Identify the correct motor and show activation/opening; reuse existing UI skin and objective presentation |
| P0 / candidate review, repair gaps | One connected enclosure kit: straight runs, inner/outer corners, end caps, gate returns, roof/facade joins | Close the perimeter, connect warehouse/workshop, prevent unintended gate bypass. Review industrial and warehouse packs before commissioning pieces |
| P0 / candidate review, repair gaps | One loading frontage/shutter and one service entrance treatment | Explain west loading activity and east approach; entrances must match actual reachable lanes |
| P0 / candidate review, repair gaps | One low pallet/cargo group | Create the two bypasses in A. Needs a deliberate footprint; destructible crates cannot silently substitute for an indestructible route boundary |
| P0 / authoring data | Arrival, rear/east approach connections, control interaction region, gate blocker/clearance, forward crossing, north continuation | Tiled objects/metadata, not pictures. Use existing supported contracts or coordinate a versioned runtime extension |
| P0 / audio audit | Activation, motor loop, gate opening/stop, opening cue | Reuse licensed existing audio where suitable; record absent clips instead of assuming new files exist. Bind stop/start to gate state; avoid duplicate one-shots |
| P1 / reuse and verify | One preparation utility group; existing shop interaction and equipment visuals | Communicate previous human use without introducing a new mandatory loot mechanic |
| P1 / reuse and verify | Existing lamp fixtures and emission metadata | Frame the control/route in dim lighting; fixtures, light direction and wall occlusion must agree |
| P1 / existing systems | Survivor, Walker/mutations, weapons, sentry/lamp, muzzle/gore effects, inventory/HUD | Encounter context and readability; this court does not request new character or weapon artwork |
| Optional / defer | Forklift, van, extra rubbish, bespoke signs, animated background machinery | Atmosphere only; omit unless they add a clear landmark without obscuring pursuit or blocking circulation |

Every accepted scenery set needs native PNG regions, stable IDs, dimensions, pivots,
Tiled references, connectors where modular, and explicit movement/sight footprints.
Supply upper/lower layers only where required by actor overlap; do not derive collision
from sprite alpha. Gate/control need state mappings and relevant timing/clearance data.
Include provenance/license and a native-scale actor overlay. Existing roof/loading packs
are candidates to audit, not automatically absent or accepted assets.

**Asset closure for this area:** a native Tiled render must show every P0 role using an
identified source, with no unnamed placeholder or unconnected perimeter. Then test
actual approach access, both bypasses, gate-state collision and forward traversal in
the matching executable. Concept art and this checklist alone cannot close that gate.
Route-choice lane dressing, Gate B yard and waterfront extraction assets are subsequent
packets after first-court review; do not order the entire district now.

## Tiled handoff after approval

Extend `content/maps/escape_route_v1/escape_route_v1.tmj` and its existing tilesets through
the established importer. Separate ground, material/detail overlays, lower scenery,
upper/occluding scenery, collision/sight footprints, objective/control and approach data
according to the existing layer/object contract. These are authoring responsibilities,
not new supported layer names. Any new schema role requires a versioned importer and
consumer change under the runtime owner; a concept document cannot establish support.

Do not bake actors, HUD, spawn arrows, light gradients or control indicators into terrain.
Keep source artwork in `art/`, editable map/metadata in `content/`, exports in `build/`.
The north exit must connect to the next route in the same map, without a scene load.

## Review and next implementation order

1. Review the selected A layout against the current Tiled court and resolve its specific
   frontage, cargo, bypass, and gate-enclosure gaps.
2. Compose only this court at native scale from reusable sources, with labelled missing
   assets. Inspect actor-size overlays, gate states and all boundary joins before expansion.
3. Repair/request the minimum missing enclosure/prop pieces and produce a complete Tiled
   court. Prove the north connection with a short route segment through the same pipeline.
4. Integrate motor/escape behavior under BL-097. Test both bypasses, equipment recovery,
   blocked movement, existing pursuit, and gate passability with the matching executable.
5. Review daytime/dim lighting, normal camera/aim/zoom and actual encounter density.
   Then run a human playtest; do not substitute a smoke victory for player feedback.

Acceptance evidence must show: exit/control recognition without explanation; purposeful
props and paint; connected architecture; two usable movement choices; no invisible
collider or spawn traps; gate opening and continued pursuit; readable actors during
combat; and the recover-equipment-versus-leave decision. Record confusion, route chosen,
damage/traps and changes between playtests. No arbitrary engagement score is claimed.

For this study, validation covers image presence/provenance, board links and document
consistency only. Runtime, native asset quality, Tiled composition and playability remain
unverified. BL-098 stays In progress and dependent map expansion waits for this court.
