# RV-20261010-005 · Tiled map visual correction re-review

## Snapshot and responsibility

- Date: 2026-10-10, 23:58 Asia/Saigon.
- Reviewer: Codex independent visual QA agent, separate from the integration implementation. This is AI image/source inspection, not human QA or a player playtest.
- Implementation/integration owner: Codex Sprint 01 integration, BL-024/S01-12. Environment production-art acceptance owner remains Unassigned.
- Deliverable: bounded environment visual correction through the existing Tiled runtime slice. Full urban-district polish, character animation, navigation, performance, LAN and Sprint completion are outside acceptance here.
- Governing rules: the same planning and asset documents read in [baseline004](2026-10-10-004-tiled-map-visual-qa.md), plus current map/tileset import metadata and actual native asset/source files.
- Contract reused: native TMJ/external TSJ, cached authored texture atlases, independent ground/marking/detail/overhead layers. Two supplemental16-cell native banks enter this same path; no second renderer is involved in these inspected results.
- Nearest demonstrated extension: add new terrain and transparent detail TSJ sets to the existing map, preserving gameplay markers, per-layer editing and scrolling actor/VFX rendering. Technical/schema acceptance still belongs to the matching integration validation report.
- Shortcut remains under BL-024/S01-12: mirrored original facade, repeated old sidewalk tiles and sparse district identity. Integration owner retains route scope; art owner/visual acceptance owner must be assigned before district/content expansion. Retire these at the authored district/route review with a native map and matching encounter captures.
- Review type: independent re-review of baseline F-01–04. No Git commit inferred. Hashes below identify the source/asset/image snapshot.
- Reviewer edits: this new report, frozen evidence under `build/tiled_world_qa/after/`, and the review comparison HTML only. No source, content, build script or BACKLOG edits; no parallel build.
- Read/inspected: native map/TSJs/crop recipes/generation receipt, new source/native art, full-map raster and four actual GPU perspectives. C++ correctness, all source-art provenance history, animation playback and arbitrary tileset adjacency were not audited in this visual review.

| Input | SHA-256 |
| --- | --- |
| content/maps/power_station.tmj | CA3D3AB33F7F7E687F4624CBA8078461B797BB19CDDE507D9B5745EA78C4E184 |
| content/maps/urban_ground.tsj | 0504DA7F55CBEF0A25C91B3CC0D400F25331514DB02A7D71FA431CA2C7570CF3 |
| content/maps/urban_details.tsj | 37731D44FE7FD73E124FDE09E6FB15B75B553C22553C265222DEC93C33877389 |
| content/maps/urban_ground_tile_import.json | E3ED450E6DB2328E05B81F68D6AB4961259FFB9750590DE312CCFD568188EF55 |
| content/maps/urban_details_tile_import.json | 29F09B5FDBB9CE8BE296D9AF6091A0139B8C7CFA01BD3F5C643D286CF851CFB6 |
| art/environment/tiles/urban_v1/asphalt_source.png | A0EC379BD216A6D8344AEE97E2536942F992A09632043DC0B944700DA31C30D9 |
| art/environment/tiles/urban_v1/details_source.png | A4C076C8021DD340BB70F0CC8C85FCBDC991923842A8FB3546766171BAE1E980 |
| art/environment/tiles/urban_v1/generation.json | 8605F310EA3F5279179F2886B7B902ACF75C80B0F700591B7B18B980EEDC79E3 |
| Native urban_ground.png | 22E23F70D24B819DC645BCAB2725D71CB4D3A061A97DB6549808ED4EB5EEF6A6 |
| Native urban_details.png | 7C0E09E3E955D65D7F09291C9E8CDA93CEEE060B7B32F0A0BEA4320D48702576 |
| after/tiled_map.png | 7DCE54FFF6C9E51A89C4AB9E1F387E8303ACF62E9B245E4B1B30E0598B7216E4 |
| after/combat.png | 0103EFDF2019EC6D4249260246EF71FF46F685C177DF616C787269D6C9DBDD36 |
| after/camera_east_south.png | 4579011BFAEF79BBC2A8520E7C67A624B4C38BA1701303E1C92BF617B6E841B6 |
| after/camera_west_south.png | A404571080CEF1740961CDD74C91604B25EFD5DE95F74296F8599ECEDB7840DE |
| after/camera_east.png | E61EEE1EF06417C972815E251838FFC2EFF3C2C4113639F7F32F99F5D98D04BB |

