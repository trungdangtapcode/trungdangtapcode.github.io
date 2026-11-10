# RV-20261103-004 - Level depth and shared interface

## Scope, ownership and revision

BL-110 local runtime slice following the user's menu, combat HUD/inventory and level-quality
feedback. Integration and self-review owner: Codex Sprint 01 integration. Bounded contributors:
menu_art_refresh, level_depth_audit, depth_service_art, depth_evacuate_art, depth_asset_audit
and menu_visual_design. Separate source reviews are agent reviews, not human playtesting.

Runtime/content source: `46aa319`, including the bounded art, menu, HUD, map and regression
commits. [Design and acceptance](../contracts/LEVEL_DEPTH_UI_REVISION_2026-11-03.md).
Current status belongs in [BACKLOG](../BACKLOG.md).

The user clarified two intended missions: **Black Tide** is action/investigation, while
**Last Shift** is survival-horror with scarce supplies. Their
[shared implementation path and distinct direction](../contracts/TWO_MISSION_DIRECTION_2026-11-03.md)
are recorded. This playable increment improves Service Court Escape; it does not claim that
two new maps, campaigns or forty-minute missions have been implemented.

## Delivered changes

- Menu schema 3 fits the dossier to measured content and separates menu font styles from
  gameplay fonts. Reused backdrop and nine-slice art retain the established navigation,
  settings, confirmations and retained-session flow. Barlow Condensed is pinned, hashed
  and packaged with its exact OFL license.
- The shared tactical theme updates combat HUD, personal case, world-source pane and shop
  typography and backing/edge opacity. Existing authored skins and icons remain in use.
  Quantities are inset from cell borders, shop labels are vertically centered and selected
  item details no longer display an internal item ID. Input bounds and inventory rules remain.
- Both open case/source panes protect HUD placement. Redundant weapon/ammunition details
  disappear while the case is open; the health bar remains visible. The fix follows native
  review of the dual-pane view, where weapon text previously showed through the action buttons.
- Six authored native prop types appear in eleven placements: generator, pump, dispatch
  workstation, records rack, triage trolley and evacuation baggage. Original GPT Image
  outputs, prompts, exports and metadata are retained alongside all older artwork.
- Sixteen small authored variants add 96 floor placements across eight areas. Four workshop
  tools, four archive/office variants and eight maintenance/evacuation details use the same
  Tiled collection-image resource path. A Ground-pass visual object layer sits above room
  floors and below structures/props. These details add no collider, sight blocker or pickup.
  The four workshop tools were reduced to 16x8 after comparison with the character scale.
- Existing workshop, archive, office, loading, freight and evacuation props are grouped by
  function. Archive authorization is an actual mission interaction before security release,
  using the existing mission system. Direct/service paths, two gates, finite loot, lighting
  activation and checkpoint ownership remain part of the same continuous map/session.

## Defects found and corrected before handoff

| Finding | Correction and evidence |
| --- | --- |
| Eleven new prop footprints treated bottom-center Tiled anchors as left edges. | Footprints now use native anchor plus metadata offsets. `tools/validation/level_depth/check_asset_registration.ps1` checks all six types and eleven placements and is called by the standard asset checker. |
| The pump first covered workshop spare loot, then visually covered the toolbox and coil after an initial move. | Final anchor `(960,2544)` and footprint `(926,2526,68,15)` leave the nearby props, loot and route clear. Independent source rereview and a north-facing native workshop capture cover the final position. |
| The Gate A pressure fixture assumed the gate was step index 2. | It resolves prerequisite steps and Gate A by stable IDs; pressure assertions and gameplay tuning were retained. Route/checkpoint regressions cover the expanded sequence. |
| Inventory count baselines touched cell edges and shop labels sat too high. | Existing theme padding and vertical alignment are used; no per-weapon or per-label positioning branch was added. |
| The weapon HUD was visible through the source pane's action buttons. | Both active pane bounds are passed to the existing HUD renderer; redundant weapon cards are hidden while inventory is open. Native input rereview is required on the matching executable. |
| An appended floor-dressing layer could appear above room props in Tiled. | The new object layer is ordered after room floors and before structures. All 23 older layer payloads/order remain intact; runtime Ground rendering remains unchanged. |

Independent source reports:
[registration](../../build/level_depth_revision/independent_final_source_review.md),
[UI/font lifecycle](../../build/level_depth_revision/independent_ui_source_review.md).
[Small dressing registration](../../build/level_depth_revision/independent_dressing_review.md)
checks all sixteen native images and ninety-six placements against the source and earlier map.
Both separate source conclusions from final native and integrated validation.

Source evidence: `AssetText.cpp:86` owns viewport-dependent font reload and `:111` registers
additional styles; `CaseRenderer.cpp:136`, `LootPanelRenderer.cpp:125` and
`ShopRenderer.cpp:39` contain the quantity/shop alignment changes. The archive step is defined
at `content/encounters/escape_route_full.json:15`; `FullEscapeRouteTests.cpp:226` and
`LootCheckpointStateTests.cpp:268` cover progression through the same objective.

## Validation

