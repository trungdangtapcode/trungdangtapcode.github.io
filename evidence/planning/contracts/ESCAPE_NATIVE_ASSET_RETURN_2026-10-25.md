# Escape native asset return

Scope: BL-098 authored asset packet and editable Tiled source. This is not a runtime
candidate. The existing playable encounter remains unchanged. Mission implementation
belongs to BL-097; human route/pacing acceptance belongs to BL-099.

## Ownership and source of truth

### Follow-up asset review, 2026-10-29

The packet is not complete enough to accept the escape environment. The separate
[warehouse roof study](../../art/environment/escape_warehouse_roof_v1/README.md) supplies
the missing building mass without flattening a concept scene into the map. Native facade
joins are documented in the [join audit](ESCAPE_INDUSTRIAL_JOIN_AUDIT_2026-10-29.md).
The forklift now has a bounded light/dark/yard comparison at
`build/escape_landmark_review/index.html`; its proposed placement remains unaccepted.
The map pass reuses the existing concrete/paving edge and corner tiles around its inset;
the outer concrete/asphalt perimeter still lacks an accepted transition kit. Source-only
observations and limits are recorded in [composition review 003](../reviews/2026-10-29-003-escape-composition.md).

The [gate clearance review](../reviews/2026-10-29-002-escape-gate-clearance.md) establishes
only static single-actor fit: the 56-pixel opening leaves 20 pixels per side for the player
and 21 for the Walker when centered. It does not prove crowd traversal. The current
runtime consumers still expose one arena gate; both escape gate instances require BL-097
integration and evidence. Do not stretch the gate or change actor size to bypass that work.

Remaining asset/visual gates are composed facade/roof registration, apron transitions,
repetitive empty asphalt, coast joins and destination readability under encounter lighting.
Motor start/loop/stop and the clearance cue remain unaccepted audio work. The new roof
and existing props do not close these gates by file count.

The user explicitly authorized a design subagent team for this delivery. Codex escape
native layout owns the new Tiled source; Codex escape industrial art owns the warehouse
kit; Codex escape coastal art owns the waterfront kit; Codex escape reuse audit owns
the reuse inventory and audio sourcing. Codex Sprint 01 integration owns this aggregate
handoff and review board. Existing BL-024/S01-12 map and BL-029 asset inventory ownership
is preserved.

- [Reuse audit](ESCAPE_ASSET_REUSE_AUDIT_2026-10-25.md) and
  [machine-readable selection](../../content/maps/escape_route_assets/reuse_inventory.json).
- [Editable continuous route](../../content/maps/escape_route_v1/README.md).
- [Review board source](../../art/environment/escape_asset_packet_v1/README.md), generated
  at [build/escape_asset_review/index.html](../../build/escape_asset_review/index.html).
- [Licensed audio profile](../../content/audio/escape_gate_authoring.json).
- [Industrial kit](../../art/environment/escape_industrial_v1/README.md): six warehouse
  modules, source sheet, repeatable export and image-collection tileset.
- [Coastal kit](../../art/environment/escape_coastal_v1/README.md): six seawall props,
  lit/unlit extraction beacon and arrow plate, source prompts, hashes and export.
- [Industrial V2 comparison](../../art/environment/escape_industrial_v2/README.md): six
  transparent-background exports, preserved separately without changing map consumers.
- [Freight landmark study](../../art/environment/escape_loading_landmark_v1/README.md):
  the original illustrated sheet is style-rejected. A separate 96 by 96 pixel forklift
  export has a bounded contrasting-background review; map-fit, pivot and footprint remain open.

The larger route is 96 by 112 cells at 32 pixels per cell: 3,072 by 3,584 world pixels.
Service court, two rejoining transit lanes, freight yard and extraction share one map.
The four earlier area concepts remain layout references, not floor textures or native
map chunks. Extraction is an arrival destination, not another timed hold.

## Reuse and integration limits

Use existing asphalt/detail variants, concrete/paving, separated lamps, supply crates,
power controls and gate frames before creating replacements. The existing gate sheet
contains three 96 by 96 frames; the conservative authored passage is only 56 by 52 pixels. Both gates
must match that artwork at native scale. Do not stretch the sheet to cover a wide lane.
Player and crowd clearance through that aperture still require runtime validation.
The transit lanes are much wider than this gate bottleneck. If crowd traversal fails,
request a wider authored gate and matching collision contract rather than stretching
the current image or silently reducing actor size.

