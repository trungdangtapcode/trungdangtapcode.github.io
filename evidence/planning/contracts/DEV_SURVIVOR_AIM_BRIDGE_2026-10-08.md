# Survivor · Standing East → NE bridge for dev

2026-10-08. Character/source owner **Codex character completion**. Shared import/runtime
writer **Codex Sprint 01 integration**, BL-052; actor/loadout remains BL-053.
Deliverable: **standing-aim asset/content candidate**, four new holds extending the
[received endpoints](DEV_SURVIVOR_AIM_LAYERS_2026-10-08.md) and
[dev receipt](SURVIVOR_AIM_LAYER_DEV_RECEIPT_2026-10-08.md).
Dev can begin on the received endpoint bank and add these holds through the same consumer;
full animation authoring is not a prerequisite. Independent visual reviewer stays Unassigned.

## Exact inputs and native parts

- Four new weapon-free GPT Image sources under `art/characters/squad/survivor/aim_bridge_v1/`:
  `east_ne_09_source.png`, `east_ne_18_source.png`, `east_ne_27_source.png`, `east_ne_36_source.png`.
  Each has clean base / one trigger arm / one support arm, independently editable.
- Frozen endpoints: existing `aim_layers_v1/east_split_v1_source.png` and
  `ne_split_v1_source.png`. All six endpoint native PNG hashes match the received bank.
- Registration/import: `content/rigs/authoring/survivor_aim_bridge_v1_import.json`,
  same `authored_layer_proof` format1. Contacts/windows:
  `content/rigs/authoring/survivor_aim_bridge_v1.json`, revision1.
- Native under `build/art_authoring/survivor_aim_bridge_v1/native/`:
  `e/e09/e18/e27/e36/ne_{base,trigger,support}.png`,18 independent96×64 layers,
  pivot(48,56), point filtering, binary alpha. `body_atlas.png`:576×128; bodies row0,
  compiled foregrounds row64, columns in the table's order.
- Existing separate rifles: `art/weapons/rifle/rifle.png`,
  `art/weapons/rifle/variants/rifle_olive.png`; geometry
  `content/weapons/rifle_geometry.json`. No gun is baked into selected character artwork.
- [Four exact prompts/origins/source hashes](../../art/generation/survivor_aim_bridge_2026-10-08.json):
  built-in GPT Image, no CLI fallback. Authorized native conversion/whole-piece uniform
  registration reuses RasterFrameExport/System.Drawing; no anatomy painted by script.

New holds retain East head/identity/lower stance; NE retains its received regions.22320
declared RGBA pixels match. No new Walk, moving Aim/Fire or other direction bank is delivered.

## Contacts, ranges and order

Native pixel-center coordinates on96×64 canvas. Screen y-down; East0°/360°, NE315°.
Ranges are **actual solved barrel bearings**, not actor-ground facing.

| Hold | Barrel range | Rear grip | Support palm | Stock/shoulder | Order |
| --- | --- | --- | --- | --- | --- |
| e | 0° ±5° | (54,29) | (64.000,26.000) | (45.000,26.000) | base → weapon → trigger → support |
| e09 | 351° ±5° | (54,28) | (63.408,23.473) | (44.642,26.445) | base → weapon → trigger → support |
| e18 | 342° ±5° | (54,27) | (62.584,21.057) | (44.513,26.928) | base → weapon → trigger → support |
| e27 | 333° ±5° | (54,26) | (61.548,18.787) | (44.619,27.413) | weapon → base → trigger → support |
| e36 | 324° ±5° | (54,25) | (60.327,16.695) | (44.955,27.863) | weapon → base → trigger → support |
| ne | 315° ±5° | (54,24) | (58.950,14.808) | (45.515,28.243) | weapon → base → trigger → support |

The existing weapon grip(10,8), proposed support(20,5), stock(1,5) use the same resolved
weapon transform. Support(20,5) is opaque on both real skins. It remains an authoring proposal
for the existing geometry owner when that producer/consumer is versioned, not another live config.
Cuffs are in the packet/import; local7×7 cuff/cloth overlap21–35px. Maximum native skin-centroid
registration error0.927px. Current renderer compiles independent source arms into foreground per
checked pose/profile; this does not implement generic runtime arm aiming or arbitrary weapon fit.

## Shared boundaries and consumer integration

Neighbor overlaps1°:355–356,346–347,337–338,328–329,319–320. Preferred shared bearings:
355.5,346.5,337.5,328.5,319.5°. Six windows cover315–360° continuously; outside the sector is
not new accepted coverage. Integration owns selection through the existing full-body path:

