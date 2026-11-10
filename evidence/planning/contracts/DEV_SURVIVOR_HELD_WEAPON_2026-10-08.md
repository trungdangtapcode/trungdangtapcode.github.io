# Survivor held-weapon boundary replacement

2026-10-08 · BL-052 · implementation/integration owner: Codex Sprint 01 integration.
Deliverable: runtime slice for rifle Aim/Fire, stationary and moving. Character completion
ownership remains Codex character completion; this does not accept the whole character/Sprint.

The user returned `image7.png` after East/SE frame repairs. Those repairs left an independent
rotating rifle against frozen hands, with a different moving consumer. The user authorized
replacing that boundary and calibrating source artwork directly. This supersedes the earlier
bridge-only expansion restriction for this repair; it does not authorize shotgun/roster growth.

## Source and compilation

- `content/rigs/authoring/survivor_held_weapon_v2_import.json`: import6, revision7;
  eight authored anatomy registrations, native cuff/contact anchors, hand extraction regions,
  perspective scale, explicit reflection and weapon-plane order. Values live here, not C++.
- Existing East/NW anatomy and new North/South/SE source:
  `art/characters/squad/survivor/held_weapon_v2/directional_parts_source.png`.
  SW uses reflected SE anatomy; W/NE reflect compatible source registrations.
- `art/generation/2026-10-08-survivor-held-weapon-v2.md`: exact built-in GPT Image prompt/receipt.
- Canonical rifle geometry remains `content/weapons/rifle_geometry.json`; normal/olive skins
  share it. The importer derives support/stock offsets from that owner.
- `export_weapon_holds.ps1` dispatches import6 to `WeaponHoldBake.ps1`, reusing
  `WeaponPartImport.ps1` and `RasterFrameExport.cs`. Authored hand regions follow the same
  affine registration as sleeves; sleeves and palms can occupy different weapon planes.
- Generated atlas and schema12 metadata live only in `build/`. They retain original head,
  legs and other action clips, append complete held frames, and bind the existing candidate
  manifests. Runtime continues using the existing cache, sampler, resolver and renderer.

The bank samples the full circle at the source-configured step/window. Each hold owns body,
foreground, grip, support, stock, scale and reflection together. Its moving_rifle frame array
uses the original six frame indices; selection never resets or substitutes the locomotion clock.
Compiled frames are authored pixels, not runtime lines/rectangles/IK-generated anatomy.

## Schema12 and consumers

`schemas/character_weapon_holds_complete.schema.json` documents the new bank. Loader validates
full-circle coverage including the seam, Aim/Fire stationary/moving bindings, explicit `flip_x`,
canonical geometry agreement and matching per-clip frame counts/bounds. Schema11 remains the
historical partial standing bridge contract for fixtures and archived candidates.

`select_weapon_hold` chooses the complete pose using the muzzle-resolved target direction.
`CharacterSample` freezes its hold and any explicit close-target facing decision.
`resolve_character_pose` selects body/foreground from the same sampled moving frame.
`AssetResources::mount_weapon` is the single policy point for reflection and close-target
projection; drawing, muzzle/ejection and frozen shot feedback share that mount.

A cursor inside the assembled weapon envelope may have no compatible forward muzzle ray.
The selector first tries valid reachable holds, then a compatible unreachable hold; if necessary
inside the geometry-derived envelope it retains continuous facing with an explicit
`weapon_facing_only` snapshot. It never reuses historical arms. This is a presentation limit,
not a change to authoritative simulation aim/damage. Ordinary-range targets must retain exact
forward muzzle-ray alignment; absent coverage there is a resource error, not silent fallback.

## Validation and migration limits

- Complete-bank regressions sweep actual targets through360 degrees, Aim/Fire, standing/moving,
  near/ordinary ranges and both skins. They verify the sampled clock/frame, reflection, support
  drift and muzzle ray, and reject incomplete banks.
- `check_complete_weapon_holds.ps1` independently recomposes every compiled static/moving plane
  from authored source layers. The standard asset entry also checks RGBA8/binary alpha/palette.
- Maintained `character_preview --layout ... --report ...` captures the shared renderer and
  writes typed pose/socket telemetry. It is not another renderer or private sampling implementation.

Retirement trigger: accept this scope against a matching executable/bundle and visual matrix,
then promote its two manifests and remove legacy live held-weapon consumers. Historical fixture
metadata/reviews can remain clearly labelled. Reload/melee/death and unrelated character gates
remain their owners' existing scope. BL-053 remains the required boundary before a different
weapon geometry or another playable character. Status and evidence belong in BACKLOG and the
dated review; a technical pass does not close visual acceptance.

## Concrete remaining character-owner input

The packaged short encounter capture reaches Reload and still displays the inherited reload
art/mount. Reload/Melee are not bound to this Aim/Fire bank. Do not present this candidate as
repairing every armed state, or replace those actions with a static Aim pose to hide the gap.

Character completion retains ownership of the following source receipt. Integration needs:

| Action | Authored input needed | Integration/acceptance after the current hold review |
| --- | --- | --- |
| Reload | Gun-free body planes, near hand at rear grip, other hand at magazine/removal/insertion contacts for each phase; separate magazine artwork if visible; matching directional/pose grip, stock, allowed bearing and reflection | Retain simulation reload duration; render remove → insert → settle through the same sampled pose/mount, with no old-arm fallback or hand inside receiver |
| Melee | Directional anticipation/active/recovery planes and hand/weapon contacts per phase; explicitly state rifle retained/slung and the authored held item | Preserve authoritative contact marker and moving leg clock; prove the visible contact through the same frame/socket snapshot |

Source parts/native frames and their authoring registration must accompany the receipt, not
only storyboard coordinates. Supply the same character identity/palette/96×64 canvas and
feet pivot as the current bank. Integration must extend the existing resolved-pose boundary
when per-phase contacts require it, not add another renderer or force these actions into Aim.
The current bank and this request do not claim those missing source poses have been authored.
