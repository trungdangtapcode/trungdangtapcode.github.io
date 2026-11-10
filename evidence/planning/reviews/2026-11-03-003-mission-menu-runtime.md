# RV-20261103-003 - Mission menu runtime handoff

## Scope and ownership

BL-109 local runtime slice, following the user's request to design and implement the game menu.
Integration owner and report author: Codex Sprint 01 integration. Bounded contributors:
menu_lifecycle, menu_settings_audit, menu_definition, and menu_visual_design. This report includes
an integration self-review and a separate agent's visual inspection; neither is human playtesting.
Current task status belongs in [BACKLOG](../BACKLOG.md).

Design: [Game menu contract](../contracts/GAME_MENU_DESIGN_2026-11-03.md).
Source revision: `2e1fe02`, including the `a785774` integration and earlier bounded commits.
This extends the [world-loot candidate](2026-11-03-002-world-loot-runtime.md), preserving its
continuous map, finite supplies, weapons, lighting, mission logic and checkpoint ownership.

## Delivered behavior

- Main, briefing, pause, settings, controls, destructive-action confirmation and terminal results
  share one typed, deferred application flow. No second World or gameplay loop was introduced.
- Main and briefing do not advance the local session. Main renders an authored backdrop; Pause
  displays the retained game canvas. Continue resumes the same in-memory run.
- Retry restores the complete existing checkpoint. Restart creates fresh preparation. Cancel is
  the initial confirmation selection. Holding activation through a transition cannot start the
  encounter, fire, throw or interact before release.
- Pause works on focus loss and with P during placement/inventory; Escape first belongs to the
  active gameplay tool or overlay. Debug input retains priority.
- Audio volume and frame cap have drafts, Apply and Cancel. Preferences are stored separately
  from application defaults, using atomic replacement under the configured user storage ID.
- `content/app/menu.json` owns the operation's bundle paths, briefing, skin IDs, geometry,
  typography, offered frame caps, volume step and navigation keys. The existing application
  definition remains the only source of the displayed game name.
- Normal no-argument startup opens the menu. Explicit historical content/map/presentation
  launches remain direct play; smoke bypasses the frontend. `--menu` selects the menu explicitly;
  `--direct-play` bypasses it.
- One new authored backdrop is accompanied by generation metadata and a source hash. Panels and
  buttons reuse tactical inventory PNG skins. Text uses the existing native-resolution font cache.

## Findings and corrections

| Finding | Evidence and correction |
| --- | --- |
| Pending Pause could allow input before lifecycle commit | `MenuFlow::blocks_gameplay` now includes pending requests. Tests cover a pending Pause and clearing an invalid request. The host still commits session effects after callbacks. |
| Settings could be bypassed through a Results retry/restart request | Results actions require an empty overlay stack; pure flow regressions cover this boundary. |
| First held Deploy frame had no initialized camera after feedback reset | Actual native input reproduced `camera snapshot requires initialized finite state`. `src/app/App.cpp` now initializes the camera immediately after reset, even while release gating keeps the first game frame paused. The native sequence holds Enter through Deploy and confirms preparation is retained. |
| Generic modal guard suppressed pause during tools | `MenuController::sample` separates debug capture from gameplay tools. Focus loss is unconditional; P can pause tools, while Escape respects tool ownership. |
| Saved-settings notice persisted onto unrelated pages | Separate visual review reproduced it on Controls and Quit. `MenuController::commit` now clears notices on subsequent navigation, retaining the immediate settings result only. |

Source-structure review: the existing App host exceeds the 400-line review threshold. The change
keeps flow, pages, input, preferences and drawing in separate owned modules; App only wires session
effects and frame ordering. Existing larger files and folder notices remain unchanged. This does
not establish that the planned network screen lifecycle is complete.

## Validation

