# RV-20261101-002 - Continuous two-gate escape route

## Snapshot and responsibility

- Date: 2026-11-01, Asia/Saigon.
- Integration owner and reviewer: Codex Sprint 01 integration. This is an integration
  self-review informed by a separate, bounded read-only progression audit. It is not
  independent art or human playtest acceptance.
- Base revision: `fb124b1`. The technical report records the source/content snapshot;
  unrelated `AGENTS.md` and `todo.txt` changes are excluded from this delivery.
- Scope: runtime slice under BL-097, BL-098 and BL-102, following
  [RV-20261101-001](2026-11-01-001-service-court-objectives.md).
- Contract: [continuous escape integration](../contracts/FULL_ESCAPE_ROUTE_2026-11-01.md).
  Reviewed areas are authored route geometry, encounter loading, phase pressure, gate
  progression, collision-cache freshness, tests and candidate identity.

## Behavior and extension

The full profile requires west-room power, east-room security, Gate A, a direct or west
loading route, Gate B and coastal extraction. Crossing Gate A advances the objective; the
old short-profile extraction cannot win this profile. Gate motors continue after their
interruptible activation hold. Arrival at the coast alive wins without a third hold or
kill quota. Both gates use the existing Encounter and World without loading a second map.

Encounter schema 8 binds waves to authored step events with bounded admission windows and
explicit anchor selectors. Rejected spawn attempts do not spend budget; eligible waves
share the existing admission and combat pipeline. Schemas 5 through 7 retain their legacy
sequential-wave path. This demonstrates a second gate and pressure phases through the same
implementation, without a separate mission pipeline or general event framework.

## Findings and corrections

- Runtime spawn bounds still covered only the court. The full-profile loader correctly
  rejected northern wave anchors. Tiled runtime object 1104 now covers the route; authoring
  object 1027 alone was insufficient. The short profile explicitly selects court anchors.
- Loader test fixtures had zero maximum credits with a nonzero mine cost. That unrelated
  validation failure hid pressure-loader assertions. Fixtures now satisfy the base contract,
  and rejection cases check the intended error instead of accepting any exception.
- Pressure tests previously confused Gate B's `step_entered` trigger with activation and
  started a legacy fixture on its default objective. The fixtures now isolate those events.
- The obstacle cache now compares effective obstacle contents, not just count. Tests cover
  same-count static and gate changes, removal, order and stable-buffer reuse. This is a
  bounded fix, not completion of BL-102's event-lifetime and retry/epoch work.
- The read-only progression audit found no additional route-stopping defect in the inspected
  pressure/progression/smoke scope. That finding is not a bug-free or whole-product verdict.
- Gate loading now rejects visual/control anchors and complete control, blocker and crossing
  rectangles outside positive map extents. Fixtures cover valid edge placement and targeted
  rejection; these checks do not certify artwork alignment or navigability.
- Encounter schema 8 mirrors the loader's escape-only contract for schemas 6 and later:
  ordered route, at least one gate, exactly one final extraction and no legacy root objective.
  A formal JSON Schema validator was not run; runtime loader tests remain separate evidence.
- Pressure-loader fixtures now supply valid map dimensions. The navigation helper now chooses
  its dominant movement axis to avoid oscillating just outside its arrival tolerance, and
  uses the extraction radius at the final destination: simulation correctly stops on Victory
  before reaching the exact center. A synthetic encounter fixture is value-initialized.

## Verification status

Stable Release [technical checks](../../build/escape_route_full/project_checks.json) passed
on 1,654 unchanged inputs: format, source structure, build, 459 tests / 2,572,698 assertions,
asset checks and canonical load smoke. Both selected-profile runs use packaged executable
SHA-256 `333C1B6972006F68D42E133356ABFA73697BF67ECDD65512DACD3F70BFC90014`.

| Selected route | Result | Simulation ticks | Peak living zombies | Shots / deaths | Final HP |
| --- | --- | --- | --- | --- | --- |
| [Direct](../../build/escape_route_full/direct_smoke.json) | Passed, extraction complete | 9,027 | 97 | 452 / 142 | 100 |
| [West service lane](../../build/escape_route_full/service_smoke.json) | Passed, extraction complete | 10,185 | 82 | 534 / 142 | 100 |

