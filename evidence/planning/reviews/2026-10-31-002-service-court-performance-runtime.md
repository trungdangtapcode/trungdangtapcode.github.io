# RV-20261031-002 · Service Court performance runtime evidence

## Snapshot and responsibility

- Date: 2026-10-31, Asia/Saigon.
- Reviewer: Codex integration owner, author self-review. Independent runtime acceptance is unassigned.
- Implementation/shared-file owner: Codex Sprint 01 integration; profiling worker owned the probe
  interval instrumentation and fixtures. Independent source review was read-only.
- Scope: bounded local runtime slice for BL-101. Preserve simulation, population, authored pixels,
  cutaway ordering, independent illumination and retained memory while reducing repeated map work.
- Base: `338b3d7`; its runtime is equivalent to `03d2d49`. The candidate contains the working-tree
  implementation identified by the stable project input hashes, not an unmodified base binary.
- Previous review: [independent source review 001](2026-10-31-001-service-court-performance-source-review.md).
  That report's historical insufficient-runtime-evidence verdict remains unchanged.
- Design/reuse: [D-092 research and migration](../contracts/SHARED_MAP_RUNTIME_DESIGN_2026-10-30.md).
  Retains Raylib 6, Tiled, World and their existing owners. No dependency, second renderer,
  resolution reduction, gameplay tuning or engine rewrite was introduced.
- Nearest accepted extension: BL-102's second gate in the same World. This review does not prove it.
- Review deliverables: this report, BACKLOG/README/CHANGELOG links and the generated build board/receipt.

## Conclusion

**The scoped p95 <50 ms target is met on the measured machine and workloads.** The final native
application ring averages 18.61 ms (53.73 FPS) with p95 28.45 ms and 108 living simulated zombies
at the final snapshot. It still contains 11 frames above 50 ms; this is not a guarantee of
continuous >20 FPS or a smooth result on other hardware.

BL-101 remains **Review** for broader performance evidence and independent runtime acceptance.
Build success does not accept art, player experience, the complete escape route or any Sprint.

## Implementation and source evidence

- `src/presentation/resources/TileMapResources.cpp:130`: prepare immutable UV/flip/vertex records
  once, retaining sparse row-major occupied tiles. The resource owner is nonmovable so internal
  prepared pointers stay stable. This still traverses sparse tile records; it is not a spatial index.
- `src/presentation/resources/TileMapMemoryView.cpp:7` and
  `src/presentation/perception/RendererSight.cpp:79`: bound static-memory ground/overhead draws to
  the union of observer and projected layer bounds, clipped conservatively for overhang. Object,
  corpse and gore memory work remains unchanged. Batched tile submissions are not GPU draw calls.
- `src/presentation/perception/SightMask.cpp:7`: reuse illumination, update dirty light bounds,
  bound observer coverage and keep original cell centers. Retained-actor mask rows include ground
  Y +/-1; invalid/negative row bounds conservatively retain all rows. Rewind resets remain.
- `src/game/perception/Perception.cpp`: reject out-of-range/cone candidates before LOS while
  preserving independent lights and invalid-input behavior. Equivalence tests compare semantics.
- `src/sim/collision/MapCollision.cpp`: first-blocker LOS can return early with the existing strict
  distance test; reveal queries retain nearest-hit behavior.

Temporary full-map costs remain owned by integration under BL-101: two full-world RGBA8 targets
use 84 MiB excluding depth/other resources; a 2.625 MiB CPU mask clear/upload remains when coverage
changes. Full occlusion-vector comparison remains the freshness contract. Replace these only when
a measured bottleneck warrants it and the replacement passes state/pixel and lifetime evidence.
Do not grow mutable geometry or dependent gates past BL-102's invalidation gate.

## Matched probe evidence

The reference archive uses the same probe timing and cosmetic-seed instrumentation as the candidate.
Seed 3102026 applies only to fixtures; production retains the ordinary unseeded path. The six cases
compare **32 native PNG hashes and full normalized simulation records**, all identical. This is
bounded equivalence at scheduled captures, not proof for every camera, tick or future content.

The following values are **CPU work intervals in ms**, not application FPS or GPU timing. A sample
covers one simulation tick through its scheduled render submission/swap. Input, audio, setup,
capture redraw/PNG export and telemetry export are excluded; sight is nested in presentation.

