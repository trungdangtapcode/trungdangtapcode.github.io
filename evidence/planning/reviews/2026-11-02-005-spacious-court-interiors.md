# Service Court spacious interiors and separate dressing

Scope: integrated runtime slice for the expanded Service Court, not whole-map art or Sprint
acceptance. Integration owner: Codex Sprint 01 integration. Art contributors authored bounded
interior, freight and detail packets; a separate contributor reviewed two inspection previews.
This follows [review 004](2026-11-02-004-court-light-wiring-and-interior-rejection.md).
Source art is preserved in `26251ad`; the motor-light wiring fix is `385098d`.

## Integrated behavior

- The continuous Tiled world is 3840 x 4096. The west electrical workshop has two working
  doors. The east 1536 x 1536 registered security building contains an archive, office, lobby
  and service corridor with south and west exterior access. Both control interactions,
  Gate A crossing/close, Gate B and coastal extraction retain the existing mission pipeline.
- Twelve independent small interior PNGs, four exterior detail PNGs and four freight PNGs
  supplement retained assets. Desks, chairs, shelves, lockers and equipment use authored
  footprints; surface papers/wall details do not create movement blockers. Rooftop equipment
  shares the building cutaway. Props are decorative; world loot is not implemented.
- Six existing security defenders choose office, archive and corridor anchors. The count,
  trigger, weapon tuning and gate waits are unchanged. Clearance covers the enlarged building.
- Ten authored court lamps activate through Gate A's event, using the existing light profile
  and occlusion. They do not grant unconditional sight across the whole yard.
- Tiled floor layer 18 precedes the world props, and roof groups 19/21 explicitly draw their
  roof before its fixtures. The initial new raster exposed incorrect ordering; corrected
  crops now show the furniture and rooftop equipment.

## Measurements and evidence

The four visually traced floor regions total 1,413,782 square units before collision. An
8-unit sampling grid with an 8-unit circular player clearance estimates 1,210,368 usable
square units (85.61%); each region has one four-connected sampled component. The main
entrance gap is 152 units, west exit 126, office/lobby 177, archive/corridor 187 and
lobby/corridor 192; nominal corridor width is 185. These are geometry estimates, not crowd
combat or human wayfinding acceptance. Office/lobby depth is 427, below the proposed 448.

Focused real-World regressions passed 3 tests / 687 assertions. They exercise both full
routes, the short profile, real-map motor lights under four bearings, and retry. The expanded
routes retain individual stall limits. Smoke-setup schema 4 adds a bounded encounter-only
frame allowance: 24,000 for these routes versus the legacy 12,000. Canonical stress remains
240 frames with its original requirements; no gameplay was altered to meet a QA deadline.

The isolated native probe traversed the rooms, drove both gate states, and checked visible
closed Gate A from the north and away. Its report ends `result=passed`. Captures settle the
loaded roof fade duration before three repeated snapshot presentations. This corrects early
probe pictures taken before fade completion; it does not change runtime roof behavior.
Waves are disabled in this isolated probe. The selected encounter smokes must separately
exercise authored pressure.

Artifacts: [review board](../../build/service_court_indoor_revision/index.html),
[geometry measurement](../../build/service_court_indoor_revision/space_metrics.json),
[native source receipt](../../build/service_court_indoor_revision/native/source/receipt.json),
[native source trace](../../build/service_court_indoor_revision/native/source/gate_probe.txt),
[Tiled receipt](../../build/service_court_indoor_revision/tiled/receipt.json), and
[independent visual notes](../../build/service_court_indoor_revision/visual_review.md).
Receipts bind evidence to actual content hashes; source captures are development evidence.

## Remaining findings and verdict

The independent visual review finds the archive rows too regular, the corridor sparse and
the security interaction insufficiently identifiable from the dark office capture. Furniture
clusters and wall/surface attachments need another art pass; additional count alone does
not satisfy that gate. Root inspection confirms the new interiors and props render, roofs
settle, motor lights appear and the closed gate remains visible. It does not accept the
entire large-map composition. PNG alpha, joins and slight roof/base bound differences need
bounded exact-pixel review beyond the lossy inspection previews.

**Technical follow-up:** [review 007](2026-11-02-007-indoor-candidate-handoff.md) records the
fresh stable 473-test snapshot, both packaged routes, native probe and bundle identity.
**Visual/human gate: needs further review.** BL-098 remains In progress and BL-104 remains
Review; current status/owners and next actions stay in BACKLOG. Human navigation, pressure,
combat readability, broad performance and whole-map completion are not established here.
