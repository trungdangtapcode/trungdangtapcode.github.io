# Design return · Three transitions and material patches

Responds to [dev receipt](DEV_MATERIAL_SAMPLE_RECEIPT_2026-10-12.md) and
[RV-001](../reviews/2026-10-12-001-dev-material-sample-receipt.md).
Scope: native design/content proof, not complete-bank or default/encounter acceptance.
BL-029 Codex asset preparation retains inventory; BL-024/S01-12 Codex Sprint 01 integration
retains shared integration writer. Current in-thread design owns this bounded artwork return.
Production-art acceptance remains Unassigned. Workspace delivery does not prove another session
has received/read the packet.

## Delivered artifacts

| Request | Delivered | Native contract |
| --- | --- | --- |
| One straight edge | proof.tsj local0, native/straight.png | Original1024 material positions and124 exact perimeter pixels preserved; both regions textured |
| One convex NW corner | local1, native/convex.png | Same original occupancy/perimeter; both regions textured |
| One concave SE corner | local2, native/concave.png | Same original occupancy/perimeter; both regions textured |
| Concrete placement return | concrete_after.tmj, before/after native and real actor views |20×12 saved GIDs;212 quiet,16 base,10 secondary,2 wear; intentional service-edge clusters and eight legal symmetries |
| Paving interior return | local3, native/paving.png, paving_after.tmj | Coarse three-course laid paving; canonical palette and original perimeter; H/V reflections saved,400 nonbase pixels |
| Joined patch | joined.tmj, native/Tiled/game raster, actor camera |148 straight,25 convex,5 concave proof cells;39 paving cells; unchanged geometry outside the narrowed replacement |

All native output paths above are under build/environment_material_refinement. Atlas proof.png
is128×32, four cells. Canonical authoring/TSJ/maps are content/maps/material_refinement.
[Interactive before/after](../../build/environment_material_refinement/index.html) includes
native views, actual existing actors/cache/camera and the joined patch at original resolution.

## Source and method

Nine new GPT Image sources and exact prompts:
[generation ledger](../../art/environment/tiles/material_refinement_v2/generation.json).
The direct curved edits failed native occupancy even after targeted repairs. The user then
explicitly answered **“Cho phép ghép bằng mask gốc khi export.”** The selected workflow copies
authored material textures through the original received artwork mask at build time. It does
not retrace geometry, synthesize random texture, paint new pixel art or generate runtime images.

Geometry: clean_v1/asphalt_concrete_source.png and concrete_paving_source.png with original
crop/mask palettes. Texture: selected GPT asphalt_v03/concrete_v02 sample source PNGs and
new paving_coarse_source.png. Sources remain under art/, recipes and canonical material
palettes under content/. Derived native masks/images/palettes/atlas remain under build/.

The new export_masked_materials.ps1 is a narrow adapter over existing crop/nearest/palette
export, System.Drawing pixel selection and existing CopyPixels atlas operation. Its recipe
owns material selectors/inputs/perimeter width, not drawing coordinates for new geometry.
Single-color paving demonstrates the nearest extension through the same adapter as two-material
transitions. Shared palette exporter, resource cache, Tiled loader and runtime are unchanged.
Direct GPT study recipes target gpt_attempts only and cannot overwrite the selected atlas.

## Reproduce and receive

From repository root in PowerShell:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File tools/assets/export_masked_materials.ps1
powershell -NoProfile -ExecutionPolicy Bypass -File tools/validation/check_material_transitions.ps1
```

Open content/maps/material_refinement/material_refinement.tiled-project. Primary recipe is
masked_materials.json; TSJ local0–3 are stable in this proof. Editable maps own variant placement;
no runtime RNG. Before maps and earlier sample/default content are unchanged. Resource capture
configuration and retained read-only diagnostic commands are in this directory and build receipt.

Actual proof: native checker passes4096 pixels/496 unique perimeter samples; original material
membership, opaque palette and atlas copies match. Seven fresh official Tiled raster/export-map
roundtrips preserve saved GIDs. Existing TileMapResources matches2,293,760 RGBA pixels, including
four tiles × eight transforms. Joined and straight-only patches have1988 checked edge pairs,
no mismatches. Existing actor renderer captured six configured views with matching camera scale.
JSON receipts, source/output hashes, fresh Release project report and logs accompany revision.json.

Final local report: `project_checks.json`, passed on 791 unchanged source inputs after metadata
format normalization, 2026-10-12 01:23:13–01:27:12 Asia/Saigon. All five technical steps passed;
151 headless tests / 2,025,608 assertions passed. Logs are copied to
`build/environment_material_refinement/logs/`; their original run directory is recorded in
the revision manifest. This report covers this design snapshot, not a future runtime integration.

Dev can receive these four cells and patch placements now for the bounded design review.
When integrating, narrowly update the existing TSJ/GIDs/package consumer; preserve collision
and gameplay markers. After receiving the three proofs, complete the asphalt/concrete six
templates, then concrete/paving using the same mask recipe. Match native/package output and
capture movement/combat/occlusion before replacing flat references or selecting a default.
The integration owner must run check_project.ps1 on that integrated snapshot; this design
report does not certify a future package.

## Visual limits and retirement

Concrete changes placement, not just a stated quiet bias: recognizable motifs are concentrated
at a few service-edge clusters, rotated/reflected, and removed from the central lane. Paving
uses larger slabs and fewer fine joints; its regular laid rhythm is retained. Native/camera
comparisons are supplied for reviewer judgment, not an invented visual score. Tile-period
rhythm can still be seen; moving/crowd/human review must determine whether further contrast
or authored macro-placement refinement is needed. No human scrolling or new encounter playtest
was run here.

joined.tmj deliberately retains historical flat saddle/concrete-paving transitions outside
the three proofs. Full-bank, boundary/frontage, A/B layout choice and S01-12 remain Review.
Retire these temporary fixtures and flat consumers only after received full-bank source/native/
package revision and equivalent movement/combat evidence. Preserve existing accepted geometry
and owners. Current task status/debt stays in BACKLOG.
