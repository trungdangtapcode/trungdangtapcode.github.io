# RV-20261107-002: VNUHCM-inspired campus library expansion

## Scope and snapshot

2026-11-07, Asia/Saigon. Root integration/self-review for BL-120, extending the
[36-design source packet](2026-11-07-001-campus-asset-library.md). Final source/art/tool freeze:
`44bbbccbc977f4223877ed036cfe9c96c91f4103`, on main. This is a source-art library with native
catalogs and placement worksheets, not a runtime candidate or finished campus level.

The user requested several hundred assets and selected VNUHCM as the theme. Root owns GPT
Image generation, registration, scale calibration, integration and final review. Bounded workers
supplied the collection specification, gallery extension and Tiled-bank migration; a read-only
peer inspected seven source plates. AGENTS.md and todo.txt remain untouched. Actions stay disabled.

## What actually exists

**324 separated native RGBA8 PNGs**: 288 newly generated designs plus the preserved 36 v1
assets. They span 22 families; all 324 native hashes are distinct. There are 18 new original
source plates, each with 16 registered cells, exact prompts, generation IDs and SHA-256 values.
Assemblies and meaningful static damage alternatives count as one asset each, not as several
objects inside a drawing. Catalog entries and placement instances are not counted as artwork.

| New functional group | Additional assets |
| --- | ---: |
| Classroom furniture, teaching equipment and stationery | 48 |
| Biology, chemistry, engineering and design studios | 64 |
| Library services and administration | 32 |
| Cafeteria furniture and smallwares | 32 |
| Dormitory, athletics and medical/emergency equipment | 48 |
| Tropical grounds, courtyard services and architecture pieces | 48 |
| Evacuation/damage cues | 16 |