`check_project.ps1 -Configuration Release -Smoke` passed on **1,942 unchanged inputs**
at runtime/content revision `46aa319`:
format, source structure, Release build, **542 tests / 2,586,148 assertions**, asset checks
and canonical stress. Stress retained 240 ticks, peak 100 zombies, 59 shots, 28 deaths and
one blast. Earlier interrupted checks are retained and do not support this result.
The targeted route/checkpoint run passed 32 tests / 13,467 assertions after the final pump move,
and again with all 96 dressing placements. The earlier 1,909-input report is preserved under
`build/level_depth_revision/baseline_3e92c27/`; the new report includes the small dressing,
dual-pane HUD fix and two additional native capture fixtures.

The packaged executable is
`A0A17088BE0269943053A546570FB4EA94B2CF9BE8E045EA07CA2EDFFEAD4CC4`.
All **3,253** compared executable, asset and license files match the validated build. The
receipt also rechecks the source snapshot and all three input reports against that executable.
Final native scenes are recorded in
[`20261103T070122Z/index.json`](../../build/level_depth_revision/20261103T070122Z/index.json).
All eleven final images are byte-identical to the preflight frames. Combined root and
independent inspection covers these images; the two new lobby/motor frames use their separate
`dressing_preflight/new_*` records.

Real application input passed the 1280x768 menu/session/case/shop sequence and the 1536x864
menu/preferences relaunch. Pause, Continue, retry, restart and confirmation effects are checked
against session generation and world state. The final loot run verifies a 24-round loose
pickup, held search, Take All, Store/retake of the same rifle with 32 loaded rounds, Unload
conserving 168 reserve rounds, and Drop. These are automated interactions, not a human playtest.

[Independent final UI inspection](../../build/level_depth_revision/independent_ui_visual_rereview.md)
confirms removal of underlying weapon text from the dual-pane action area, retained health-bar
visibility and readable final menu/loot text. Root separately inspected the final case/shop
PNGs at native 1280x768: item counts and details remain inside their panels, shop rows and
buttons fit, and Vitals remains visible. The captured pointer overlaps part of Back as an
ordinary hover state. Earlier case/shop hashes differ and are not used to certify these files.

Preflight visual review covered workshop, archive, both loading routes, freight, coast,
security office/exterior, and additional lobby/motor views. Small items remain on the floor,
with clear control/door approaches in the inspected frames. The lobby bag overlaps seven
opaque pixels of the paper sprite; the native composition reads as a bag on scattered papers,
not a blocked route or sorting fault. The proposal receipt now matches map hash
`0b42fba35cb3f5c51564340ad92222a3e7272f0971f30a88f735efc895a0bc29`.
Fine tools are intentionally subordinate to actors and landmarks and can read only as flecks
in a wide dark view. The existing coastal arrow sign remains a dominant foreground prop;
this slice does not establish whole-map composition acceptance. Capped JPEG overviews do not
establish exact alpha or pixel acceptance; source metadata/dimension/hash checks are separate.

The hidden-window menu harness was corrected after synthetic mouse capture selected the wrong
page, and then after repeated hover coordinates left confirmation focus on Cancel. Current
menu inspection uses pointer hover plus keyboard activation with an explicit pointer move
between repeated rows. The loot harness restores synthetic focus after hiding its test window;
the initial unfocused run did not move the player or collect supplies. These failed harness
runs are not pass evidence. The subsequent complete packaged input runs above passed; no
gameplay or pressure setting was changed to obtain them.

## Artifact and reproduction

- [Review board](../../build/level_depth_revision/index.html)
- [Play candidate](../../build/level_depth_revision/candidate/play.cmd)
- [Technical report](../../build/level_depth_revision/project_checks.json)
- [Source/bundle/evidence receipt](../../build/level_depth_revision/receipt.json)
- [Editable Tiled map](../../content/maps/escape_route_v1/escape_route_v1.tmj)
- [Service asset sources](../../art/environment/escape_depth_v1/service/README.md)
- [Evacuation asset sources](../../art/environment/escape_depth_v1/evacuation/README.md)
- [Small dressing contract](../contracts/SMALL_ENVIRONMENT_DRESSING_2026-11-03.md)
- [Small dressing tileset](../../content/maps/escape_route_v1/escape_dressing.tsj)

The candidate profile is `content/app/level_depth_candidate.json`. Native captures use the
production renderer through `tools/validation/level_depth/capture_native_levels.ps1` with an
isolated player and a 5 FPS capture rate. This is a visual workload, not a performance benchmark
or combat-pressure playtest. The application input harnesses exercise menu flow and actual
pickup/search/Take/Store/Unload/Drop through real window messages at bounded frame caps.

## Limits and scoped verdict

**Pass for the scoped local technical and functional integration, with bounded native visual
inspection.** This accepts the existing renderer/resource path for the six new prop types and
sixteen small variants, their map placements, archive step, and shared interface changes.
Human readability, route discovery, resource pacing and engagement remain Review. Larger
campaigns, whole-map concept quality, forty-minute duration, performance, disk saves, terminal
results imagery and broader loot/LAN gates retain their existing ownership and acceptance gaps.
Scenery does not imply searchable containers or a healing mechanic. The new archive interaction
does not implement narrative evidence collection or a mission-item subsystem.

Continue the accepted mission, loot, Tiled and resource paths for Black Tide and Last Shift;
author distinct routes, consequences and resource budgets before presenting either as playable.