## Verdict at this snapshot

**Approve the scoped correction of opaque patches and chopped road fragments in the inspected layout.** Baseline F-01 is corrected in the same east/south camera location. Ground no longer changes into obvious rectangular asphalt panels under road paint; central cut curb islands are removed, and the new marking/detail layers preserve the underlying terrain. The joined white crossing reads more clearly than the first after-raster attempt.

**Full urban-environment visual acceptance remains Needs changes.** The large road extension still has little authored place identity; reflected original facade and repeated paving are provisional. These are P2 content/polish limitations, not a newly found P1 renderer defect. No new P1 visual defect was found in the four inspected runtime frames.

This accepts a real visible improvement, not an entire production map or Sprint. Matching build/technical validation remains the integration owner's separate gate. Source generation prompts are intent; they do not prove universal seamless adjacency, production pixel quality or complete curb/prop coverage.

### Same anchored rubric as baseline

Scale: 0 = absent/broken; 1 = major visible defects; 2 = usable with substantial repair; 3 = coherent with limited polish issues; 4 = no material defect in inspected evidence. Scores are an explicit reviewer judgment, not statistical or human usability measurements.

| Criterion | Baseline / 4 | Revised / 4 | Reason |
| --- | --- | --- | --- |
| Terrain continuity | 1 | 3 | Same scrolling view removes the rectangular ground replacement and scene-fragment seams; subtle texture motif repetition remains |
| Road/curb spatial coherence | 1 | 3 | Transparent paint follows one ground material; chopped active-road curb islands removed; crossing joins rather than isolated dash grids |
| Place identity/landmark coverage | 1 | 1 | Existing station/crates/gate remain, but broad east/south extension and reflected facade add little distinct district identity |
| Material/pixel consistency | 2 | 3 | Native32px banks share a consistent dark surface/value; fine grain remains fairly dense at actual2× presentation |
| Actor/interactive readability | 3 | 3 | Survivor, walkers, crates, station and VFX readable in core/east/south; this still-image evidence cannot certify crowd animation/action readability |
| **Total** | **8 / 20 (40 / 100)** | **13 / 20 (65 / 100)** | Clear visible improvement; below complete district polish |

## Findings and baseline disposition

### R-01 · Baseline F-01 corrected in reviewed source and actual scrolling frame

- Evidence: [Road markings](../../content/maps/power_station.tmj:2451) now uses transparent GIDs233–240 from `urban_details.tsj`, rather than opaque GID6. [Ground](../../content/maps/power_station.tmj:811) uses the new compatible asphalt family in the active road.
- Independent check: System.Drawing read-only pixel inventory of the native128×128 detail atlas returns14389 clear,1995 opaque,0 partial-alpha pixels. Thus the image is predominantly actual transparency; the visual result shows terrain retained around each marking.
- Same exposure: revised `after/camera_east_south.png` corresponds to the original900,450 fixture and no longer shows the world-row13 pasted asphalt stripe panels. Hordes/VFX remain rendered above the world.
- Scoped acceptance: the visible opaque-patch defect is corrected. This does not certify every unused detail tile, weapon or terrain adjacency combination.

### R-02 · Baseline F-02 road-fragment defect corrected; facade shortcut remains

- Evidence: full-map raster and west/east/south GPU frames show one compatible active-road material instead of chopped original scene columns. Former center raised curb island is absent from the active road.
- Source/raster: the right facade now reflects the complete original facade strip. This avoids the exact left-to-right sequence duplicate but still reuses the same doors/awnings/buildings.
- Scoped acceptance: arbitrary road/curb fragment cut is corrected in this layout. Facade uniqueness/place identity is not received as production art.

### F-01 · [P2] Long extension and reflected facade still lack distinct place identity

