# RV-20261104-003: Shared rendering research and cache diagnosis

## Scope and ownership

Follow-up to [RV-002](2026-11-04-002-rendering-pipeline-investigation.md). Deliverable:
researched repair design and an opt-in diagnostic runtime slice, not a completed lighting fix
or a replacement engine. Root personally implemented/reviewed the C++ changes at the user's
request. Independent agents supplied read-only cache/pass/tooling research; the isolated
visibility checker improvement is commit `0faefb7`.

The starting committed baseline was `26d463d`; the local technical report records the exact
integrated input hashes rather than treating a Git label as proof of uncommitted source.
Status and remaining work are tracked in BL-114/BL-093. Research, alternatives, configuration
ownership and staged acceptance are in the [design](../contracts/SHARED_RENDERING_RESEARCH_2026-11-04.md).
The user's follow-up also produced a [Godot 4.5 pinned source study](../contracts/GODOT_2D_RENDERING_STUDY_2026-11-04.md).
Selected upstream files are inspection copies only; no Godot backend is integrated or claimed.

## Findings and changes

### F-01: diagnose stale caches separately from policy and final composition

`src/presentation/perception/SightCacheInspection.cpp` recomputes every grid cell using the
current numeric perception state. It bypasses cached illumination, dirty rectangles and
bounded traversal; snapshot rows are derived again from the current actor-memory entries.
It compares direct/surface light samples, coverage/snapshot bytes and encoded light bytes,
then reads both GPU textures and checks them against their CPU upload buffers.

The const query does not clear/recreate sight, mutate exploration, observe another tick or
advance animation. The native probe requests it only through `verify_sight_cache: true`.
Ordinary rendering and HUD inspection do not call it. Absence of an observed sight scene is
an error, not an empty pass. Results include tick, grid dimensions, dynamic light revision,
mismatched-cell counts and the first differing cell per stage.

This diagnoses cache/upload disagreement. It deliberately shares the numeric light/LOS
policy, so an error in that policy or its inputs can exist on both sides. GPU texture equality
does not prove correct shader sampling, surface registration, sorting or final pixels.
No existing light radius, darkness, horde, gameplay rule or authored artwork was adjusted.

### F-02: fix a demonstrated validation-driver assumption

`tools/validation/portable_illumination/check_visibility.ps1` previously expected `60_*`
files and could cast absent brightness entries to zero. The checker now validates the actual
case/rate/capture matrix and rejects missing, duplicate or unconfigured data before pixel
comparison. `-RenderRate` derives fixtures beneath the output directory; authored source rates
remain the default. Native pixel thresholds and canonical stress requirements are unchanged.

Root caught and corrected an intermediate review assumption: the probe emits one run for
each case/rate pair, not one run per case containing all rates. The committed checker and
embedded GPU-free regressions use the actual report shape. Parser and scoped whitespace checks
also passed. This fixes the tooling defect, not the player's intermittent light report.

### F-03: explicit reusable evidence and asset identity

`tools/validation/check_sight_cache.ps1` uses existing native fixtures, derives opt-in copies,
verifies capture/inspection ticks and rejects mismatches. It writes an offline board and
records the probe, fixture, original PNG and full asset-tree hashes. Asset/executable changes
during a run reject the snapshot. The same code handles the small lighting map and Service
Court, without map-name branches in the renderer. Diagnostic low-rate rendering is not an
interactive performance measurement.

## Native evidence actually observed

Probe SHA256: `59A669EA7204D5689210B1FCCCF011D40F5C1E4AC80992F33EBFF3CC9DDE499C`.
The native experiments use the frozen asset tree from `build/level_depth_revision/candidate`,
not an asserted new playable candidate. Asset-tree receipt SHA256:
`3596C1F9E2A0799F4C7FE3453B0250AC1FD707F4003484AE0C1E8FD231D03718`.

- The initial small-map wall fixture produced 16 matching cache inspections. The subsequent
  first Service Court fixture aborted because the newly authored fixture omitted the native
  portable-light scenario's required `rear_probe_offset`. This was a fixture error, not a
  runtime light failure. The failed aggregate report and logs are preserved in
  `build/render_research_20261104/cache_native/`; it is not a passed aggregate gate.
- A subsequent isolated small-map run passed all **16 captures** in
  `build/render_research_20261104/cache_wall/`, with the same probe and asset hashes.
- After supplying the required probe offsets, a new run passed **9 captures**: four Service
  Court direction/aim/zoom states with no portable lamp, four with one actually deployed
  portable lamp, and the current workshop interior. All six mismatch counters are zero in
  each capture. Each full-map grid has 960x1024 cells. Root checked the lamp counts in the
  eight portable-light captures rather than assuming a successful purchase/deployment.
- The rate-aware native visibility checker passed **59 captures**, retaining its existing
  range/aim, zoom, overlapping-source and real-wall brightness/visibility requirements.
- Root inspected capped JPEG previews of the released-aim court lamp and workshop interior.
  The former retains a visible light pool and the latter has the interior/actor visible.
  These are limited overviews, not alpha/pixel-perfect acceptance or a reproduction of every
  reported defect. Original PNGs remain intact and hashed.

Combined board: `build/render_research_20261104/index.html`.
Boards/reports: `build/render_research_20261104/cache_court/index.html` and `result.json`;
`build/render_research_20261104/visibility_native/index.html` and `result.json`.
Original inspected PNG hashes:
`61d4c811f717faa64a7b411bf9fd3229c453a2fa34692a7bafe61c8e406e1e2b` and
`4fa4bc745a52953e26a9800122bf8f1817150c3e7956d863e9a4b8c17b097590`.

## Technical gate and verdict

The integrated Release `check_project.ps1 -Smoke` run is recorded at
`build/render_research_20261104/project_checks.json` with logs beside it. It **passed** at
2026-11-04 14:32:57 UTC on a stable input snapshot: format, source structure, Release build,
542 headless tests / 2,586,148 assertions, asset validation and default load smoke.
This run did not measure interactive performance or repeat encounter stress.
Source structure has no blocking
violations; the existing native probe is now 779 lines and remains a reviewed large fixture
driver. The new query lives in its own perception responsibility rather than adding its
implementation to that driver. Existing structural review notices are not silently waived.
Scoped structure decision: retain the existing native driver for the five-line opt-in hook;
the recomputation and serialization responsibilities remain in their owning modules. Other
reported large files/folders are unchanged by this increment and retain their existing owners.
The gate's source-structure log remains part of the evidence; this does not accept unrelated
large-file cleanup or authorize further accumulation in the native driver.

**The research and diagnostics narrow the investigation; they do not close BL-093.** No new
cache corruption was demonstrated in the captured states. The next core change must follow
a current failing case or the documented pass-boundary cleanup with before/after composition
evidence. Motor activation, flare expiry, roof/door transitions, retry, final-frame fresh/cache
comparison and broader asset-depth correctness are not accepted by these captures. No FPS
improvement, complete visual fix, engine replacement or new playable handoff is claimed.