| Case | Samples | Before mean / p95 / p99 | After mean / p95 / p99 | After max |
| --- | ---: | ---: | ---: | ---: |
| Court exploration/cutaway/light | 340 | 150.14 / 410.40 / 591.87 | 5.28 / 7.53 / 8.87 | 9.63 |
| Dense encounter | 360 | 59.97 / 123.37 / 272.54 | 4.39 / 6.47 / 7.78 | 15.47 |
| Retained sight turn | 16 | 34.99 / 37.79 / 37.79 | 12.99 / 38.59 / 38.59 | 38.59 |
| Dense fire/gore/casings | 16 | 36.89 / 42.13 / 42.13 | 9.47 / 14.98 / 14.98 | 14.98 |
| Moving view/light | 200 | 182.47 / 347.16 / 409.57 | 9.91 / 18.96 / 53.01 | 75.91 |
| Moving aim/flare lifetime | 50 | 87.23 / 185.95 / 198.92 | 5.94 / 9.79 / 11.58 | 11.58 |

Raw p50/p95/p99/max, fixture hashes and capture hashes are in the paired summaries:
[main before](../../build/service_court_performance/seeded_main_before/summary.json) /
[after](../../build/service_court_performance/seeded_main_after/summary.json),
[regression before](../../build/service_court_performance/seeded_regression_before/summary.json) /
[after](../../build/service_court_performance/seeded_regression_after/summary.json),
[lighting before](../../build/service_court_performance/seeded_lighting_fixed_before/summary.json) /
[after](../../build/service_court_performance/seeded_lighting_fixed_after/summary.json).

The dense probe has 93 living simulated zombies, not necessarily 93 visible simultaneously.
Combat evidence includes 17 shots, 36 impacts, 27 anatomy events, one injury and two retained casings.
These are short correctness samples, not sustained native heavy-fire certification. Fixture health
10000 and invulnerability 30 are test-only. The lighting case actually buys/equips/throws a flare
on separate ticks, exercises aim range 204 ->275.4 ->204, and observes light intensity 1 ->0.379 ->0
through removal. Capture names such as `room_inside` alone do not establish physical room entry.

All after p95 values are below 50 ms. The 16-sample retained-sight p95 is slightly worse, and the
moving case still has p99 53.01 ms/max 75.91 ms. These results are retained rather than omitted.
Older unseeded comparisons and `seeded_lighting_before/after` are excluded: the latter bought and
started use on the same tick, so did not exercise an actual flare. Their artifacts remain on disk.

## Native application pacing

[Final result](../../build/service_court_performance/native_final/result.json),
[final F4 snapshot](../../build/service_court_performance/native_final/live_encounter_after.json).

- Dell Latitude E7470, i7-6600U (2 cores/4 threads), Intel HD 520 driver 31.0.101.2125,
  about 7.9 GiB RAM, Windows 11 Pro 10.0.22621. Desktop 1920x1080; captured game viewport 1280x768,
  world projection 640x384 at scale 2. See [hardware](../../build/service_court_performance/hardware.json).
- Exact final packaged executable; run 05:37:49–05:38:48 UTC, elapsed 59.215 seconds.
  Two-second idle, two-second movement and 48-second encounter intervals; required living count 60.
- Direct final ring: 600 samples spanning about 11.17 seconds, mean **18.6104 ms**, p50 **16.7340 ms**,
  p95 **28.4547 ms**, p99 **54.8520 ms**, max **62.1825 ms**, **11/600 >50 ms**.
  1000 / mean = **53.73 FPS**. These are not whole-run statistics.
- Final tick 3382, not paused, health 40, 108 living zombies /128 slots. The final snapshot has
  no casings, corpses, effects, gore, grenades or sentries; native sustained combat is not certified.
- F4 records application-loop start-to-start time, not GPU duration. The profiler posts bounded
  input to its own hidden window without global input/SendKeys. It is not a human playtest.
- F4 JSON/PNG exports occur at boundaries and can contaminate adjacent frames. Those samples are
  retained. Once the history ring fills, per-stage overlap attribution is approximate because it
  has no sequence counter; the direct final-ring statistics above do not use that approximation.
