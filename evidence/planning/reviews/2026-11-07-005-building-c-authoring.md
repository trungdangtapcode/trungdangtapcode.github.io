# RV-20261107-005 - Building C shared partitions and overhead architecture

## Scope, owner and revision

Date: 2026-11-07, Asia/Saigon. Scope: editable Tiled/source-art authoring slice,
not a runtime mission or product candidate. Root owns research, geometry, artwork
integration and this self-review. Bounded contributors supplied the room program,
aftermath/threshold sources, floor-runtime audit, validator and browser checks.
Human art/playtest acceptance remains unassigned. Tasks: BL-122 and BL-123.

Prior library evidence: [RV-004](2026-11-07-004-campus-directional-library.md).
Contract: [Building C authoring](../contracts/UIT_BUILDING_C_AUTHORING_2026-11-07.md).
Program: [room identities](../contracts/UIT_BUILDING_C_ROOM_PROGRAM_2026-11-07.md).

Preparation commits: `3632f29` room program, `aecc3e7` initial architecture,
`6e93830` initial checker. Repair commits: `64e0e31` preserved-canvas export and
workstation calibration, `2702331` overhead wall/stair/threshold/aftermath sources.
Final source map SHA-256:
`e5618931914beaf76720263911b52aef1775832f2aaeb5333415cadb215b9c2c`.
Renders were produced from the same parsed map data before trailing-space cleanup
(raw hash `c30fbe9ddbcd23be4cc78da5d930b92b49f296f6861e52f417b95bf6961a3d86`).
Serialized parsed JSON before/after cleanup was byte-equal; only blank-line whitespace
changed. Constructor output now avoids whitespace-only blank lines.

## Findings and corrections

1. **Rejected grass gaps between classrooms.** The earlier origins left exterior
   material between neighboring rooms. `layout.json` now groups two blocks of five
   rooms per wing and spaces origins by width minus one tile. Interiors exclude
   the shared partition cell. Grass remains between wings/outside, with central
   and end circulation links kept distinct from classrooms.
2. **Rejected wall/column projection.** Initial structure art repeated endcaps and
   used a skewed column top. The original files remain preserved. Replacement
   authored corner, T, cross and end pieces use a shared overhead port registration.
   `floorplan/Structure.ps1::Resolve-WallTopology` computes neighbors after all room
   walls and openings are placed; shared boundaries retain continuous T junctions.
   The checker compares native edge alpha to canonical straight pieces, including
   opposing ports and disconnected edges. Tile size/span positions are not baked
   into checker tuning.
3. **Rejected frontal stairs.** Two authored overhead flights, landing tiles and
   a center rail replace the initial stairwell drawing. Hidden paths carry a
   continuous U-shaped route and elevation fractions, alternating handedness on
   successive floors. This is traversal design data; simulation does not consume it.
4. **Threshold registration defects found during repair.** Initial E/W connector
   crops did not reach the tile boundary. Registered square crops restore exact
   port alpha without repainting source pixels. A 32px door could not span the gap
   between neighboring wall-end centers; door assemblies now export at 64x32,
   with 32x32 windows and explicit pivots. `Sprite-AtPivot` converts these anchors
   to Tiled's bottom-aligned object convention; furniture placement is preserved.
   Root inspected bounded open/locked doorway joins after the final rebuild.
5. **Uncalibrated workstation scale.** A complete workstation inherited a 24x24
   tabletop registration. Its four source views now use 64x48 front/rear and
   32x48 side canvases with floor support. Stable IDs and all 324 legacy native
   hashes are preserved; this does not certify the orientation of every prop.

## Delivered authoring behavior

One orthogonal editable `.tmj` contains three aligned floor groups, each with two
wings of ten room IDs: 60 total. Access: 27 open, 18 locked, 11 blocked, four
view-only. Separate layers own floor materials, connected walls, facade details,
furniture/aftermath, doors, hidden ceilings and design objects. Eight tilesets
resolve 719 native images including the reused actor reference.