`check_project.ps1 -Configuration Release -Smoke` passed on **1,867 unchanged inputs**:
format, source structure, Release build, **542 tests / 2,587,253 assertions**, asset checks and
canonical stress. Stress retained 240 ticks / peak 100 zombies / 59 shots / 28 deaths / one blast.
The earlier run passed its steps but was `unstable_snapshot` after final UI edits; it is preserved
as `preflight_source_changed.json` and is not the acceptance report.

The candidate executable SHA-256 is
`847F24A6A05B7DEDB23B5D065940AEAC2D21447DEFC5108627C36335A2574151`.
All **3,224** copied executable/asset/license files match the validated build. Both native input
reports carry that executable hash. Settings tests cover missing/corrupt/unsupported preferences,
out-of-range values, alternative FPS choices and a failed write preserving the original file.

The final packaged App input run passed Main, disabled Continue, briefing, held Deploy, Pause,
pointer and keyboard Settings adjustment, Apply/Cancel, Controls, suspended Main, Continue,
focus-loss pause, Retry Cancel/Confirm, Restart and Quit Cancel/Confirm. Native assertions check
frozen ticks, unchanged session/ammunition on Continue and one generation increment per confirmed
reset. A second launch through the packaged profile confirmed saved 90% volume / 30 FPS while
Main and Settings remained at tick zero. These are isolated test-user settings, not changed
player defaults.

Visual review found no text clipping in Main, briefing, Pause, Settings, Controls or confirmation
at 1280x768, and in the larger 1536x864 letterboxed menu. The separate visual reviewer rechecked
Controls and Quit after the notice fix. A bounded, lossless PNG title crop was inspected at native
resolution; larger screenshot overviews used capped JPEG inspection copies. JPEGs do not establish
pixel-perfect or alpha acceptance.

The 2560x1440 launch passed input/persistence checks, but its hidden-window capture was clipped
outside this machine's 1920x1080 display. That image is **not visually accepted** and is retained
under `oversized_window/`. The successful 1536x864 capture does not close that higher-resolution
capture limitation or establish every Windows DPI combination.

## Artifact and reproduction

- [Play the packaged menu](../../build/mission_menu_runtime/candidate/play.cmd)
- [Build board and native screenshots](../../build/mission_menu_runtime/index.html)
- [Stable technical report](../../build/mission_menu_runtime/project_checks.json)
- [Bundle identity](../../build/mission_menu_runtime/bundle_identity.json)
- [Native flow input result](../../build/mission_menu_runtime/input_result0.json)
- [Explicit-profile relaunch result](../../build/mission_menu_runtime/input_result1.json)
- [Receipt](../../build/mission_menu_runtime/receipt.json)

The generated `build/mission_menu_runtime/Inspect-MenuInput.ps1` uses Win32 messages and F4
diagnostic capture, applies DPI conversion to pointer coordinates, keeps preferences under an
isolated generated user directory, and uses a 30 FPS application override. The first run exercises
normal default startup; `-HighResolution -Width 1536 -Height 864` exercises the explicit packaged
profile and persisted settings. Gameplay parameters are unchanged. The bundle uses
`content/app/mission_menu_candidate.json` through the existing packager.

## Limits and scoped verdict

- Continue and checkpoints are in memory; closing the application discards the run. The menu says
  this explicitly. There is no disk campaign save, multi-mission catalog, LAN lobby or key rebinding.
- Menu Quit asks for confirmation. Closing the OS window retains the existing direct shutdown path.
- Results transitions have reducer coverage. A native terminal-result screenshot and human UX
  playtest remain separate evidence gaps; no screenshot is fabricated to close them.
- Existing fonts currently load the established glyph set. This does not claim general non-ASCII
  branding/localization support or every Windows display-scaling combination.
- Local pause is not server pause. BL-014's network lifecycle and later co-op gates remain open.

Verdict: local technical/runtime handoff passed; the candidate is ready for user review. Keep
BL-109 in Review for native terminal-result visual evidence and human UX acceptance. Whole-product,
scarcity-balance, unrestricted high-DPI capture and co-op acceptance are not claimed.
