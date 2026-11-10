# RV-20261109-001 - Flush Building C wall joints

## Snapshot and responsibility

Date: 2026-11-09, Asia/Saigon. Root owns this authoring correction, integration and
visual self-review under BL-122. No implementation is delegated. Base: `a9eed60`.
This re-reviews [RV-009](2026-11-08-009-building-c-shared-wall-repair.md) after the user
rejected the ornamental column still covering a shared classroom wall.

Deliverable: integrated editable-Tiled authoring slice. It is not a playable
multi-floor runtime candidate. The original image sources, stable room IDs and
site layout are preserved. Unrelated AGENTS.md and todo.txt changes are excluded.

Source map SHA-256:
`607f5dcc4830340bc1983b1ec747bd730066433f3d8536d45e88632c947cc4ad`.
F0 before-render SHA-256:
`32c29c7507415c0de461ab2ee0624a164d9581d9a25103565c315cb7721f08f0`.
F0 corrected-render SHA-256:
`cc231c52608741eb49a0ff21d6decfffe26ae11f19b997ae605cc51e3f55e227`.

## Findings and correction

### F-01 - P1: an ordinary wall junction was treated as a decorative column location

`floorplan/Rooms.ps1` previously placed the capped/base column at both north-wall
endpoints of every room. `SharedWalls.ps1` additionally placed a shorter version at
foreground endpoints. Deduplication and correct pivots did not make that separate,
ornamented prop compatible with a flush school partition. The user image identifies
this remaining visual defect; prior numeric checks did not approve its appearance.

Both automatic placement paths are retired. Existing side returns remain at normal
room ends. Shared north headers use the same authored face family as their neighboring
wall bands, with no separate column cap or base. Shared foreground wall faces use
the existing mass family. No new bitmap, primitive-built wall or unrelated asset bank
is introduced. Original column source files and registrations remain preserved.

### F-02 - P2: previous tests proved attachment coordinates, not suitability

The old support checks expected a column at each computed endpoint. They could pass
while certifying the unwanted object. Schema 5 instead declares the flush joint style
and the two rejected support asset IDs. Validation resolves the actual tile GID to its
asset identity, so relabeling the object class does not bypass rejection.

The dedicated `wall_joint_faces` layer is above caps but restricted to the projected
north-wall plane. Its exact face GIDs, allowed cells and visibility are checked.
Foreground joints are checked in their existing skirt layer. This preserves the
different responsibilities of cap topology, projected face height and logical footprint.
The intrinsic cap-edge checker remains scoped to its native cap images; it does not
claim to validate the final composition by itself.

## Integrated behavior and nearest extension

Projection schema 5 replaces the removed foreground support fields with
`wall_joint_style: flush_plaster` and `rejected_wall_support_assets`. The constructor
requires this version explicitly; module import still preserves historical source
families. Runtime APIs, simulation, rendering engine and game packaging profiles are
not modified by this authoring correction.

`Get-BuildingSharedWallFaces` uses the existing shared-outline plan. A through-header
gets its north-face rows; an exposed shared foreground edge gets ordinary skirt rows.
Outer side returns retain their compatible current cap art. There are 30 projected
north-joint cells and eight shared foreground face cells per floor, with 90 north-joint
cells across F0/F1/F2. No automatic support overlay remains. All 42 room regions and
their configured doors/windows stay in the same layout.

The nearest extension is the different classroom and west/east WC geometry, already
consuming this planner on all three floors. A focused pure-plan test also changes
north-face height from two to three rows and selects the authored middle face; it
does not claim that all other room tuning is automatically valid at a new height.
Unsupported cross/recessed/shared-door layouts remain under the existing BL-122
extension gap. No second room-wall pipeline or general engine rewrite is introduced.

## Actual validation

- Existing Tiled construction and native rasterizer rendered all three floors.
- The integrated map checker passed with zero errors on the source hash above:
  876 images, 571,200 tile GIDs and 2,329 tile objects.
