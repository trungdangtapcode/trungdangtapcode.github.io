# RV-20261103-002 - World loot runtime handoff

## Scope and responsibility

BL-108 local runtime slice; integration owner and author reviewer: Codex Sprint 01 integration.
This follows [review 001](2026-11-03-001-loot-integration-audit.md), with source/content at
`3dcc1ab`. It is an integration self-review, not independent human gameplay acceptance.
Current task status and follow-up ownership remain in [BACKLOG](../BACKLOG.md).

The candidate extends the existing continuous escape encounter. It preserves its combat,
characters, reactions, lighting, buildings and mission sequence. The new player decision is
whether to spend scarce rounds, approach a finite supply source, or leave an item in a local
container to recover later. It does not deliver the proposed 40-minute Black Tide mission.

## Integrated behavior

- Stable item instances move atomically among the carried case, authored sources and dropped
  sources. Partial ammunition pickup fills compatible stacks/free cells and leaves the rest.
  No-space, blocked, busy, stale and duplicate requests cannot consume the item or its rounds.
- Loose supplies use one press; closed cases require a held search, cancel on interruption,
  and retain searched/remaining state. Take All issues bounded acknowledged transfers.
  The existing live personal case supplies drag/rotate/split/equip; a second source pane adds
  Take/Store. Objective, device and loot input are arbitrated at the existing app boundary.
- Dropping/recovering and deliberate unloading preserve weapon ownership and loaded rounds.
  Removing the last equipped item has safe unarmed consumers. Acquired firearms use the same
  loadout, combat, equip timing and accuracy paths as starter firearms.
- Starter ownership is separate from the firearm catalog. Eleven Tiled sources include loose
  ammunition, another rifle instance, a discoverable shotgun and finite supply containers.
  Shop stock decrements only on accepted purchases. Historical starter/stress profiles retain
  their balance; gameplay is not relaxed to satisfy the canonical stress check.
- LocalSession owns a complete in-memory World checkpoint at initial preparation and accepted
  checkpoint/gate milestones. Retry restores world/carried supplies, credits/stock, mission,
  actors/devices and RNG together. Session generation invalidates old commands; the shared
  item issuer remains monotonic. F2 explicitly starts a fresh run.

## Reuse and extension proof

InventoryState transactions, typed World commands, collision/perception, resource/depth drawing,
the tactical PNG skin/font and existing session own their respective responsibilities. New
loot sources do not introduce another inventory, combat, serializer, UI framework or renderer.
Two instances of the same firearm retain independent loaded rounds through the same transfer;
the authored shotgun uses that path without a new character or weapon-specific pickup branch.

`content/gameplay/loot/` owns starter/contents/stock/reach/search/drop tuning. Named points in
`escape_route_v1.tmj` own positions. The source PNGs/manifest/provenance live in
`art/loot/field_supplies_v1/`. Existing weapon/device imagery is reused; seven new authored
native sprites cover ammunition packs, case states and a recovery bag. The recovery bag is
available artwork, not evidence that corpse spill is implemented.

## Findings resolved during integration

| Boundary | Source and correction | Evidence |
| --- | --- | --- |
| Exporter composition | `export_case_runtime.ps1`, `export_portable_illumination.ps1`, `export_melee_runtime.ps1`: accept their explicit supported schemas and preserve newer layout 5 / presentation 21. | Chained export retains all base texture/sprite IDs, portable/knife bindings and loot controls. |
| Geometry includes | New renderer/probe translation units include Raylib before game/raymath headers. Probe includes its own local header and qualifies ItemId. | Release demo/tests/probe compile and link. |
| Transaction/mission overlap | `WorldLoot.cpp` rejects transfers while mission interaction is held; App input prioritizes the focused objective. | Combined-command regression. |
| Retry epoch | `LocalSession.cpp`, `WorldLoot.cpp`: restore the full checkpoint, reset per-epoch request/input/event state and rebuild checkpoint-gate bookkeeping. | Gate A session regression restores a partially looted case, inventory, stock and credits; fresh requests work after retry. |
| Test realism | Fixtures now use actual item footprints, required character bindings/encounter data and explicit searched/open/inventory states. | No gameplay tuning or rejection policy was changed to satisfy invalid fixtures. |

