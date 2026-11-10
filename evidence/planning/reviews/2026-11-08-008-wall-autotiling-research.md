# RV-20261108-008 - Wall autotiling research and failed junction audit

## Snapshot and responsibility

- Date: 2026-11-08, Asia/Saigon.
- Scope: **source study and focused self-review**, not a repaired map or runtime candidate.
- Root owns diagnosis and integration under BL-122. A bounded read-only research worker
  gathered primary references; root inspected the actual artwork, code and map samples.
- Base: `d04e3c6`. Unrelated AGENTS.md and todo.txt changes are excluded.
- Re-review: [RV-001](2026-11-08-001-original-school-walls-and-layout.md),
  [RV-002](2026-11-08-002-paired-rooms-and-courtyards.md) and
  [RV-007](2026-11-08-007-plain-connector-and-planter-rows.md).
- Existing contracts: ART_DIRECTION continuous assemblies, authored asset imports,
  RoomGeometry, Tiled role layers and the existing map export pipeline. No replacement
  renderer, library, art bank or authoring framework is introduced by this study.
- Next extension: two adjacent classrooms must connect through the same wall assembly
  used by the west washrooms and the east classroom/WC junctions, on all three floors.

Map SHA-256: `c3e57823152aafccc37bdddc70b81bb2ca955c0b43e35d5545618e3cebb6e98e`.
School-wall registration SHA-256:
`e4cc03f440db936af503935e3b998f5e8f04d380d75318a29c954b814ddc4496`.
F0 rendered PNG SHA-256:
`17019854ffc9f45d0b1085a092ebc0c2f7a1be8ae4c8851a644e0ffe9cd81e83`.

## Scoped verdict

**Needs changes for connected-wall visual acceptance.** The current rendered shared
partition does not meet its horizontal trim. Earlier technical passes and broad room
previews did not establish native junction continuity. They cannot close this defect.
The latest standalone east-divider correction does not repair classroom T-junctions.

Research is complete for selecting the repair approach. No wall image, source map,
runtime code or existing candidate was changed in this study. BL-122 remains in Review;
BL-123 still owns the separate unimplemented floor-aware runtime boundary.

## What established tools actually do

### RPG Maker: assemble compatible boundaries, not arbitrary pictures

