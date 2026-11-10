# Design request: device-attached sentry interaction

BL-069 follow-up to the user's rejection of the fixed interaction panel. Recipient: T2 Art/UI
design; assignee and independent visual reviewer remain Unassigned. Shared integration writer:
Codex Sprint01 integration. This Markdown request has not been sent to another agent/session.

The mechanic remains approaching one sentry and holding E. Dev owns projection, layout safety,
authoritative progress and cancellation. Design owns visual hierarchy, authored badge treatment
and readability review. No character, gun or sentry body redesign is requested.

## Concrete return

Use the existing font, nine-slice panel and bar track/fill first. Deliver one compact treatment
attached to the focused device body, with local layout metadata in content/ui/sentry_control.json.
Replace the previous bottom-right panel composition. Inspect the dev render before creating art.

- Idle: current Auto/Hold state, ammo/Empty, and a short hold-E action. No empty progress track.
- Operating: retain the actual mode/ammo, identify enabling/disabling, show elapsed/required
  progress and the held key. The target mode is confirmed only after simulation completes.
- Completion: confirmed state, full bar and release-E hint while the key remains held.
- Cancellation: clear fill immediately; concise reason and release-E hint. A neighboring device
  must never inherit the cancelled/completed fill or success label.
- Empty: distinguish no ammunition from deliberate HoldFire; enabling does not imply reloading.

Return Auto/Hold/Empty glyphs requested in
[the original asset request](DESIGN_SENTRY_CONTROL_ASSET_REQUEST_2026-10-19.md), or identify suitable
existing licensed glyphs with paths. Distinguish the states by shape and words, including grayscale.
No procedural substitute icons. Keep source/provenance in art/, metadata in content/, generated
native PNGs/previews in build/. Include revision/hashes and existing importer instructions.

## Review at actual scale

Provide native1x and game2x views on dark asphalt and light concrete. Include two neighboring
devices, partial enabling/disabling, Empty+Auto/Hold, cancellation, the current objective HUD and
a mixed Walker/Runner/Sprinter wave. The compact label must preserve player, muzzle and cursor
readability. Dev will keep it within the playfield and choose an alternate side when needed;
design supplies padding, body gap, type sizes and progress dimensions as metadata.

The runtime slice can use the existing authored skin while this visual return is pending. Final
skin/glyph/readability acceptance and the human always-Auto versus saved-support comparison remain
open. Review the delivered executable/content revision, not an isolated mockup or a passing build.