Three floor renders plus five bounded details per floor are available on the local
[review board](../../build/uit_building_c/index.html). Long galleries use calmer
terrazzo; medallion flooring remains at the entrance and central intersections.
Bins, litter, blood trails and adult civilian aftermath occupy selected rooms and
gallery approaches. These are decorative clues rather than loot or live entities.

Reproduction and Tiled-edit preservation are documented in the
[map README](../../content/maps/uit_building_c/README.md). The constructor requires
an explicit overwrite switch; native art refresh/rendering preserves authored edits.
Production sources/prompts/hash receipts stay in `art/` and `content/`. All native
exports, HTML, PNG renders and logs remain ignored under `build/`.

## Validation evidence

- Existing native exporter completed the architecture/floor/wall/stair/threshold/
  aftermath manifests, validating source hashes, registered bounds, native sizes,
  binary alpha, nonempty output and shared palette membership.
- Export regression: legacy and directional samples retain byte-identical PNG
  hashes; old-schema canvas property and non-boolean canvas property both reject.
  Report: `build/uit_building_c/export_regression/report.json`.
- Reconstruction guard rejects an unflagged rebuild and leaves the final source map
  hash unchanged. Report: `build/uit_building_c/reconstruction_guard.json`.
- Final map checker passed: three groups, 60 room IDs, 12 reciprocal stair endpoints,
  eight tilesets, 719 images, 116,736 layer cells and 989 tile objects; zero errors.
  Report: `build/uit_building_c/checks.json`.
- Nine deliberately invalid fixtures reject: missing floor/room, missing closed-door
  blocker, bad stair endpoint, unresolved GID, scaled native prop, missing shared
  partition, wrong junction tile and a one-cell room-origin shift that recreates
  the grass-gap bug. Reports: `build/uit_building_c/negative/negative_summary.json`.
  Fixtures were derived before whitespace-only cleanup; their parsed canonical
  input is unchanged. This is authoring regression coverage, not runtime testing.
- Existing Tiled `tmxrasterizer --no-smoothing` rendered all three floors and 15
  details; PNG hashes are in `build/uit_building_c/render_receipt.json`.
- Browser rerun on the final map hash passed: 60 rows, 27 open, all three floor
  selectors plus All, 18 loaded images, 24 valid local links, no JavaScript errors
  and no horizontal overflow at 1400px or 390px. The initial run hit a locked old
  screenshot path; the final run used fresh `_final.png` captures and completed.
  Report: `build/uit_building_c/board_checks.json`.
- PowerShell parser checks passed for constructor, structure helper and renderer.
  Source-structure scan: 529 files, zero blocking findings and 25 pre-existing
  review notices; no C++ file was changed. Whitespace checks passed.
- Root inspected native wall/stair/threshold/aftermath contact sheets and bounded
  room, partition, atrium and open/locked threshold renders. These establish the
  observed repairs, not pixel-perfect acceptance of every asset or room.

## Limits and verdict

**Source/map authoring remains in Review.** Earlier rejected renders are not
accepted by a new count or technical pass. Remaining visual review includes full
room diversity, fixture orientation, corpse facing labels, material seams and
readability at encounter lighting/density. Repeated closed-room furniture is an
explicit limited dressing profile, not an accepted final interior for every room.

No playable Building C executable is delivered by this slice. The current runtime
is single-plane. Actor floor identity, per-floor collision/sight/AI/combat/loot,
continuous stairs, real door access, lights and room loot must be integrated through
the existing content/session/simulation/render boundaries under BL-123. Root owns
that engine work. Metadata is explicitly runtime-disabled; do not flatten floors,
teleport between PNGs or add a separate preview game.

No C++ build, `check_project.ps1`, gameplay smoke, performance measurement, human
playtest or CI was run for this authoring slice. A later runtime/content candidate
requires fresh full local checks and a matching executable. GitHub Actions remain
disabled at the user's request. Current playable missions/defaults are unchanged.