## Validation and artifacts

`check_project.ps1 -Configuration Release -Smoke` passed on 1,845 unchanged inputs:
format, source structure, Release build, 515 tests / 2,586,983 assertions, asset checks and
canonical stress smoke (240 ticks, peak alive 100). Its report is
[`project_checks.json`](../../build/world_loot_runtime/project_checks.json); referenced logs
are retained under its `artifact_directory`. This is a stable local technical result.
Source structure checked 483 files with zero blocking violations and 22 review notices.
The orchestration/folder-size decisions in review 001 still apply. The 407-line loot probe
retains one scenario's commands, captures and conservation checks; that bounded cohesion is
accepted for this slice. A second scenario family should receive its own probe owner rather
than growing this file into a generic test framework.

The native loot fixture completed 192 active-encounter ticks with 11 captured states.
Its assertions verify exact accepted quantities, the same recovered rifle ID/loaded rounds,
unloading conservation and the searched container becoming empty.

Native screenshots were inspected at their original 1280x768 size (each below 256 KiB):
floor supply, closed case, open source/personal panes and empty case. The native fixture
composes its view from authority; it is not a substitute for real controller input or a human
scarcity/pacing playtest. The 5 FPS probe render schedule is not a gameplay performance result.

An additional packaged-executable check sent Windows key/mouse messages through the real App
and case controllers, with a separate 20 FPS application override to limit test load. Gameplay
content was unchanged. It entered the encounter, pressed E to take 24 rounds, held E to search,
clicked Take All (48 rifle plus 24 pistol rounds), stored and retook rifle item 1 with its 32
loaded rounds, pressed U to reach 168 reserve rounds, then J to drop that selected rifle.
[`input_result.json`](../../build/world_loot_runtime/input_result.json) and `native/input_*.json`
record the assertions and snapshots. This is automated input evidence, not a human playtest.
The harness converts render coordinates to Windows logical client coordinates at the actual
window DPI. An earlier mis-aimed or mis-scaled harness attempt was not accepted as a product
failure or as a passing interaction.

One hidden-window F4 readback shows partial text while later captures and the native renderer
fixture show complete text. These diagnostic PNGs do not establish general font/visual
acceptance; retain the existing capture limitation under BL-106 for visible-window comparison.

The Gate A checkpoint test clears combat waves to isolate checkpoint state. It is not proof
that a player can finish the complete authored route with this initial resource budget.

## Candidate and scoped verdict

The [build board](../../build/world_loot_runtime/index.html) links the
[launcher](../../build/world_loot_runtime/candidate/play.cmd), controls, native evidence, technical
report and receipt. Packaging uses `content/app/world_loot_candidate.json` and the existing
packager. `-SkipCatalog` skips only the known unrelated historical-board refresh; the current
board, source hash verification, asset export and candidate checks still run.

**Local technical gate passed; playable loot runtime slice delivered for review.** Whole
BL-108, human scarcity/readability, the proposed mission and the wider sprint are not marked
Done. The receipt records the executable hash and bundle/source comparisons separately.

## Open gates and next extension

The complete design remains broader than this runtime slice: persistent disk saves, campaign
stash, seeded optional supply tables, story/evidence storage, elevated shelf support/approach
anchors, corpse/destructible-container spills and player drop placement preview are not
implemented. Ground weapon/device registration and the human scarcity curve need further
visual/play review before broader content multiplication. No LAN arbitration is accepted.

Next: human route runs on the same candidate, recording supply discovery, rounds spent, items
left behind and checkpoint recovery, followed by content-only balance corrections where the
evidence warrants them. Human scarcity/visual reviewer is Unassigned; integration stays with
the existing owner. BL-101 performance and broader map art remain open independently.

For the next surface/spill increment, extend the existing source owner with authored support
and interaction anchors and consume one authoritative destruction/death snapshot. Retire any
temporary generic world binding before accepting that item on elevated furniture; preserve
the same IDs, source revisions and checkpoint ownership. Do not create a second loot pipeline.
