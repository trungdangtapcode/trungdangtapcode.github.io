# Continuous escape route integration

## Scope and ownership

Runtime slice under BL-097, BL-098 and BL-102. Codex Sprint 01 integration owns the
shared Encounter, World, loader, configuration, candidate and final integration.
Bounded contributors audited pressure, navigation and layout; final visual and human
playtest acceptance remains Unassigned. This does not accept the complete map or sprint.

The extension uses the existing World, Encounter, Tiled map, combat, inventory, gate
presentation and objective HUD. It does not load another map or reset actors at a gate.
The short Service Court candidate remains available as a separate, explicitly limited
profile; it must not be confused with the full escape route.

## Route and player decisions

| Stage | Required action | Consequence / choice |
| --- | --- | --- |
| Service Court | Restore power in the west room, then release security in the east room | Commit to interruptible controls while pursuit enters the court |
| Gate A | Activate its motor; survive and physically cross north | Keep moving during the autonomous opening cycle; decide whether to recover equipment |
| Loading lanes | Follow the direct lane or the longer west service lane | Select a route through the same persistent world; both lead to Gate B |
| Freight Yard / Gate B | Activate the second motor, then cross north | Manage carried resources and incoming pursuit without resetting the court |
| Coast | Reach coastal extraction alive | Victory on arrival; no third hold timer or kill quota |

`content/encounters/escape_route_full.json` owns step order, interaction durations,
motor durations, pressure counts, cadence, windows and anchor selections. Tiled owns
control bounds, passage geometry, crossing direction, spawn anchors and destinations.
`content/app/escape_route_full_candidate.json` selects the bundle; the short profile
still selects `service_court_escape.json` and ends at `extraction.a`.

## Phase pressure contract

Encounter schema 8 adds optional step-event triggers and explicit anchor selectors to
the existing wave definition. Triggers bind to `step_entered`, `gate_activated`,
`gate_passable` or `gate_crossed` with a configured delay and bounded spawn window.
Eligible waves share the existing spawn/admission pipeline. Rejected placements do not
spend the wave budget. Legacy untriggered waves keep sequential pacing.

The full profile requests up to 220 spawns across seven pressure windows. This is an
authored maximum, not a claim that all spawn or appear on screen simultaneously. The
initial balance is a hypothesis; it is not accepted because an automated driver wins.
Do not reduce pressure or alter combat to force smoke success.

## Technical acceptance

- Both gates use the same implementation; Gate A crossing advances to Gate B without
  ending the mission. The old short-slice extraction does not win this profile.
- Real collision-aware movement traverses both loading routes. Death at the final
  destination defeats the player. Gate crossing requires the authored forward passage.
- Control holds cancel on release, damage or leaving range; motor completion is
  autonomous. Activation, passability, crossing and rewards occur once.
- Actor identity, health, weapon/ammo and inventory persist across route advancement.
- Collision cache freshness accounts for effective obstacle contents, including
  same-count changes. Occlusion freshness remains independently owned.
- Run stable Release `check_project.ps1`, then separate direct/service selected-profile
  smokes against the matching packaged executable. Canonical load smoke is a different
  scope. Package a working `play.cmd`, `index.html`, receipt, report and logs.

Navigation tests deliberately remove waves to isolate route/collision behavior; they
cannot establish survival, encounter balance or player discovery. Selected smokes keep
the authored waves. BL-102 still owns broader event-lifetime, retry/epoch, persistent
equipment/corpse and off-screen behavior evidence beyond these bounded checks.

## Visual gaps and next accepted extension

Selected concept A is in [the Service Court board](../../build/service_court_design/index.html).
The [current Tiled layout renders](../../build/escape_route_layout_review/index.html)
do not yet reproduce it. Retain existing art and the accepted cutaway/depth pipeline.

1. Frame the court with a coherent west warehouse and east workshop.
2. Compose a low cargo island with two readable bypasses reconnecting before Gate A.
3. Connect visible wall, jamb, return and end artwork to both gate barriers. The current
   long static barriers have collision but no continuous corresponding artwork.
4. Give loading and preparation zones purposeful surface treatment and props; adding
   more scattered details is not a substitute for this composition.

The next visual increment is the bounded first court at native scale, using the current
Tiled layers, metadata and collision contracts. Review that composition before dressing
the remaining map. The existing industrial facade studies are not accepted wall
connectors. Concept trucks, forklifts and wide gates are references, not production assets.

## Verified runtime handoff

[Play the full route](../../build/escape_route_full/candidate/play.cmd), open the
[build board](../../build/escape_route_full/index.html) or read the
[route and controls](../../build/escape_route_full/player_guide.html).
Stable Release checks pass 459 tests / 2,572,698 assertions on 1,654 unchanged inputs.
Separate packaged direct and west-service-lane smokes both reach extraction with authored
pressure. [The scoped review](../reviews/2026-11-01-002-continuous-escape-route.md) records
matching executable identity, evidence, packaging limitations and remaining gates.

This runtime handoff does not establish visual acceptance, human pacing or new FPS
measurements. The next increment remains the first court's composition described above.
