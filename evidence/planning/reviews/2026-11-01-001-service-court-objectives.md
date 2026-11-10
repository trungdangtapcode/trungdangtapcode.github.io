# RV-20261101-001 - Service Court objective route

## Snapshot and responsibility

- Date: 2026-11-01, Asia/Saigon.
- Reviewer and integration owner: Codex Sprint 01 integration. This is an integration
  self-review, informed by a separate read-only progression/validation audit; it is not
  independent product or human playtest acceptance.
- Base revision: `690264b`; the scoped source/content changes and their hashes are recorded
  in the linked technical report. Unrelated `AGENTS.md` and `todo.txt` changes are excluded.
- Deliverable: runtime slice, [BL-104 scope](../contracts/SERVICE_COURT_OBJECTIVES_2026-11-01.md).
  Whole-map artwork, later escape stages and experience acceptance remain outside this slice.
- Contract: ordered Interaction/Gate/Extraction steps in the existing Encounter and World.
  West power and east security demonstrate two different authored controls through the same
  implementation. The next room control can reuse this boundary; item requirements or
  alternative solutions need their own accepted behavior and evidence.
- Reviewed areas: encounter progression, gameplay/Tiled/smoke loaders, smoke route following,
  console depth/sight rendering, objective HUD, route placement, regression tests and packaging.
  No general engine rewrite, networking review or new performance benchmark was performed.

## Result and open gates

The slice gives both rooms a purpose and adds a continuous west-room / east-room / gate /
north-exit route. Holds cancel on release, damage or leaving the control area; completed
controls advance once. The motor runs after activation while the player can move. Victory
requires extraction after crossing the gate, without clearing every zombie.

The interiors and court still look sparse. Paving connectors improve continuity, but neither
these captures nor an automated victory establish satisfying exploration, pressure or route
discoverability. BL-104 remains in Review pending human route/pacing review; broader art and
campaign work retain their existing owners under BL-097-099.

## Findings and corrections

- HUD inspection found the activation percentage clipping the long first objective title.
  [EscapeObjectiveHud](../../src/presentation/hud/EscapeObjectiveHud.h) keeps the objective on
  the title line and puts percentage/instructions on the detail line. The focused test checks
  these separate strings; native capture is required to assess actual layout.
- Smoke route review found that an earlier open gate could bypass waypoints for a later
  objective. [SmokeScenario](../../src/app/SmokeScenario.cpp) now checks the current gate only
  and resets its waypoint cursor when the objective changes. Regression tests cover both.
- The south approach initially put the actor too close to the room wall. Authored smoke/test
  waypoints now use the clear south corridor; affected crate art and collision moved together.
  [ServiceCourtRouteTests](../../tests/mission/ServiceCourtRouteTests.cpp) walks through both
  actual doors and the gate, retaining the actor and inventory. Waves are disabled only in
  that navigation test. The selected application smoke uses the unchanged encounter waves.
- No further blocking progression defect was identified in the inspected scope. This is
  not a claim that the game is bug-free or that the full escape mission is complete.

## Validation evidence

- [Release project checks](../../build/service_court_objectives/project_checks.json) passed
  format, source structure, build, headless tests, assets and canonical load smoke. The report
  records 1,643 stable inputs; all hashes were checked again after packaging. Headless results:
  **440 tests / 2,572,342 assertions**. See [the run log](../../build/service_court_objectives/check_project.log).
- [Selected encounter smoke](../../build/service_court_objectives/selected_smoke.json) reached
  Victory at tick 5,105 with unchanged encounter waves: 376 shots, 102 deaths and peak 68 living
  zombies. This is automated progression/combat evidence, not a human pacing or FPS measurement.
- Packaged executable SHA-256:
  `0807CCA4DD4EFA08B94755512DCD0EF46E77348F335CE22A0A6447E79851D744`.
  It matches the selected-smoke receipt and [candidate receipt](../../build/service_court_objectives/receipt.json).
- [Native capture receipt](../../build/service_court_objectives/native_receipt.json) records
  successful west-room, east-room and control fixtures. Inspected 1280 x 768 captures show
  the full first objective and 50% hold detail without clipping, advancement to east security,
  clear south door approaches with paving connectors, and roofs returning outside the rooms.
  The selected-smoke final capture shows `EXTRACTION COMPLETE`. These observations establish
  the inspected states only; the sparse interiors/court and human route discovery remain open.
- [Board checks](../../build/service_court_objectives/board_checks.json) passed local links
  and browser image decoding for the standalone index and player guide.
- The aggregate packaging command returned exit 1 during the historical-build catalog sweep:
  another board lacks a `display_name` property. Current bundle creation had completed.
  Regenerating this candidate's board with `ExportBoard.ps1 -SkipCatalog` and checking its
  links/images passed. The aggregate command is **not** reported as passed; the unrelated
  catalog defect remains recorded under BL-103.

Generated evidence lives under `build/service_court_objectives/`; it may be removed by a clean.
No new FPS benchmark or human playtest was run. Technical acceptance applies to this slice;
whole-map art, route enjoyment and the full escape campaign are not accepted by this report.

## Reproduction and handoff

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File tools/validation/check_project.ps1 -Configuration Release -Smoke -ReportPath build/service_court_objectives/project_checks.json
powershell -NoProfile -ExecutionPolicy Bypass -File tools/assets/package_local_candidate.ps1 -OutputDirectory build/service_court_objectives/candidate -ProfilePath content/app/service_court_objectives_candidate.json
```

From the packaged candidate directory, run:

```powershell
.\zombie_demo.exe --encounter-smoke --map assets/world/content/maps/escape_route_v1/escape_route_v1.tmj --content assets/demo/gameplay_sight.json --presentation assets/demo/presentation_inventory.json --encounter assets/demo/service_court_escape.json --smoke-setup ../../../content/scenarios/service_court_objectives_smoke.json --capture ../native/escape.png
```

Native room/HUD fixtures use `build/bin/Release/grenade_runtime_probe.exe` with arguments:
candidate `assets/demo`, the fixture path, then an output directory. Fixtures are
`content/qa/building_cutaway_runtime.json`, `building_cutaway_east_runtime.json` and
`service_court_control_runtime.json`. These isolate the player and do not measure combat.

Use [play.cmd](../../build/service_court_objectives/candidate/play.cmd) for normal play and
[the build board](../../build/service_court_objectives/index.html) for captures, receipts and
the player guide. Enter starts the encounter; WASD moves and holding E operates controls.
Review whether a player can find both doors and the exit, whether crossing the court creates
a meaningful risk, and whether the motor wait sustains pressure. Record observed problems
in BACKLOG before growing dependent map content.