Both runs retain the authored encounter pressure and reach the coast on the same World.
Native end captures show extraction complete at approximately 150 and 170 simulation
seconds. These are automated driver results, not evidence of human difficulty or enjoyment.
Peak living population is not a simultaneous on-screen visibility count.

Navigation tests remove waves to isolate collision and progression. They check both
branches, both gates, rejection of the old extraction, death at the coast, and preservation
of actor identity, health, weapon/ammo and inventory revision. They do not establish
survival balance, equipment/corpse lifetime, terrain-memory lifetime or player discovery.
Selected application smokes retain authored pressure; canonical load smoke is a different
check. No human playtest or new FPS measurement is claimed here.

The source-structure review notice for World remains bounded: the integration changes its
existing obstacle-cache boundary and extracts comparison into a small game helper. A broader
World rewrite is not justified by this slice. Existing structural notices and BL-102's
remaining lifecycle work are not declared resolved.

## Visual and product gates

The current map does not yet reproduce selected concept A. Four concrete gaps remain:
warehouse/workshop framing, a cargo island with two readable bypasses, visible walls joined
to the gate barriers, and purposeful loading/preparation surfaces. Existing artwork is
preserved. Concept vehicles and wide gates are references, not integrated production assets.

The next visual increment is the first court at native scale through the accepted Tiled,
cutaway and depth pipeline. Human route discovery, two-route pressure and resource choices
need separate review. Full-map art and the whole sprint remain unaccepted.

## Reproduction and handoff

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File tools/validation/check_project.ps1 -Configuration Release -Smoke -ReportPath build/escape_route_full/project_checks.json
powershell -NoProfile -ExecutionPolicy Bypass -File tools/assets/package_local_candidate.ps1 -OutputDirectory build/escape_route_full/candidate -ProfilePath content/app/escape_route_full_candidate.json
powershell -NoProfile -ExecutionPolicy Bypass -File tools/assets/candidate_board/ExportBoard.ps1 -CandidateDirectory build/escape_route_full/candidate -SkipCatalog
```

The handoff is [the build board](../../build/escape_route_full/index.html),
[player guide](../../build/escape_route_full/player_guide.html) and
[play.cmd](../../build/escape_route_full/candidate/play.cmd). Generated evidence under
`build/escape_route_full/` can be removed by a clean; source profiles remain in `content/`.

The aggregate packaging command copied the bundle and wrote its launcher but returned exit 1
when refreshing an unrelated historical board: `ExportBoard.ps1` could not find that profile's
`display_name`. Do not interpret this as aggregate packaging success. The current board is
exported separately with `-SkipCatalog`; scoped page checks and final file/hash evidence are
recorded beside the receipt. Historical bundles are not changed to work around this failure.

[Disk identity checks](../../build/escape_route_full/file_checks.json) pass all 4,822 comparisons,
including the 1,654 validated inputs, executable, launch profile and packaged resources.
One unused legacy `art/environment/tiles/street_tiles.png` copy remains in the bundle; it is
byte-identical to the generated tile at `build/art_authoring/environment/street_tiles.png`.
Packaged map/tileset references use the latter path. No artwork or runtime resource was removed.

[Scoped browser checks](../../build/escape_route_full/board_checks.json) pass on the build board,
player guide and both Service Court concept pages: local links resolve, images decode, and the
current build board exposes the matching executable hash and launcher. These checks establish
page integrity, not visual acceptance. The [receipt](../../build/escape_route_full/receipt.json)
records source/resource identity, route results, final delivery revision and remaining gates.

## Scoped verdict

The continuous-route runtime slice passes its recorded technical and selected-encounter
checks. It is playable through both gates to arrival extraction. BL-097 and BL-102 retain
their broader lifetime/acceptance work; BL-098 art and BL-099 human playtests remain open.
This is not acceptance of the complete map, sprint, visual quality or performance.
