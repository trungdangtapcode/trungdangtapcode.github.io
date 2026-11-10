# RV-20261106-002: Seamless Service Court and physical resupply

## Scope and ownership

Task BL-116; root owns integration, World/purchase authority, operation tuning and acceptance.
Bounded contributors: continuous_mission_audit (loader/schema/Tiled and loader tests),
continuous_deploy_audit (HUD/input). Commits: `139c503`, `0a2bf47`, `e49d02d`, `09d151b`,
`05703d4`, `cc5be91`.
Contract: [seamless mission](../contracts/SEAMLESS_MISSION_FLOW_2026-11-06.md).
Deliverable is a runtime slice. Whole-mission pacing, human safety/readability and unrelated
lighting acceptance are separate gates. Source baseline is `374677e`; this branch does not
silently include the separate, unmerged shader-binding PR #2.

## Integrated boundaries

- Schema-10 missions start their encounter in live play during World initialization. The
  current profile's first pressure event is power completion, not mission entry. Its next
  pressure events retain explicit authored timing.
- `World::can_shop()` uses typed, loaded service rectangles and rejects dead/terminal actors.
  The same query gates the actual purchase transaction and UI availability. The existing case
  controller closes its shop pane after access loss. Inventory elsewhere remains available.
- The current service rectangle is the approach to an existing authored lobby supply case,
  protected by the room's real geometry. No enemy exclusion, immunity or pause is added.
- Existing timed device transfers own progress, completion, cancellation and item/state
  ownership. Current tuning is 600/360 ticks for sentry/lamp placement. The existing game-rate
  configuration is 60 Hz. New gameplay numbers remain in their canonical JSON owners.
- Current input suppresses the legacy instant setup commands and global Enter-to-start.
  Weapon slots and active-game actions are available immediately. HUD retains objective
  detail and adds service hints only when nearby; it does not replace the objective hint
  with a generic inventory reminder.
- Named gameplay-role grammar is isolated from the map parser. This is a schema contract,
  not a scene-specific renderer path or a new configuration/parser framework.

The legacy schema adapter is temporary, owned by root, with retirement before extending the
second main mission. Historical studies must migrate their setup to held inventory commands;
the current mission menu does not expose the adapter as another mode. F5 preparation reload
remains a developer API and is not offered as a free setup transaction in the live mission.

## Validation record

The first full attempt failed format (`Input.cpp`) and source structure (map loader reached
801 lines against the blocking 800 limit). Root stopped that already-failed build; the report
is preserved as `build/seamless_mission_20261106/failed_preflight_checks.json`. It cannot
support acceptance. The corrected input passes clang-format; the role helper leaves the map
loader at 791 lines. Structure recheck reports 506 files, zero blocking violations and 23
review notices. Its large-file notice remains, with a narrow decision: keep the existing parser
for this bounded role addition; new continuous mission resolution lives in its own loader.
The existing SprintLoader also remains a reviewed large file (413 lines); this does not
authorize further unrelated accumulation or waive the remaining notices.

The next full attempt compiled successfully but failed nine tests because the service object
was in an authoring-only layer and absent from runtime gameplay objects. Root moved the same
object into the actual gameplay layer without changing its coordinates or source art. The
failed report is `failed_map_layer_checks.json`. A headless rerun on that corrected map
passed 548/550 cases; two remaining fixture failures exposed an old remote-purchase assumption
and an invalid test deployment position near the objective. Root migrated the checkpoint test
to establish a real service purchase position, retained its stock/loot/restore assertions and
selected a valid placement in the operation test. This does not weaken production geometry.

Root also added the explicit rejection of unsupported nonempty continuous smoke setup. A
targeted preflight rebuilt changed app/test sources against already-built, unchanged libraries
without re-exporting assets; it is not a replacement project gate. Seven selected tests /
14,725 assertions passed, including checkpoint restore and the new smoke guard. Final full
checks were restarted on the committed source `05703d4`.

The full gate on `05703d4` passed with 551 tests / 2,586,232 assertions, assets and canonical
smoke on a stable snapshot. The first native run passed all cache comparisons but failed the
separate behavior assertion: the 32-unit fixture offset exceeded the existing 28-unit lamp/
pack interaction radius. Sentry placement correctly succeeded through its longer placement
range; lamp placement and packing correctly rejected that offset. This was a fixture issue,
not a reason to weaken production geometry or timing.

Root derived a local 24-unit fixture and reran all nine native captures. Behavior assertions
passed: real 600/360-tick progress, successful sentry/lamp deployment and packing, zero pursuit
before the generator trigger and four live zombies after power completion. The authored QA
fixture was then corrected in `cc5be91`; the full gate was restarted for matching provenance.
Original logs and the failed behavior result remain intact.

Root inspected capped JPEG previews of deployment in the actual lobby and the power-completed
scene. The existing supply case, interior, objective/service hint and progress bar are visible.
This is limited scene inspection, not alpha/pixel-perfect acceptance or a whole-route playtest.
Preview source PNG hashes: `d506dae190f3dea5553c05528d96433661d3f63a590db1e06acca324a16460ef`
and `96d8ef0c1d269bed8a39e52fd531511b7db6e1ef922c8cdf40fa570a96b93272`.

The final matching gate on `cc5be91` **passed** with 1,953 stable inputs and no changed inputs:
format, structure, build, all 551 tests / 2,586,232 assertions, assets and canonical stress.
Stress retained 240 ticks and peak 100 zombies (59 shots, 28 deaths, one blast, HP 100).
Final report SHA256: `5C5373709AC6B7AC06971C7616C3463AE933CA749238DE53AE695FAB791F3DD6`.
The nine native captures and separate behavior assertions passed again on the authored
24-unit fixture: both timed devices deploy/pack, and pressure respects power completion.

**Accept the bounded technical runtime slice; retain the product/playtest gate in Review.**
Candidate packaging and identity verification passed with 3,253 file comparisons against the
validated build, including dependency licenses. Source revision: `cc5be91`.
Executable SHA256: `4953DDFC64596F69CC3FA19566138EFB75FE8470D5343A20812CC026862AB73D`.
Probe SHA256: `70B68B2BB9A506AFD80FE6838759657D8D649E30FC27C5AEE23DEE24443F8B2A`.
Launcher: `build/seamless_mission_20261106/candidate/play.cmd`.
Board: `build/seamless_mission_20261106/index.html`. Final PNGs match the two inspected preview
source hashes above. Receipt, native behavior/cache reports and preserved failure logs are under
`build/seamless_mission_20261106/`, outside Git. Native fixtures explicitly use the real lobby
service and power control; fixture spawn overrides isolate their scenarios, not a new player
teleport mechanic.

## Remaining risks and limits

Human playtesting must judge discoverability of the service, readability of long deployment,
travel before power activation and the difficulty after activation. A supply rectangle is not
a guarantee that its room can never be entered by zombies. Visual reference metadata in the
Tiled source is an authoring annotation; physical purchase eligibility uses the resolved bounds.
Future service placements require matching art/geometry review, not merely adding invisible
zones. No new merchant character has been authored or claimed.

Read-only integration review confirmed no active-profile mission-entry wave, remote shop
purchase path or duplicate pressure application. Purchase/movement in one command is ordered
as buying at the current position then moving; the next transaction rejects outside the zone.
The reviewer found a QA adapter limitation: `SmokeScenario::command` skipped legacy nonempty
setup for already-active missions. Root added explicit rejection and a passing targeted
regression. BL-116 retains full migration before the first nonempty continuous setup is
accepted. The current route smoke is empty; the new device fixture uses held transfers directly.