Official [VNUHCM campus photographs](https://stg.vnuhcm.edu.vn/tin-tuc_32343364/khu-do-thi-xanh-dhqg-hcm/353935373364.html)
and the [UIT tour](https://tuyensinh.uit.edu.vn/uit-tour-360/) informed the pale concrete frames,
colonnades, shaded galleries, tinted glazing, stairs/ramps, low landscaping edges and tropical
planting. This is a game interpretation, not a site survey or exact institutional replica.
Downloaded reference photos remain local research material; they are not production pixels.

The [source guide](../../art/environment/campus_v2/README.md),
[source ledger/prompts](../../art/environment/campus_v2/generation.json) and
[canonical extension recipe](../../content/art/authoring/campus_v2/collection.json) are tracked.
Combined registration, native PNGs, receipts, Tiled maps/renders and the
[searchable local gallery](../../build/vnuhcm_campus_review/index.html) remain ignored build output.

## Findings and corrections

1. **Tiled ID collision at the next extension.** V1 mixed imported IDs 0-35 with reused IDs
   36-40. Appending new art would alias furniture. The builder now exports separate imported
   and reuse collections and derives GID spans (`tools/assets/campus/build_study.ps1:378`).
   The same implementation handles the original 36 and the combined 324 registrations.
2. **Invalid physical scale despite valid PNGs.** Initial recipe dimensions made binders and
   readers too large and some full-size equipment too small. Root recalibrated 67 entries in
   `content/art/authoring/campus_v2/collection.json`, retaining IDs and original source pixels.
   The original prompts remain generation history. Before-calibration evidence is retained
   in `build/vnuhcm_campus_review/before_calibration/`; native checks alone did not detect this.
3. **Clipped trees.** Actual scene inspection found the same left-border crop in all three
   studies. Placements were moved inside the canvas. The builder now rejects full sprite-canvas
   overflow, not just an out-of-range anchor cell (`build_study.ps1:647`). A negative case
   reproduces the old placement and confirms rejection.
4. **Unsupported tabletop equipment.** Four worksheet objects lacked surfaces. Root added
   authored desk instances and support offsets. Tabletop intent now requires an explicit
   tabletop/support placement or deliberate floor-scatter override (`build_study.ps1:652`).
   This is a shared placement rule, not a list of special-cased item IDs.
5. **Wall support and gallery growth.** Authoring import schema 2 adds decorative wall support;
   schema 1 remains compatible. The existing exporter, study builder and gallery consume it.
   No runtime schema changes. Gallery source ledgers compose v1/v2 provenance, exact 1x/2x
   cards remain usable at 324 assets, and rendering uses compact family pages instead of a
   giant overview. Native source properties resolve correctly in nested output directories.

## Actual validation

- Native check: **324 assets, 22 source PNGs, 326,880 native pixels**, RGBA8 headers, expected
  dimensions, source/output hashes, nonempty/binary alpha, palette membership, unique IDs/tile
  IDs, pivot/contact bounds and null collision. All 324 PNG hashes are distinct; all 36 v1
  output hashes remain identical. [Native receipt](../../build/vnuhcm_campus_review/native_checks.json).
- Tiled: **28 maps, 10 referenced tilesets, 991 image references, 2,492 file properties and
  1,474 native-size object instances** pass resolution, namespace, size and boundary checks.
  The full catalog remains editable; 22 compact family catalogs include the registered
  48-pixel-visible Survivor reference. [Tiled receipt](../../build/vnuhcm_campus_review/tiled_checks.json).
- Three worksheets contain **55 lecture-court, 48 library/lab and 50 canteen/dorm placements**.
  These are sparse support/context studies, not accepted level layouts. Root inspected the
  real Tiled renders, corrected the clipping/scale/support findings, and sampled native boards.
- Source overview: root inspected eleven new plates, and a bounded read-only peer inspected
  the other seven using capped previews. All showed the intended 4x4 source layout and useful
  functional silhouettes. JPEG overview inspection does not establish exact alpha or every
  native micro-detail; PNG/pixel checks and sampled native review are separate evidence.
- Browser: **10 checks pass**, including 324 cards/22 families, new art first, all 674 image
  elements decoding, all 727 local links resolving, family/support/search filters, exact 2x
  dimensions and no 390-pixel horizontal overflow. Desktop/narrow captures remain local.
  [Browser receipt](../../build/vnuhcm_campus_review/gallery_checks.json).
- Authoring: **seven checks pass**: four PowerShell syntax checks and negative cases for
  missing artwork, clipped sprite canvases and unsupported tabletop placements. The receipt
  records source hashes at the freeze above. [Authoring receipt](../../build/vnuhcm_campus_review/authoring_checks.json).
- Legacy schema-1 study and 36-item gallery pass in separate compatibility output. Source
  structure checks 529 files: zero blocking findings and 25 existing review notices.

No C++ build, game run, full project gate, FPS measurement or gameplay playtest was performed.
GitHub CI was not run. Earlier runtime reports certify their own snapshots only.

## Verdict and remaining gates

**Ready for the scoped 324-asset source-library handoff; human art review remains open.**
The requested quantity exists as actual separate native artwork with preserved sources and
reusable registration. This is not evidence that every asset belongs in one scene or that
campus gameplay has acquired depth simply by increasing the count.

Architecture connections/seams, glass/roof depth, ground contacts, terrain transitions, wall
attachment, physical footprints, functional lighting/loot and actor/combat readability require
real-map integration. In particular, stair/ramp artwork does not establish a traversable ramp.
Some micro-props may need further size/art calibration in their eventual context. The
worksheets are deliberately schematic; they do not accept campus architecture or mission routes.

Root integration owns the next approved campus area through the existing Tiled/resource path.
Select purposeful room/route clusters, author indoor/outdoor connections and interactions, then
verify visible geometry, movement, visibility and combat in the encounter before accepting that
level. Preserve the sources and stable IDs; retire worksheet consumers when their accepted
placements have migrated into the real source-owned map with matching evidence.
