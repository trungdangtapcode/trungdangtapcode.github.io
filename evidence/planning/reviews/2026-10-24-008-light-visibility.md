# RV-20261024-008 · Preserve illuminated visibility after turning and releasing aim

## Snapshot and ownership

Date: 2026-10-24, Asia/Saigon. BL-093, local runtime correction. Integration/shared owner
and runtime self-reviewer: Codex Sprint 01 integration. Source:86911aa, including loader
migration f708282. Read-only simulation audit and bounded loader contributor:
`/root/light_visibility_audit`; independent shader/probe source reviewer:
`/root/light_visual_probe_audit`. Neither reviewer ran builds or games. Root owns all serial
machine validation. User reproduction: image13.png.

## F-01 · Illuminated visibility inherited the aimed personal range

At observer433.467,210 and an enabled lamp210,210 (distance223.47), the original path reported
204-unit personal sight after aim release and275.4 while aiming. The lamp's identity,
direction, charge and emitted source stayed active, but CPU coverage and the GPU range gate
hid it after release. Root reproduced this with the actual world/renderer; screenshots show
the lit pool and fixture disappearing while the actor stays at the same point. Looking
toward or away from the lamp while aiming gave the same range-dependent result. This was
a deterministic observation-policy dependency, rather than randomly toggled source power.

Baseline evidence: `build/light_visibility/range_edge_repro/encounter.json` and the
portable_lamp aim/release PNG pairs. Near-distance four-facing and zoom reproductions remain
under `repro` and `zoom_repro`; those did not lose the lamp. The earlier coverage kept the
lamp24 units from the observer and did not exercise the223-unit release boundary.

Correction: D-088 separates configured personal and illuminated recognition ranges in the
existing Perception/SightProfile and production GPU mask. Aim changes only personal sight.
Fog, traits and the map hard cap resolve both paths. Actual source contribution and observer
and source LOS remain required for the illuminated path. CPU admission, cache invalidation,
GPU hard gates and independent range/angle feathering migrate together. F4 exposes both
effective ranges. Physical light profiles, direction, power, charge and art remain intact.

Canonical perception4 sets bases240/320, resolving here to personal204/illuminated272;
aim retains personal275.4. The new range is owned in versioned JSON, not a renderer literal.
Schemas1–3 retain explicit shared-range compatibility. A second configured range, overlapping
dynamic sources and a map wall use the same implementation. No second renderer is introduced.

## Diagnostic repairs required to exercise this path

The existing runtime probe queried spawn exclusions before initializing its new camera,
throwing `camera snapshot requires initialized finite state`. It now initializes and
advances the real camera deterministically before those queries. The old HUD diagnostic
assumed zoom1 and moved the desktop pointer for its inverse check; it now quantizes a sample
through the actual submitted camera without touching the system mouse. Fixture aim/wheel
steps and lamp ground visibility make the production path observable. These diagnostics
do not change normal gameplay input or light operation semantics.

## Source review and preflight evidence

Independent source review found the new personal/lit admission, uniform upload, cache key,
trait/cap composition and legacy fallback consistent. The existing distinction between
direct sprite LOS and surface-reveal terrain sampling remains. A real wall fixture tests
hidden terrain; this does not prove every facade/body intersection or every map layout.
No confirmed new defect was found in the reviewed correction scope.

Root rebuilt the test executable cleanly after the core type change:398 tests and
2,366,922 assertions pass (`build/light_visibility/tests_build.log`, `tests.log`). Source
tests cover illumination-only admission, unlit rejection, source/observer obstruction,
range limits, aim release, traits/caps and historical configurations.

Preflight native regression passes59 production captures across three immutable source
fixtures: range/release/four facings with one/two/no sources, minimum/maximum zoom, and a
real Tiled corner wall. Root inspected the corrected release frame. Pixel means at the
range probe are36–39 with illumination versus10–11 without; zoom probes34–35 versus~10.
Behind the wall the lit/unlit pixel means match exactly. These checks compare actual PNG
pixels in addition to source/CPU state. The same tests would reject a shader that still
clipped at personal range despite the CPU accepting the lamp.

