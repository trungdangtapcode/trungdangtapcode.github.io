# Optional clean-tile package · dev integration handoff

Scope: **playable review package through existing runtime**, not a chosen/default district or
finished environment. User continue authorizes independent integration while layout/material
and missing architecture inputs remain pending. BL-024/S01-12 shared writer: Codex Sprint 01
integration. BL-029 art ownership stays with Codex asset preparation; production-art acceptance
remains Unassigned. Current task status and actual validation results belong in BACKLOG/review.

## Integrated boundary

The existing export_tiled_assets adapter accepts an optional revision1 manifest, listing maps
and palette styles. It follows only native TMJ -> external TSJ -> image dependencies, preserving
their relative locations. Default CMake callers still use the prior top-level selection.
The nested A/B library is staged explicitly by content/maps/tile_review/package.json.

Palette adapter revision1 remains supported. Revision2 permits palette_path instead of inline
colors; frontage_style.json references the existing round01 palette/source recipes. Both
floor and frontage use the same canonical raster APIs. No palette duplication, second loader,
renderer, terrain generation or recursive study scan. Design-native PNG hashes must match.

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File tools/assets/export_tiled_assets.ps1 -ManifestPath content/maps/tile_review/package.json -OutputDirectory build/environment_tile_package/candidate/assets/world
```

Optional candidate: build/environment_tile_package/candidate/. play_a.cmd and play_b.cmd
select their packaged map with --map; neither is the application default. The package retains
the previous map candidate's frozen character/weapon/Walker resource bank to avoid migrating
unrelated character artwork. Build executable is taken from the matching successful local run.
Start from any working directory; launcher paths are anchored to the package directory.

## Acceptance and limits

Receive only dependency staging/reproducible native rendering when the matching report/logs,
executable/resources and actual packaged game scenarios pass. The technical receipt is
build/environment_tile_package/project_checks.json; revision/resource evidence receipt.json;
actual captures/logs runtime/. Final local report passed with 682 unchanged inputs,
151 tests/2,025,608 assertions. A, B and retained default each run from Temp with exit0,
148 deaths/one blast and empty error logs. Native PNG hashes and both packaged Tiled rasters
match design. The package retains the prior default-world files, so opening the executable
directly still works. [Review RV-005](../reviews/2026-10-11-005-tiled-package-integration.md)
records actual results, initial failures and scoped acceptance; full environment is not accepted.

Both A/B layouts exercise the same new boundary. No conditional by map name in runtime,
schema change to gameplay, new collider, marker movement or combat retuning. Required source
dependencies outside the workspace/missing files, empty manifests and duplicate palette owners
are rejected. Optional review output contains the selected native dependencies, not debug
catalog/transform maps or temporary spawn_bounds fixtures.

Unresolved design input: A/B choice, whether three flat material colors are final, facade scale,
landmark composition and authored south/side perimeter cues. The original design packet remains
a source/native candidate; this handoff does not revise its hashes or claim full map approval.
Human route/setup, performance/co-op and general concave navigation remain separate gates.

Subsequent user return rejects the untextured yard. The
[material correction](ENVIRONMENT_MATERIAL_TEXTURE_RETURN_2026-10-11.md) requests native
textured swatches first, then a compatible textured corner bank and palette/export updates.
This supersedes leaving final flat-versus-textured direction open; packaging acceptance stays
scoped and historical, not material approval.

## Next accepted extension and retirement

After user/design chooses composition and returns missing native architecture/footprints,
use the same explicit dependency staging for that revision. Review arrival/core/exit/south/
side/occlusion/scrolling and actual traversal/placement/hitscan; run check_project on the
matching snapshot before default promotion. Retire review launch/probe consumers and temporary
static views at the selected production receipt; preserve authored sources, crop/style metadata
and TSJ. Existing World/resources/exporters remain the path to the next map, not a duplicate
district implementation. No dependent asset batch is multiplied in this integration.