- Evidence: [full-map raster](../../build/tiled_world_qa/after/tiled_map.png), x640–1279/y0–95 and broad active road y96–575; actual east and east/south views. Core gameplay objects exist, but the extension is mainly asphalt, a few drains/paper/weeds, and mirrored original frontage.
- Actual/expected: basic material continuity is now good; a finished navigable district needs recognizable boundaries/destinations and deliberate environmental storytelling at runtime scale.
- Impact: travel reads as a larger combat sheet more than a distinct next urban space. More scatter density alone would add noise without resolving this.
- Fix: use suitable existing source first, then author a small distinct frontage/roof/signage family and intentional border/destination dressing. Prioritize one readable destination and a few designed landmarks over many random props. Keep combat/spawn routes open; do not introduce concave blocker content before navigation proof.
- Tracking/owner: BL-024/S01-12 with current integration owner; environment art/acceptance owner Unassigned. Parent records any allocation and acceptance in BACKLOG.
- Acceptance: native map and actual camera traversal distinguish core, east destination and south boundary without relying entirely on HUD labels; human route/setup playtest records landmark/route interpretation. Existing new32px terrain/overlay pipeline must remain the consumer.

### F-02 · [P2] Dense grain and finite bank repetition still need authored material review

- Evidence: actual east/south and west/south frames show fairly dense tiny ochre/grey grain across the entire road, with repeated local texture motifs. It is substantially less disruptive than baseline panel seams, and actor silhouettes remain readable in these samples.
- Limit: I did not measure monitor response, motion shimmer or every possible tile pairing. I do not claim perfectly identical tile-edge pixels or a universal seamless bank.
- Fix: review terrain at native32px/actual encounter zoom with motion; if grain competes with actors, replace selected source variants with quieter compatible tiles. Review a small controlled material palette and adjacency scene rather than increasing noise/variant count.
- Tracking/owner: BL-024/S01-12 and existing asset owners; no new renderer work required.
- Acceptance: native-scale and scrolling playback retain stable actor/telegraph contrast; asset reviewer receives the actual exported tiles and map, not only the generation prompt.

### R-03 · Baseline F-03 partially addressed by real asset integration

- Actual improvement: two new authored source PNGs, crop recipes, native16-cell ground and16-cell transparent detail atlases, stable TSJ asset IDs and new `Surface details` layer are referenced by the existing runtime map. They are actual encounter assets, not merely a preview inventory.
- Remaining: complete native curb adjacency/unique urban structures/selected prop footprint coverage are not proved by these banks. Existing source car/fence/warehouse sheets remain reuse candidates, not received production integrations.

### R-04 · Baseline F-04 active-road curb ambiguity removed in inspected layout

- The visually raised interior curb islands reported in004 have been removed from the active road. Current inspected ground decorations read as flush surface detail rather than new barriers.
- No collision/navigation gate is accepted by this image review. North/south paving walkability and actual route interpretation remain for runtime/navigation/playtest validation.

## Validation

| Action actually performed by reviewer | Result | Evidence and limits |
| --- | --- | --- |
| `view_image` final full-map raster | Inspected1280×640; no editor point pins | `after/tiled_map.png`; preserves raw authored terrain layout |
| `view_image` final actual GPU core/east/east-south/west-south | Inspected4×1280×768 frames | Frozen `after/combat.png` and3 camera PNGs; no reviewer-generated game run |
| `view_image` new native terrain/detail atlases | Both128×128 native banks inspected | Frozen native atlas PNGs; all16cell adjacency/playback not exhaustively tested |
| Read-only System.Drawing alpha inventory |14389 clear /1995 opaque /0 partial | Native urban_details.png; no image edits or alpha conversion by reviewer |
| JSON layer/source/TSJ/crop/receipt review and SHA-256 | Seven layers/five visual; supplemental sets identified | Current source hash above; preserved map copy and raw capture hashes |

Reviewer did not build, run technical tests or start game/rasterizer processes. Captures are integration-owner artifacts independently inspected here. Parent-provided probe/encounter success is not substituted for visual evidence or a human playtest. Active integration check_project results are outside this report and must be attached separately by that owner. Existing character/action and product gates remain open.

## Handoff

Accept the narrow patch/road correction; keep full environment quality in Review under existing BL-024/S01-12. Assign production-art review/authoring ownership, retain the new native terrain/detail banks, and build the next district-specific art receipt through these existing TMJ/TSJ layers. Preserve exact before/after comparison at `build/tiled_world_qa/index.html`. Further visual changes require a new dated review with matching source/art/capture hashes; do not promote this65/100 assessment to full Sprint or player-experience acceptance.