The official [MV/MZ autotile tutorial](https://www.rpgmakerweb.com/blog/classic-tutorial-how-autotiles-work)
demonstrates a basic A2 autotile assembled from four 24x24 quarters into a 48x48 tile.
Each quarter has a fixed destination quadrant. Matching features at every permitted
quarter-to-quarter seam must be drawn consistently by the artist.

The official [MZ asset standard](https://rpgmakerofficial.com/product/MZ_help-en/01_11_01.html)
separately defines A4 wall sheets: 768x720, combining basic autotile structures and
group-pattern arrangements. The A2 tutorial explains the assembly principle; it is
not evidence that every A4 wall face has the same pattern family as A2 terrain.
The sheet dimensions are MZ's format, not a reason to change Black Veil's 32px grid.

Practical lesson: design the complete boundary vocabulary first. Wall tops, vertical
faces and their transitions have different visual jobs. A tall wall face creates room
depth, while the connected top describes the wall's plan. A beautiful isolated corner
does not establish that either part can join its neighbors.

### Tiled: labels select existing art

[Tiled terrains](https://doc.mapeditor.org/en/stable/manual/terrain/) match corners,
edges or both. Complete two-terrain corner and edge sets each have 16 combinations;
mixed sets have 256, with reduced sets such as the 47-tile blob family also possible.
Incomplete sets are allowed, and the Patterns view can expose missing combinations.
The terrain brush adjusts neighboring tiles using the combinations supplied.

These counts describe particular matching schemes. **47 tiles is not a universal
requirement for a wall kit.** A four-corner mask and a four-direction connection mask
also have different meanings, even when both are stored as a four-bit integer.
Coverage must be judged against the shapes the map actually uses.

[Tiled Automapping](https://doc.mapeditor.org/en/stable/manual/automapping/) matches
authored input patterns and writes authored output layers. It suits an existing
logical-wall guide producing several presentation layers. Terrain matching suits
individual connected tile families. Neither system supplies missing junction artwork.

### Godot: neighbors are an explicit contract

Godot's [TileSet terrain guide](https://docs.godotengine.org/en/stable/tutorials/2d/using_tilesets.html#creating-terrain-sets-autotiling)
assigns peering bits to neighboring terrain or empty space and supports corner/side
matching modes. Its [TileMapLayer API](https://docs.godotengine.org/en/stable/classes/class_tilemaplayer.html#class-tilemaplayer-method-set-cells-terrain-connect)
explicitly warns that terrain-connect needs all required terrain combinations.

Practical lesson: resolve a shared junction from its neighbors, then choose compatible
art. A per-room corner assignment cannot determine a building-wide shared junction.

### Authored example already available locally

[LPC Walls](https://opengameart.org/content/lpc-walls) supplies wall and ceiling-trim
families with terrain metadata and advertises an example Tiled scene. The existing
`art/third_party/lpc_walls/` copy is pinned with attribution and CC-BY-SA 3.0 licensing.
Its separate wall/trim vocabulary is useful reference. No new download or production
reuse is needed here, and it must not reintroduce the rejected dungeon stone material.
RPG Maker documentation is studied as a format reference; no RTP artwork is imported.

## Confirmed local findings

### F-01 - P1: shared-cap resolver erases the vertical branch

[RpgArchitecture.ps1:110](../../tools/assets/campus/floorplan/RpgArchitecture.ps1#L110)
collects duplicate room endpoints. On a shared endpoint it writes straight cap 9 at
the north edge and straight cap 6 at the south edge. These are horizontal images;
neither contains the branch required by the shared vertical partition.

The source map confirms this exact sequence at the first shared north-wing wall:

| Cell | Actual registered image | Required relationship |
| --- | --- | --- |
| (36,6) | cap_9 | Horizontal top with a downward partition connection |
| (36,7) | cap_12 | Continue the same partition beneath that junction |
| (36,16) | cap_12 | Continue upward into the foreground junction |
| (36,17) | cap_6 | Horizontal frontage with an upward partition connection |

This is a deterministic source/content defect, not evidence of a GPU or lighting bug.
The shared resolver changes the visible cap layer, while
`new_building_map.ps1:343` subsequently resolves topology into a hidden guide layer.
Having the correct hidden logical connection does not repair the visible branch.

### F-02 - P1: visual seam coverage is absent from the current cap family

`school_wall_import.json` registers cap corner masks 3, 6, 7, 9, 11, 12, 13 and 14.
The native 32x32 images include horizontal bands, side returns and frame corners.
There is no registered explicit cap T-junction in this family. No currently executed
composition supplies the missing branch at F-01. Eight images could be sufficient
with a proven compatible composition; their count alone establishes neither success
nor impossibility. Relabeling a face/mass tile as a cap is not a repair.

Native inspection makes the discontinuity concrete: cap_9's blue-gray horizontal band
occupies rows 1-9 and cap_6's band rows 12-20. Their remaining canvas does not continue
the vertical stroke. A 32px cell can therefore be filled while the structural trim is
visibly disconnected. Alpha coverage cannot detect that semantic gap.

### F-03 - P2: current checks repeat the placement model, not visual connectivity

`floorplan/CheckRpgArchitecture.ps1:2` checks corner-support positions using the same
placement formula as `Rooms.ps1:50`. Other checks verify layer presence, nonzero GIDs
and membership in the registered terrain families. These are useful structural checks
but do not check that cap strokes or column heads meet in the rendered image.

Column diagnosis also needs correct object identity: near this sample, object 41 is
a wall-corner support at (1168,288), whereas object 528 is a gallery architecture prop
at (1152,640). The latter has a different purpose and placement path. Do not move every
column to hide the junction defect, or assume the foreground gallery column is the
same object as a north-wall support. Their intended visual attachment needs review
after the shared cap geometry is correct.

## Repair design and acceptance

Root owns the narrow repair in the existing authoring pipeline. The production
sequence should be: common logical wall footprint and openings, neighborhood shape
resolution, authored cap/face/jamb selection, metadata-based attachments, Tiled render.
There must be one owner for each visible shared wall cell. Do not repair one classroom
by adding unexplained position offsets or masking it with extra props.

Reuse existing authored pieces wherever their seams work. Supply missing junctions
as actual compatible school-wall artwork, or as a proven composition of existing
authored quarters/layers. Keep cream plaster and muted blue-gray trim. Record visual
connection spans/anchors separately from PNG canvas and logical collision footprint.
Use Tiled terrain metadata and, where multilayer projection needs it, explicit
Automapping-style input/output rules; do not add a second renderer or generalized engine.

Before migrating all rooms, the acceptance assembly must contain:

| Assembly | Evidence needed |
| --- | --- |
| Three-piece horizontal/vertical runs | Structural strokes meet across every seam |
| Four outer and four recessed inner corners | Correct inside/outside volume and trim |
| Four T orientations and a cross | Every intended branch survives shared resolution |
| Two adjacent classrooms | One shared partition; both ends join, independent of room iteration order |
| Open/closed door beside a corner | Jambs attach; no cap/face fills the opening |
| Window and column attachments | Heads/bases attach to the intended wall face; no doubled supports |
| Tall north face and short foreground skirt | Depth stays consistent without exposed floor gaps |
| West WC and east classroom/WC boundary | Same assembly rules handle different room dimensions |

Inspect native-scale crops and readable enlarged crops, then actual room/actor renders
on all three floors. Geometry tests must assert shape/branch selection rather than
only a nonzero cap GID. Tests should reject missing required authored transitions.
Pixel checks should target registered structural seam bands rather than require the
whole textured edge to have identical colors. Human visual acceptance remains separate.

The nearest extension is another existing room geometry, not another independently
implemented wall pipeline. Preserve source artwork, stable room IDs, doors, windows,
floor voids and the accepted site layout during migration. Retire the duplicate-head
straight-cap shortcut before publishing another connected-wall acceptance claim.

## Executed validation and limitations

- Read the official sources linked above on 2026-11-08; inspected the local source
  imports, geometry, cap resolver, constructor, support placement and validator.
- Ran `build/wall_research_20261108/inspect_junctions.ps1`: exit 0. It extracted actual
  source GIDs, nearby object identities, source hashes and palette-specific trim rows.
- Inspected the resulting 38 KiB lossless contact/crop image: the actual shared
  partition stops before the horizontal band. The diagnostic color rule is only a
  measurement of this palette, not a proposed universal seam validator.
- Matched the map and F0 PNG hashes against the existing render receipt. Checked all
  local links in this report and the research board: passed. The scoped documentation
  diff check passed; unrelated AGENTS.md whitespace was left untouched.
- Local evidence: [crop](../../build/wall_research_20261108/school_wall_junction_evidence.png),
  [JSON](../../build/wall_research_20261108/junction_evidence.json),
  [research board](../../build/wall_research_20261108/index.html).
- No C++ build, runtime test, full map reconstruction or `check_project.ps1` ran:
  this is a documentation/source study, with no runtime/content candidate handed off.
  No CI was enabled or triggered. Existing unrelated work remains untouched.
- Root is the self-reviewer. The bounded worker's independent contribution is source
  research, not art acceptance. The user has not approved a corrected assembly.

## Handoff

Keep the actionable defect and retirement trigger in BL-122. Root's repair scope is
the cap import/art only where required, shared assembly in RpgArchitecture, attachment
metadata if justified, corresponding focused checks and the existing Tiled exports.
Re-review a fresh integrated rendered assembly against the table above. This report
does not authorize declaring the current wall kit, whole campus or runtime complete.
