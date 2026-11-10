# BL110 Final Pump Placement Source Review

Reviewed current workspace map at HEAD `683aa69187bc9cfd2e4fd122975bb625aa72b2ba`; the map
is modified in the working tree (SHA-256 `E069266495D2A8CA477E2A30E53A05ABCBA6F9F0B50C1DC26DE38D1614BCD853`).
Scope: pump visual object 1560 / blocker 1554 at the requested anchor, with nearby workshop
generator, radio, cable drum, control, loot, and route geometry. Read-only source review; no tests,
build, export, or game execution.

## Source geometry result

The pump is 96×80 with bottom-center native anchor `[48,80]` and metadata footprint
`[14,62,68,15]`. At visual anchor `(960,2544)`, the expected blocker is:

```text
x = 960 - 48 + 14 = 926
y = 2544 - 80 + 62 = 2526
```

Current map blocker 1554 is `(926,2526,68,15)`, so it matches exactly. The visual object has
`sort_ground_y = 2544`, equal to its bottom-anchor y. This check follows TSJ `objectalignment:
"bottom"` and the existing renderer alignment transform; it does not substitute for running the
registration validator.

The authored rendered bounds implied by this anchor are `[912,1008) × [2464,2544)`; metadata
content bounds begin at local y22. No obvious overlap appears against these current neighbors:

- Generator 1559, anchor `(768,2448)`, 128×96: image bounds `[704,832) × [2352,2448)`; 80 px
  horizontal and 16 px vertical separation from the pump image bounds. Its blocker is
  `(724,2429,88,16)`, separated from the pump blocker.
- Wall radio 1432, anchor `(1040,2480)`, 32×32: image bounds `[1024,1056) × [2448,2480)`; 16 px
  horizontal gap from the pump image.
- Northeast cable drum collision 1314: `(1088,2472,40,64)`, 80 px east of the pump image/blocker.
- Restore-power control area 1134: `(848,2736,96,96)`, 195 px south of the pump blocker. Its
  visual/interaction point `(896,2784)` is also clear.
- Workshop loot markers: `loot.workshop_spare` at `(752,2800)` and `loot.workshop` at `(880,2880)`;
  both are well south/west of the pump blocker. The branch waypoint through `(896,2672)` is south
  of the blocker, which ends at y2541. No source-level collision overlap with the control, loot
  markers, or listed path was found.

The previous pump position at x768 would visually overlap the existing toolbox and cable coil;
the new x960 placement removes that bounding-box overlap. No comparable overlap with the listed
generator, radio, or cable drum is present at the current anchor.

## Native and integrated review limits

The standalone native pump file is `art/environment/escape_depth_v1/service/native/industrial_pump.png`
(96×80, 12,672 bytes). Its unchanged source artwork was viewed in an earlier step, but I did not
inspect a current-map capture for this new placement. Source bounds establish the clearances above;
they do not verify perceived composition, depth against surrounding lighting, artwork quality, or
human traversal/readability. Current BL110 registration/preflight is still pending root validation.
