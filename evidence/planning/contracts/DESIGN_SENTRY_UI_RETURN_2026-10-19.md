# Design return: sentry badges and progress

BL-069. Source/native design return to
[the device-attached brief](DESIGN_SENTRY_UI_REFINEMENT_2026-10-19.md) and
[original glyph request](DESIGN_SENTRY_CONTROL_ASSET_REQUEST_2026-10-19.md).
Source author: Codex team design. Shared runtime/config integration writer remains Codex
Sprint01 integration. Independent visual/human reviewer remains Unassigned.

## Selected treatment

| State | Selected glyph and word | Meaning |
| --- | --- | --- |
| Auto | Two forward chevrons + `AUTO` | Automatic fire is permitted, not a guarantee of a target or ammunition |
| Hold | Two pause bars + `HOLD` | Deliberately withholding fire, independent of ammunition |
| Empty | Hollow slashed magazine + `EMPTY` | No ammunition; shown beside either Auto or Hold |

These are the selected three glyphs, not alternatives awaiting another user decision. Color
supports the shapes and words. Empty's slash is amber; all states remain distinguishable in
grayscale. No glowing status, muzzle-flash badge, rotating icon or new sentry body is requested.

Keep the current slate Kenney nine-slice panel, mini-square font, track and fill. Use a single
continuous horizontal mint fill, clipped left-to-right from elapsed/required authority ticks.
No segmented countdown, spinner, striped loop, cosmetic completion timer or mode-colored fill.
The bar represents operation progress; the mode glyph represents the actual current mode.

The current `content/ui/sentry_control.json` already supplies the selected 140x34 idle panel,
140x44 operating/completed panel, 128x5 bar at (6,33), 4px body gap, 6px screen margin,
4px avoidance padding and 10px cursor clearance. Reuse these values directly; this return
does not add another runtime layout or change that integration-owned file.

## Local placement and hierarchy

`content/ui/sentry_badges.json` records native registration and the selected **integration
proposal**, not an already-loaded runtime extension. Coordinates below are native panel-local
pixels. Panel dimensions/anchor values continue to come from `sentry_control.json`.

| Node | Bounds x,y,w,h | Rule |
| --- | --- | --- |
| Mode glyph | 6,5,12,12 | Always Auto or Hold while focused; no color-only substitution |
| Mode word | 22,6,40,10 | `AUTO` or `HOLD`; omit redundant `FIRE` in the compact status row |
| Empty glyph | 66,5,12,12 | Only when actual rounds equal zero |
| Empty word | 82,6,52,10 | `EMPTY`, amber, beside the unchanged mode |
| Non-empty rounds | 66,6,68,10 | `N RDS`; replaces the Empty glyph/word group |
| Operation/hint | 6,20,128,10 | Existing amber hierarchy, 10px preferred text |
| Progress | Existing layout bar | Visible only while operating or completed while E is held |

Use the existing font at 10px. Short idle copy stays `[E] HOLD TO STOP` or `[E] HOLD TO ARM`.
Operating copy is `[E] DISABLING...` or `[E] ENABLING...`. Completion is `RELEASE E`.
Damage cancellation is `HIT / RELEASE E`; other cancellation is `CANCEL: RELEASE E`.
These concise strings fit the selected 128px hint width in the design preview. Browser font
rasterization is not Raylib font acceptance: dev must check the same strings with the actual
resource renderer, including maximum configured ammunition counts.

The UI attaches to projected device **body** bounds, never the rotating barrel. Keep the
existing side-selection/safe-playfield implementation and its player, cursor and objective
protection. Design does not replace those algorithms. The focused label is the only label;
do not create a repeated overlay over every deployed sentry.

## State and transition examples

| Condition | Status row | Hint | Bar |
| --- | --- | --- | --- |
| Auto idle | Auto + actual rounds | Hold to stop | Hidden |
| Hold idle | Hold + actual rounds | Hold to arm | Hidden |
| Disabling at 25/50/75% | Still Auto + actual rounds | Disabling | Authoritative fraction |
| Enabling at 0/25/50/75% | Still Hold + actual rounds | Enabling | Authoritative fraction |
| Completion while E held | Newly confirmed mode + actual rounds | Release E | Full |
| Cancellation after partial work | Actual unchanged mode + actual rounds | Reason + release E | Hidden immediately, fill zero |
| Neighbor focus after completion/cancel | Neighbor's actual mode/ammo | Release E until input rearms | Hidden, fill zero |
| Empty + Auto | Auto + Empty | Hold to stop | Same operation rules |
| Empty + Hold | Hold + Empty | Hold to arm | Same operation rules |

