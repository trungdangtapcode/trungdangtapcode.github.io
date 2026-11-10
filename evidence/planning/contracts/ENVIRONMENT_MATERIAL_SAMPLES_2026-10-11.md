# Material texture + variant · first design/dev receipt

User return: [material texture request](ENVIRONMENT_MATERIAL_TEXTURE_RETURN_2026-10-11.md).
Scope: **authored source/native material samples**, extended to variants at the user's request.
[Review native samples, repeats, actors, source/export/package and patch pan](../../build/environment_material_review/index.html).
This is material-direction receipt before full transition bank, not full map acceptance.

## Delivered artwork and authoring

- art/environment/tiles/material_samples_v1/generation.json:13 retained GPT Image builtin
  sources,11 selected; exact prompts/original paths/hashes, including two initial edge returns.
- content/maps/material_review: one palette per material, explicit nearest crops, native_style2
  using existing palette_path, materials.tsj and material_review.tiled-project.
- tile_contract.json defines stable IDs, roles, native32px, legal uniform edge signatures.
  Original asphalt/concrete/paving edge colors and corner geometry remain compatible.
- Three base variants per material, not mirrored duplicates; asphalt_patch/concrete_wear
  are rare authored placements. Current native texture pixels differ: asphalt37–59/1024,
  concrete21–215/1024; paving block interiors/joints remain recognizable. This count is
  not a quality score. Palettes preserve3–4 actual tones per tile, not three total colors.
- *_repeat.tmj: one sample repeated4×4; *_mixed.tmj:20×12 saved mixed patches with at most
  two special wear cells. Concrete favors the quiet variant; broad plain-value areas retained.
- Joined/A/B TMJs retain accepted old corner geometry and concrete buffer. **Transition
  artwork is still flat** in this first packet; do not accept it as a fully textured bank.
  Gameplay/Collision objects are unchanged. No user A/B choice or default change inferred.

All source art is preserved. Export uses existing extract_street_tiles, ModularRasterExport
palette normalization and CopyPixels; no procedural texture, source painting or new renderer.
GPT edge-only revisions did not fully solve perimeter values; palette spacing was adjusted
after measuring native RGB and retaining the material clusters. Current palettes are canonical
in content/, exact generation prompts keep their original values for honest provenance.
Source pixels shown in the review are the actual nearest32px samples before quantization.

## Dev can reproduce and inspect now

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File tools/assets/export_palette_tiles.ps1 -StylePath content/maps/material_review/native_style.json
powershell -NoProfile -ExecutionPolicy Bypass -File tools/validation/check_material_tiles.ps1
powershell -NoProfile -ExecutionPolicy Bypass -File tools/assets/export_tiled_assets.ps1 -OutputDirectory build/environment_material_review/candidate/assets/world -ManifestPath content/maps/material_review/package.json
powershell -NoProfile -ExecutionPolicy Bypass -File tools/validation/check_material_tiles.ps1 -PackageRoot build/environment_material_review/candidate/assets/world
```

Palette-aware checker validates all11 opaque tiles against their own palette, retained
texture pixels, atlas pixel equality and nonduplicate native variants. It no longer assumes
three total colors;82 compatible directed same-material variant pairs have uniform matching
edges. Historical flat checker remains historical. It cannot receive this textured content.
Existing package-manifest exporter already stages native dependencies and invokes the adapter;
the shared integration script was reused without edits/competing ownership.

Ten official Tiled raster/export-map roundtrips exit0, saved GIDs unchanged. Existing game
TileMapResources matches1,695,744 RGBA pixels across8 fixtures, including88 transforms.
Two actor resources appear on every4×4 sample; large mixed/scene previews use actual existing
cache/camera. Historical static helpers were reused; no new private probe was implemented.

Playable optional candidate: build/environment_material_review/candidate/play_a.cmd / play_b.cmd.
Both staged maps were run from Windows Temp through matching completion content/presentation:
exit0 each,9501 ticks,peak17,272 shots,148 deaths,1 blast,HP100,empty error logs.
Combat/setup/gate/final captures and argument receipt live under build/environment_material_review.
The preview's raster pan is explicitly a browser study, **not gameplay scrolling footage**.
Human moving/camera/readability acceptance still requires review of the executable.

Fresh local check_project report/logs and source/native/package revision accompany the final
closure below. Technical pass is separate from art/readability; source atlas quality alone
does not receive this material direction. Do not quote a running/old report as acceptance.

## What to receive before finishing the bank

Inspect32px and the mixed patch: asphalt is quiet clustered aggregate; concrete is calmer
smooth wear; paving has a regular laid-surface rhythm. Paving can still expose tile-period
rhythm on a broad uniform patch despite lower joint contrast. Decide whether it should be
quieter or used only as an accent zone. No independent visual score/approval is claimed.

After the user/art reviewer receives the directions: texture six existing templates per pair
while preserving masks/geometry, prove legal transformed seams with the same concrete, then
receive packaged movement/combat/scrolling. Add variants only where repetition requires them.
Do not multiply districts or promote the flat transition band as production art.

BL-029 Codex asset preparation retains source/inventory; BL-024/S01-12 Codex Sprint 01
integration retains shared writer; current in-thread Codex authors this bounded sample packet.
Production-art acceptance remains Unassigned. Workspace delivery does not prove another
session read it. Current task status/debt only BACKLOG. Review-only consumers retire when
accepted full material/transition bank has equivalent packaged motion/combat/occlusion evidence.

## Closed first receipt

User explicitly chose all three directions. First-sample snapshot Release report passed,
732 unchanged inputs,151 tests/2,025,608 assertions; report UTC06:02:43–06:07:06 on2026-10-11.
revision.json binds source/native/staged world/game/logs and2915 resource files. Fourteen
nonruntime OpenRaster attachment archives changed byte hashes on regeneration; the retained
candidate hashes are recorded separately, while runtime PNG/JSON/audio bytes match the build.
These archive byte differences do not certify changed artwork; actual resource renders and
palette/world hashes are the evidence. This remains a historical first-sample receipt once
transition-bank sources change. A separate report must bind the later bank.

## Transition extension returned after direction selection

All three directions were kept as requested. GPT Image attempted the asphalt/concrete
six-template sheet, then one targeted repair. Neither preserves received material occupancy
and legal exact edges: first117 category/369 edge mismatches; repair1075 category/360 edge
mismatches. [RV-007](../reviews/2026-10-11-007-transition-texture-return.md) and
art/environment/tiles/material_bank_v1/generation.json retain source hashes, prompts and
rejected status. Native receipts are in build/environment_material_bank. No alternate painting
or mask replacement was performed; no failed tile was added to TSJ, map or package.

**Dev can receive now:** the eleven material samples, three variants per material plus two
rare accents, canonical palettes, saved-GID mixed fixtures, optional A/B package and its
first-snapshot technical/render/game receipts. These prove sample integration only.
**Dev cannot receive as complete:** the textured transition bank, selected default map or
human scrolling/environment acceptance. Existing flat transition geometry remains reusable.
The concrete/paving extension was not batched after the first pair failed. Report this GPT
limitation before another artwork method under the user's prior explicit instruction.
