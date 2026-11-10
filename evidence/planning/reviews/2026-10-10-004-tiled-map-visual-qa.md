# RV-20261010-004 · Independent Tiled map visual QA

## Snapshot and responsibility

- Date: 2026-10-10, 23:47 Asia/Saigon.
- Reviewer: Codex independent visual QA agent. This is an AI image/source review, not a human playtest or a statistically objective aesthetic measurement.
- Implementation/integration owner: Codex Sprint 01 integration, BL-024/S01-12. Environment production acceptance owner remains Unassigned.
- Deliverable reviewed: the existing editable-world runtime slice, specifically terrain continuity, layout coherence, environment coverage and readability. Character/action quality, navigation correctness, performance and full Sprint acceptance are outside this verdict.
- Governing documents read: PRODUCT_CONTINUITY, AGENT_NOTICE, README, VISION, CODING_GUIDE, ART_DIRECTION, WORKFLOW, review README/TEMPLATE, maps README and DEV_TILED_WORLD handoff.
- Existing contract reused: native TMJ/TSJ, cached authored PNGs, ground/overhead passes and existing actor/prop rendering. Repeated ground and scene cells are temporary content, not proof of production environment art.
- Product-path follow-up: BL-024/S01-12; integration owner retires patch layout before growing the second district. Seamless terrain/curb/decal art needs an explicit art owner; no new ownership is assumed here.
- Baseline review following [runtime receipt](2026-10-10-003-tiled-world-runtime.md). No Git revision inferred. Source/art hashes and preserved captures identify this snapshot.
- Reviewer changes: this new report and `build/tiled_world_qa/baseline/` copies only. No source, content, BACKLOG or build changes.

| Input | SHA-256 |
| --- | --- |
| content/maps/power_station.tmj | ED6F07EE2FEEFC48F20C2E3E7AAD54B23AC56A3A4A65D111E79E4D2D3528C2ED |
| content/maps/street_tiles.tsj | 830F22BC3B2E1C8127914D0E3283844A0CD47434D15C7290043C7C9A0376595E |
| content/maps/street_reclaimed.tsj | C46E48E90BD13EEAEB78B321406834F08D04A61219E13D7F1FF73D2B237BE65F |
| content/maps/street_tile_import.json | 734CDFC638978E96386012A94F126A05A1D5D1FE7B95444A036366A1F79CC05E |
| art/environment/market/street.png | 077B3C32D703A5AF58BBB9B5E575FE8F07E6E2FAFB4EA3F77AB066CA349F9D96 |
| art/environment/tiles/street_tiles_source.png | 38817A8668CFC056706E4118BA491B0B06D98AF83BB2533BFD3A0AFBCCE76D3E |
| baseline/tiled_map.png | 7A664B920ACF6CC5CB5BF506E9A969011007A7C78E0EFB2EF35BB6D175D553A6 |
| baseline/combat.png | 141CC7FF165F2D37A44AA817884A8CA3B52EFF01E1D08264B096FC55EBB0E97B |
| baseline/camera_east_south.png | 795D541CDC8A70DA91B916240BCE00E3FF89B7AD7F9426A42136FAFAB3ADE6C9 |

## Verdict at this snapshot

**Needs changes for environment visual acceptance.** The user’s patchiness complaint is supported by the actual scrolling GPU capture. I found abrupt opaque rectangular terrain replacements and recycled scene fragments, rather than missing renderer cells. The world renders fully and the player remains visible in the inspected frames; this does not make the map visually finished.

The six layers and technical tests establish authoring/runtime integration. They do not resolve tile seams, scene composition or missing production terrain families. More props cannot compensate for discontinuous ground.

### Anchored visual assessment

This is a reviewer rubric, not a new project gate: 0 = absent/broken, 1 = major visible defects, 2 = usable with substantial repair, 3 = coherent with limited polish issues, 4 = no material defect in inspected evidence.