Evidence: `build/light_visibility/preflight/native/result.json`, its index/captures and
`native_check.log`. Diagnostic crowd isolation is confined to these source fixtures;
production crowd settings and canonical smoke requirements are unchanged. Preflight assets
reuse the existing authored bundle with the canonical new perception file, so final
technical/source/bundle acceptance still requires the integrated export below.

## Final matching candidate and scoped verdict

The integrated `check_project.ps1 -Configuration Release -Smoke` entry passed all six steps
on source86911aa with1,489 stable inputs and zero changed inputs: format, source structure,
Release build,398 tests/2,366,922 assertions, authored asset checks and canonical stress smoke.
Stress remains240 ticks, peak100,59 shots,28 deaths and one blast. Report:
`build/light_visibility/project_checks.json`; logs:
`build/validation/project_runs/9acc27b991864f618be01afb5b872c4a`.
The earlier interrupted run is preserved separately and is not acceptance evidence.

The packaged runtime passes the same59 native captures and22 real-window input snapshots.
Selected encounter smoke uses the unchanged authored route and reaches Victory after9,657
ticks, peak106 actors,669 shots,466 deaths and60 remaining health. Matching executable,
probe, reports and resource hashes are recorded in `build/light_visibility/receipt.json`
and `bundle_sha256.json`. The root index links the launcher and native image galleries.

## Follow-up: partial or missing sources remains open

The user clarified that some sources fail or illuminate only part of their region. The
earlier single-point checks cannot establish whole-source quality. Root therefore rendered
66 additional frames: eight portable headings plus three fixed lamps, each through four
observer facings, aim and release. At160 sampled portable core/cone positions (distances
40/70/100/130, relative angles -30/-15/0/15/30 degrees), mean RGB is identical across those
observer states. These samples do not prove every falloff pixel or every placement.
Evidence: `build/light_visibility/whole_field/index.html`, source fixtures, encounter JSONs
and `field_comparison.json`. Root inspected representative portable and static captures.

The independent follow-up source audit found no confirmed invalidation defect: old/new
dynamic footprints update light/mask regions and observer changes refresh coverage.
All three static sources are at y600; the opaque southern boundary begins at y608.
Its source LOS correctly clips rays through that wall. Static captures show the resulting
interior-side pool. The illuminated recognition limit can independently clip distant pools.
Neither observation proves the cause of every source reported by the user. The user reports
intermittent behavior without a specific source type; do not silently disable cover or
enlarge ranges to hide this gap.

Root additionally ran the existing native portable-control script on the actual executable.
Purchase, deployment and off/on succeeded, but its wall-clock reorientation hold released
before authoritative completion during report/image capture. The unchanged lamp direction
therefore did not demonstrate a completed runtime operation failing. The original failed
report remains in `device_input_native`; it is not accepted as a passing full device check.
A generated diagnostic retains the original inputs/criteria but waits while holding until
the north-facing state is observed:19 snapshots pass purchase/deploy/off/on/reorient.
Evidence: `device_state_native/result.json`, both scripts and logs under the build root.
This diagnostic excludes pack/recharge/flare. BL-094 owns migration of the legacy driver's
timed hold and retirement of this bounded diagnostic before full device-control acceptance.

The offline build board and catalog pass36 board/link/image/identity checks with104 version
roots and zero missing indexes. Evidence: `build/board_validation_all/light_visibility/result.json`.

Scoped verdict: the reproduced aim-release dependency is corrected and technically verified.
BL-093 remains Review for the broader partial/missing-source report. Human readability,
physical-monitor DPI, LAN, performance and parent Sprint gates remain outside this correction.
A passed local technical entry does not accept those gates.
