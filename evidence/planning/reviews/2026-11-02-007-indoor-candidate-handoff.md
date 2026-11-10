# Expanded Service Court: packaged candidate verification

Scope: an integrated runtime slice of the continuous escape route. This follows
[review 005](2026-11-02-005-spacious-court-interiors.md) and the pressure correction in
[review 006](2026-11-02-006-court-motor-pressure-arrival.md). Integration and this self-review:
Codex Sprint 01 integration. A bounded independent contributor checked the room dimensions,
door topology, asset counts and configuration claims against the current Tiled source.
Human art, navigation and balance acceptance are separate and remain open.

## Revision and identity

- Source: `3b3dfa1`, following room integration `e5be0e1`, artwork `26251ad` and operational
  light wiring `385098d`.
- Executable SHA-256: `910A6AC61955E41AA90A5D64B494EC92A718128520C632EBE0C5905620FCB04A`.
- Tiled map SHA-256: `994358CDE5DF067F51B088A0695659B58ECBBCAE06469B5DE26AA4B2EE5721F9`.
- Profile: `content/app/service_court_indoor_candidate.json`.
- [Play](../../build/service_court_indoor_revision/candidate/play.cmd),
  [review board](../../build/service_court_indoor_revision/index.html),
  [route guide](../../build/service_court_indoor_revision/player_guide.html).

The map remains one 3840 x 4096 world. The 1536 x 1536 security complex has an archive,
office, lobby and service corridor; the electrical workshop has two exterior doors. Twenty
separate interior, exterior and freight PNGs supplement retained assets. Authoring, registered
sizes, runtime consumers and measurement limits are in the
[integration contract](../contracts/SERVICE_COURT_INDOOR_OUTDOOR_2026-11-02.md).
These objects furnish the setting; they do not implement loot containers.

## Actual validation

`check_project.ps1 -Configuration Release -Smoke` passed on 1,777 unchanged inputs:
format, source structure, Release build, 473 tests / 2,573,235 assertions, asset checks and
canonical load/stress smoke. The canonical requirements were not relaxed for the longer map.
Report and logs: [project_checks.json](../../build/service_court_indoor_revision/project_checks.json).

The packaged direct route passed with normal authored pressure: 16,557 ticks, peak 128 alive,
668 shots, 177 deaths and 100 player HP. It traversed both room controls, crossed and closed
Gate A, crossed Gate B and reached coastal extraction. This is scripted gameplay evidence,
not a human playtest. [Direct run](../../build/service_court_indoor_revision/direct_smoke.json).

The packaged service route also passed: 18,046 ticks, peak 113 alive, 669 shots, 190 deaths
and 100 HP. Two earlier interrupted service runs are retained separately without a verdict.
[Service run](../../build/service_court_indoor_revision/service_smoke.json).

The isolated probe ran against the final candidate assets/map and ended `result=passed`.
It traverses the rooms, both gates and the north close while disabling waves, so it cannot
accept pressure. Its workshop, office, motor-on and closed-gate images are byte-identical
to the previously inspected source captures. [Probe receipt](../../build/service_court_indoor_revision/native/candidate/receipt.json),
[trace](../../build/service_court_indoor_revision/native/candidate/gate_probe.txt),
[image comparison](../../build/service_court_indoor_revision/native/candidate/comparison_with_source.json).
Tiled roof-on/off renders and space measurements were refreshed against the current map hash.

Bundle identity checks passed with no mismatches: 1,777 validated inputs, the executable and
launch profile, 3,112 built resources, 95 world resources, the retained legacy duplicate and
selected map/encounter all match their references. Both smoke receipts name the same executable
hash. [Identity report](../../build/service_court_indoor_revision/file_checks.json).

The packager copied the current executable, resources and Tiled world, then its aggregate
historical build-catalog refresh failed on a missing `display_name` property. Exporting this
candidate's board with `ExportBoard.ps1 -SkipCatalog` succeeded. The aggregate command is
recorded as failed, not silently relabeled successful; the separate bundle identity check
passed for this candidate.

## Observed gameplay and remaining findings

1. **Pressure reaches the hold area, but the early wait remains quiet.** The normal application
   end-of-motor capture shows attackers approaching from the left and lower yard, gunfire
   aftermath and corpses. The midpoint image still has no visible attackers. The isolated
   401-tick arrival regression does not predict the interactive camera/admission timing.
   Keep both images on the board; neither total population nor the passing route closes the
   motor pacing gate. Scope: `escape_route_full.json` motor response and the three
   `gate_a.response_*` Tiled markers. Owner: Codex Sprint 01 integration, tracked in BL-104.
2. **The new room is navigable, but its visual hierarchy is unfinished.** Regular archive
   rows, sparse corridor dressing and a weak/dark control landmark remain visible in the
   bounded review. Separate props and larger floor area do not close this finding. The
   security-complex layer, furniture placements and lighting need an art pass that preserves
   measured doors and the proved route. Owner/status: BL-098 and BL-104.
3. **No all-route 20 FPS acceptance.** Direct-run phase timing reports 13.6 mean FPS for
   `restore_power` (73.463 ms mean, 186.000 ms p95), 44.0 for `security_release`, 38.1 for
   Gate A opening (26.250 ms mean, 53.298 ms p95), and 54.8 for Gate B opening. These are
   this application's recorded phase samples, excluding screenshot frames, not a controlled
   hardware benchmark. Startup/cold state and other system load are not isolated. The slow
   arrival phase and frame-time tails need investigation under BL-101; prior performance
   evidence does not certify this enlarged content. The subsequent service run records
   60.6 mean FPS for the same power phase (16.489 ms mean / 24.502 ms p95), 55.8 in security
   and 54.2 during Gate A opening. No performance code changed between these runs. This
   variation calls for controlled cold/steady measurements; it is not evidence of a completed fix.
4. **Event screenshots still have a frame-readback limitation.** The logged Gate A passable
   event image can show the preceding 100% opening frame. BL-106 remains open. Settled native
   probe captures, not that event image alone, establish post-close gate visibility.
5. **The doorway approach and physical control cues need a concrete art/content correction.**
   Cross-review of the eight-role design packet found that the 152-unit south facade opening
   leads to only 113 units between canopy supports and 116 between bollards. The centerline
   remains traversable, which explains why route tests pass; that does not accept the promised
   broad entrance. The west power-station study visual (object 1132) is explicitly excluded
   from runtime, so its authoring placement is not proof of a visible physical control. Root
   selected a canopy-removal/bollard-alignment trial and runtime landmark verification in the
   [next implementation plan](../contracts/SERVICE_COURT_DESIGN_EXECUTION_2026-11-02.md).
   These proposals are not implemented or certified by this baseline candidate.

## Scoped verdict

**Scoped technical candidate gate: passed.** Stable checks, both packaged routes, the isolated
native probe and matching bundle identity are verified. Whole-map art,
early motor pacing, human discovery/combat, exact PNG joins and broader performance remain
unaccepted. Keep BL-104 in Review and BL-098 In progress. Preserve the accepted gate/blocker,
lighting and room integration work while correcting the specific findings through the same
Tiled, mission, rendering and resource pipelines.