| Criterion | Score / 4 | Evidence |
| --- | --- | --- |
| Terrain continuity | 1 | Obvious opaque asphalt rectangles and abrupt repeated patch seams in scrolling view |
| Road/curb spatial coherence | 1 | Detached horizontal dash groups; chopped scene-edge curb islands |
| Place identity/landmark coverage | 1 | Exact facade repetition; long lower/east extension lacks distinct authored landmarks |
| Material/pixel consistency | 2 | Original street atmosphere works; downsampled source tiles differ from adjacent reclaimed ground |
| Actor/interactive readability | 3 | Player, walkers, crates and objective identifiable in inspected frames; terrain noise and large objective overlays still compete |
| **Total** | **8 / 20 (40 / 100)** | Visual completion assessment only; not a gameplay score |

## Findings

### F-01 · [P1] Opaque road-marker tiles produce conspicuous ground patches

- Evidence: [native map](../../content/maps/power_station.tmj:2451), `Road markings` layer. All 20 nonzero cells use GID 6, the horizontal-stripe cell of `street_tiles.tsj`; its PNG includes a complete opaque asphalt background. The layer is placed over visually different reclaimed ground.
- Reproduction: inspect baseline `camera_east_south.png`. World row 13, y416–447, columns 0,1,4,5,8,9,…,36,37 display alternating 64px asphalt/stripe patches. Native raster shows the same detached dash-group pattern.
- Expected: continuous coherent road markings/decal shapes on one compatible ground surface. Actual: local rectangular background replacement is readable as pasted patches.
- Impact: the traversable extension looks assembled from unrelated scraps, particularly during camera movement. Blocks the requested polished environment acceptance, not basic map loading.
- Fix: remove this misuse immediately or replace with transparent authored road decals matched to terrain. Do not hide the mismatch with random placement/tint, or draw replacement art in code.
- Tracking/owner: BL-024/S01-12, integration owner; production decal art owner Unassigned.
- Acceptance: same east/south GPU view and editor raster show continuous ground under the marking layer; inspection with markings toggled proves the decal does not replace the underlying asphalt rectangle.

### F-02 · [P1] Recycled scene fragments create cut terrain and duplicated environment structure

- Evidence: [map Ground](../../content/maps/power_station.tmj:811). Upper rows repeat 20-cell source scene blocks across x640. Lower rows10–17 repeatedly select only source columns4–15 in 12-cell cycles, producing seams at x384,768,1152. Original flattened `street.png` contains continuous cracks, roadside debris, markings and curb islands, so arbitrary subregion repetition cannot preserve their adjacency.
- Reproduction: native raster x592–687/y176–319 shows the shared-edge curb island assembled across the two scene blocks. Scrolling view reveals the lower terrain grid. North facade repeats the same awnings/doors at x0–639 and x640–1279.
- Expected: tile families with deliberate edge/corner adjacency, continuous road and a coherent destination beyond the first screen. Actual: road/scene fragments are stamped as extension fill.
- Impact: scene structure becomes an obvious repeated backdrop and surface transitions lack intent.
- Fix: build the ground from compatible terrain families; keep complete contiguous authored structures together. Use proper curb straights/corners/end caps and vary facade selection deliberately. Keep current open combat lanes; do not multiply blockers before navigation is verified.
- Tracking/owner: BL-024/S01-12. Layout belongs to integration owner; additional seamless family source needs art owner.
- Acceptance: native-size full-map raster and traversing GPU views north/core/east/south exhibit no arbitrary cut structural features or repeated opaque patches. Exact repeats must serve a deliberate paving pattern rather than recreate the entire scene.

### F-03 · [P2] Environment source coverage exists but is not a ready production tile/prop set

