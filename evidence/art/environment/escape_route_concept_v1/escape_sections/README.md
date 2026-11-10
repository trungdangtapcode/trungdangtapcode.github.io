# Sequential escape concepts

Scope: source study, not a playable map or production art handoff. These four GPT Image
concepts expand the overview in escape order. Native PNGs are preserved unchanged;
dimensions and SHA-256 hashes are in [receipt.json](receipt.json).
Exact generation prompts and original output paths were not retained in the recovered
session handoff. The overview's separate generation.json does not describe these images.

| Phase | Composition | Gameplay intention | Native work still required |
| --- | --- | --- | --- |
| 01 · Service court / Gate A | Power cabinets, closed barrier, loading shutters, warm lamps | Activate the motor, choose a temporary defense position, then leave when the passage clears | Terminal approach, gate states/footprint, readable crossing, rear/flank entry routes |
| 02 · Loading lanes | Two routes around a warehouse block, upper truck/container lane and lower service lane | Trade a short exposed journey against a longer cornered route while pursuit continues | Measure both route lengths; prove collision, corner visibility and reconnection with the same pursuers |
| 03 · Freight yard / Gate B | Containers, loading bays, open lanes and a coastal edge | Spend remaining equipment on a second opening with different approach geometry | Independent gate instance, activation access, escape lane, selected cover footprints and coastal boundary |
| 04 · Coastal extraction | Waterfront road, warehouse edge and illuminated helipad | Reach a clearly visible destination while survivors and enemies remain live | Select an extraction identity; arrival completes escape without another mandatory hold or kill-all |

## Visual review and limits

Self-review used small JPEG inspection previews, not full-resolution pixel/alpha inspection.
The industrial palette, warehouse language, lamps and containers provide a coherent direction.
The final two concepts establish a coastal destination beyond the enclosed service district.
They are references to compose one map, not four levels or seam-compatible chunks.

- Match exit/entry positions between phases in the native layout. The overview remains the
  connectivity guide; do not concatenate these illustrations as terrain textures.
- Normalize actor-to-building scale, road widths and gate clearance before decoration.
  No actor-scale or traversal measurement is established by these empty concepts.
- Simplify dense containers, planting and pavement detail at actual gameplay zoom. Distinguish
  decorative props from cover with authored footprints and readable silhouettes.
- Treat the helipad as a proposed destination landmark, not a commitment to helicopter art,
  vehicle AI, an arrival timer or another defense sequence. Keep the established extraction
  contract; a sign/beacon can replace it if a helicopter is outside the selected scope.
- Generated lamp pools do not demonstrate runtime visibility or fix BL-093. Inspect both
  routes, occlusion and sources when looking away in a native encounter capture.
- No facade, vehicle, seawall, fence or container pictured here is thereby accepted as a
  production asset. Use the asset brief's reuse audit before requesting new source art.

## Handoff

Design integration writer: Codex Sprint 01 integration. Native map/art owner remains
Unassigned under BL-098. Next deliverable: a connected native Tiled one-gate route with
selected existing materials, real collision/markers and actor-scale renders for BL-097;
extend that same map to both lanes, Gate B and extraction. No new character assets are needed.
Human visual acceptance, native map validation and gameplay testing remain outstanding.

Local validation on 2026-10-25: board export matched its source after relative-path rewriting;
all local HTML image/document targets and fragment anchors resolved; IDs were unique in
both pages; all four original PNG hashes matched the receipt. Scoped whitespace checks
passed. No game build, runtime test or browser-layout acceptance was performed for this
concept-only increment.

The reproducible HTML source is [../board.html](../board.html). Export it using
[../Export-Board.ps1](../Export-Board.ps1) to restore `build/escape_map_design/index.html`.
