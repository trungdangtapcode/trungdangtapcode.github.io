# RV-20261106-005: Inventory context candidate handoff

## Scope and snapshot

Root integration self-review following
[RV-004](2026-11-06-004-inventory-context-runtime.md), which preserves the failed preflights,
source findings and fixes. Task BL-117; deliverable is a local runtime slice, not whole-game,
LAN or human UX acceptance. Source freeze: `8c28d6067c03fd2b26754dab64379186a385c1a5`.
The uncommitted user changes to `AGENTS.md` and untracked `todo.txt` were left untouched.
[Interaction contract](../contracts/INVENTORY_CONTEXT_ACTIONS_2026-11-06.md).

## Scoped verdict

**Accept the integrated technical/runtime interaction slice.** Single click selects without
Move; double-click and the primary key share the context menu's ordered policy. Own-case
equipment equips/selects/deploys through existing systems; storage Take/Store remains first
and never falls through on failure. Explicit Split, quantity transfer, Drop and Unload use
existing authoritative queues. Thresholded drag cancellation, keyboard context and quantity
input are integrated with the same overlay lifecycle and authored tactical skin.

Human task timing/discoverability, physical input at high DPI, broader frame-stall behavior,
co-op, packed-device context playtesting and unrelated lighting/art remain outside this
acceptance. Their absence must not be described as complete game or sprint acceptance.
Keep the historical context-free layout adapter's retirement trigger in BL-117. The pure
action-policy file remains above its line-review threshold; its bounded responsibility and
future split condition are recorded in `src/app/inventory/README.md`.

## QA repairs and evidence

The combined native checker exposed a QA projection error after outside-panel dragging:
the camera was still following the pointer, and the posted chest aim resolved at x=1568
instead of the authored x=1600. `416be8a` converges through the latest submitted camera
projection and records remaining error. F4 readback/export could also overlap gestures;
`8c28d60` spaces screenshot requests, allows readback latency and waits before further input.
These repairs change the QA harness, not game sight, stock, timing, damage or interaction rules.
Earlier capture timeouts remain recorded under the local evidence directories.

The final full matrix passes twelve groups with forty real Win32/F4 captures. The source
pointer error is **0 units**; measured double-click release gaps are 184.5–188.8 ms against
the unchanged authored 280 ms limit. The app-only render cap is 20 FPS; this is not a gameplay
performance benchmark. World advances while browsing and the final state is unpaused.

| Actual check | Result and evidence |
| --- | --- |
| `check_project.ps1 -Configuration Release -Smoke` | Passed on 1,976 stable inputs; zero changed inputs; format, structure, build, headless tests, assets and smoke exit code 0 |
| Complete headless suite | 569 tests / 2,586,508 assertions, all passed |
| Focused inventory suite | 20 tests / 280 assertions, all passed |
| Native pointer/key/character input | 12 groups / 40 captures; `build/inventory_context_runtime/native_serial_capture/result.json` |
| Native runtime identity | Same executable and 3,231 runtime files verified after the final gate; authoring-only `.ora` archives excluded from this reuse check |
| Packaged bundle identity | Executable, all assets and dependency licenses: 3,253 files match the final build |

The twelve native groups cover selection without revision mutation, exact-item right-click
targeting, pistol and knife equip, Split cancellation/confirmation, thresholded drag/right-click
cancel, outside-panel cancel without Drop, keyboard Context Menu/Enter, two-way stack transfer,
rifle instance/loaded-round preservation, Unload conservation and quantity Drop.

Concrete conservation evidence: carried rifle rounds increase from 64 to 112 after taking 48,
then fall to 32 after storing 80. The same rifle returns from storage with 32 loaded rounds.
Unload yields 64 carried rounds and an empty magazine; typing 1 and confirming Drop leaves 63.
The container retains 80, preserving 144 total rounds including the one dropped round. No default Equip
fallback, unrequested Move or duplicate Drop is needed to produce these outcomes.

Actual 1280x768 menu and quantity renders were inspected through bounded JPEG previews. The
menu sits beside its item, Drop has clear whitespace separation, labels are legible and the
pointer draws above overlays. This does not establish exact pixels, alpha or 4K acceptance.

## Candidate and reproducibility

Local launcher: `build/inventory_context_runtime/candidate/play.cmd`; current shortcut:
`build/PLAY_BLACK_VEIL.cmd`. Board: `build/inventory_context_runtime/index.html`.
The launcher retains the shared mission menu and current full escape route. Its menu and loot
presentation derive from the same inventory exporter and typed layout6/schema22 contract.

Executable SHA-256:
`3C7062617FF590D859C25973642B4485BD39DD631073AC8E89FDDF7B07275433`.
Technical report: `build/inventory_context_runtime/project_checks.json`; logs are linked by
that report. `receipt.json` records source, executable, report and bundle comparison identity.
Native evidence is retained because executable and runtime inputs match byte for byte;
it is not reused to certify changed runtime code/assets. Generated evidence stays outside Git.

Repeat the interaction check with
`tools/validation/inventory_context/Check-NativeInput.ps1`; its README documents the app cap,
owned hidden window, direct log files, capture scheduling, camera convergence and limits.
Next acceptance is a human pass on equip, retrieve/store and quantity Drop at normal play
resolution, followed by the physical high-DPI matrix. Current task status remains in BACKLOG.