- Evidence: inspected `art/environment/tiles/street_tiles_source.png`, generated128×128 atlas, source street and `district_a/crossroad_source.png`; inventoried district_b warehouse/extraction, car/fence/crate state source sheets and pickups/checkpoint/objectives.
- Observed distinction: the 16-tile source contains useful curb/corner/asphalt concepts, but extraction compresses roughly236×234 source cells to32px. The source shows independent full asphalt backgrounds and decorative edge pixels; it is not verified as seamless32px terrain or transparent decals. Other source sheets have no native metadata/bundle references in this map. Merely counting their PNGs overstates usable production coverage.
- Impact: current asset integration uses a flattened scene as the main environment foundation, with little variation or destination identity in the large extension.
- Fix order: (1) compatible native asphalt base/variants; (2) transparent dirt/crack/stripe overlays and curb adjacency; (3) authored nonblocking dressing/landmarks reused from existing suitable source, with native export, pivots, TSJ IDs, source provenance and footprint/occlusion examples. Car/fence integration must respect existing collider/destruction/navigation scope. Do not require asset generation before checking reusable sources.
- Tracking/owner: existing BL-024/S01-12 and asset inventory owners; environment acceptance remains Unassigned. Parent integration owner records the concrete gap in BACKLOG.
- Acceptance: art source and native exported PNGs are referenced by this same map pipeline and reviewed in actual encounter at current scale; more files, previews or generated samples alone do not pass.

### F-04 · [P2] Raised sidewalk appearance has no corresponding interior footprint contract

- Evidence: native map has four perimeter rectangles in Collision and no interior static solids. Center/edge curb islands are visibly raised with edging/shadow, inherited from flattened scene artwork.
- Source-backed observation: interior curb appearance does not imply an interior collision rectangle. I did not execute traversal through each island, and do not classify navigation as tested.
- Impact: some players may read these as raised barriers even though only the perimeter is authoritative; route affordance needs explicit design review.
- Fix: clarify which paving is intentionally walkable; either use art that reads as paving or give real blockers authored footprints only after a valid route/navigation proof. Keep the current lane-safe layout while improving the visual cues.
- Tracking/owner: BL-024, integration/design collaboration; no new scope ownership inferred.
- Acceptance: before/after actual traversal demonstrates the intended curb behavior and a human route/setup playtest records whether players misread it.

## Validation

| Review action actually performed | Result | Evidence/limit |
| --- | --- | --- |
| `view_image` native Tiled raster | Inspected1280×640 overview | Frozen `build/tiled_world_qa/baseline/tiled_map.png`; Tiled editor point pins are editor markers, not runtime missing art |
| `view_image` packaged encounter combat capture | Inspected1280×768 GPU frame | Frozen `baseline/combat.png`; fixed camera/core view only |
| `view_image` east/south camera capture | Inspected1280×768 GPU frame | Frozen `baseline/camera_east_south.png`; strong evidence of extension patches, not a player playtest |
| `view_image` street source, tile source/native atlas, crossroad source, car states source | Inspected reuse candidates | Source readiness/adjacency not automatically accepted |
| PowerShell JSON layer/GID/rectangle inventory, `rg` map line references, SHA-256 | Layer patterns and four collision rectangles confirmed | Read-only source evidence; no parser/runtime correctness audit |

No build, tests, game run or new rasterization was performed by this reviewer. Runtime PNGs were supplied by the integration owner and independently inspected. Existing technical pass counts are intentionally not used in visual scoring. No human QA/playtest, animation playback, monitor color calibration, console/controller route evaluation or performance benchmark was performed.

## Handoff

Return the map’s visual gate for repair under existing BL-024/S01-12. First remove opaque marker patches and arbitrary scene-fragment extension, then supply the missing terrain/decal/curb family and selected landmarks. Review the exact revised source hash with a fresh native raster and actual GPU core/east/south frames, including the angle and location exposing F-01. Re-review is a new dated report linked here. Keep the successful native format/camera/collision implementation and existing character/asset ownership; this finding does not justify rewriting the renderer.
