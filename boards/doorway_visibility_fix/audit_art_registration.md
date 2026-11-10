# Doorway art registration audit

Scope: read-only Tiled/art registration review for the service-court workshop and security facade. The active integration owner retains runtime/depth/sight changes. No artwork, map, runtime, or build output was changed. This is a source-backed audit, not visual or traversal acceptance.

## Findings

### Workshop south doorway and canopy

- `content/maps/escape_route_v1/escape_route_v1.tmj` places the 512 x 640 workshop interior object 1126 (`gid 302`) bottom-aligned at `(896,3008)`, yielding the authored origin `(640,2368)` documented in `art/environment/service_court_interiors_v1/authoring.json`.
- Authoring metadata measures the south floor opening as half-open local x `[196,315)` at local y=608: world x `[836,955)`, floorline y=2976. The source's alpha-visible entrance is intentional; this is not an absent doorway.
- Canopy object 1498 (`gid 312`, `environment.service_court.facade.entry_canopy`) is bottom-aligned at `(896,3032)`, 160 x 80, with `sort_ground_y=3032`. Its linked support footprints are 1496 `(826,3016,14,9)` and 1497 `(953,3016,14,9)`. These footprint bounds clip the opening by 4 units on its west edge and 2 units on its east edge. They also squeeze the immediate approach; the pair leaves 113 units between supports against a 119-unit measured door. This is a real placement/collision mismatch with the design requirement to keep the opening and approach clear, while some canopy overlap of facade pixels can be intentional trim.
- The adjacent bollard footprints 1218 `(826,3014,12,10)` and 1220 `(954,3014,12,10)` independently narrow the approach to 116 units. Removing only the canopy does not clear the full threshold approach. Preserve the authored bollard semantics; move each visual and footprint together only if the integration owner validates the resulting route. The packets do not establish an accepted replacement canopy for the workshop.
- Minimal reusable correction: remove canopy instance 1498 and linked footprints 1496/1497 for the trial; then review/move the existing bollard pairs with their stable IDs and separate collision records if the complete approach still needs clearance. Do not paint over or crop the authored workshop opening. Do not make a canopy from hardcoded shapes. If a covered entrance is later a real requirement, use a separately authored derivative with preserved post scale and explicit metadata/collision, following the registration discipline in packet 07.

### Workshop east exit dark patch report

- East wall collision is deliberately split around the doorway: object 1309 `(1132,2464,20,96)` and object 1310 `(1132,2657,20,263)`. The door gap is y `[2560,2657)`, matching `authoring.json`'s measured local opening `[192,289)` translated by origin y=2368.
- The asset reaches the east canvas edge at local x=511; the map object/origin place that edge at world x=1151, immediately beside the wall's east edge x=1152. Therefore the current map anchor, floor opening, and collision gap agree to the expected one-unit raster/rectangle boundary. The metadata does not support shifting the complete workshop asset or wall to fix the reported patch.
- The screenshot's rectangular dark patch cannot be attributed to a registration mismatch from the available source metadata alone. It needs a crop of the candidate render with map/world coordinates and tile/layer visibility. A local dark floor/overlay may be intentional; a patch that terminates on the workshop canvas edge or the separately-authored wall/cutaway boundary should be traced to that consumer before changing art. No artwork correction is justified by the current evidence.

### Security facade south entrance

- Security interior object 1127 (`gid 304`) is bottom-aligned at `(2784,3712)`, 1536 square, yielding top-left `(2016,2176)`, as specified by packet 07. Metadata alpha bounds are interior `[53,48,1484,1481)` and roof `[51,37,1490,1483)` at threshold 16; the exterior alpha extents differ, but that is not itself proof of bad registration.
- Canopy object 1501 (`gid 312`) is at `(2784,3688)`, 160 x 80. Its supports 1499/1500 at x 2714 and 2841 leave 113 units; the security wall opening is 152 units. The proposal in packet 07 says this combination narrows the approach, and bollards 1222/1224 narrow it again. Packet 07's minimal first trial removes the security canopy and its support footprints and shifts the two existing bollards outward with their footprints, preserving their stable IDs/art.
- A player partly hidden while immediately south of the facade may be expected foreground occlusion where the player overlaps a foreground facade edge. Source art metadata alone cannot distinguish intended draw-order occlusion from an over-deep depth anchor. Root owns that depth/sight diagnosis. The canopy geometry does independently create a threshold pinch; keep those as separate findings.

## Evidence limits and validation

Read `planning/PRODUCT_CONTINUITY.md`, `planning/README.md`, `planning/VISION.md`, `planning/CODING_GUIDE.md`, `planning/AGENT_NOTICE.md`, `planning/WORKFLOW.md`, and service-court design packets 01, 02, and 07. Parsed the registered TMJ and TSJs and inspected recorded source geometry/alpha measurements. No source image was opened, no image generation, build, game, route probe, or new screenshot inspection was performed. Existing packet limitations remain: alpha extents do not prove jamb registration, and geometry measurements do not establish player traversal or perceived occlusion.

## Pixel check: workshop east exit (follow-up evidence)

The TSJ references confirm the source paths `native/workshop_interior.png` and `native/workshop_roof.png`, both 512 x 640. Lossless inspection crops are saved beside this note as `workshop_interior_east_crop.png` and `workshop_roof_east_crop.png`; each is source rectangle `[448,160,512,360)`, with no resampling.

An alpha scan at threshold 16 across the clear interior of the east opening (columns x=493..507) finds 15/15 pixels below threshold for local rows `[262,344)` in the interior. The roof has at least 14/15 such pixels for `[264,342)`, with partially transparent/irregular edge pixels; its opening agrees within two pixels. These are native source pixels, not inferred from the game render. They place the opening at about world y `[2630,2712)` from the registered origin y=2368.

This conflicts with `authoring.json`'s current `east_clear_y_half_open: [192,289)` and map collision objects 1309/1310, which leave world y `[2560,2657)`. The collision begins 70 units before the interior art opening and ends 55 units before its bottom; only 27 units of their vertical spans coincide. Thus the reported lower jamb is supported by source pixels and is not explained by a roof/interior registration shift. The likely error is the recorded east-door measurement and matching collision placement, not a reason to shift or repaint either source image. Whether the artwork or the gameplay opening should own the final y coordinate remains an integration decision; source art alone does not establish traversability. The east door's horizontal extent/collision width was not rescanned here.

Measurement method: `System.Drawing.Bitmap.GetPixel` alpha values for x=493..507 in both original PNGs; row qualifies when 14 or more of 15 pixels have alpha <16. Boundary crop inspected at native scale. The criterion tolerates a single partially transparent edge pixel and does not prove actor clearance, runtime compositing, or the full horizontal opening. No game/build/probe ran.
