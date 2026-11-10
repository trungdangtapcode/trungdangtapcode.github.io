# RV-20261102-009: Doorway depth and registration

## Scope and ownership

BL-107 runtime correction following [review 008](2026-11-02-008-court-surfaces-and-projection.md).
Codex integration owns the renderer, shared Tiled map, scenario migration and final handoff.
Bounded agents contributed loader/tests, a source-pixel audit, independent render-path review
and the review board. Root performed native visual self-review. No new artwork was generated;
all retained source/native PNGs remain intact. This does not accept whole-map art or pacing.

## Reproduced findings

1. **The opaque roof hid the player standing outside the south facade.** The baseline native
   probe reproduced the screenshot at player (2223.96,3674.81): the roof was always composited
   after actors. Schema 10 now allows cutaway-bound world objects with validated authored
   ground depth. `TileMapResources::draw_world_object` applies the existing cutaway opacity at
   that sorted depth through the existing sight composite. It stays outside persistent terrain
   memory and is not redrawn in the overhead pass. Schemas 1-9 retain their validation behavior.
   Both buildings and attached roof dressing use this path. The matched security capture shows
   the full actor in front; close workshop, away-facing and indoor samples preserve the roof
   behavior. PNGs and character animation were not modified to hide the error.
   Source: `src/content/maps/TileMapLoader.cpp:278`,
   `src/presentation/resources/TileMapResources.cpp:319` and
   `tests/content/TileMapWorldPassTests.cpp:77`.
2. **Extra canopies obstructed the south-door presentation and narrowed approaches.** Removed
   placements 1498/1501 and support footprints 1496/1497/1499/1500, retaining their source assets.
   Existing bollards move with their footprints: workshop +/-16 and security +/-24 map units.
   Their between-footprint spans are now 148/164, beyond the facade openings of 119/152.
   The native probe passed 5,032 actor-radius samples across the two approach bands.
3. **Workshop east-door metadata did not describe the PNG.** The old measured y192..289 span
   copied the requested prompt position. Independent native alpha scans show the interior
   opening at y262..344 and roof at y264..342. The common band is y264..342, world y2632..2710.
   Both images pass 78/78 rows across the measured 15-column strip; minimum transparent counts
   are 15/15 interior and 14/15 roof at alpha <16. Corrected `authoring.json`, wall objects
   1309/1310, cutaway polygon 1130 and both route fixtures together. The new route center is
   y2672. Native checks confirm sight through the real aperture and blocked sight through the
   former gap. The screenshots show light exiting at the visible jambs. Normal shadowing
   behind solid walls remains; this is not a global fog/brightness change.
   Source: `art/environment/service_court_interiors_v1/authoring.json:54`; map object IDs above
   identify the collision/cutaway changes independently of serialized JSON line movement.

## Evidence and verification

- Source/content commit: `bab94a5`.
- Map SHA-256: `31AED7E17F576E4A82E70F31A4115BD51AAEE79DF974D49E57AE54DD3E8664FB`.
- Executable SHA-256: `3350B2A037D0D4FA3AA917BE38F0C14C916481852548DB40AF30D0BBDFC7F451`.
- Fresh stable `check_project.ps1 -Configuration Release -Smoke` passed on 1,786 inputs:
  474 tests / 2,573,258 assertions, format, source structure, build, assets and standard load
  smoke. Loader regressions cover accepted schema10 binding/depth, legacy rejection and invalid
  depth. Source-structure has zero blocking issues; existing large loader/resource/test owners
  retain these bounded responsibilities, rather than adding a duplicate module for this fix.
- The isolated native probe passed and wrote 30 captures against the package. It uses production
  movement, collision, mission, lighting, rendering and cutaways, disabling waves for inspection.
  It covers both rooms, thresholds, motor light activation, both gates and close-behind behavior.
- Root inspected baseline/current security close-front, workshop south-entry and east-opening
  captures. The east-door before/after views deliberately follow the respective logical openings
  (before y2576/2608; after y2640/2672); they are not advertised as identical observer coordinates.
- One added QA waypoint at (740,2988) was inside the workshop facade footprint, causing the first
  candidate probe to stop. The archived failure is retained. The corrected fixture approaches
  its actual wall boundary plus actor radius; no product collision was weakened to pass it.
- Independent source review found no duplicate roof composition or persistent-memory insertion
  in the changed path. This review was source-only, separate from root's native inspection.
- The packaged direct application encounter passed: 16,470 ticks, peak 128 living zombies,
  669 shots, 182 deaths, no blasts and final HP100. Gate A closed behind the player, Gate B
  was crossed and coastal extraction was reached. Gameplay pressure and health were not tuned
  for this check. The service route also passed: 17,959 ticks, peak 116 living zombies,
  672 shots, 194 deaths, no blasts and final HP100. It crosses both gates and reaches coastal
  extraction through the alternate loading lane.
- Final identity verification passed 4,998 comparisons with zero mismatches, including all
  1,786 validated inputs, the executable, launch profile, build resources and world/encounter
  content. Both route reports match the packaged executable and return exit 0. See
  `file_checks.json`; `receipt.json` binds the reports and native captures to this revision.
- Board, route guide and Tiled pages pass all 52 local link checks (`link_checks.json`).
- Direct-route capture timings include 50.0 mean FPS at restore power and 9.1 during Gate B
  opening (109.336 ms mean / 304.966 ms p95 across 2,396 samples). This is an uncontrolled
  application smoke, not a matched performance comparison: no root cause or regression claim
  follows from it, but it cannot support all-route >20 FPS acceptance. The subsequent service
  route records 50.7 mean FPS at Gate B opening (19.735 ms mean / 27.445 ms p95, 2,396 samples)
  without a code change. Retain BL-101 and profile the matching scene before growing dependent
  content. The rendering fix does not close it.

Evidence directory: `build/doorway_visibility_fix/`, including `project_checks.json`,
`native/before/`, `native/candidate/`, `check_east_aperture.ps1`, `audit_art_registration.md`,
`review_depth_source.md` and the probe source/receipts. The before probe used the prior source
and surface candidate; the corrected probe uses the new loader, renderer and package.

## Handoff and limits

Review board: `build/doorway_visibility_fix/index.html`.
Launch profile: `content/app/doorway_visibility_candidate.json`.
Play: `build/doorway_visibility_fix/candidate/play.cmd`.

The aggregate historical board refresh still fails on a missing `display_name`. This candidate's
files were packaged, then its board was exported with `ExportBoard.ps1 -SkipCatalog`, retaining
the custom comparison page. Do not report the aggregate catalog command as passing.

**Verdict: scoped technical and native visual correction passed.** BL-107 is complete for the
three reproduced defects and checked approach/cutaway cases. Broader art, room hierarchy,
human discovery/pacing and consistent performance remain under BL-104/098/101 and are not
accepted by these fixes. In particular, the differing route timings do not meet consistent
all-route >20 FPS acceptance.
