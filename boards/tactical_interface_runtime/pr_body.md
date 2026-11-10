The inventory and HUD used a uniform condensed text weight and typed punctuation for controls, making the interface feel detached from the game. This integrates a restrained survival-terminal visual language through the existing resource pipeline: pinned Oxanium faces, authored action/input glyphs and shallow menu rows.

- Adds 17 editable SVG glyphs and six surfaces, exported to 23 native PNGs under ignored build output; retains the existing 26 skins and all older assets.
- Uses semantic heading/body/label/number fonts through cached resource handles and native-DPI reload. Presentation schema 23 requires a validated interface style; inventory layout remains 6 and historical schemas remain supported.
- Replaces typed selection/quantity symbols, aligns a leading primary gutter, separates transfer destinations, and gives quantity controls an explicit item/action heading.
- Reuses existing inventory commands, double-click policy, drag arbitration and menu lifecycle across backpack, storage, quantity editor, shop, HUD and menu.

Validation: stable Release passes 577 tests /2,586,558 assertions on 2,018 unchanged inputs; all six project-check steps pass. The packaged candidate passes 12 native input groups with 53 captures, including menu/briefing and case/quantity at 1x/2x. All 3,284 executable/assets/license files match the build. Current gallery passes 121 local links,53 decoded images, executable identity and desktop/mobile fit. Scoped glyph peer re-review confirms the item heading and primary-gutter fixes.

[Review and actual limits](https://github.com/trungdangtapcode/Black-Veil/blob/feat/tactical-interface-art/planning/reviews/2026-11-06-006-tactical-interface-runtime.md). Physical high-DPI, human UX, long frame-stall input robustness and dedicated shop screenshot acceptance remain open. The whole-archive gallery checker encountered an older identity mismatch; the current candidate was checked separately. No generated build, screenshot or gallery is committed.

Local launcher: build/tactical_interface_runtime/candidate/play.cmd. Gallery: build/tactical_interface_runtime/index.html.

Stacked on #5; do not merge ahead of its inventory dependency.
