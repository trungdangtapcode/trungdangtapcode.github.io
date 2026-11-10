# BL110 Independent Source Review

Review revision: `112e6469f1adc2e01a0f8cff3ba96e4dea9f06f4`  
Semantic comparison base: `b8afcb7`  
Scope: new escape depth GIDs 400–405, their map instances and blockers, archive control and
route fixture geometry, and asset/package references. Read-only review; no source edits, builds,
exports, or gameplay executions were performed by this reviewer.

## Verdict

**Needs changes: the new prop blockers do not match their rendered images.** The TSJ declares
bottom-center alignment, but the new map footprints were positioned as if the visual object's
X coordinate were its left edge. Several vertical positions also use inconsistent anchor math.
The blockers are loaded from the runtime collision layer, so the mismatch creates collision in
empty floor beside or below the artwork and leaves the artwork itself unblocked. Correct the
visual anchor or blocker rectangles before treating the new prop placements as integrated.

## Finding BL110-R1 — prop collision footprints are displaced from artwork

`content/maps/escape_route_v1/escape_depth.tsj:8` declares `objectalignment: "bottom"`, which the
loader maps to `MapObjectAlignment::Bottom` (`src/content/maps/TileMapLoader.cpp:159-190`). The
renderer computes each image's top-left as its anchor minus half the image width and the full
image height (`src/presentation/resources/TileMapResources.cpp:230-234`). The metadata expresses
collision rectangles in image-local coordinates: e.g. generator skid `[20,77,88,16]` at
`art/environment/escape_depth_v1/service/metadata.json:65-72`; records rack `[5,69,54,10]` at
`art/environment/escape_depth_v1/evacuation/metadata.json:19`.

The expected world footprint is therefore:

```text
x = visual_anchor_x - image_width / 2 + local_footprint_x
y = visual_anchor_y - image_height + local_footprint_y
```

The current `Static collision source geometry` layer is `role: collision`; these are active
obstacles, not authoring-only geometry. The loader adds their rectangles to movement and sight
obstacles (`src/content/maps/TileMapLoader.cpp:431-454`). Examples (actual values are map x/y;
expected values apply the native metadata and TSJ alignment):

| Visual instance | Current blocker top-left | Expected blocker top-left | Difference |
| --- | ---: | ---: | ---: |
| `workshop_generator_skid` (1559, GID 400, anchor 768,2448) | 788,2429 | 724,2429 | +64, 0 |
| `workshop_industrial_pump` (1560, GID 401, anchor 768,2800) | 782,2782 | 734,2782 | +48, 0 |
| `archive_security_dispatch` (1561, GID 402, anchor 3104,2816) | 3108,2776 | 3060,2796 | +48, -20 |
| `archive_records_rack` (1562, GID 403, anchor 3184,2464) | 3189,2533 | 3157,2453 | +32, +80 |
| `security_triage_trolley` (1563, GID 404, anchor 3136,3328) | 3144,3379 | 3096,3315 | +48, +64 |
| `service_route_evacuation_baggage` (1564, GID 405, anchor 928,1472) | 932,1463 | 900,1463 | +32, 0 |
| `archive_records_rack_overflow` (1572, GID 403, anchor 2224,2912) | 2229,2981 | 2197,2901 | +32, +80 |
| `lobby_evacuation_baggage` (1573, GID 405, anchor 3024,3416) | 3028,3377 | 2996,3407 | +32, -30 |
| `coastal_evacuation_baggage` (1574, GID 405, anchor 1680,368) | 1684,329 | 1652,359 | +32, -30 |

The two additional instances repeat the same horizontal error: freight generator 1570 is shifted
64 px east; freight pump 1571 is shifted 48 px east. The map object and paired footprint records
are at `content/maps/escape_route_v1/escape_route_v1.tmj:63503-63749` and
`:71263-71576`. The systematic horizontal shifts equal half the sprite width, matching the
bottom-center alignment discrepancy. Rack and trolley vertical shifts equal their image heights;
the lobby/coastal baggage use a different vertical sign and are 30 px too high. Do not assume the
offset error is limited to the examples above.

This is a concrete hidden-collision defect. It can affect movement/LOS beside narrow routes and
does not faithfully block the authored prop contact area. The direct and service route fixtures
now include the archive control at `(2984,2784)` and preserve their loading branches, but their
presence does not demonstrate that these new blocker rectangles are aligned or traversable.
No route or collision test was executed in this review.

## Other source and evidence checks

- GID 400–405 are registered by the new `escape_depth.tsj` at first GID 400. The TSJ image paths
  resolve to the six native files under `art/environment/escape_depth_v1/{service,evacuation}/`;
  native sizes agree with the TSJ and metadata. No missing ID or image mapping was found.
- `tools/assets/export_tiled_assets.ps1` traverses map → TSJ → image references and copies those
  workspace files into the package. The captured package index map hash is
  `A8D67CD259BC512A8725E7F9F64F86C3B919179D15D17D3AB4C34CB51F6D8A9E`, exactly matching the
  current map. All nine packaged runtime captures exist, and the two reviewed screen images show
  the current scene assets resolving. This is not a full clean-package check.
- The archive control is `recover_security_codes.control`, rectangle `(2936,2736,96,96)`;
  its visual point is `(2984,2784)` (`escape_route_v1.tmj:89053-89086`). The dispatch image anchor
  is `(3104,2816)`, with a visible 128×80 image. Its nearest expected footprint is on the
  workstation base. The route ends at the control visual point; source geometry shows a clear
  west-side approach between that control rectangle and the desk artwork. No control/door overlap
  regression was confirmed from these source coordinates.
- The inspected screenshots are capped 1280×720 JPEG previews of 1600×900 PNGs: archive inside
  (`5_archive_inside.png`, original SHA-256 `8ceec8d25ab6c43c9b12c68e1a9e6b9bcf9cd33c925b2dbcfb7b9378e3cf2f5d`)
  and freight (`5_freight_yard.png`, original SHA-256 `fc69a57768e54cafc99d5666d1e12f6ff89bac32f3ab91a59c8962ce7048c312`). JPEGs support composition overview only; they do not verify exact alpha, pixel seams, or transparency.
- No human route/readability/engagement assessment was conducted. The captures are isolated-player
  snapshots, not pacing evidence or route acceptance.

## Limitations

This review is a map/metadata/runtime-source audit plus two capped screenshot overviews. It did not
run validation, builds, exports, or gameplay. Findings about blocker geometry follow the loader's
actual Tiled object alignment and metadata footprint contract; final visual and human route review
remain outstanding.