- Earlier `native_dense_focus` failed its required count of 90 (reached 73) on an older executable.
  Earlier startup/death/paused attempts remain separate artifacts. They are not final-binary passes.
- No controlled thermal experiment, GPU timers, cross-machine result or universal FPS claim.

## Integrated validation and identity

Final executable SHA256:
`E64CCA14C4683CD442162D28BE9F66C69F49B344E17A291AA17A609A79103576`.

Optimized probe SHA256:
`1DD6CCC1470E04A09EB45AE44D947E193E31B116F48020E4C79768268C71AFCA`.

Instrumented reference probe SHA256:
`51305C97B6B7DB9ACECD66D4831188335B6A59B507F5B0C4F1AF6AADD7A976F9`.

The [project report](../../build/service_court_performance/project_checks.json) records **1,633
stable input hashes**, no changed inputs, all steps passed. It ran 05:23:48–05:32:42 UTC. Logs are
under `build/validation/project_runs/17dbc5fdcff04b41b53514ed764036bf/`.

| Validation | Result | Scope / limitation |
| --- | --- | --- |
| `check_project.ps1 -Configuration Release -ReportPath build/service_court_performance/project_checks.json -Smoke` | Passed | Format, structure, Release build, 431 tests /2,572,160 assertions, assets, canonical load smoke; stable snapshot. |
| Candidate `--encounter-smoke` with packaged Service Court map/content/encounter/presentation | Passed | 2827 ticks, peak alive 76, 64 shots, 28 deaths, 0 blasts, HP100. Selected encounter scope remains separate from canonical load. |
| Seeded before/after probes | Passed | Six identical fixtures, 32 identical native PNG hashes and normalized simulation records. |
| Final native application profile | Passed scoped target | Required population 60 reached 108; direct ring p95 28.45 ms. Tail stutter remains. |
| Independent source review 001 | No concrete regression found | Read-only; does not supply independent runtime acceptance. |
| Scoped board/catalog regeneration | Completed | Original package command's unrelated global board refresh failed; see below. |

Source structure checked 443 files with zero blocking violations and 16 review notices. Existing
large-file notices include App, smoke scenario, content loaders, World/combat, HUD/renderers, tests
and the validation probe. Affected Renderer/probe and presentation/probe folders retain their
existing responsibilities; timing instrumentation and a deterministic fixture seam stay in the
probe. Tile preparation's 126-line function owns one initialization pass, not unrelated runtime
responsibilities. No mechanical numbered-file split or broad unrelated refactor is warranted here.
New sight-mask and memory-view files isolate the changed responsibilities.

The packaging command copied/exported the candidate successfully but returned exit 1 during refresh
of unrelated historical boards (`ExportBoard.ps1`: missing `display_name`, via `RefreshBoards.ps1:16`).
This is not recorded as a passing command. The current board was regenerated through the supported
`ExportBoard.ps1 -CandidateDirectory build/service_court_performance/candidate -SkipCatalog`, then
`Write-BuildCatalog` refreshed the inventory. No unrelated historical profile was modified.
The receipt and integrity manifest bind the final executable, bundle, reports and checked inputs.

## Acceptance gates and handoff

| Gate | Verdict |
| --- | --- |
| Exact paired fixtures, state and scheduled pixels | Passed in six measured cases. |
| Stable technical snapshot and both smoke scopes | Passed. |
| Native p95 <50 ms on this machine/run | Passed; average 53.73 FPS. |
| Consistent frame pacing / no tail stalls | Not met: 11/600 native samples >50 ms; moving probe max 75.91 ms. |
| Sustained native heavy-fire/gore, GPU timing and full workload/upload/residency counters | Missing evidence. |
| Return after eviction, mutable map lifetime and same-World second gate | Not delivered by this slice; BL-101/102 remain open. |
| Independent runtime review, human playtest and art/Sprint acceptance | Not supplied. |

Use the [build board](../../build/service_court_performance/index.html) and
[candidate launcher](../../build/service_court_performance/candidate/play.cmd).
Integration owns the next bounded tail-stutter/residency investigation; acceptance reviewer is
unassigned. Keep the existing full-map resources and freshness logic until replacements have
matching output/lifetime evidence. Do not lower encounter population or visual quality to pass.
