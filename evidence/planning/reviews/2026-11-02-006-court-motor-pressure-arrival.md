# Gate A pressure must reach the hold area

Scope: content integration follow-up to [review 005](2026-11-02-005-spacious-court-interiors.md).
Owner: Codex Sprint 01 integration. This is a self-review with a bounded contributor geometry
audit. It does not accept human balance or whole-map art.

## Reproduced on the first packaged revision

The `e5be0e1` snapshot passed 472 tests / 2,573,219 assertions, stable technical checks on
1,777 inputs, and the direct selected encounter smoke. That smoke won at tick 16,557 with
128 peak alive, 526 shots, 32 deaths and 100 player HP. Nevertheless, the Gate A midpoint
picture showed no visible attackers. Its alive count grew from 18 on activation to 128 on
opening and stayed at 128 through Gate B's opening. Victory and total population did not
establish the requested motor-defense experience.

The motor wave still sampled general arrival-room anchors, which had moved much farther
away when the courtyard expanded. Those anchors describe the electrical/security approaches,
not approaches to Gate A. Travel, obstacle detours and offscreen admission must be checked
separately; population is not proof that enemies have reached the player.

Historical evidence is preserved in
[`pre_pressure_fix/`](../../build/service_court_indoor_revision/pre_pressure_fix/).

## Correction and bounded checks

The same 120-actor motor wave now uses three dedicated Tiled markers:
`gate_a.response_west` (1088,2240), `gate_a.response_east` (2016,2240) and
`gate_a.response_loading_lane` (1808,2640). Count, interval, radius, damage, movement speed,
gate duration, capacity and view-exclusion rules are unchanged. Existing general court
anchors still own the earlier pressure phases. The 144-unit side disks remain south of the
closed gate barrier; admission rejects samples intersecting the workshop/security walls.

The new regression isolates the actual authored motor wave and stationary hold area,
using the presentation canvas and configured default zoom for exclusion bounds. It keeps
normal actor configuration and requires arrival inside the loaded observer range before
half the configured motor duration. It passes 16 assertions: an actor reaches the 204-unit
observer range after 401 ticks, before the 900-tick midpoint. This is a geometry/admission
regression, not an interactive camera or balance test.

A development pressure probe found 9 live actors within 320 units at midpoint and 32 at
opening, with 15 currently visible at opening. Its sparse drawing makes presentation timers
and later cached camera state unsuitable for whole-app acceptance. Use these figures only
as an arrival diagnostic; its casing/VFX pictures and terminal result do not certify normal
gameplay. The final selected application runs must supersede them.

## Final candidate gate

Completed technical follow-up is in [review 007](2026-11-02-007-indoor-candidate-handoff.md):
stable 473-test snapshot, both packaged full-route smokes, normal-application images, matching
bundle hashes and the final native probe. The normal-app midpoint is still visibly quiet even
though late attackers arrive; that early pacing finding remains open. Keep BL-104 in Review
and BL-098 In progress. Furniture clustering, the control landmark and human pacing remain open.