New module pivots, proposed footprints and Tiled placements are authoring data. Current
runtime map consumers do not accept all escape roles or image-collection tilesets. BL-097
must migrate producer, typed loader, renderer, collision, navigation and sight consumers
together through the existing pipeline. Do not load this authoring map as though that
migration had already passed. First prove one gate, then the second through the same
implementation; preserve session state and pursuit across both.

## Remaining gates

The independent source audit found an industrial matte-removal limitation and flagged
coastal partial alpha for measurement. Matching hashes and image dimensions do not resolve
either visual issue. Keep the original kits as unaccepted studies; any replacement must
retain its own source provenance and pass native-scale light/dark-background inspection
before changing map consumers. The loading/cargo landmark needs its own map-fit review;
the extraction beacon does not replace that freight-yard requirement.

Source-versus-export measurement clarified the coastal finding: nontransparent native
pixels have median alpha 252 for seawalls and 253 for beacon/sign props; roughly 87--92%
are at least 240. The exports preserve source opacity. The absence of exact alpha 255
in the seawalls is not proof of ghosting and does not justify blindly thresholding alpha.
Judge the softened edges over the board's light/dark backgrounds before re-authoring them.

The V2 industrial edit removes the opaque checkerboard background without color-keying.
Its six crops inherit V1 rectangles; bounds validation alone does not prove registration.
Two small native exports (brick straight and outer corner) were inspected directly and
look readable without the detached checker flecks seen in V1. This limited observation
does not accept all six connectors, map placement or collision. V2 remains a comparison
candidate rather than an automatic replacement.

The earlier Tiled inspection found disconnected facade strips and weak building mass.
The follow-up roof and connected frontage now read as one warehouse in the reduced freight
preview. Composition remains unaccepted: the apron boundary is abrupt, and large asphalt
expanses remain repetitive and sparsely dressed. Native joins, occlusion and encounter
readability still need review before growing decorative content.
The native 96 by 96 forklift is legible in isolation; its median visible alpha is 253,
with 92.4% of visible pixels at least 240. This is not alpha-based rejection or map-fit
acceptance. No extra character artwork or new runtime rendering path was introduced.

The process-local Qt setup in `content/maps/escape_route_v1/render_map.ps1` addresses
the rasterizer startup failure shown in the user's `image15.png`. A fresh rasterizer
run exported the overview and four crops. It changes no persistent Windows settings.

| Gate | Owner | Evidence needed |
| --- | --- | --- |
| Native composition and module joins | Respective kit owners + map owner | Native-scale Tiled captures, seams, palette, alpha, occlusion and route readability |
| Actor clearance and crowd flow | Sprint 01 integration | Actual actor/crowd traversal through both gates and transit lanes |
| Gate sound profile | Design audio owner, currently unassigned | Audition; separate motor start/loop/stop and distinct clearance signal |
| Runtime collision and lighting | Sprint 01 integration | Gate passability/LOS transition, illumination and pursuit in the encounter |
| Pacing and destination readability | BL-099 organizer, currently unassigned | Two human rounds, route choices, resources, wrong turns and revision-matched changes |

Three CC0 MP3 HQ-preview candidates are delivered for audition. They are not original
WAV masters or an accepted loopable motor profile. Source URLs, authors, hashes and
licenses are retained in the audio profile. Audio playback has not been integrated.

## Validation scope

The board exporter checks referenced files and records their SHA-256 hashes and PNG
dimensions. The browser check verifies local reference existence, image decoding and
audio duration metadata without playing the recordings;
it does not establish alpha correctness, seamless joins, audio quality or gameplay.
Each kit and map receipt supplies its own additional checks and known limitations.

The packet browser check loaded 34 images with zero decode failures, read positive
durations for all three audio candidates, and checked 54 link surfaces. Referenced local
files exist. The generated board receipt records all 37 media sources and their hashes.
See the [scoped review](../reviews/2026-10-29-001-escape-asset-source.md) for observations
and limits. Media loading is not visual or auditory acceptance.

No C++ build, game run, stress benchmark or `check_project.ps1` result is supplied by
this asset-only return. BL-098 remains open until its native visual and encounter
acceptance criteria are met. Runtime handoff must provide a stable integrated revision,
fresh technical report, canonical stress, selected escape smoke, launcher and index.
