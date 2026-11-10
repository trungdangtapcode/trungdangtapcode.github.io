# RV-20261102-003 - Connected frontage and visible escape obstacles

## Scope and ownership

Runtime/content slice owned by Codex Sprint 01 integration, following the user's
[composition rejection](2026-11-02-002-service-court-visual-rejection.md) and report of
invisible closed gates and north-route blockers. This report records the revision under
validation; build success alone cannot accept its artwork or human pacing.

## Changes under review

- Two connected warehouse wings replace the four detached repeated buildings. Existing
  utility rooms retain their rectangular interiors, doorways and cutaway bindings. Body
  and dock parts use independent Tiled ground-depth sorting; east reuses the mirrored bank.
- Quiet asphalt replaces the redundant central rectangle. Concrete/paving marks loading
  frontage, room approaches, cargo and motor apron. A 512-unit south threshold now frames
  arrival; the player starts at (1536,3392), outside that opening.
- Four wave-anchor IDs retain their tuning but move clear of the new solids: west/east
  (864,2528)/(2240,2528), southwest/southeast (1376,3328)/(1696,3328). Existing room,
  cargo-bypass and objective coordinates remain. Old art files are preserved.
- Gate art pivots lie south of the closed blockers. Sampling visibility there lets the
  blocker hide its own artwork when viewed from north. The renderer samples the
  observer-facing Y edge, without moving art or changing depth, cone, range or lighting.
- `lane_partition_west` gets four existing cargo sprites; its width matches their authored
  240-unit footprints. `loading_bay_partition_north` gets four corrugated panels. Gate B
  gets the visible barrier and piers already used at Gate A. These use the existing asset
  pipeline; no primitive replacement art or per-gate rendering exception is added.
- Tiled open-gate studies are excluded from runtime. The encounter owns current gate
  frames. Cargo visuals join actor ground-depth sorting instead of always drawing overhead.

## Evidence and checks

The new wing export reproduces its native PNG and three nonempty parts byte-for-byte
from tracked source into an empty output directory. Source/hash/prompt and the canonical
recipe are in [the asset handoff](../../art/environment/service_warehouse_wing_v1/README.md).

Small Tiled inspection previews show the connected wings, attached service rooms, south
threshold and explicit north obstacle art. This is unlit composition evidence; JPEG
previews cannot establish exact alpha, native seams, collision or runtime visibility.
Independent composition review finds improvement, but the yard remains sparse and the
north layout is still provisional. Full-map art/navigation acceptance is not implied.

Initial targeted checks caught missing sort metadata on the new south panels; corrected.
The longer south approach exhausted the old fixture's whole-route 11,000-tick budget at
Gate B. The fixture now allows 12,000 while preserving each 1,800-tick leg limit. Gameplay
waves, difficulty and motor/interaction timing were not reduced.

The integrated Release entry now passes: **470 tests / 2,572,920 assertions**, format,
source structure (zero blockers, 18 existing review notices), assets and canonical load smoke.
The report records 1,704 unchanged inputs for source commit `7410021`:
[technical report](../../build/service_court_concept/project_checks.json), logs under
`build/validation/project_runs/525e517f9a614f3f91257307bda8c060/`.
Selected-route and final visual evidence remain separate from this technical result.

The Tiled audit uses the declared **bottom-center** alignment. The lane cargo anchors
at x=1248 produce image bounds x=1120..1376 and footprint bounds x=1128..1368. Four
64-unit footprint bands cover y=1504..1760. Gate B pier image edges are x=1476..1508
and 1564..1596, preserving the 56-unit aperture. Treating those anchors as top-left
would incorrectly report shifted cargo and intrusive piers; the source audit corrected
that interpretation before proposing any geometry changes.

Native QA uncovered a capture limitation: after a hidden-window buffer swap, readback can
return the previous frame. A one-draw probe produced Gate A-ready pictures next to a valid
post-close state log. Those pictures are **not acceptance evidence**. The corrected probe
presents the same authoritative state three times before capture, without advancing simulation.
Ordinary smoke event images may show the frame immediately before the named transition;
event CSV/results prove progression, and the settled probe must prove post-close artwork.

## Scoped verdict

**BL-105 scoped correction verified; full-level art remains unaccepted.** The settled
comparison reproduces the absent closed leaf with the `c5e020f` renderer and shows it with
the corrected renderer, on the same packaged map and simulation state. Looking away retains
the dim closed leaf. Native cargo and Gate B views show authored surfaces over their blockers.
The west-room native capture also retains its cutaway beside the connected warehouse.

The probe drives actual Gate A activation, opening, crossing and close, then asserts the
Closed state, close event, retained blocker/collision and successor Gate B. Gate B uses the
same rendering path. Both toward/away checks pass. South-side blocked artwork is inspected
before opening; the probe does not claim to walk back through the closed gate. Wave pressure
is disabled only in the isolated probe; both packaged encounter smokes keep authored pressure,
reach coastal extraction and report a peak of 128 alive zombies.

- [Before/after board](../../build/service_court_frontage_revision/index.html)
- [Playable candidate board](../../build/service_court_concept/index.html)
- [Corrected probe report](../../build/service_court_frontage_revision/gate_probe/native/after/gate_probe.txt)
- [Probe receipt](../../build/service_court_frontage_revision/gate_probe/native/after/receipt.json)
- [Bundle identity checks](../../build/service_court_concept/file_checks.json)

Map SHA-256: `D4BE1C5FB485EFE0E1167E839B0B8928F5E9AD0BCFD79523BE590B080530349F`.
Packaged executable SHA-256: `05D197E69F6F203AB949CBF9293E19941BC1FD3D7131374D43A96C30F3FA354A`.
Input/bundle/profile/license checks report no mismatches. The historical-build aggregate
catalog still fails on an older record's missing `display_name`; the current board is exported
and checked separately. No aggregate-catalog repair or universal performance claim is made.

BL-098/104 retain composition and route-discovery acceptance; BL-099 retains human pacing.
BL-106 records ordinary smoke capture timing debt. The yard remains sparse and the wider
north district provisional. Old art is preserved; this does not accept the entire sprint.
