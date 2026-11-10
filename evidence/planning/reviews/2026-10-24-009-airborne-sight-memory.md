# RV-20261024-009: Airborne feedback leaking into explored terrain memory

Date: 2026-10-24, Asia/Saigon. Scope: BL-095 local runtime correction following
[review008](2026-10-24-008-light-visibility.md), not whole-system lighting acceptance.
Owner/integration and runtime self-reviewer: Codex Sprint 01 integration. Independent source
audit/native regression contributor: Codex image14_render_audit. Root runs machine validation
serially. User evidence: image14.png, copied to `build/sight_memory/user_reference.png`.

## F-01: The memory-only draw queue includes airborne bodies and parts

`RendererSight.cpp:63` calls `SightScene::remember` every rendered frame. Its callback draws
stationary feedback and calls `WorldRenderer::draw` with `memory_only=true`. The persistent
render texture intentionally survives frames so explored terrain remains remembered.

`WorldRenderer.cpp:101` nevertheless enqueues every death snapshot, including a launched
body whose ground/height changes. The next loop also enqueues every unsettled gore particle
without checking `memory_only`. Both branches submit authored sprites into that persistent
texture. This records successive positions along the ballistic path. The curved repeated
pale silhouettes in image14 are consistent with this concrete path; source review alone
does not establish that every unusual pixel in the screenshot has the same cause.

The earlier actor-memory hypothesis is weaker: ActorSightMemory owns one last-known pose
per actor and fades it. It does not intentionally record a full flight history. The existing
`draw_gore_ground` already distinguishes settled particles from flight, but the memory draw
queue bypassed that boundary. Do not disable gore, clear explored terrain every frame or
change lighting ranges to hide this presentation leak.

## Correction and acceptance

Retain current-pass flight rendering. Admit death bodies into persistent memory
only after the shared body-motion sampler reports `settled`; first ground contact and its
`landed` event still allow bounce motion. The same rule covers non-launched bodies sliding
after bullet-driven collapse; the launch flag is not a stationarity test. Exclude airborne
parts from that pass because settled parts already use `draw_gore_ground`. Preserve simulation,
authored assets, actual flight timing and landed scene feedback.

Root reproduced the matching curved silhouette trails in an actual crowd encounter with a
grenade,45 anatomy events and12 captures (`build/sight_memory/crowd_before`). A controlled
native regression of the actual WorldRenderer found2,252 extra memory pixels during flight
and844 after first contact while bouncing. A launch-only correction left340 pixels from a
non-launched sliding collapse; the same shared settled-motion boundary now covers that case.
All three memory differences become0, while live flight remains visible (116 changed pixels)
and terminal corpse memory remains present (367 pixels). Settled gore/corpse memory contains
2,722 changed pixels. The diagnostic writes PNGs and a failing report before throwing, so
the before evidence is not a loader/setup failure.

Preflight reports: `before_bounce/report.json`, `launch_only/report.json` and
`settled/report.json` under `build/sight_memory`. Root formatted/integrated the contributor's
probe, repaired its Raylib include order and used the existing character composition adapter
to bind the canonical roster before World construction. Root added bounce and slide checks.
The probe exercises the production memory-only draw consumer offscreen; it is not a full
GPU sight-composition or human-playtest acceptance. The actual encounter uses the existing
World/Renderer path and does not inject presentation death events.

The before/after encounter finishes with128 live actors,45 anatomy events, one blast and
9,380 health in both runs. The correction does not alter those simulation outcomes. Root
inspected the final crowd capture; traces from historical body positions disappear while
current actors, corpses and legitimate gore remain.

Source structure currently reports425 files, zero blocking issues and15 review notices.
The new notice is `tools/validation/probes` at22 files against the20-file review threshold;
the hard bound is40. Scoped decision: accept this existing-probe integration for the native
regression rather than introduce a second executable or mix GPU diagnostics into simulation.
The existing WorldRenderer size notice remains (416 lines); this correction changes its
admission condition without broad unrelated queue refactoring. These are reviewed notices,
not claims that the report has no findings.

Source snapshot0db3f6c includes the preceding regression/fix commits f95d50a and a33fca2.
The broader partial/missing light-source report remains under BL-093 Review.

## Final validation and handoff

The resumed session recovered the completed stable `check_project.ps1 -Configuration
Release -Smoke -ReportPath build/sight_memory/project_checks.json` report: passed, exit0,
finished2026-10-24T12:31:27Z. All1,492 hashed inputs remain unchanged; format, structure,
Release build,398 headless tests/2,366,922 assertions, assets and canonical load/stress smoke
pass. Logs are under `build/validation/project_runs/076d88886fbc48ca9ca2ac25e14ea292`.
The interrupted launch-only report is historical failure/interruption evidence, not acceptance.

Packaged through `package_local_candidate.ps1 -OutputDirectory build/sight_memory/candidate
-ProfilePath content/app/sight_memory_candidate.json`. Rechecked the actual packaged demo
assets against the validated build: zero mismatches. The3,135-file bundle has a SHA-256
manifest at `build/sight_memory/bundle_sha256.json`; executable/revision identity and report
links are recorded in `build/sight_memory/receipt.json`.

The final `grenade_runtime_probe.exe <packaged assets> --sight-memory-review
build/sight_memory/native` passes with the same0/0/0 flight/bounce/slide differences above.
`check_visibility.ps1 -AssetsDirectory <packaged assets> -OutputDirectory
build/sight_memory/light_native` passes59 production-composition light captures. Root also
rendered the original crowd fixture against packaged assets into `build/sight_memory/encounter`
and directly inspected its final PNG against `crowd_before/60_tick_2900.png`: the historical
arc traces disappear while current actors, blood and settled bodies remain. The controlled
probe and the crowd images serve different purposes; neither replaces human gameplay review.
The final packaged `--encounter-smoke` with `content/scenarios/sight_encounter_smoke.json`
also passes:9,657 ticks,106 peak live zombies,669 shots,466 deaths and60 remaining health.
The original canonical stress scope and selected encounter scope are reported separately;
no gameplay settings were adjusted to force their results.

An additional independent read-only agent, Codex memory_fix_review, inspected the three
commits, `WorldRenderer.cpp` and `SightMemoryReview.cpp`. It found no scoped source issues
and confirmed coverage of flight/bounce/slide, terminal/settled retention and live visibility.
It did not run the executable, build or probe; runtime evidence above belongs to root.

Verdict: the reproduced moving-feedback memory defect has a technically verified correction
ready for independent acceptance. Human visual/player approval, broader partial/missing
sources, performance, physical DPI, LAN and parent Sprint acceptance are not established.
There is no new art, schema, simulation tuning, replacement pipeline or product-path shortcut.
The next extension uses the same settled-motion admission for existing death variants;
additional light-source investigation remains owned by BL-093.

Launch `D:/workspace/se220/build/sight_memory/candidate/play.cmd`;
board `build/sight_memory/index.html`. These paths select the intended lighting map/profile.
Do not infer this candidate's scope or profile from direct launch of the default build exe.