- Focused shared-outline/face tests passed, including door exclusion, parallel-run
  separation, iteration/translation invariance, missing-art rejection, all three
  current face planes and a taller north-face plan.
- Existing eleven window-mount cases and five straight-divider module cases passed.
- Root inspected the corrected classroom with actor and the west WC shared header.
  The decorative capped/base object is gone; wall face bands continue through the
  shared cell. Classroom/actor crops were inspected on F0/F1/F2, and the new browser
  board passed eight image loads, three local links and desktop/mobile overflow checks.

Targeted negative tests inject the rejected original column with a generic object
class, delete a projected shared face, place a face outside its allowed wall plane,
and substitute a valid but wrong cap branch. These checks target the actual defect
and its boundary; earlier unrelated regression reports are not relabeled current.
All five targeted negative cases passed on this source hash. The draw-order case
moves the joint faces below caps and is rejected explicitly. The aggregate verifies
the mutated fixture hashes and expected diagnostics, including the injected old
column's resolved asset ID rather than its generic object class.

The final integrated map check and intrinsic native cap check also passed: zero map
errors, 315 shared cap cells, 684 directed cap seams and 16 registered native ports.
These intrinsic cap measurements are distinct from the checked projected-face layer.

Local evidence is under `build/uit_wall_faces_20261109/`: before/after native crops,
`receipt.json`, the review board, map check log and targeted regression log. Current
map and render receipts remain in `build/uit_building_c/`. Generated output stays
outside Git. Current scope-specific reports:

- [Final map check](../../build/uit_wall_faces_20261109/final_map_checks.json).
- [Intrinsic native cap check](../../build/uit_wall_faces_20261109/cap_art_checks.json).
- [Five corruption regressions](../../build/uit_wall_faces_20261109/negative_checks.json).
- [Before/after identity and zero-overlay count](../../build/uit_wall_faces_20261109/receipt.json).
- [Eight-image browser check](../../build/uit_wall_faces_20261109/checks.json).

The local project entry passed with exit 0 on a stable snapshot:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File tools/validation/check_project.ps1 -Configuration Release -ReportPath build/uit_wall_faces_20261109/project_checks.json
```

Format, source structure, Release build, 577 headless tests / 2,586,558 assertions,
and default packaged-asset checks all returned exit 0. `changed_inputs` is empty.
This is a local technical gate; no CI was run or enabled. Evidence:
[JSON report](../../build/uit_wall_faces_20261109/project_checks.json),
[entry log](../../build/uit_wall_faces_20261109/project_checks.log),
[build log](../../build/validation/project_runs/ae5bd89d654142bb8098782ba33ebab3/build.log),
[headless log](../../build/validation/project_runs/ae5bd89d654142bb8098782ba33ebab3/headless_tests.log),
[asset log](../../build/validation/project_runs/ae5bd89d654142bb8098782ba33ebab3/assets.log).

The project entry validates the ordinary game package. The separate Tiled/map/face,
native-cap, corruption and browser checks above establish this specific authoring
slice; the general gate is not substituted for actual campus render inspection.
The structure gate reports 529 owned C++ files, zero blockers and 25 existing review
notices. The issues array matches the previous passing project receipt exactly.
Root retains those pre-existing notices under their current owners; this correction
adds no C++ file and does not resolve unrelated module-size reviews.

## Scoped verdict and handoff

The automatic ornamental support model is rejected for these Building C walls.
The corrected inspected authoring assembly uses flush plaster faces. BL-122 remains
in Review for broader visual acceptance, and BL-123 still owns floor-aware traversal
and interaction. Technical results do not imply human art approval, lighting/FPS,
co-op, collision or playable campus acceptance.

Current review entry: [native before/after and all three floors](../../build/uit_wall_faces_20261109/index.html).
The earlier support-placement implementation is retired, rather than kept as a
hidden fallback. Future structural columns need explicit architectural placement and
compatible school artwork, with the existing source preservation and assembly gates.
