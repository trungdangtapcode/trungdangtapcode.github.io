# Returned rifle hold · Concrete artwork correction

2026-10-08. BL-052. Character/source owner remains **Codex character completion**;
shared integration/import writer **Codex Sprint 01 integration**. This receives the user's
two screenshots after the bridge integration. It is a targeted artwork request, not acceptance
of the current character or authorization to multiply the full roster.

## Returned evidence

- User image 1: [both hands on the same weapon side](../../image2.png).
- User image 2: [front stance reads as hugging the rifle](../../image1.png).
- [Before/after depth study and final candidate captures](../../build/survivor_aim_depth/index.html).

The bridge's existing independent sources and palms are usable for integration. Its original
recipe places both arms above the weapon. Dev's version3 import now separates the weapon-depth
planes, preserving source anatomy and sockets. That removes the forced same-plane composition;
it cannot create a correctly wrapping palm or a new shoulder/elbow pose.

The old front view has a separate problem visible in the source itself:
`art/characters/squad/survivor/full_body_v1/rifle_poses_v2_source.png`, third directional row.
The hands sit near collar/sternum with folded arms. Retained `aim`, South, pose0 uses rear palm
(46,28) and scale(0.55,1); the lower source hand lies around (50,34). Geometry can meet those
points while the pose still reads as hugging. Existing South/SE/SW views are not replaced by
the bounded NE→East bridge. Exact runtime-view correspondence of the user's second crop is
not established from pixels alone; the front source defect can be inspected independently.

## Small next delivery

The user subsequently authorizes dev to fix these poses. Integration supplements the source
receipt with selected NW/SW base/trigger/support artwork and version4 frame corrections;
see [implementation review](../reviews/2026-10-08-011-rifle-grip-correction-and-study-cleanup.md).
This addresses the two returned constructions through the existing pipeline. The prior NE/South
anatomy return, independent review and unreceived angle/action coverage remain separate.
Broader character/source ownership remains Codex character completion.

### Additional user return: NW and SW, same day

The user returns [upper-left](../../image3.png) and [lower-left](../../image4.png)
holds after the depth candidate. Dev reproduces the same problematic silhouettes at ground
225 degrees (NW) and 135 degrees (SW), distance120, stationary Aim, using the actual candidate
resources. These sample `aim`, West, view3 and view2 respectively, with no received weapon hold.
Moving Aim/Fire also retain `moving_rifle`; exact movement/tick in the screenshots is unknown.
[Full-circle resource reproduction](../../build/survivor_aim_return_010/index.html) and
[selection metadata](../../build/survivor_aim_return_010/gpu/cases.json) show both skins,
stationary/moving Aim/Fire and distances80/120/240. This is diagnostic evidence, not a fix.

**Prioritize one corrected NW and one corrected SW construction before expanding the bridge.**
Add `nw_split_source.png` and `sw_split_source.png` to the same correction directory/packet
below; do not create a competing character bank or overwrite the shared runtime import.
The earlier NE and South return remains required. NW may reuse a mirrored corrected NE source
only after actual pixel-center mirrored contacts, layer order, cuffs and both rifle composites
are reviewed. Mirroring the current bad grip is insufficient. SW needs a corrected three-quarter
front hold, rather than the current folded arms or a rotated copy of a back-facing stance.

For these two returned directions, show trigger-hand fingers around the grip and a support palm
under the actual fore-end, with authored above-weapon fingers wherever needed. Keep the shoulder,
elbow and wrist connected and the receiver/barrel readable. Deliver weapon-free layers and both
real-rifle compositions, native1x/4x, with exact valid barrel windows and contacts. Dev will replace
the corresponding historical consumers only after these fits are received; moving holds require
their own compatible frames/leg composition evidence. A stationary two-pose receipt alone does
not close moving or full-circle acceptance.

