# Survivor weapon occlusion · concrete correction

User reproduced the defect in `build/survivor_unified_alignment/candidate/zombie_demo.exe`.
Scope: runtime slice correcting weapon occlusion through the existing full-body pipeline.
Owner: Codex Sprint 01 integration, BL-052. Preserve Codex character completion ownership,
accepted cardinal identity, zombie parts and historical packages. No additional weapon content.

## Deliverable

Replace direction-wide foreground rectangles with reviewed per-pose hand regions in authoring
metadata. Export disjoint body and foreground pixels from the same authored frame, without
repainting anatomy, rescaling directions, tinting, or constructing replacement artwork.
Their unarmed composition must reconstruct the original frame exactly. Existing runtime order
remains body / weapon / foreground, with the behind-body branch retained for back-facing poses.
Both layers use the same selected direction/action/locomotion pose and pivot.

Native inspection additionally found cardinal rear-grip offsets below their painted hands/cuff.
Calibrate all33 East/South/West Aim/Fire/moving-rifle rear attachments per pose in the bank;
North and authored diagonal data stay separate, with their remaining fit judged by actual render.

Import schema2 explicitly owns per-pose foreground regions; retain schema1 for the historical
cardinal consumer. Reject mixed shared/per-pose masks, missing direction/pose coverage, invalid
rectangles or foreground pixels without a destination. Preserve runtime schema10 and one
loader/sampler/cache/weapon transform. Integration owns schema1 retirement when historical
cardinal imports and their active consumers are retired under BL-052.

## Acceptance and evidence

- All affected Aim/Fire/moving-rifle poses have per-pose hand coverage, with no arbitrary torso
  rectangle drawn over the rifle. Review actual native layers and cached-resource renders.
- Exported layers do not overlap; their union reconstructs the authored frame's visible RGBA
  and alpha exactly.
  Validate this during normal asset checks, including metadata/atlas bounds.
- Inspect both weapon skins, all eight bearings and intermediate angles at game scale;
  retain before/after captures and full source/content/package hashes.
- Fresh stable Release check_project, matching complete package, normal/olive encounter runs.

## Important boundary to prove, not conceal

Layer ordering cannot relocate a painted hand. Fixed eight-direction arm artwork can still
lose contact with a continuously rotated rifle at intermediate angles or where the received
two-hand pose does not match the rifle geometry. Do not snap the actual firing ray to disguise
this or use debug circles as acceptance. Measure and preserve such failures for character
authoring: authored base/foreground with clean hidden torso/cuffs, compatible rear/support grips,
and intermediate aim poses or an explicitly authored aimable arm attachment. Any remaining
visible failure keeps BL-052 in Review; technical success alone does not accept held-weapon art.

Output: `build/survivor_weapon_occlusion/candidate/`, paired native/GPU angle evidence and a new
dated review. Next extension is another compatible rifle skin through the same layers/transform;
BL-053 actor/loadout binding still precedes shotgun or roster growth.
