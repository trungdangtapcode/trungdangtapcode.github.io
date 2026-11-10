# RV-20261108-009 - Building C shared-wall repair

## Snapshot and responsibility

Date: 2026-11-08, Asia/Saigon. Root owns implementation, original art generation,
integration and visual self-review under BL-122. A bounded worker audited the old
contracts, implemented only `test_shared_wall_plan.ps1`, and reviewed the integration
read-only. No runtime engine implementation was delegated.

Base: `5bcd60a`. Re-review of [RV-008](2026-11-08-008-wall-autotiling-research.md).
Deliverable: **integrated editable-Tiled/content authoring slice**, not a playable
multi-floor runtime candidate. Unrelated AGENTS.md and todo.txt changes are excluded.
BL-123 still owns the unimplemented floor-aware runtime.

Source map SHA-256:
`dfeb559306d92742c216443f387845cbe0ddd64841b45f5d827555028fbc3e68`.
The source/render receipt and before/after board live in
`build/uit_building_c/wall_review/`. All generated output remains outside Git.

## Problem and resulting behavior

The previous shared-cap shortcut replaced two room corners with a horizontal tile.
That removed the vertical branch at the shared wall's top and bottom. A separate
gallery-offset placement also left foreground columns detached below the wall.

The same locations now use actual authored T-junctions and a centered shared
partition. Foreground supports fit the projected cap face and skirt. Two west WC
rooms also use the same shared-wall assembly: their common header has one north
face rather than a second foreground skirt/support drawn over it. Room doors,
window mounts, actor scale, dressing, floor voids and the accepted site layout remain.

This repair is deliberately narrower than arbitrary automatic wall authoring. The
existing outer cap/face families still describe single-room framing; the new shared
connection family covers the six shapes actually required by coincident room outlines.
There is no new renderer, generalized engine or claim of a universal complete tileset.

## Changes and ownership boundaries

1. `floorplan/SharedWalls.ps1` computes each room's outline minus actual door portals,
   determines its cardinal connections, and unions contributions at shared cells.
   The result is sorted and independent of room enumeration order. Adjacent but
   distinct parallel outlines do not acquire false perpendicular connections.
2. The duplicate-endpoint straight-cap shortcut is removed from RpgArchitecture.
   Shared cells select their registered connection image, and a missing combination
   rejects construction. Corner-occupancy masks remain separate from N/E/S/W bits.
3. Projection schema 4 owns the shared connection family and foreground attachment
   contract. The builder explicitly rejects older projection recipes with a migration
   message rather than accepting them and failing later on v4-only fields. This fixes
   a defect found during read-only integration review.
4. The existing import/export and Tiled collection pipeline gains an `RPG shared cap`
   edge Wang set. The other cap/face/mass sets keep their corner metadata. Cap
   connection metadata uses `cap_connection_mask`, preserving the hidden footprint
   guide's separate alpha-based `connection_mask` contract.
5. Foreground supports come from wall geometry and the registered face start/height,
   replacing the gallery-offset formula. Their short image is exported from existing
   original column artwork; it is not a new generated column design. Shared horizontal
   walls omit redundant foreground supports while retaining their north-wall supports.
6. Map validation now checks the exact shared-cap GID, not just membership in a valid
   terrain family. A valid upward T cannot silently replace a required downward T.
   The focused native checker also verifies structural ports, connectivity within
   each image and trim overlap with the actual neighboring native cap image.

The native trim check deliberately uses this bank's configured blue-gray palette
predicate. It establishes structural continuity within that scope, not generic visual
quality, identical colors across every textured edge, correct lighting or gameplay.
The current recipe uses exterior doors, not doors piercing a shared room partition.
Before introducing the latter, root must establish common portal ownership and prove
both room consumers keep the opening clear. This extension gap is recorded in BL-122;
the current planner is not presented as a complete arbitrary-layout wall editor.

## Original artwork and nearest extension

Root used the built-in image tool and the project's original school-wall source as
the material reference. Source, exact prompt and generation receipt are preserved in
`art/environment/uit_school_junctions_v5/`. No RTP/Haunted School artwork is copied.

The source plate is 1254x1254. Its six panels have calibrated square source regions,
not an assumed equal square grid. Registration retains the original source canvas
for each region; native ports remain at their intended edges. The new native parts
are two shared repeats and four T orientations, each 32x32. Existing 17 wall images
are preserved. The combined bank also registers one 16x43 foreground-support size
adaptation from the existing column source, for 24 images in total.
Original source SHA-256:
`6572a24aac1ef1e4daa170285809dafea1ef31c65364818c582e9a5215557271`.

The nearest extension is demonstrated by actual classroom partitions, two compact
east WC partitions and the west WC shared horizontal header/side junctions on all
three floors. These different room dimensions use the same planner, imports and
presentation layers. No room-specific coordinate patch or duplicated wall pipeline
is introduced. A future unsupported shared shape must supply compatible authored
art and coverage before use; a cross/recessed shape is not claimed from these six parts.