The original requested pair is **one corrected NE hold and one corrected front/South hold**, with real normal
and olive rifle construction previews. Preserve head, brown hair, face, scarf, clothing,
backpack, lower stance and native pixel density. Expand intermediate views only after these
two silhouettes and their fit are received; keep the previous accepted identity corrections.

Use an additive receipt so the shared runtime import has one writer:

- Source/editable parts: `art/characters/squad/survivor/aim_grip_correction_v1/`;
  `ne_split_source.png` and `south_split_source.png`, with any actual authored occlusion masks
  or below/above-weapon plane sources beside them.
- Design contacts/revision/source selection: `content/rigs/authoring/survivor_grip_correction_v1.json`.
  Integration updates the canonical runtime bank/import after receiving this packet.
- Generated native output/assembly previews: `build/art_authoring/survivor_grip_correction_v1/`.
  Native character canvas is 96×64, pivot(48,56), current palette, RGBA/binary alpha and point
  filtering. Include weapon-free independent parts and actual-weapon composites at 1× and 4×.
- Preserve the existing character/content identities. Record actual cuff/palm/shoulder landmarks,
  pose scale and valid barrel interval in the packet; alpha bounds are not anatomical markers.

| Required correction | Actual artwork/metadata to deliver | What must read at native scale |
| --- | --- | --- |
| Two-handed grip | Weapon-free clean base plus independent trigger/support arms, editable layers; explicit below/above-weapon composition or authored occlusion splits | Trigger hand wraps the pistol grip; supporting palm bears the fore-end from below/opposite side; visible wrist/finger contour distinguishes both contacts |
| Front stance | Reposed shoulders, upper arms, elbows and wrists; not only relocated palms | Stock meets a real shoulder rather than neck/central sternum; trigger elbow supports the raised weapon and support elbow reaches the fore-end; relaxed, distinct arm silhouettes |
| Hand wrapping | Source parts or authored depth masks/plane exports where one hand crosses weapon depth | Enough supporting-hand pixels remain visible to read the grip; hiding the whole palm behind the gun does not pass |
| Compatible rifle fit | Rear palm, support palm, stock/shoulder and cuff landmarks; pose scale, valid actual-barrel interval and ordered planes | Both existing rifle skins fit the same declared geometry; cuffs meet clothing, wrists attach to forearms, palms contact opaque intended grip areas |
| Front/diagonal projection | A front and a three-quarter construction reference at the intended camera/scale; state any needed foreshortened weapon artwork/geometry | The gun projects out from the shoulder toward the aim; its receiver/barrel and hands do not collapse into the face or central torso |

Canonical weapon geometry remains `content/weapons/rifle_geometry.json`: grip(10,8),
support(20,5), stock(1,5), muzzle(35,5), ejection(16,7), axis East, declared left flip.
Compare the scaled rear→support and rear→stock vectors against these real points. Review
construction with the actual textures, not a painted surrogate gun. A new perspective weapon
asset requires its own geometry receipt through the existing weapon interface; do not silently
stretch or replace the canonical geometry to force a bad body pose to fit.

## Integration boundary ready for the receipt

Player still uses authored full-body poses with weapon-depth overlays; zombie parts are
unchanged. Runtime already draws the below-weapon row, separate weapon and above-weapon row
from one pose snapshot. No new character state machine is needed for these visual fixes.

Current import version3 can route whole received base/trigger/support pieces into those rows.
If a palm needs pixels on both sides, hand over the actual editable split/mask or the two
authored plane exports along with the independent source arms. Integration will extend the
existing exporter for that concrete receipt and retain the same runtime atlas/sample. A
whole-arm depth assignment is not a permanent ceiling or a claim of arbitrary hand IK.

Review the two new poses weapon-free, assembled on both skins, and at the edges of their
actual-barrel windows. Return source/revision, native RGBA PNGs, contact/order metadata and a
native-size comparison against the user's screenshots. Then dev validates the received poses
in the encounter before either side expands the bank. BL-052 and independent visual acceptance
remain open; status stays in BACKLOG.
