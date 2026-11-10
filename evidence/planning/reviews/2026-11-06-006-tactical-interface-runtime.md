# RV-20261106-006: Tactical interface runtime and asset review

## Snapshot and responsibility

Final local handoff recorded on the workspace date 2026-11-07; source work and captures below
retain their 2026-11-06 revision identities.

2026-11-06, Asia/Saigon. Root integration self-review for BL-118, following the inventory
interaction handoff in [RV-005](2026-11-06-005-inventory-context-handoff.md). Scope is a local
runtime slice. Visual/source freeze: `3478ae234e1f7581b8743373370aa737cedcb75c`; final technical
freeze adds only the preview dependency fix in `c3b8b81`; branch
`feat/tactical-interface-art`. User changes to AGENTS.md and untracked todo.txt remain untouched.
The [visual contract](../contracts/TACTICAL_INTERFACE_VISUAL_REDESIGN_2026-11-06.md) governs
this review. Root owns integration/resource/config/context/menu work; tactical_glyphs authored
the isolated vector packet, tactical_typography supplied the pinned fonts/export adapter and
read-only integration audit, and tactical_visual_audit supplied the typed loader and semantic
font migration in the four inventory/HUD renderers.

Reuse: existing Raylib native-DPI font cache, asset owner, nine-slice PNG skin, menu lifecycle,
inventory action policy and authoritative queues. Presentation schema23 adds one typed style;
inventory layout remains6. D-105 records the boundary. The nearest extension uses the same
semantic bindings in case, storage, shop, quantity editor, HUD and menu. Historical layouts
retain their explicit adapter, owned by root under BL-117 before adding another consumer.

## Findings and fixes

- **F-01, visual P2, fixed:** initial native preflight showed case labels and actor sprites
  through context/quantity text. ItemContextRenderer now retains authored backing opacity for
  these overlays. The combat HUD and case keep theme transparency. Final native context and
  quantity captures show the underlying information occluded.
- **F-02, visual P2, fixed:** glyph peer review found a missing item identity in the quantity
  dialog and a trailing primary chevron. `3478ae2` adds the validated item display-name snapshot
  and separates item/action heading from the numeric controls. The shared geometry partitions
  heading, counter, decrease/increase and confirm/cancel without overlap. The primary marker
  now has a consistent leading gutter before the action icon. Peer re-review of the final
  context/1x quantity pair confirms both fixes; this is an asset-author peer review, not
  independent whole-product acceptance.
- **Technical preflight, fixed:** putting JSON declarations in the style data header leaked a
  parser dependency into feedback consumers. InterfaceStyleLoader.h now owns the JSON-facing
  API; PresentationManifest includes only the typed data header.
- **Full-gate build, fixed and awaiting rerun:** character_preview linked AssetInterface.cpp
  without AssetIcons.cpp, producing LNK2019 for draw_region_icon. `c3b8b81` adds that existing
  shared painter to the preview target; targeted Release preview link passes. The failed full
  report is archived as project_checks_failed_preview_link.json. No new painter is introduced.
- **QA limitation, not a claimed runtime fix:** `native_visual` timed out at double-click while
  preview tasks overlapped. Serial reruns passed. Posted press/release edges can be collapsed
  by a render-thread stall; no long-stall input robustness claim is made. The helper documents
  serial execution and isolates preferences in its output directory. Gameplay/timing was not
  adjusted to force a pass.

The pressed row asset is used by the menu's existing pressed state. Context actions dispatch
on press and show normal/focused/disabled rows; no artificial input phase was added merely to
display the fourth asset. Header/line spacing, glyph/keycap dimensions and font-role ranges
come from the canonical style configuration, not scene-specific literals.

Relevant source boundaries: `src/presentation/inventory/ItemContextRenderer.cpp:53` owns quantity
painting and `:123` owns action rows; `src/app/inventory/CaseItemActions.cpp:53` snapshots the
validated item name. `src/presentation/resources/AssetInterface.cpp:8` binds cached semantic
font roles; `src/presentation/resources/AssetText.cpp:111` merges registrations by path.
`src/content/assets/PresentationLoader.cpp:268` loads the required schema23 style once.

## Actual validation

| Scenario | Recorded result | Evidence and limits |
| --- | --- | --- |
| Targeted schema/font/menu/context geometry cases | 24 tests / 237 assertions passed | MSBuild Release, Jobs1; no graphics acceptance |
| Final real Win32 input through menu/briefing and encounter | 12 groups / 51 captures passed | `build/tactical_interface_runtime/native_final/result.json`; storage checked, source aim error0 |
| Menu, case and quantity client sizes | 1x and2x captured | Native 640x384 and1280x768; exercises font-cache resize, not physical high-DPI |
| Root image review | Menu, case, context and quantity inspected | Large menu screenshots used small JPEG previews; context/quantity PNGs were below256KiB |
| Glyph peer re-review | F-02 fixed in two final captures | No clipping observed in those frames only |
| Local full project gate | Passed, all six steps, exit0 | Release 577 tests / 2,586,558 assertions; 2,018 stable inputs, zero changed; `project_checks.json` and linked logs |
| Packaged bundle native input | 12 groups / 53 captures passed | `native_packaged/result.json`, menu checked, scales 1/2, source pointer error 4 units within the checker's tolerance |
| Package comparison | 3,284 files, zero differences | Executable/assets/licenses matched build; `package_comparison.json` |
| Current candidate gallery | 121 local links / 53 images passed | Executable identity and desktop/mobile fit; `board_validation_current/result.json` |

Final native executable SHA256:
`ABED6DBC2FC2FFCEC50E8255B5F2E3342D9048960472738BEE1B09A8BBD7D341`.
`native_runtime_hashes.json` records the executable and non-ORA runtime files before the full
gate. Re-export changed audio.json, presentation.json and sprint_gameplay.json among 3,263 files;
the final bundle receives its own native run rather than inheriting these earlier checks.
Historical failed, interrupted and older preflight evidence remains separate in the local folder.

## Scoped verdict and handoff

The authored 17 glyphs, six surfaces and three pinned OFL font faces are integrated. The
interaction slice and inspected visual corrections pass their recorded scope. Accept the
local technical/runtime slice: the stable gate, bundle's own native run and matching packaged
files all pass. Current launcher is `build/tactical_interface_runtime/candidate/play.cmd`, with
the actual capture gallery at `build/tactical_interface_runtime/index.html`.
`build/PLAY_BLACK_VEIL.cmd` now forwards to that bundle. The archive sweep found 159 versions
with no missing index pages. The whole-archive board checker stopped on an older
render_research_20261104 identity mismatch; this does not recertify historical archives.
The new candidate's own browser/link/image/identity checks pass separately.
Physical high-DPI, human task timing/discoverability, long-stall input behavior, dedicated
shop visual capture and whole-game art are outside this evidence. Keep BL-118 in Review for
those limits; build success must not be reported as a finished game's complete asset bank.

Generated PNGs, executable, logs, receipts and index.html stay under ignored build output.
The source branch is backed up remotely and [PR #6](https://github.com/trungdangtapcode/Black-Veil/pull/6)
is stacked on inventory PR #5. No merge is authorized or performed by this handoff.
