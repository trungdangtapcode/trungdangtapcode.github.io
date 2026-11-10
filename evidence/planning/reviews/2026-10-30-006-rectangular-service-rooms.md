# Rectangular service-room correction

Date: 2026-10-30. Owner/integration: Codex Sprint 01 integration.
Scope: local runtime slice; follow-up to [review 005](2026-10-30-005-building-cutaway-runtime.md).

## Finding and correction

The previous authored roof tapered from back to front. Runtime opacity did not create
that silhouette. Replace active art with authored v2 roof/interior panels; retain v1.
Both panels register to (32,32,256,192) on a 320x256 canvas: an 8x6 footprint on 32px tiles.
Tiled bottom-center anchors remain (896,2912) and (2208,2912). Five independent walls and
each cutaway region now match the rectangle and centered 64px south doorway. No building-name
branch, procedural replacement art or new render pipeline was introduced.

## Source and independent audit

- Source: `art/environment/service_room_cutaway_v2/source/service_room_sheet_source.png`.
- Source SHA-256: `b2c378b45abc910ac09e040ea4a5d8b91b8ee3c6c22301af5abdfef7329315fc`.
- Interior SHA-256: `17c15cf68b22912b8f6b7821c285f6dbe0a9984294252f332d4ec55506df39d1`.
- Roof SHA-256: `4eb1872171c33952acbae12bdeba4a7c91d38a3198dedec30d7c33027442272c`.
- Reproduction/provenance: v2 exporter, metadata and generation JSON alongside the source.
- Read-only content reviewer verified both registrations, wall/door alignment, cutaway
  polygons, PNG hashes and preservation of v1. That review did not certify image quality.

## Validation

Integrated `check_project.ps1 -Configuration Release -Smoke` passed on a stable snapshot:
format, source structure, Release build, 419 tests / 2,367,189 assertions, assets and canonical
load smoke. Report: `build/service_court_runtime/project_checks.json`; logs:
`build/validation/project_runs/2399d0a88058415fa432e8b0cbbebb26/`.
Report SHA-256: `71B571E0D152EB0529AC8CC24AC7E8ECC9A0510834C6695412E32B0E508FDBBA`.
Executable SHA-256: `7A2D5743A84A3C80ADAA6DDAC577B86FFB04EA9B65BE8457FBEFB1F2C5647A45`.

West and east actual-renderer fixtures both completed
with exit 0: entry, facing changes, exit, reentry and second exit. Inspected west exterior
and north-facing interior, east south-facing interior and native roof show straight room
sides and working roof fading. Both fixture telemetry traces move from y=2960 outside to
y=2857.34 inside, y=2961.47 outside, y=2858.81 inside again and y=2962.93 outside;
west/east x stays at 894/2206 respectively.
Images are under `build/rectangular_building_runtime/`; these isolated fixtures do not
prove complete escape traversal. A prolonged selected-escape smoke was interrupted after
excessive runtime and is not a pass. Review 005 checks are historical for v1.
An additional actual-renderer overview completed with exit 0 in `overview/`; inspection
shows the straight-sided exterior and centered doorway. The HUD overlaps part of its upper
left corner; this image does not establish pixel-perfect art acceptance.

The matching local candidate was packaged under `build/service_court_runtime/candidate/`.
The packager's subsequent global catalog refresh failed on historical application metadata;
the local board is exported separately without refreshing unrelated bundles.

## Limits and scoped verdict

Scoped pass for rectangular registration, isolated room traversal and local technical checks.
Native texture quality, alpha/readability under crowds, human
navigation/playtests, complete Gate B/waterfront and source-only clean-checkout exports
remain unaccepted. Do not accept the complete environment or sprint from this correction.
