# Service Court: enter, restore, unlock, defend, escape

Scope: runtime slice for the selected Service Court concept A. This supersedes the
short court's immediate extraction after Gate A; the full route continues in the same
World through the loading lanes, Gate B and the coast. Integration owner: Codex Sprint 01
integration. Map, mission and lighting contributors have bounded ownership under that owner.

## Accepted player sequence

1. **Enter from the south.** The south opening frames a rectangular industrial court.
   A central cargo island splits the path into two usable loops, with clear room entrances.
2. **Restore power in the west electrical room.** Hold the authored control; leaving or
   interrupting the interaction cancels its progress. Completion produces an audible cue
   and a stronger wave: restoring power has an observable cost, not just a checklist tick.
3. **Clear the east security room and release its lock.** Living zombies in the authored
   room clearance rectangle prevent the release interaction. This is a local threat check,
   not a global kill quota. Reinforcements enter through authored anchors and normal spawn
   admission. The room control must explain why it cannot progress while occupied.
4. **Start Gate A's motor.** The perimeter lamps turn on from this authoritative mission
   event, independent of player facing. A substantially larger wave pressures the court.
   The motor keeps running while the player uses the two loops, gunfire and carried equipment
   to survive; killing all zombies is not required to open the gate.
5. **Cross Gate A, then close it from the far side.** Opening is not completion. The player
   must physically cross north, reach the far-side control and hold the interaction while
   the pursuit remains active. An occupied gate passage prevents closure rather than trapping
   or crushing an actor. A completed close restores the blocker and stops that route of pursuit.
6. **Continue into the loading lanes.** Preserve health, ammunition, inventory, enemies,
   deployed equipment and session identity. Closing A completes this court beat, not the
   full map; Gate B and coastal extraction retain the existing continuation.

## Content and implementation boundaries

- Tiled owns rooms, doors, collision, roof cutaways, central cargo, ground variants, control
  anchors, clearance and gate geometry. Keep old assets; reuse their authored PNGs and layers.
- Encounter schema 9 adds optional clearance and close-behind fields. Existing schema 5–8
  packets preserve their behavior. Timings, wave sizes and anchors remain encounter data.
- Encounter owns ordered mission events and gate transitions. Presentation and lights consume
  retained event state; they do not advance objectives or infer completion from animation.
- Conditional lamps use paired `enable_on_step` and `enable_on_event` Tiled properties. All
  court motor/perimeter lamps activate on Gate A. Other gate lamps use the same implementation.
- Renderer reuses the PowerStation/Gate assets for both sides, with authored visual positions.
  Audio reuses licensed existing cues. This slice does not claim a new authored motor loop.
- The selected encounter smoke follows the actual route and close control. Canonical stress
  remains separate; do not reduce gameplay pressure or alter combat to force test success.

## Acceptance and evidence

- South arrival, west/east entrances, two central paths and north exit are legible in native
  gameplay captures, compared against concept A; no decorative marks without purpose.
- Evidence records the six beats in order, the security-room block, interrupted controls,
  lamp activation, increased population, forward crossing and restored closed-gate collision.
- Retry clears events, progress and conditional lights. A second gate uses the same event,
  interaction and blocker logic. Closed gates remain closed after the route advances.
- Release build, focused regressions, stable `check_project.ps1`, canonical stress and selected
  full-route smoke must pass on the same source/content snapshot and candidate executable.
- The candidate contains `play.cmd` and `index.html`, with revision/hashes, captures and limits.
- Measure the new heavy-wave workload; previous FPS evidence does not certify this tuning.
  Human navigation, perceived pressure, fairness of closure and overall enjoyment require
  player review and remain separate from technical success.

Task status belongs to BL-104; broader art, performance and human gates remain BL-098/101/099.