1. Solve candidate sockets against the real projected target through canonical WeaponTransform.
   Test each candidate's actual barrel against its window; keep a complete pose snapshot for
   body, arms, weapon, muzzle and casing. Validate required coverage at the content boundary.
2. Select a valid neighboring hold; closest valid pose and previous-pose retention inside overlap
   can avoid flicker. Never clamp the authoritative firing ray, stretch limbs or move only fists.
3. Front→behind switches at e18→e27. Inspect both poses at337.5° for stock/body/hand occlusion.
   Same-barrel comparisons are supplied; do not interpolate arbitrary draw orders.
4. Only compatible scaled rear/support/stock geometry reuses this hold profile. Both rifle
   skins are demonstrated. Different holds need reviewed poses.
5. Version the existing pose/import/profile consumers once. No second renderer/animator/weapon
   loader. Diagnostic schema10 views are a private fixture, not a temporal aim animation.

## Actual evidence and reproduction

[Interactive playback](../../build/art_authoring/survivor_aim_bridge_v1/index.html) shows actual
cached-resource crops, independent parts, both rifles, native1× and same-angle boundary pairs.
[244 GPU contacts](../../build/art_authoring/survivor_aim_bridge_v1/gpu/contacts.json):
132 nominal/boundary-angle samples +20 neighbor samples +92 integer-angle sweep samples.
Maximum rear error0px, support0.910812px, stock0.827638px. The probe explicitly selects received
poses through the existing loader/resources and passes a null target for exact barrel diagnostics.
It does not install or certify the real-target runtime selector. Native layers have31 colors,
zero soft-alpha/border pixels. The current game's general asset check is separate.

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File build/art_authoring/survivor_aim_layers_v1/Export.ps1 -ImportFile content/rigs/authoring/survivor_aim_bridge_v1_import.json -OutputRoot build/art_authoring/survivor_aim_bridge_v1
powershell -NoProfile -ExecutionPolicy Bypass -File build/art_authoring/survivor_aim_bridge_v1/CheckNative.ps1
powershell -NoProfile -ExecutionPolicy Bypass -File build/art_authoring/survivor_aim_bridge_v1/MakeResourceProof.ps1
cmd /c build\art_authoring\survivor_aim_bridge_v1\CompileProbe.cmd
& build/art_authoring/survivor_aim_bridge_v1/BridgePoseProbe.exe build/art_authoring/survivor_aim_bridge_v1/preview_assets build/art_authoring/survivor_aim_bridge_v1/gpu content/rigs/authoring/survivor_aim_bridge_v1.json
powershell -NoProfile -ExecutionPolicy Bypass -File tools/validation/check_project.ps1 -Configuration Release -ReportPath build/art_authoring/survivor_aim_bridge_v1/project_checks.json
```

[Revision lock](../../build/art_authoring/survivor_aim_bridge_v1/revision_lock.json) binds source,
metadata, native layers, helper inputs and the private fixture. Older reports/locks remain
historical: generation catalogs now include the four additional sources. Endpoint source/native
and canonical geometry bytes are preserved.

## Paired encounter gate before expanding

Fresh local technical checks: **passed**,575 stable inputs,0 changed;133 tests/42,512 assertions.
[Report](../../build/art_authoring/survivor_aim_bridge_v1/project_checks.json),
[five step logs](../../build/validation/project_runs/ac310037eae64683bf8a8f86615a0ce5/),
[dated owner self-review RV-006](../reviews/2026-10-08-006-standing-aim-bridge.md).
All1841 evidence paths and575 project inputs were rechecked unchanged after validation.
These technical checks do not accept the encounter gate below.

Dev checks continuous East↔NE transition against real targets at80/120/240 units, both rifles,
aim-height projection, varying distance/view and matching shot snapshots. Review every shared
bearing in both traversal directions at actual encounter scale: no detached hands, bad stock
placement, selector flicker, frame-clock reset or unintended layer pop. Return matching
executable/bundle/source hashes and visual captures. This source preview has not passed that gate.

Only after paired integration fits and transitions look good in the encounter does character
owner expand other directions or moving Aim/Fire. Preserve existing actions, identity, moving
legs and defaults. Endpoint-only/profile-blind consumers retire at the accepted versioned selector
and matching two-skin encounter receipt, with callers migrated through the same implementation.
Status/ownership stay in BACKLOG; no parent character or Sprint acceptance is claimed.