## Validation and evidence

| Scenario | Evidence and scope |
| --- | --- |
| Original artwork export | Existing exporter produced the combined 24-image bank; source hashes, dimensions and palette checked |
| Map reconstruction | Existing constructor produced 42 room regions and three aligned floor groups |
| Native Tiled renders | Existing rasterizer rendered F0/F1/F2; receipt binds images to the source hash above |
| Shared-outline behavior | Focused tests cover all current six masks on all floors, order/translation invariance, parallel runs, door exclusion and missing-art rejection |
| Native shared seams | 315 shared cells, 684 directed seams and 16 registered ports passed the first integrated native check |
| Map corruption regressions | All 11 expected corruptions were rejected, including a valid-but-wrong T tile, a missing shared body and a detached foreground support |
| Visual self-review | Inspected actual north/foreground junction crops, west WC header, classroom with actor and original openings; no claim of whole-campus art approval |
| Existing mount/module regressions | 11 window-mount and 5 straight-divider module cases passed |
| Schema migration boundary | A schema 3 recipe was rejected with an explicit migration diagnostic before any map was written |
| Native missing-branch fault | A separate build-only bank substituted the existing horizontal image for the downward T; the native checker rejected its missing south port, without changing production pixels |
| Browser review boards | Main board: 60 images, 69 local links, floor/filter controls; comparison board: 8 images and 3 links. Both passed at desktop/mobile widths with no overflow |

Current local reports and logs:

- `build/uit_building_c/checks.json`
- `build/uit_building_c/shared_wall_art_checks.json`
- `build/uit_building_c/wall_regression_summary.json` (current eleven-case aggregate)
- `build/uit_building_c/rpg_checks/selected_regression_summary.json` (resumed six-case run)
- `build/uit_building_c/wall_regression.log`
- `build/uit_building_c/wall_regression_resumed.log`
- `build/uit_building_c/render_receipt.json`
- `build/uit_building_c/wall_review/receipt.json`
- `build/uit_building_c/board_checks.json`
- `build/uit_building_c/wall_review/checks.json`
- `build/uit_building_c/wall_review/contract_checks/checks.json`
- `build/uit_building_c/wall_review/missing_trim/test_result.json`

The daemon interrupted the negative-regression run after five cases had completed.
Those completed reports were preserved; the remaining six ran through the same driver
with `-CaseNames`. The aggregate verifies each mutated fixture's hash and expected
diagnostic. It is not the older eight-case summary left by the previous source map.
The resumed shell wrapper inherited the final intentionally rejected fixture's exit 1
despite six passing cases; the driver now explicitly exits 0 after a successful suite.
No checker result was converted from failure to pass: the fixtures are supposed to fail.

Executed local project handoff command:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File tools/validation/check_project.ps1 -Configuration Release -ReportPath build/uit_building_c/wall_project_checks.json
```

Result: **passed, exit 0**, with zero changed inputs across the integrated snapshot.
Format, source structure, Release build, headless tests and default packaged-asset
checks all returned exit 0. Headless output records **577 tests and 2,586,558 assertions**,
all passed. The build/export and test jobs ran serially; no CI was run or enabled.

Evidence: [technical JSON report](../../build/uit_building_c/wall_project_checks.json),
[entry log](../../build/uit_building_c/wall_project_checks.log),
[build log](../../build/validation/project_runs/efc1e76dcbb1407fa9bb8e533b6f5321/build.log),
[headless log](../../build/validation/project_runs/efc1e76dcbb1407fa9bb8e533b6f5321/headless_tests.log),
[asset log](../../build/validation/project_runs/efc1e76dcbb1407fa9bb8e533b6f5321/assets.log).

The project entry checks the ordinary game/package as a local technical gate; the
manual Building C constructor, map, native seam and browser checks provide the
specific campus-authoring evidence. No native campus playtest, load smoke, lighting,
FPS, co-op or floor-aware combat/traversal acceptance is inferred from this report.

The local structure checker reports 529 owned C++ files, zero blocking issues and
25 review notices. Its folders/issues/skipped-links arrays match the previous
connector/planter structure receipt exactly. Root's scoped decision is to retain
those pre-existing notices under their current owners; this authoring change adds
no C++ file and does not expand or resolve those unrelated module-size reviews.

## Scoped verdict and handoff

The inspected classroom and WC shared-wall discontinuities are repaired in the
editable authoring slice. Whole-building visual acceptance, player feedback,
runtime floors/stairs, lighting and real collision remain separate gates. BL-122
stays in Review. Unsupported shared shapes remain explicit missing art; the old
straight-cap fallback is retired for the active schema 4 consumer.

The next increment should preserve this source snapshot and finish floor-aware
runtime proof under BL-123 before claiming the campus is playable. Do not grow new
room/wall banks past unverified shape coverage. The user can review actual before/
after crops and every floor at `build/uit_building_c/wall_review/index.html`, or the
full map at `build/uit_building_c/index.html`.