An empty sentry can change selected mode but never gains ammunition from enabling. Do not
replace Hold with Empty or display the requested mode as confirmed before simulation finishes.
No banked progress, cosmetic grace fill or success flash transfers between slot/generation
identities. Pause, loss of focus/reach and terminal state keep the existing visibility rules.
Timing remains in gameplay configuration; no timing constants are duplicated in these assets.

## Files, provenance and reproduction

- Authored transparent source: `art/ui/sentry_control/v1/badges_source.png`.
- Exact built-in GPT Image prompt: `art/ui/sentry_control/v1/generation.json`.
- Source/provenance notes: `art/ui/sentry_control/v1/README.md`.
- Canonical import recipe and selected added nodes/copy: `content/ui/sentry_badges.json`.
- Export adapter: `tools/assets/export_sentry_badges.ps1`, reusing `ModularRasterExport`.
- Preview builder/template: `tools/assets/build_sentry_design_review.ps1` and
  `tools/assets/sentry_ui_review.html`.
- Generated native strip and hash receipt: `build/sentry_design/native/`.
- Standalone review: `build/sentry_design/index.html`.
- Dev-frame provenance: `build/sentry_design/dev_capture_hashes.json`.
- Final source/output/check revision receipt: `build/sentry_design/receipt.json`.

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File tools/assets/build_sentry_design_review.ps1
powershell -NoProfile -ExecutionPolicy Bypass -File tools/validation/check_project.ps1 -Configuration Release -ReportPath build/sentry_design/project_checks.json
```

The 36x12 PNG contains Auto, Hold and Empty in adjacent 12x12 cells at x=0/12/24. All pivots
are (6,6); HUD placement uses top-left rectangles. Point sampling, RGBA8, binary alpha and
the selected ivory/slate/amber palette are enforced by native export. Registration uses the
existing nearest-neighbor/palette exporter; no glyphs are constructed from drawing primitives.
The original generated PNG and alpha are retained unmodified. Skin/font licensing remains
with the existing Kenney license files; no new upstream asset dependency was added.

The preview embeds eight inherited dev images with report data from `build/sentry_ui` and overlays the
new glyph/layout treatment at their recorded bounds. It includes dark asphalt/light concrete
swatches, 0/25/50/75/full progress, Empty+both modes, cancellation and neighboring focus, plus
the inherited mixed encounter/objective HUD. Toggle native1x/game2x and grayscale. These are
explicit **design mockups** over captures, not new runtime screenshots or fresh simulation.
Browser screenshots document this source-level review separately. Early headless DOM dumps
preceded asynchronous canvas completion and were not accepted. Final screenshots wait for
the page's ready marker through existing Edge CDP. `build/sentry_design/browser_checks.json`
records 34 completed canvases, including all eight encounter mockups; its generated capture
harness is preserved beside the report.

Fresh `check_project.ps1` passed all five steps on 1102 stable integrated inputs, with zero
changed inputs and 259 tests / 2,187,035 assertions. That project regression report does not
load or accept new HUD glyph bindings; the native strip has its separate export receipt.

## Integration receipt boundary

Dev can receive this selected artwork now. Add one strip texture and the three stable sprite
IDs `visual.sentry_auto`, `visual.sentry_hold`, `visual.sentry_empty` to the existing catalog.
Promote the selected node/copy/badge bindings into the existing optional sentry HUD contract;
update that contract's version, loader/validation, exporter and three presentation consumers
together under the shared integration writer. Do not introduce a parallel UI loader or mutate
the old schema2 group with fields its loader does not understand. Bind actual mode and zero
ammunition independently through the existing SentryHud snapshot/resource owner.

Nearest extension is Empty+Hold together using the same strip, nodes and authority snapshot;
the preview already demonstrates that composition. The following runtime receipt needs native
1x/game2x on both grounds, two neighboring devices and mixed Walker/Runner/Sprinter pressure;
check current/target mode, cancellations, held completion, cursor/muzzle/player and objective
readability. Include source/executable/bundle hashes and a fresh stable project report.

The text-only final treatment remains a tracked temporary consumer until these bindings are
received and reviewed in encounter. Integration owns that migration; design owns corrections
to glyph/readability discovered there. This source return closes design selection and delivers
the three glyphs. It does not claim executable badge integration, independent visual approval,
paired always-Auto versus saved-support playtest, BL-071 correction or parent Sprint completion.
