# Changelog

2026-11-09 - Compacted Building C's south frontage to wall, one-tile planter band,
benches on the road edge, remaining road and lawn. Reused the 29 pots/four benches,
cleared the entrance and reconnected side paths. Dressing schema 3 adds foreground
shared scenery to preserve wall-front foliage. Native contact/pixel validation
covers actual placement; upper-floor renders and source art remain unchanged.

2026-11-09 - Removed Building C's automatic ornamental corner/foreground columns
after visual rejection. Projection schema 5 reuses existing flush wall-face/mass
tiles, with a constrained projected joint-face layer and explicit rejected model IDs.
Original art is preserved. Added missing-face, off-plane and relabeled-column
regressions; this changes Tiled authoring, not runtime floor behavior.

2026-11-08 - Repaired Building C's shared classroom/WC wall branches with authored
T-junctions and unioned room-outline connections. Projection schema 4 separates
cardinal shared-cap metadata from corner occupancy and rejects missing shapes.
Foreground columns attach to wall faces; shared horizontal headers omit duplicate
skirts/supports. Added exact-GID, native-seam and negative-regression checks and
three-floor room/actor details. This changes editable Tiled authoring, not runtime floors.

2026-11-08 - Corrected the east connector to ordinary terrazzo and extended its wall
to twelve tiles, aligning exits with the upper/lower galleries. Added original straight
divider start/repeat/end modules through layout schema 3, replacing inappropriate room
corners. North/south frontage strips now hold rows of separate concrete shrub planters
with authored opposing views and no image flip. The club cart moves clear of the exit.
Existing source art remains; this is Tiled authoring rather than runtime acceptance.

2026-11-08 - Tiled the east connector with the floral floor and placed a central
right-edge wall with two small end passages. Redirected ground-floor garden paths
through both openings and moved nearby seating/planting clear. Shell visual and
blocker rectangles now share the same metadata; authored cap ends are reused.

2026-11-08 - Corrected the west service block after user clarification: washrooms are
left of the stair, with north/south entry routes toward Building E and the sports lawn.
Replaced the southern paved plaza with planted beds, asphalt road and a grass soccer
ground; the east garden walk keeps stone paving. Added foreground window attachments
above wall skirts via the existing room/sprite pipeline. The source map is now 170x112
tiles; Building E and floor-aware runtime remain unimplemented.

2026-11-08 - Extended Building C's east side with a ground-floor stone-paving garden walk.
Expanded the editable map to 170x64 tiles and reused seven mature trees, planting,
benches, a side table, recycling and unlit bollards around clear circulation/seating
pockets. Upper floors keep the outdoor extension empty. Existing classroom, washroom,
stair and club-storage geometry remains unchanged from the preceding correction.

2026-11-08 - Expanded Building C washrooms on all floors: separate large men's/women's
west rooms above/below the stair and two compact northeast rooms. Extended the southeast
room to the same edge while retaining two doors and a solid wall opposite the toilets;
reused club equipment is stored along that corridor. Geometry-based shared-cap joins
now include service rooms. Forty-two physical rooms preserve sixty legacy classroom IDs.
User confirmed the compact pair's combined one-bay size and addition at the wing end.
This remains editable authoring, with whole-map art and runtime traversal awaiting review.

2026-11-08 - Moved the Building C north stair down three tiles to meet the floral
gallery on all three floors. Removed its broad concrete surround and registered
explicit north/west/east void zones, checked against ground, floor and landscape.
Stair landing, flight art and reciprocal/path metadata retain the shared core geometry.
This changes editable Tiled authoring, not runtime floor traversal.

2026-11-08 - Applied the user's paired-room/site corrections: 30 two-door classrooms,
three connected west-core washrooms and 60 preserved legacy aliases. Layout/program
schema 2 uses shared room geometry for construction and validation. Floral event court,
original ornamental pond/washroom fixtures and reused campus planting/study/bicycle props
enrich the ground floor; upper atria remain unfilled. Corrected shared-cap endpoint
overwrites and calibrated railing repetition from visible native strokes. Added explicit
multi-piece assembly review rules. This remains editable Tiled authoring, not multi-floor play.

2026-11-08 - Root generated an original painted school-wall atlas and three mature-tree
canopy/trunk pairs with built-in GPT Image. Seventeen wall modules replace normal LPC
consumers through projection schema 2. Six tree parts split exactly into 108 native tiles,
reused in 19 placements with separate canopy layering. Added authored natural/artificial
lawns, reusing the existing concrete/paving bank. Applied the user's GPS/sketch: 7+3 room
blocks, offset connector, main stair above it and west-end stair, with event/study space
between the wings. Fixed double corner posts at shared partitions. Generated renders and
reports remain local; runtime floors/stairs/canopy interaction are still separate work.

2026-11-08 - Corrected Building C's material identity after user rejection: the
example room establishes the orthogonal RPG camera, not a dungeon/stone setting.
North faces, side thickness and foreground faces now use existing authored plain
painted-plaster tiles with gray trim. Room IDs, geometry, furniture and door/blocker
positions are preserved. Updated reference-scope rules and rendered all three floors;
this is map authoring, not a new executable or a gameplay change.

2026-11-07 - Replaced Building C's user-rejected floor-plan wall presentation with an
orthogonal RPG three-quarter room model across all three floors. Added real north faces,
textured structural returns, corner posts, low foreground faces and aligned door/blocker
bases; reflowed existing furniture and retained room IDs. Reused pinned LPC wall artwork
and terrain metadata with attribution, plus matching authored column/window/stair details.
Recorded mandatory camera rules and school-pack research; Haunted School is reference-only
to preserve commercial release. Tiled/native scene, metadata and browser checks are scoped
to authoring; no playable floor system or C++/CI run is implied.
[Camera repair evidence](reviews/2026-11-07-006-rpg-room-camera-repair.md).

2026-11-07 - Added the editable UIT-inspired Building C Tiled source: three aligned floors,
60 stable room IDs, selective access, galleries and grass courtyards between the two wings.
Repaired shared classroom partitions, authored connected overhead wall corners/junctions,
square columns, overhead stair flights/landings and pivot-aligned door/window assemblies.
Reused campus furniture with selected litter, blood and civilian aftermath. Calibrated four
full-workstation views and added opt-in preserved-canvas export while keeping legacy trim
behavior. This is source/map authoring; floor-aware movement, stairs, loot and lighting are
not implemented by the metadata. Generated boards and renders stay outside Git, and no
C++ build or CI was run. [Scoped evidence](reviews/2026-11-07-005-building-c-authoring.md).

2026-11-07 - Added 320 authored campus directional/state views through the existing palette
export and Tiled tooling: 64 intact models and 16 physical state variants in S/E/N/W, with
all 324 legacy native hashes preserved. Coverage schema 2 registers exact source regions
instead of equally divided sheets; source-pixel coverage catches clipped or lost parts.
Preserved repaired desk/couch source history, corrected per-view facing mappings, added four
compact context studies and a model/state gallery. Native and registrar checks pass; visual
approval of every view and a real campus encounter remain open. Generated files stay outside
Git and no C++ build/game/CI was run. [Evidence](reviews/2026-11-07-004-campus-directional-library.md).

2026-11-07 - Expanded the campus source library to 324 native assets: 288 new VNUHCM-inspired
designs in 18 GPT Image source sheets plus 36 preserved v1 designs. Added source provenance,
single-owner extension metadata, schema-2 decorative wall support, separate Tiled collection
namespaces and compact family catalogs through the existing exporter/rasterizer. Native-scale
review recalibrated 67 entries and fixed clipped/unsupported study placements. Pixel/reference,
browser and bounded authoring checks pass; no C++ build, game or CI was run. This is reusable
source art, not an accepted campus level. [Evidence and remaining integration gates](reviews/2026-11-07-002-vnuhcm-campus-library.md).

2026-11-07 - Consolidated the previous development baseline and all pending PRs (#2-8) into
main, preserving commit history and both sides of three documentation-only shader-branch
conflicts. Set main as the repository default. Disabled GitHub Actions before the merges at
the user's request to avoid further billing. No CI, new build or gameplay validation was run
for this consolidation; earlier feature acceptance limits remain unchanged.

2026-11-07 - Added a reusable campus source-art library: four authored GPT Image plates and
36 native prop registrations for student belongings, courtyard fixtures, planting and academic
furnishings. Preserved prompts/provenance and stable IDs; reused the palette exporter, existing
furniture/materials and Tiled rasterizer. The editable 48-placement study and searchable gallery
pass bounded asset/reference/browser checks. Generated files stay outside Git. This is source
art with placement evidence, not a playable campus or a mission/map replacement.
[Scoped review and integration gaps](reviews/2026-11-07-001-campus-asset-library.md).

2026-11-06 - Integrated tactical interface typography and authored action/input graphics through
the existing resource cache: pinned Oxanium Regular/Medium/SemiBold, 17 glyphs, six surfaces,
shared font roles, leading primary gutter and item-specific quantity headings. Reused existing
skins and inventory commands; preserved old assets and presentation compatibility. Release
passes 577 tests / 2,586,558 assertions on 2,018 stable inputs; packaged native input passes 12 groups
with 53 captures, and 3,284 packaged files match. [Scoped review and remaining visual/UX gates](reviews/2026-11-06-006-tactical-interface-runtime.md).

2026-11-06 - Integrated contextual inventory actions through existing authoritative queues and
tactical PNG skins: click selects, double-click/primary key follows the ordered default, and
right-click lists item actions. Added bounded quantity entry, deliberate drag/cancellation,
knife equip, transfer-first storage behavior and shared pending/stale guards. Gesture/menu
settings are authored once in presentation22/layout6. Stable Release passes 569 tests /
2,586,508 assertions; twelve native groups / forty captures and matching candidate files pass.
[Scoped handoff and remaining human gates](reviews/2026-11-06-005-inventory-context-handoff.md).

2026-11-06 - Designed context-menu inventory interactions: double-click equip/select in the
own case, transfer first with storage open, explicit quantity actions and safe blocked defaults.
Added a local study reusing existing tactical skins and icons; 11 browser checks pass. Current
C++ inventory behavior is unchanged. [Design scope and integration gates](reviews/2026-11-06-003-inventory-context-design.md).

2026-11-06 - Integrated seamless Service Court play: immediate active entry, purchases at the
authored security-lobby supply case, and timed sentry/lamp deployment throughout the mission.
Power completion activates pursuit; shop access grants no pause or immunity. Deploy durations
are configured at 600/360 ticks. Schema10 encounters resolve schema12 Tiled resupply zones;
historical setup adapters stay outside the current menu. Stable Release checks pass 551 tests /
2,586,232 assertions, assets and canonical stress. Nine native captures prove device timing,
packing and the power trigger; 3,253 candidate files match. Failed checks and fixes are retained
in [the review](reviews/2026-11-06-002-seamless-mission.md); human pacing remains open.

2026-11-06 - Cached and validated 31 application-controlled sight shader locations once per
shader lifetime. Composition preserves values, sampler calls and flush order; missing required
uniforms fail during construction with resource cleanup. Stable Release gate passes 542 tests /
2,586,148 assertions, assets and canonical smoke. All 25 native before/after PNGs are identical;
59 visibility captures pass. Matching local candidate and limits are in
[the scoped review](reviews/2026-11-06-001-sight-shader-bindings.md). No FPS gain is claimed.

2026-11-04 - Removed tracking of three historical `build/escape_landmark_review/` files while
preserving local bytes. No `build/` files remain tracked. Recorded the user's decision to
collect version galleries on a separate docs/blog site; publishing remains planned under
BL-115. Existing local review links are not GitHub-hosted artifacts.

2026-11-04 - Repaired the sight diagnostic checker's missing/duplicate-capture acceptance
gap with an exact case/rate/file/tick matrix. GPU-free negative regressions and 25 archived
captures pass. Added the architecture/Godot/debugging tutorial; preserved its original defect
as a learning case with the linked repair. The user authorized merging PR #1. No gameplay
or C++ rendering behavior changes in this checker repair; intermittent lighting remains open.
[Repair and existing playable reference](reviews/2026-11-04-005-capture-matrix-fix-and-merge.md).

2026-11-04 - Added opt-in full-grid sight cache/reference and GPU-upload diagnostics through
the shared perception/native-probe pipeline, preserving exploration and actor memory.
Fixed validation-driver assumptions about render rates and missing pixel measurements.
Service Court/workshop comparisons pass nine captures; existing visibility checks pass 59.
Integrated Release checks pass 542 tests / 2,586,148 assertions, assets and default load smoke.
Recorded a pinned Godot source study and staged repair design; no backend replacement, FPS
gain or fix for the intermittent lighting report is claimed. Root owns core changes.
[Scope and evidence](reviews/2026-11-04-003-shared-rendering-research-and-diagnostics.md).

2026-11-04 - Investigated intermittent lighting and asset-render reports through the shared
World/perception/resource/composition owners. Independent source audits find no per-scene
renderer selection in the inspected Tiled path. Existing 53 numeric tests / 169,782 assertions
and 59 bounded native light captures pass; current Service Court's broader symptom is not
claimed reproduced or fixed. [Evidence, risks and targeted repair order](reviews/2026-11-04-002-rendering-pipeline-investigation.md).
Runtime logic, artwork and tuning remain unchanged; BL-093 retains the actual defect gate.

2026-11-04 - Designed the post-Gate-A Service Court expansion around the user's selected
15–20-minute action/exploration target: dispatch discovery, alternative local power restoration,
consequential pressure/lighting, freight exit and evacuation-depot traversal. The
[design contract](contracts/SERVICE_COURT_AFTER_GATE_A_2026-11-04.md) distinguishes existing
mission capabilities from the missing alternative-state boundary, asset needs and human
pacing/performance acceptance. Runtime and historical candidates are unchanged by this design.
Rewrote the root README in English with accurate build instructions and current/planned scope;
legacy documentation translation is tracked separately.

2026-11-03 - The user selected **Black Veil** as the game title. Preserved all twelve naming
proposals and the decision in [the naming record](GAME_NAME_DECISION.md), updated the canonical
source `display_name`, and aligned current guidance. Technical IDs and historical candidates
remain stable. This is a source branding update, not a newly validated playable bundle.

2026-11-03 - Expanded BL-110's Service Court slice with six authored prop types, eleven
landmark placements, sixteen small dressing variants and ninety-six non-blocking floor
details in eight areas. Tiled remains the placement source; older artwork and both escape
routes remain available. Archive authorization extends the existing objective/checkpoint path.
Menu schema 3 and separately configured font groups improve the dossier and shared tactical
HUD/case/shop. Open inventory panes protect mission placement and suppress redundant weapon
cards. Stable checks pass 542 tests / 2,586,148 assertions on 1,942 inputs with canonical stress.
The matching bundle has 3,253 file comparisons, eleven native world frames and real menu/loot
input evidence. [Candidate, sources, visual review and limits](reviews/2026-11-03-004-level-depth-ui-runtime.md).
Human pacing/readability, whole-map composition and the two intended Black Tide/Last Shift
campaigns remain open; these are not two delivered new missions.

2026-11-03 - Implemented BL-109's mission menu over the retained local session: Main, briefing,
Pause, Continue, checkpoint retry, fresh restart, Settings, Controls, confirmations and results.
One authored backdrop joins reused PNG skins and native font rendering. Menu configuration owns
layout and launch paths; per-user audio/FPS preferences save separately from application defaults.
Stable checks pass 542 tests / 2,587,253 assertions on 1,867 inputs, with canonical stress retained.
Packaged input, persistence, native captures and 3,224 file comparisons pass within the recorded
scope. [Candidate, design, evidence and limits](reviews/2026-11-03-003-mission-menu-runtime.md).
In-memory Continue is not a disk campaign save; terminal-result visual review, human UX,
oversized-window capture and the planned network screen lifecycle remain open.

2026-11-03 - Implemented BL-108's local world-loot slice on the continuous escape map:
finite Tiled supplies, held container search, partial Take/Store, recoverable Drop/Unload,
explicit starter ownership, finite shop stock and whole-state in-memory checkpoint retry.
The live tactical case gains a source pane; seven authored native loot sprites use the
existing asset/resource pipeline. Stable checks pass on 1,845 inputs with 515 tests /
2,586,983 assertions and canonical stress. Native rendering and packaged App keyboard/mouse
transfers were exercised. [Playable candidate, evidence and limitations](reviews/2026-11-03-002-world-loot-runtime.md).
Human scarcity review, disk saves, elevated shelf anchors, corpse/crate spill and the proposed
40-minute narrative remain open; historical profiles and the canonical stress workload are preserved.

2026-11-03 - Refined the loot design for actual floor objects, separately drawn shelf supplies,
finite warehouse containers, recoverable player drops and once-only corpse/crate spills.
Defined legal landing/recovery, gate-side and overlap handling, independent loot lifetime,
local Store, checkpoint restoration and concrete art reuse/state gaps. This extends BL-108's
design only; no gameplay or asset files changed.

2026-11-03 - Designed world looting and scarce ammunition through the existing item/case
authority. The source audit identifies all-firearm starter grants and inexpensive repeatable
ammunition as migration boundaries. The proposal covers loose/searchable supplies, partial
transfer/drop/unload, finite stock, story-linked branches, gate-specific supply evidence and
user-confirmed whole-state checkpoint rollback. [Design and next slice](contracts/WORLD_LOOT_AND_SCARCITY_DESIGN_2026-11-03.md).
No runtime/content balance, artwork, checkpoint implementation or playable candidate changed.

2026-11-02 - Corrected exterior-player roof occlusion and service-room entrances. Tiled schema10
combines existing world depth and cutaway opacity; south canopies/supports are removed from the
map and bollards clear both entrances. Workshop east collision/LOS/cutaway and route fixtures
now follow its measured native PNG opening. Existing artwork is retained. Stable checks pass
474 tests / 2,573,258 assertions on 1,786 unchanged inputs; 30 native captures, both full escape
routes and 4,998 bundle comparisons pass. [Before/after, play and scoped evidence](reviews/2026-11-02-009-doorway-depth-and-registration.md).
Variable performance remains open: the two route runs record 9.1/50.7 mean FPS during Gate B
opening without a code change, so this handoff does not accept consistent performance.

2026-11-02 - Corrected cargo to the frontal gameplay projection using authored GPT Image v2
while retaining v1. Seven existing Tiled placements share the replacement. Rejoined seven
solid wall runs at native scale using measured face geometry, and exposed asphalt circulation
between bounded concrete work pads and buffered paving landings. Gameplay geometry and tuning
are preserved. Stable checks pass 473 tests; the packaged native probe, direct full encounter
and 4,997 identity comparisons pass. [Scoped evidence and remaining gates](reviews/2026-11-02-008-court-surfaces-and-projection.md).

2026-11-02 - Expanded the continuous Service Court with an enterable workshop, a 1536-square
registered security complex and twenty separate interior/exterior/freight assets while retaining
older artwork. Ten court lamps use the actual motor event, and dedicated Gate A approaches bring
attackers into the late hold. Stable Release checks pass 473 tests / 2,573,235 assertions on
1,777 unchanged inputs; both packaged routes reach extraction and bundle identity checks pass.
[Candidate evidence](reviews/2026-11-02-007-indoor-candidate-handoff.md) keeps early motor pacing,
doorway/art hierarchy, human discovery and variable arrival performance open. Eight bounded
design assignments produced a [coordinated next-pass plan](contracts/SERVICE_COURT_DESIGN_EXECUTION_2026-11-02.md)
with specific reuse, placement, registration and review requirements; those proposals are not
yet applied to the candidate. The aggregate historical board refresh still fails separately.

2026-11-02 - Connected the Service Court warehouse wings and existing cutaway utility rooms,
replaced the redundant yard frame with quiet asphalt/aprons, and framed the south arrival.
Closed escape gates now sample their observer-facing blocker surface; historical/current
native captures reproduce and correct the missing leaf after close. Added existing cargo,
panels and Gate B barrier art over previously invisible north-route solids; gate studies no
longer override runtime state, and cargo uses actor depth sorting. Old assets remain.
Stable Release checks pass 470 tests / 2,572,920 assertions on 1,704 unchanged inputs; both
selected-pressure routes reach extraction. [Candidate and scoped review](reviews/2026-11-02-003-service-court-frontage-and-obstacles.md).
Whole-level art and human pacing remain open; smoke screenshot frame timing is tracked in BL-106.

2026-11-01 - Connected the Service Court to both loading lanes, Gate B and coastal extraction
in one persistent World. Gate A no longer wins the full profile. Encounter schema 8 binds
pressure to authored route events through existing admission; legacy waves remain supported.
Gate geometry validates complete map bounds, and obstacle-cache freshness compares effective
contents. Stable Release checks pass 459 tests / 2,572,698 assertions on 1,654 unchanged inputs;
both packaged route smokes reach extraction with authored pressure. Existing artwork is retained.
[Review and playable candidate](reviews/2026-11-01-002-continuous-escape-route.md). Court composition,
full-map art, human pacing and broader lifetime proof remain open; no new FPS claim. The current
board is exported separately from the failing aggregate historical-catalog refresh.

2026-11-01 - Added an ordered Service Court route: restore west-room power, release east-room
security, operate Gate A and extract north to win without a kill quota or map load. Interaction
steps use the existing Encounter; encounter schema 7 and Tiled schema 8 validate authored
controls. Holds cancel on release, damage or leaving. Reused consoles and paving connect
both rooms to the gate; waves, combat and existing artwork remain intact. Stable Release
checks pass 440 tests / 2,572,342 assertions; selected encounter smoke reaches Victory and
native captures verify the room/control HUD states. [Review and playable candidate](reviews/2026-11-01-001-service-court-objectives.md).
The sparse court, human pacing and full escape campaign remain open; the separate historical
build-catalog refresh failure is recorded without claiming aggregate packaging success.

2026-10-31 - Fixed warehouse facades hiding actors standing outside their front wall. Tiled
schema 7 world visual objects use authored ground depth in the existing actor draw queue;
five facades share the same path while cutaway roofs remain independent. The sight composite
preserves facade opacity when looking away or disabling terrain memory. Native front/behind,
corner and two-room cutaway evidence is recorded. Stable Release checks pass 432 tests /
2,572,185 assertions, assets and canonical smoke; the packaged selected encounter also passes.
[Review and candidate](reviews/2026-10-31-003-facade-world-depth.md). No new FPS claim.

2026-10-31 - Reduced Service Court map work through prepared tile geometry, bounded static-memory
draws, cached/bounded sight updates and early perception/LOS rejection. Reuses the existing
Raylib/Tiled/World implementation; gameplay configuration, population and authored visuals are
unchanged. Six matched fixtures preserve 32 PNG hashes and normalized simulation records.
The final native application ring averages 53.73 FPS, p95 28.45 ms, with 108 living simulated
zombies at its final snapshot; 11/600 frames exceed 50 ms. Stable checks pass 431 tests /
2,572,160 assertions, assets, canonical load smoke and separate selected-court smoke.
[Runtime evidence](reviews/2026-10-31-002-service-court-performance-runtime.md) records exact
hashes, hardware, measurement limits and remaining stutter/residency gates. BL-101 stays Review.

2026-10-30 - Added source-backed shared map runtime research/design and a bounded migration
sequence for larger Tiled maps: sight/memory profiling first, reusable query/cache lifetime
boundaries, effective invalidation and epoch-aware tick-event delivery. The nearest extension
is a second gate on the same World. Evaluated reuse options without installing dependencies;
no runtime optimization, benchmark or new playable candidate is claimed. See
[the design](contracts/SHARED_MAP_RUNTIME_DESIGN_2026-10-30.md), D-092 and BL-100–102.

2026-10-30 - Replaced the tapered service-room study with authored rectangular v2
roof/interior panels registered to an 8x6 Tiled footprint. Both rooms retain independent
collision walls, centered doorways and roof bindings; previous artwork remains available.
[Rectangular-room review](reviews/2026-10-30-006-rectangular-service-rooms.md)
records the stable technical pass and west/east renderer evidence; full escape and art
acceptance remain open.

2026-10-30 - Added independently bound Tiled roof cutaways for two service rooms through
the existing map loader and visibility composite. Interior art and physical walls remain
independent; roof transitions reverse without snapping and freeze while paused. Both rooms
completed isolated renderer entry/facing/exit/reentry fixtures. Stable integrated checks:
419 tests / 2,367,189 assertions, asset checks and canonical load smoke passed. Art quality,
full-route gameplay and human playtests remain open.
[Cutaway review](reviews/2026-10-30-005-building-cutaway-runtime.md).

2026-10-30 - Integrated the Service Court A escape slice through the existing encounter,
World, Tiled, HUD and packaging pipelines. Authored controls commit a cancellable interaction,
then run an autonomous gate motor before a directional passage advances to arrival extraction.
Closed gates share movement/combat/LOS obstacles; progression preserves the same session.
Added loader, transition and resource-persistence regressions. Stable integrated checks passed:
410 tests / 2,367,033 assertions, asset checks and canonical stress. Selected traversal remains
separate evidence; finished environment art and human pacing are not accepted. Replaced the
disconnected warehouse assembly with one authored exterior and a separate solid footprint.
[Runtime handoff](contracts/SERVICE_COURT_RUNTIME_2026-10-30.md).

2026-10-29 - Added a separate authored warehouse roof study with preserved GPT Image source,
repeatable native export and alignment metadata. Recorded facade join constraints and static
gate clearance limits; neither proves runtime two-gate traversal. Reviewed the forklift on
contrasting backgrounds. The escape asset packet remains an unaccepted source study.

2026-10-29 - Prepared the escape route's native asset return with an existing-asset reuse
inventory, industrial and coastal source kits, licensed gate audio candidates and an editable
Tiled authoring route. Added a reproducible asset board with file hashes, image dimensions and
browser media checks. Alpha/composition, actor clearance, motor audio and runtime integration
remain explicit gates; the playable encounter is unchanged.
[Source handoff](contracts/ESCAPE_NATIVE_ASSET_RETURN_2026-10-25.md).

2026-10-25 - Designed the user-requested transition from stationary defense to continuous
escape. Specified autonomous short gate openings, physical crossings, two transit lanes,
continued pursuit, persistent resources and separate arrival extraction through the existing
mission/Tiled pipeline. Added bounded runtime/map/playtest handoffs and D-089; no executable,
map, tuning or artwork changed. [Design](contracts/ESCAPE_MISSION_DESIGN_2026-10-25.md).

2026-10-25 - Drew a full-map escape-route concept and annotated its gates, connected direct/
service lanes, freight yard and extraction. Audited exact reuse IDs against the current Tiled
assets and separated selected sources from limited studies and missing facade/signage/cue art.
The generated board is for layout reference only; no Tiled map or gameplay asset changed.
[Asset brief](contracts/ESCAPE_MAP_ASSET_BRIEF_2026-10-25.md).

2026-10-24 - Prevented moving death bodies and airborne gore from stamping repeated
silhouettes into persistent explored terrain memory. The shared settled-motion sampler
covers launched flight, first-contact bounce and bullet-driven sliding collapse; live
feedback and settled corpse/gore remain visible. Stable Release checks pass398 tests;
the packaged pixel regression and59-capture light regression pass. The broader partial
light-source report remains open. [Scoped review](reviews/2026-10-24-009-airborne-sight-memory.md).

2026-10-24 - Separated personal and illuminated recognition ranges through the existing
perception/profile/cache/GPU pipeline. Reproduced an enabled lamp disappearing after aim
release at223 units; the corrected package retains it. Stable Release checks pass398 tests,
59 native light captures,22 input snapshots and both canonical/selected smoke scopes.
Additional source-by-source renders are recorded; the user's broader partial/missing-source
report remains Review. [Scoped review](reviews/2026-10-24-008-light-visibility.md).

2026-10-24 - Extended build-page discovery beyond recent launcher bundles to exe-only,
nested R1b and evidence-only versions. Backfilled28 pages and catalogued103 outputs with
zero missing root indexes, preserving all75 original pages. Repeat refresh is idempotent;
browser checks pass35 generated boards and the complete catalog's links. Packaging invokes
the same full sweep. [Coverage review](reviews/2026-10-24-007-full-build-index-coverage.md).

2026-10-24 - Restored missing build handoff pages and added a workspace build catalog.
Shared packaging now generates an offline index with launcher, actual executable identity,
recorded reports/open gates and existing captures. Seven recent boards are backfilled;
browser checks cover links, image decoding, hashes, layout and isolated output fixtures.
Runtime bundles and historical technical reports are retained.
[Build board review](reviews/2026-10-24-006-build-handoff-boards.md).

2026-10-24 - Added configured spring camera follow/zoom with a shared input/render snapshot,
normal actor/pointer weights0.9/0.1 and aimed weights0.3/0.7. RMB firearm aim narrows base
spread and extends capped sight; wheel zoom leaves the HUD in its own viewport. Knife is an
owned equipped item in the existing inventory/quick slots, with authoritative contact and
separate blade geometry. Existing character body and registered hand pixels are reused;
80 Idle/Walk/Melee/Hurt poses and22 native input snapshots are captured. Selected encounter
smoke with the existing authored exit route reaches Victory. Stable Release checks pass
1,477 inputs,396 tests/2,366,862 assertions and unchanged canonical stress. Runtime files
in the final package match the validated bundle. Human camera-feel/knife-art,
performance and parent gates remain open.
[Runtime review](reviews/2026-10-24-005-camera-aim-runtime.md).

2026-10-24 - Centered inventory and shop action captions on both axes using fitted text
metrics in the existing text renderer. Button skins and font resources are reused; titles,
rows and hints retain their alignment. Stable Release checks pass 1,451 inputs, 375 tests /
2,365,213 assertions and smoke. Five final packaged native snapshots cover the case, long
caption, letterboxed resize and shop. [Alignment review](reviews/2026-10-24-002-inventory-caption-alignment.md).

2026-10-24 - Corrected portable lamp SE/SW head reflection after user image11 exposed the
physical-front/beam mismatch. Other bearings, simulation vectors and light tuning are
unchanged. Source registrations now record audited physical normals; the regression rejects
the old two flags. New native evidence overlays the actual lighting sampler with production
sprites for all eight directions and checks scene source vectors. Stable checks pass 1,450
inputs, 375 tests / 2,365,213 assertions; the replacement bundle passes 23 deployed captures,
eight previews and both smoke scopes. [Bearing correction](contracts/DEV_LAMP_BEARINGS_2026-10-24.md).

2026-10-24 - Integrated modular directional portable lamps into world rendering, owned-item
placement preview and HUD bounds through the existing raster/resource pipeline. One fixed
base and five authored off/on head views cover eight bearings through metadata reflection;
continuous authoritative light facing and timed operations remain the source of behavior.
Strict versioned loading checks joint/emitter registration and on/off consistency, with an
explicit historical schema-1 consumer. Stable checks pass 1,447 inputs, 374 tests and
2,365,194 assertions; packaged native evidence covers 23 deployed captures, eight previews,
the state/scale contact sheet, 35 actual input snapshots and both smoke scopes. Independent
human art/player and parent gates remain open.
[Runtime return](contracts/DEV_LAMP_DIRECTIONS_2026-10-23.md).

2026-10-23 - Added bounded observer sight through character configuration, Tiled visibility
profiles and ranked vision traits. Base range 240 resolves to 204 on the fog-profile map;
training extends it through 234.3/266.4/300.3 while respecting the map cap and walls. Renderer,
actor memory and F3/F4 inspection use the effective snapshot; live upgrades retain explored
memory. Starting credits increase to 30 at the user's request. Trait acquisition UI remains
future work. Stable 1,425-input checks pass 370 tests / 2,365,161 assertions; packaged sight
comparison/eight PNGs, 35 native input snapshots and canonical/selected smoke pass. The
matching F4 snapshot confirms 30 credits and 204-unit sight. Independent visual/player gates
remain open.
[Runtime return](contracts/DEV_SIGHT_LIMITS_2026-10-23.md).

2026-10-23 - Integrated the BL-084 portable lamp and illumination flare through the existing
owned case, shop, timed device operation, shared throw/flight, asset cache and sight systems.
Sentries occupy 2 x 3 cells, lamps 2 x 2, and flares 1 x 2 / stack 3. Lamps preserve charge,
identity and direction across packing/reload, with paid target-item recharge. Configurable
cone lighting with a small near halo and a nearby held reorientation extends the same light
model; flares remain radial, burn/fade/expire without blast or lure, and reuse player throw
frames. Gameplay14, portable2, inventory3, economy2, lighting2 and presentation17/case4 migrate
together. Stable 1,411-input checks pass 360 tests / 2,365,085 assertions. The packaged candidate
passes 35 native snapshots, five matched lamp/flare runs, canonical stress and the selected
9,657-tick encounter. Flare sight updates still show a 41.7 ms maximum; full-cap performance,
independent visual/player acceptance and the dedicated burn loop remain open.
[Runtime return](contracts/DEV_PORTABLE_ILLUMINATION_RUNTIME_2026-10-23.md).

2026-10-22 - Added a user-authorized design-team source/native study for portable lamps and
illumination flares. Built-in GPT Image sources, registered states/sockets, shared-raster
export, offline 1x/2x/grayscale playback and sparse/rotated/full-case previews are supplied.
Independent art review005 accepts the bounded packet for integration. Audio is a licensed
reuse study with a missing burn loop; runtime lighting, shop items, multi-cell migration,
throw integration and human/performance gates remain open. No new playable runtime is claimed.
[Design return](contracts/DESIGN_PORTABLE_ILLUMINATION_RETURN_2026-10-22.md).

2026-10-22 - Added carried one-cell sentries, Preparation/Checkpoint purchases and one wallet
with authoritative kill/objective rewards. Timed deploy/pack preserves item ID, spent rounds,
cooldown and accuracy through the existing device/combat pipeline; it never charges twice or
refills ammunition. Starter recipes/shared item issuance, gameplay13/inventory2/loadout3,
encounter5 and presentation16/case2 migrate together. Fixed through-wall/damage/phase holds,
paid-mine loss on F5, zombie-spawn-bound placement and hidden/overlapping operation HUD.
Packing changes to carried Hold only on successful transfer; beginning/cancelling cannot
bypass timed Auto/Hold. Reused design's26 PNGs and existing progress skin. Stable1358-input
checks pass329 tests /2,364,680 assertions; the packaged game passes25 native checks/47 captures, canonical
stress and the selected encounter. Independent visual/player and remaining inventory gates
stay open. [Runtime return](contracts/DEV_SENTRY_INVENTORY_SHOP_2026-10-22.md).

2026-10-21 - Added owned multi-cell inventory and a native live case using design's26 PNGs,
existing nine-slice cache and native text. Quick slots reference unique gun items; reload and
grenade priming consume shared compatible stacks. Drag/rotate, exact split/merge and equip
use revision/owner/request-checked commands; close/rearm prevents UI clicks firing a weapon.
District carry-over and compatible preparation reload preserve supplies. Gameplay schema12,
inventory1, presentation15 and F4 schema2 migrate together. Stable1342-input checks pass314
tests/2,364,501 assertions; packaged native replay passes14 checks/22 PNGs, canonical stress
and the selected9533-tick encounter. World pickup/drop, sentry transfers, paid upgrades and independent
visual/player acceptance remain open. [Return](contracts/DEV_LIVE_INVENTORY_2026-10-21.md).

2026-10-21 - Fixed flat unknown-region darkness with configurable dim static terrain, rendered
HUD text at output resolution and moved local selection/urgency/deployment circles after
world sight. Replaced three wall-containing light cells with an authored standalone lamp
through the existing Tiled exporter. Stable1309-input checks pass303 tests/2,364,373 assertions;
27 packaged visual cases, eight preparation captures,51 unchanged encounter records and
canonical stress pass. Native interaction passes on repeat; the first missed-click failure
is retained as a harness limitation. Physical-DPI/independent acceptance and parent gates stay
open. [Return](contracts/DEV_VISUAL_REPAIRS_2026-10-21.md).

2026-10-21 - Added the read-only F3 encounter diagnostics tool through pinned Dear ImGui/rlImGui,
with bounded CPU/frame history, entity/animation/weapon inspection and projected world geometry.
F4 exports native PNG/JSON; safe capture/rearming preserves live battle and sentry request identity.
Stable checks pass1301 inputs,302 tests/2,364,364 assertions; root/final packaged UI pass22 cases/
14 checks;51 native PNGs and complete encounter states remain identical. Both launcher aliases
match3107 files with dependency/font notices; packaged canonical stress passes. Independent
usability and parent gates remain open. [Return](contracts/DEV_ENCOUNTER_DEBUG_OVERLAY_2026-10-21.md).

2026-10-21 - Optimized the measured encounter sight bottleneck by reusing immutable direct/surface
light samples and rebuilding the raster only when exact observer/cover inputs change. Actors
still update each tick; gameplay, visibility quality and authored art are unchanged. Moving sight
medians improve35.5–37.4%, stationary crowd99.8%;51 native PNGs and complete encounter states match.
Stable checks pass1280 inputs,296 tests/2,364,313 assertions and canonical stress. Refreshed the
reported tactical HUD candidate; human workload retest and parent gates remain open.
[Performance return](contracts/DEV_ENCOUNTER_PERFORMANCE_2026-10-21.md).

2026-10-21 - Fixed missing legs in registered moving weapon poses, exposed when returning from
grenade actions. The attachment exporter reads canonical gait pixels through metadata instead of
an under-weapon composite. Existing asset checks now verify all432 final moving bases against
Walk; native before/after, backward movement and pistol/shotgun swaps are captured. Stable local
checks pass1276 inputs,295 tests/2,197,849 assertions and canonical stress. The reported tactical
HUD candidate is refreshed; visual retest and parent inventory/character gates remain open.
[Repair return](contracts/DEV_REGISTERED_WALK_REPAIR_2026-10-21.md).

2026-10-21 - Returned the BL-079 native tactical combat HUD slice using design's authored skin,
existing font and resource cache. Added semantic UI nodes, independent backing/edge alpha,
full-playfield camera/input/sight/spawn migration and actor/cursor/sentry avoidance. Stable local
checks pass295 tests /2,197,849 assertions on1274 unchanged inputs;31 native captures and both
packaged smoke scopes pass. Case authority, live overlay and human acceptance remain open.
Play build/tactical_hud_runtime/candidate/play.cmd.
[Runtime return](contracts/DEV_TACTICAL_COMBAT_HUD_2026-10-21.md).

2026-10-20 - Returned the BL-079 source/native tactical HUD art packet: selected split-corner
composition, pinned side case, 26 authored PNG resources, semantic states, font metrics and
licensed source/provenance. Adapted existing Kenney/Lucide assets, retained suitable project
art and used GPT Image for pistol ammo, shotgun shells and folded sentry. Existing study
controls now show the selected skin at native/game/wide scale; 15 checks/60 PNGs cover the
read-view matrix. Native HUD/inventory consumers and independent visual acceptance remain open.
[Design return](contracts/DESIGN_INVENTORY_TACTICAL_HUD_RETURN_2026-10-20.md).

2026-10-20 - Design/source study: defined a shared RE4-style equipment case, unique weapon
instances/ammo/upgrades, timed sentry carry/deploy/pack and a translucent tactical HUD.
Added a browser composition/read-view study reusing authored assets:15 browser checks,
7 screenshots. [System/migration](contracts/INVENTORY_TACTICAL_HUD_DESIGN_2026-10-20.md) and
[concrete design request](contracts/DESIGN_INVENTORY_TACTICAL_HUD_REQUEST_2026-10-20.md).
BL-078/079 holds native implementation/art/acceptance; current executable gameplay is unchanged.

2026-10-20 - Integrated static environment lighting through the existing directional sight
query and authored-texture compositor. Three Tiled fixtures sit along the southern wall at y600 with small112/96-unit outer radii. Two JSON profiles and the fixture placements
reveal moving rear zombies while retaining observer range and source/observer occlusion.
Corrected normalized decimal endpoint loading and independent light-edge opacity for sharp
angular sight.1207 stable inputs,291 tests/2,197,813 assertions,751 native checks/48 PNGs,
169 independent feather samples and both packaged smoke scopes pass. Selected mission wins
at9533 ticks/70HP. Play build/lighting/candidate/play.cmd. Dedicated fixture art, human quality
and full-frame performance remain open; no default-profile or parent Sprint promotion.
[Runtime handoff](contracts/DEV_ENVIRONMENT_LIGHTING_RUNTIME_2026-10-20.md) ·
[Author self-review011](reviews/2026-10-20-011-environment-lighting-runtime.md).


2026-10-20 - Integrated configurable directional sight into the actual encounter: explicit
Tiled optical blockers, frozen creature loss fades, dimmed explored scenery, stale prop memory,
shared authored-texture/VFX clipping and nearby gait/vocal cues through the existing audio pool.
Preserved combat, spawn exclusions, character assets and mixed128-actor content. The existing
smoke setup loader now accepts authored QA exit waypoints for physical-wall maps; stress and
Victory criteria remain unchanged.1192 stable inputs,284 tests/2,197,738 assertions,183 native
assertions and both packaged smoke scopes pass. Play `build/directional_sight/candidate/play.cmd`.
Human quality/fairness and parent Sprint gates stay open.
[Runtime handoff](contracts/DEV_DIRECTIONAL_SIGHT_RUNTIME_2026-10-20.md) ·
[Author self-review010](reviews/2026-10-20-010-directional-sight-runtime.md).

2026-10-20 - Received the authored sight wall and five native approach cues for integration.
Verified26 source/3087 artifact entries and1147 stable technical inputs; fresh native wall
replay matches,3200 footprint samples are opaque. Corrected source object count in the return.
No runtime sight/spatial-audio change or human acceptance is claimed.
[Dev receipt009](reviews/2026-10-20-009-sight-wall-audio-dev-receipt.md).

2026-10-20 - Delivered the missing directional-sight source inputs: authored native L-shaped
wall, separate editable Tiled placement with two physical footprints, three contact OGGs and
two nonverbal vocal OGGs with CC0 provenance/licenses. Existing native renderer/physics shows
wall contact and lower-end passage; offline audition supplies quiet/pan/mono/gunfire controls.
No default-map, runtime FOV/memory or spatial creature-audio consumer change.
[Design return](contracts/DESIGN_SIGHT_WALL_AUDIO_RETURN_2026-10-20.md).

2026-10-20 - Verified the directional sight T2 study at5c9c54b:205 receipt hash entries match,
separate-output reproduction matches the supplied HTML,4800 visual GIDs/15 annotations and
viewed color/grayscale mockups. Accepted as dev reference; interior wall placement and five
native approach-audio variants remain missing. No runtime/build acceptance is claimed.
[Dev receipt](reviews/2026-10-20-007-directional-sight-dev-receipt.md).

2026-10-20 - Added the directional-sight design study: three existing-map/character mockups,
native1x/game2x/grayscale/frozen-fade examples, editable blocker annotations and approach-audio
reuse/mix audit. Current map has perimeter colliders only; the interior corner is an explicitly
diagnostic proposal. Missing creature audio remains declared. No runtime visibility, active map,
gameplay/default, new art or playable-bundle change.
[T2 return](contracts/DESIGN_DIRECTIONAL_SIGHT_RETURN_2026-10-20.md).

2026-10-20 - Recorded directional sight design with user-confirmed fade-then-hide creatures,
nearby awareness and configurable perception/style tuning. Explicit Tiled blockers, static memory,
audio fairness, shared render filtering and concrete dev/design returns are scoped in BL-076.
Design study only; no runtime, asset, dependency or playable-build change.
[Contract](contracts/DIRECTIONAL_SIGHT_DESIGN.md).

2026-10-20 - Reordered firearm impulse to shotgun100 > pistol70 > rifle40 units/second in
the canonical loadout. Damage, piercing, stagger and firing cadence are unchanged. Existing
hit/reaction/corpse pipelines apply the force; shotgun now reaches the lethal launch threshold.
Candidate: build/weapon_knockback/candidate/play.cmd. Human balance remains open under BL-075.
1119 stable inputs/all5 checks,273 tests/2196583 assertions, native playback for three weapons
and packaged canonical stress pass. [Self-review](reviews/2026-10-20-005-weapon-knockback.md).

2026-10-20 - Raised pistol damage22 ->30 while retaining the user's one-zombie limit and
semi-automatic14-tick cooldown. Rifle22/2 targets and shotgun20/3 targets are unchanged.
Canonical attack JSON supplies the existing loadout/combat pipeline; no new code or artwork.
Follow-up candidate: build/pistol_balance/candidate/play.cmd. Human balance remains unaccepted.
1118 stable inputs/all5 checks,273 tests/2196583 assertions, packaged native pistol and canonical
stress pass. [Author self-review](reviews/2026-10-20-004-pistol-balance.md).

2026-10-20 - Added attack-owned piercing in loadout2, with explicit first-target loadout1
compatibility. Shared traces order authored/circle contacts and preserve cover, handles, damage
and one ammo/feedback owner per discharge. Pistol1/rifle2/shotgun3 targets; shotgun12 ->20 damage
per pellet with75% retention (20,15,11), unchanged8 pellets/spread/range/reload. Rifle retains
its actual22 damage through its own profile. No new character art or weapon-ID combat branches.
1117 stable inputs/all5 checks,273 tests/2196583 assertions; six-shell native controls16/24/56
deaths separate old power,damage-only and piercing. Portable canonical stress passes; selected
mission remains failed at9157 ticks. Human balance/readability and parent gates remain open.
[Runtime return](contracts/DEV_BULLET_PIERCING_2026-10-20.md).

2026-10-20 - Repaired the registered reload fallback losing moving intent and holding the player
on pose0. Character samples retain motion independently of action clocks; unsupported hand
actions use the authored stationary/moving Aim binding and signed locomotion sampler. Rifle,
pistol and shotgun native before/after runs show six moving poses, preserved reverse playback,
live cardinal turns and unchanged ammunition/state. No new character art or gameplay tuning.
Distinct reload hand choreography remains open under BL-063.
1112 stable inputs/all5 checks and263 tests/2196422 assertions pass; final native capture and
portable canonical stress pass. The selected full-mission bot retains its prior7585-tick defeat.
[Runtime return](contracts/DEV_RELOAD_MOTION_2026-10-20.md).

2026-10-20 - Raised current mutation/weapons capacity to128 and removed the effective40-actor
mutation roster bottleneck. Eight Tiled pulses schedule488 enemies; Walker110/Runner12/Sprinter6
limits with80/15/5 weights and8s/22s mutation eligibility preserve authored telegraphs and safe
distributed entries. Paired native workloads fill128; matched observer reaches128 visible
centers with no audited unsafe entries. Damage/ammo/art unchanged. The actual100HP bot loses
at84% objective; human thrill/fairness/readability remain unaccepted.1109 stable inputs,
262 tests/2187154 assertions and canonical stress pass; dense grenade QA records104 kills.
[Design and runtime return](contracts/DEV_HORDE_THRILL_2026-10-20.md).

2026-10-19 - Separated canonical stress verification from selected encounter smoke (BL-071).
One typed mode and order-independent CLI parsing reject mixed scopes before graphics;
--encounter-smoke reuses the full-mission driver, with --sprint-smoke retained as an alias.
Scope/content/outcome/reason logs distinguish peak-100 stress from actual mission Victory.
1106 stable inputs,262 tests/2187152 assertions and seven relocated cases pass; selected urban
mutation encounter completes with178 deaths. Gameplay/art/pacing and stress criteria unchanged.
[Return and reproducible commands](contracts/DEV_SMOKE_MODES_2026-10-19.md).

2026-10-19 - Integrated the selected authored sentry Auto/Hold/Empty strip through the existing
catalog/cache. Optional HUD schema3 and authoring packet2 compose the design's nodes/copy into
all three current presentations; mode and Empty remain independent and the128x5 authority bar
hides at idle/cancel.1103 stable inputs,259 tests/2187097 assertions,107 actual PNGs and default
portable smoke pass. Word-only final treatment retired; independent human gates remain open.
Observed the unchanged objective HUD hiding a north-center player (BL-072); requested a scoped
design correction. [Runtime return](contracts/DEV_SENTRY_BADGES_2026-10-19.md).

2026-10-19 - Added the selected sentry Auto/Hold/Empty glyph sources, native import recipe
and device-attached UI design return. Reuses the current panel/font/bar and layout; supplies
separate mode/ammo placement, compact copy and continuous authoritative-progress treatment.
Includes native/grayscale/ground/encounter design mockups; runtime badge integration and
human visual/tactical acceptance remain open.
[Design return](contracts/DESIGN_SENTRY_UI_RETURN_2026-10-19.md).

2026-10-19 - Replaced the fixed sentry interaction panel with compact device-attached UI.
Nested HUD schema2 owns local bounds/spacing; actual camera/cursor projection and safe playfield
placement use the current authored skin/font/bar. Idle hides the track; cancel clears it and
neighbor focus cannot inherit completion.1095 stable inputs,259 tests/2187035 assertions and91
native captures pass; default relocated stress smoke passes. Extra selected-profile short
smoke fails its capacity equality criterion (BL-071); final T2 badges/human acceptance remain
open. Candidate helper now packages/verifies dependency licenses (BL-070).
[Runtime return](contracts/DEV_SENTRY_UI_REFINEMENT_2026-10-19.md).

2026-10-19 - Added held nearby sentry fire control through the current combat/input/session
and authored HUD/audio pipelines. Configured enable/disable progress commits per device;
release, movement, damage or actions cancel without banking, repeated hold cannot toggle,
and HoldFire preserves ammo/cooldown/aim. Current default/mutation profiles use gameplay10;
historical6-9 retain Auto without control. Stable1087-input checks,256 tests/2158446 assertions,
61 native images and relocated main smoke pass. Play build/sentry_control/candidate/play.cmd.
Human tactical/readability and final badge receipt remain open. [Runtime return](contracts/DEV_SENTRY_FIRE_CONTROL_2026-10-19.md).

2026-10-16 - BL-068 built return: support repair is now in the Release main and matching
build/sprinter_visibility/candidate/play.cmd.1075 stable inputs,all6 checker steps,243 tests/
2158114 assertions pass.62 isolated native PNGs show Runner continuous Run and Sprinter's
finite burst; actual submitted poses match authority. Relocated short main smoke passes;
full mixed main replay and human gait/crowd/balance remain open. User-requested build handoff
is recorded in WORKFLOW section7; existing C++ style remains unchanged.
[Review005](reviews/2026-10-16-005-mutation-visibility-build-return.md).

2026-10-16 - BL-068 source repair: shared support registration no longer accumulates prior
stance corrections across plants; clip/direction rebinding preserves the collision-root origin.
Runner and Sprinter both reproduce the old hidden-approach/snap defect. Preliminary243-test
suite passes; measured400-unit Run drift286.403 ->8.07882 in eight directions for each rig.
121 repaired mixed native images preserved. Full checker/native acceptance interrupted by
confirmed TCPU thermal shutdown; no new main candidate is packaged. Resume after cooling
recheck, sequential workloads only. [Review004](reviews/2026-10-16-004-mutation-support-drift.md).

2026-10-16 - BL-067 zombie claw pressure: ground-space contact, windup pursuit and committed
collision-constrained Active step; full hit window,one contact per swing,cover/protection and
existing interruption/mask semantics. Gameplay9 shares one bounded melee policy between current
weapon/mutation profiles; no health/gun/player-speed/protection/density increase.1073 stable
inputs,six checker steps,240 tests/2143553 assertions;405 current native PNGs. Same walking
route31→40 hits,idle29→35; ordinary100HP unarmed walking reaches defeat around22.5s. Body-gap
budgeting prevents close swings crossing their target. Human balance,
full per-type animation and BL-065 gates remain open.
[Runtime](contracts/DEV_ZOMBIE_MELEE_2026-10-16.md),[author review003](reviews/2026-10-16-003-zombie-melee-pressure.md).

2026-10-16 - BL-065 runtime candidate: received Runner/Sprinter anatomy,Run,burst,reactions,
death/headburst through shared immutable per-type pose/hit/snapshot/corpse/gib consumers.
Character15 capless anchors,presentation12 bindings,roster2 finite settle and guarded phase banks.
BL-066 fixes reproduced close-target arm-envelope exception by validating candidate holds through
the same authored arm solver. Smoke driver uses loadout/equip/trigger policy; no new character art.
1064 stable inputs,six technical steps,231 tests/2141501 assertions;402 actual native PNGs,
matching30/120 actor states. Fresh Temp main wins178 enemies at70HP,exit0. Human quality,
landing-contact FX and default promotion remain open. [Dev handoff](contracts/DEV_MUTATIONS_RUNTIME_2026-10-16.md),
[author self-review002](reviews/2026-10-16-002-mutation-runtime-candidate.md).

2026-10-16 - BL-065 design anatomy/reactions: Runner/Sprinter hurt,claw,fold,prone,crawl,
supine and headburst GPT sources; schema7 six-slot regions/joints,capless head anchors and
56 landing contact rows. Existing importer/Walker limbs retained;336 received movement part
frames pixel-identical.552 directional records,140 C++ poses +64 masks;fresh1051-input pass,
221 tests/2,113,943 assertions. Source/native candidate only; default/resolver/cap/phase runtime
unchanged and human encounter receipt open. [Handoff](contracts/DESIGN_MUTATION_REACTIONS_RETURN_2026-10-16.md).

2026-10-15 - BL-065 design source/native return: new GPT Image modular Runner/Sprinter
identities, four-direction Run/Idle and authored Sprinter anticipation/push/bound/settle.
Shared existing importer, palette and six-part rig; manual20-unit contacts and reaction/gore
reuse matrix.11 banks/120 directional poses,288 foot checks and30 existing C++ preview
captures. Walker claw limbs are reused with provisional torso choreography. Source/native
study only: no game/default/type-hit/corpse change; mutation low/prone art and mixed-encounter
receipt remain open. [Handoff](contracts/DESIGN_RUNNER_SPRINTER_RETURN_2026-10-15.md).

2026-10-15 - BL-065: configured Runner/Sprinter gameplay study, isolated composition RNG,
per-type delay/cap and authoritative burst interruption/heading through existing horde.
New runner_study launcher preserves default weapon encounter.986-input stable pass,221 tests,
402 native captures,portable178-death victory; authored mutations/Run and human quality open.

## 2026-10-15 · Configured weapon switching / reused character arms (BL-063)

Rifle/pistol/shotgun share one loadout, authoritative fire/reload/equip/accuracy and collision
pipeline. Per-weapon ammo/cooldown/bloom persist across switches; shotgun commits individual
shells and groups pellets under one discharge/feedback owner. HUD/cursor and native mechanical
states read the selected gun. Original character art is unchanged: the existing registered
importer normalizes raw arms once per character; common attachment preserves thickness/hand
size and authored body occlusion, without character×gun source banks. Gameplay7/presentation11/
geometry3 and consumers/checks migrate together; historical singleton fixtures remain explicit.

973 stable inputs,212 tests/2,113,761 assertions,five technical steps pass;404 native screenshots
and a fresh Temp main victory. [Run/receipt/limits](contracts/DEV_WEAPON_SWITCH_2026-10-15.md).
Human balance, full anatomy, distinct reload/audio/casing and parent gates remain Review/open.

Thay đổi đã tích hợp, theo kết quả quan sát được; kế hoạch ở [BACKLOG.md](BACKLOG.md). Chưa có release version/artifact được xác nhận trong nhật ký này.

## Unreleased · cập nhật 2026-10-05

### Added

- Pistol/shotgun design,2026-10-14: actual GPT Image rifle-family source and native art,
  two mechanical states per gun, manual sockets, editable generated ORA and scale/rotation
  review. Pistol v2 corrects fixed-muzzle drift. Existing raster exporter is reused; no
  runtime/default/weapon balance/character-hold changes. See DESIGN_PISTOL_SHOTGUN_2026-10-14.

- Horde density return,2026-10-14: active Sprint cap24→32,Tiled total148→178,earlier/faster pulses
  and two closer existing entry centers. Camera-safe r64 spawning/art/combat settings retained.
  Six actual capacity workloads precede promotion. Matched visible-center arrival14s→9s and
  first30s mean1.45→5.77;117 captures,932 stable inputs/202 tests and fresh portable178-death
  victory. Tuning lives in existing JSON/Tiled; human fun/overlap and parent gates remain open.


- Distributed spawns,2026-10-14: encounter4 samples configurable entry discs around native
  Tiled points; active four maps have8 centers,r64. Reject visible/near/blocked/occupied samples;
  wait without spending budget or catch-up bursts. Keep148 planned zombies and wave schedule.
  Existing authored actor/resources reused. Generic cues fit HUD; smoke driver respects rifle
  range without changing player fire.932-input stable pass,202 tests,48 actual entry samples,
  r96 extension and fresh portable victory. Human arrival/pressure and LAN gates remain open.


- Dynamic FPS cursor,2026-10-14: fixed authored center+four Kenney CC0 arms replace enlarged
  firearm ring. Presentation10/canonical UI packet owns parts and angular gap/timing; actual
  next-shot accuracy opens immediately and closes softly without gameplay changes. Reload/
  empty/melee/terminal use muted dot; grenade/placement retain ring.928-input stable pass,
 195 tests,218 native captures/72384 exact visible pixel checks and matching authority/gun
  traces; portable main retains prior accuracy totals. DEV_DYNAMIC_CURSOR/RV-008; human
  readability/mouse/crowd and parent gates stay open.

- Weapon accuracy runtime slice,2026-10-14: gameplay6 requires per-rifle/sentry stance cone,
  capped per-shot bloom and tick recovery. Actual resolved speed owns movement penalties;
  independent instance seeds/accepted sequences sample authoritative hitscan rays. Actor/gun
  pose retains intended aim; authored reticle shows next-shot spread.909-input stable pass,
 191 tests,717 native PNGs/90 shots across three loaded profiles; portable main passes.
  See DEV_WEAPON_ACCURACY/RV-007; balance/readability and parent gates remain open.

- Explosion feedback return3,2026-10-14: source attack impulse now snapshots through the
  shared Blast event; camera scales by power/distance without grenade-ID branching. Quality6
  adds70ms cosmetic hold and4Hz recovery. Stable903-input pass,181 tests; actual powers
 50/200/300 produce2/8/10nativepx, paired HUD/HP/poses unchanged. NPC displaced frames21→40;
  same portable main passes. DEV_EXPLOSION_RESPONSE/RV-006; human feel still open.

- Camera feedback user return,2026-10-14: replace noise-only response inside the same sampler
  with directional impact kick, critically damped recovery and smaller rumble. Quality5 owns
  amplitudes/recovery; accepted attack origin reaches PlayerHurt without changing damage.
  Map-edge reflection retains response; blast injury does not duplicate its explosion kick.
  Fresh903-input pass,180 tests; native old/new per-axis peak3→6, unchanged outcomes/HUD and
 21 actual NPC displaced frames. Same portable main totals. See DEV_CAMERA_IMPACT/RV-005;
  human feel remains open and the prior quality is returned.

- Event-driven explosion/local injury camera shake,2026-10-14: quality4 owns enable/cap/
  frequency/decay/impulses/radius falloff. Existing feedback dedup owns cosmetic state;
  PlayerHurt carries actor generation/cause. World camera, culling and inverse pointer
  projection share submitted origin, bounds stay inside Tiled maps, HUD stays outside it.
  Fresh903-input technical pass,178 tests;906 paired native PNGs at three clock rates show
  unchanged header/footer pixels and outcomes;10 actual NPC injuries produce camera offset.
  Portable main and matched bundle receipt pass. See DEV_CAMERA_SHAKE_2026-10-14/RV-004;
  human feel, legacy mapless overscan, character/gait and whole Sprint gates remain open.

- East gait runtime integration,2026-10-14: canonical source/contacts drive Walk, moving held
  Aim/Fire and grenade frames through existing compilers. Schema14 direction/view/hold gait
  references and collision-resolved distance share the same sampler, including authoritative
  grenade hand queries. Fresh899-input technical pass,168 tests,195 actual-render PNGs per
  control/candidate and portable urban smoke. Residual7–8-unit forefoot spans and human/full
  direction/action gates remain open; see DEV_SURVIVOR_EAST_GAIT_2026-10-14 and RV-20261014-001.

- Survivor East gait design return,2026-10-13: six GPT-authored poses and manual foot contact
  data, existing native exporter reuse, whole-body comparison strip and separate 210-cell
  review overlay. Fresh actual before/after renderer playback retains the supplied executable.
  Source/marker receipt is bounded; old clock/support and human gait acceptance remain open.
  See DESIGN_SURVIVOR_EAST_GAIT_RETURN_2026-10-13 and RV-20261013-006. No default promotion.

- Survivor locomotion return,2026-10-13: grenade integration retains the completed held bank;
  moving Aim/Fire reuse original Walk lower pixels through importer7 precomposed frames.
  Schema13 hold adaptation and exact alpha replacement are integrated; stable880-input report,
  165 tests/2,074,855 assertions,504 raster cases and333 isolated urban captures pass.
  Current package/playback and remaining moving-action/human gates are in
  DEV_SURVIVOR_LOCOMOTION_RETURN_2026-10-13 and RV-20261013-004; no Sprint/character receipt.

- Grenade user-return repair,2026-10-13: cooking keeps the initial-flight guide stable instead
  of pulling a future explosion marker toward the hand. Guide ends at first contact and hides
  on release; actual later collision/bounce/fuse remain simulated. Commit locks direction/power
  through windup; ground cursor and native line visibility corrected using real renderer images.
  879-input stable technical pass,163 tests and45 new captures; no human/whole-sprint acceptance.
  [Current playable handoff](contracts/DEV_GRENADE_AIM_FIX_2026-10-13.md).

- Grenade runtime slice,2026-10-13: hold-G prediction, authored hand release, real flight,
  wall/ground bounces and rolling; optional LMB cooking, RMB cancel/drop, same-tick expiry
  precedence, self-damage and barrier shielding through existing combat/gore. Received native
  character/socket/marker/foley inputs integrate through existing loaders/resources; HUD and
  ground/depth ordering were corrected using actual game captures. Normal local defaults and
  a matching urban/courtyard launcher use this slice. Stable877-input technical pass,
  160 tests,42 final captures across three draw schedules and a portable encounter smoke;
  [handoff](contracts/DEV_GRENADE_RUNTIME_2026-10-13.md) and
  [scoped self-review](reviews/2026-10-13-002-grenade-runtime-integration.md).
  Art/human acceptance, low cover and co-op remain open; no whole-sprint acceptance.

- Grenade design/native return,2026-10-13: four-direction hold/prime/throw/recovery upper poses,
  user-authorized original Walk bake into168 complete frames,28 release sockets and70 palm
  foregrounds for a separate grenade. Adds six authored marker/icon cells and unmodified
  licensed Kenney foley; reuses grenade/blast/UI skin/font/danger ring. Reproducible narrow
  exporters, native checker and metadata-driven authoring playback accompany
  [handoff](contracts/DESIGN_GRENADE_ASSET_RETURN_2026-10-13.md). No runtime/input/physics/
  cooking/prediction/default migration; BL-055 encounter and human gates remain open.

- Combined urban asset slice,2026-10-12: original street/sidewalk/frontage/details preserved
  with an eastern concrete/paving court and three real props, using received source-mask
  transparency through existing PNG/Tiled resources. One metadata profile selects completed
  Survivor/Walker/gore; one generated launcher runs it. Actual movement/fire/approach captures
  and stable813-input technical report pass. SmokeCapture owns screenshot state/IO; source
  structure has zero notices. [Run/edit](contracts/DEV_URBAN_ASSET_INTEGRATION_2026-10-12.md).
  Human/character/environment acceptance and regular-default promotion remain separate.

- Complete terrain-bank encounter slice,2026-10-12: both saddles and all concrete/paving
  transitions reuse the received authored-mask adapter;12 native roles keep their stable IDs.
  Editable A/B consume the new bank and received concrete/coarse paving placements, preserving
  Collision/Gameplay. Existing package manifest revision2 regenerates explicit masked recipes;
  revision1 remains compatible. Four fresh Tiled/game cases match2,129,920 pixels/96 transforms;
  both packaged movement/fire encounters exit0 from Temp with272 shots/148 deaths/one blast.
  [Run/edit handoff](contracts/DEV_COMPLETE_MATERIAL_BANK_2026-10-12.md). Default choice,
  whole-environment visual and human playtest gates remain open.

- Material design return,2026-10-12: three textured transition proofs and coarse paving use
  user-authorized authored-mask export over existing native/palette/CopyPixels operations.
  Revised concrete saved-GID placement and Tiled/game/actor views are supplied; four native
  cells and2,293,760 raster pixels match,32 transforms and1988 joined edges pass. No default/
  A/B encounter migration. [Design packet](contracts/DESIGN_MATERIAL_RETURN_2026-10-12.md)
  separates bounded proof integration from full-bank/human environment acceptance.

- Native material first receipt,2026-10-11: nine authored base variants and two rare wear
  samples, shared palettes, Tiled repeat/mixed maps and palette-aware detail/edge/package
  checker. Existing raster/package/game consumers reused;1,695,744 Tiled/game pixels match,
  both actual packaged encounters pass. User chooses all three material directions for the
  next transition-bank authoring step. [Receipt](contracts/ENVIRONMENT_MATERIAL_SAMPLES_2026-10-11.md).
  Full bank, human scrolling and environment acceptance remain separate gates.

- Optional native A/B map package, 2026-10-11: the existing exporter follows an explicit map/
  palette manifest and stages external TSJ/image dependencies with their relative paths.
  Palette revision2 references the existing frontage palette; revision1 remains compatible.
  The playable review bundle keeps the prior default and supplies A/B launchers. Packaged
  Tiled rasters/native hashes match design; A/B/default game runs pass from Temp. Matching
  682-input technical checks/logs and resource receipt accompany
  [handoff](contracts/DEV_ENVIRONMENT_TILE_PACKAGE_2026-10-11.md). No layout/default promotion,
  new artwork or full environment/human acceptance is claimed.

- Environment clean tile candidate,2026-10-11: two GPT Image sources,12 native32px floor
  templates/32 logical corner cases, explicit catalog for60 new/reused tiles, native Tiled
  Terrain Sets and five editable proof maps. Existing crop/palette/resource consumers reused;
  thin metadata adapter preserves authored geometry.320 compatible edges and950,272 Tiled/game
  pixels match, including96 transform cases. Both proof maps run actual148-death/1-blast smokes.
  [Tile handoff](contracts/ENVIRONMENT_TILE_LIBRARY_2026-10-11.md) binds fresh680-input passed
  technical checks and source/resource hashes. This is source/native terrain delivery;
  facade/boundary quality, selected packaged integration and human acceptance remain open.

- Environment design round01,2026-10-11: authored quiet ground and street/yard facade sources,
  crop/palette/alpha metadata and two editable native Tiled studies. Full rasters, eight actor-scale
  views, north-wall depth probes, collision/region diagrams and eight design answers are supplied
  in [round01 receipt](contracts/ENVIRONMENT_DESIGN_ROUND_01_2026-10-11.md). Existing map loader,
  texture cache, camera and marker consumers reused; no runtime/default-map change. Both matching
  game smokes run148 deaths/1 blast/exit0. A/B selection, border cues, material joins, facade scale,
  independent art and human route acceptance remain open; this is a source-study addition.

- Environment visual return,2026-10-10–11 (BL-024/S01-12): added16 native asphalt variants and
  16 transparent authored detail tiles through the existing Tiled/texture path; removed opaque
  stripe panels, chopped scene-ground and isolated active-road curb islands. New surface-detail
  layer and explicit right-facade reflection retain current markers/collision/combat tuning.
  Four actual GPU perspectives and native Tiled render were reviewed independently by AI QA:
  [baseline004](reviews/2026-10-10-004-tiled-map-visual-qa.md)40/100;
  [correction005](reviews/2026-10-10-005-tiled-map-visual-recheck.md)65/100 with the same rubric.
  Patch correction accepted in inspected views; full district art remains Needs changes.
  Sources/prompts/hashes in art/environment/tiles/urban_v1; concrete next asset packet in
  [environment request](contracts/ENVIRONMENT_ART_REQUEST_2026-10-10.md).
  Stable correction receipt:643 unchanged inputs,151 tests/2,025,608 assertions; scoped map
  checks7/720. Package and Tiled-saved map each run148 deaths/1 blast/exit0. Game/visual comparison:
  `build/tiled_world_polish/candidate/zombie_demo.exe` and `build/tiled_world_polish/index.html`.

- Multiple sentry runtime slice, 2026-10-10 (BL-054): replaces the singleton through existing
  placement/combat/feedback/render/session paths. Encounter revision3 supports configured caps;
  each device owns position, arc, ammo and cooldown, with selected rotation/refund and overlap
  checks. Two-device GPU playback and the same three-device command/reset extension are tested.
  Stable Release technical receipt:636 unchanged inputs, six steps,151 tests/2,025,607 assertions.
  `build/multi_sentry/candidate/play.cmd` preserves the user's wave/character tuning with
  budget8/cost4/cap2. [Receipt](reviews/2026-10-10-002-multiple-sentry-runtime.md).
  Independent balance/visual, co-op and full Sprint acceptance remain open.

- Native multilayer Tiled world slice (BL-024/S01-12): TMJ/external TSJ, reused street/16 tiles,
  map-owned collision/markers/spawn perimeter, encounter2 marker references, cached tile passes
  and follow camera sharing mouse aim/placement projection. Static solids participate in
  movement/spawn/deployable/hitscan checks. Explicit historical encounter/smoke fixtures remain;
  interactive default selects the map. Navigation, seamless art and human/two-district gates
  remain outside this slice. Stable integrated checks: 636 unchanged inputs; 151 tests and
  2,025,607 assertions. Tiled 1.12.2 saved output and the packaged map both run from another
  working directory with all 148 zombie deaths/1 blast. Delivered executable:
  `build/tiled_world/candidate/zombie_demo.exe`; [review](reviews/2026-10-10-003-tiled-world-runtime.md)
  and [handoff](contracts/DEV_TILED_WORLD_2026-10-10.md). Current encounter revision3 preserves
  map markers while incorporating BL-054's configured sentry capacity.

- Zombie tuning guide, 2026-10-10: explains packaged/source config paths, health/live capacity,
  wave counts and the ordered spawn-window formula. Reproduced startup rejection after changing
  the first wave to 16 at 100 ticks; subsequent user tuning starts and finishes the encounter.
  No executable or tuning values overwritten; [diagnostic record](reviews/2026-10-10-001-wave-count-startup-diagnosis.md).

- Complete rifle hold runtime slice,2026-10-08: schema12/import6 selects body, sleeves/palms,
  weapon reflection and sockets together throughout360° for stationary/moving Aim/Fire.
  Original moving frame indices and head/legs retained; close-target projection is explicit
  and never falls back to historical arms in this bank. [RV-014](reviews/2026-10-08-014-complete-held-weapon-boundary.md):
  stable607-input Release/Smoke pass,138 tests/2,024,797 assertions,504 reconstructed frames,
  50 packaged matrices and both packaged encounter smokes. Matching candidate:
  `build/held_weapon_v2/candidate`. Independent visual acceptance and inherited Reload/Melee
  remain open; this does not promote the whole character or close BL-052/Sprint gates.

- East/SE rifle-grip migration,2026-10-08: import5 explicitly targets cardinal tracks and
  diagonal views; reused East and mirrored SW parts replace22 additional Aim/Fire/moving
  frames through the existing full-body renderer. Original head/legs,canonical rifle geometry
  and six bridge holds retained. [RV-013](reviews/2026-10-08-013-east-se-runtime-grip-correction.md):
  stable594-input Release/Smoke report,136 tests/66,627 assertions and10 actual raster/consumer
  cases pass. New package `build/survivor_right_grip/candidate`; continuous full-circle and
  independent character quality remain unaccepted.

- NW/SW rifle-grip correction and study cleanup,2026-10-08: new weapon-free source parts
  replace22 Aim/Fire/moving views while retaining original head and per-frame legs. Import4
  declares frame replacements and authored weapon planes; the same renderer/socket transform
  draws both rifle skins. Existing character_preview now accepts target-aware JSON layouts;
  concise study-code rule added to AGENTS/CODING_GUIDE. [RV-011](reviews/2026-10-08-011-rifle-grip-correction-and-study-cleanup.md):
  stable593-input Release/Smoke checks,136 tests/66,627 assertions and six correction regressions
  pass. Matched package `build/survivor_rifle_grip/candidate`; full-angle/art acceptance remains open.

- Weapon-depth correction, 2026-10-08: received independent source parts compile into ordered
  under/over-weapon planes from import version3 through the existing full-body renderer. Six
  raster regression cases reject the previous forced merged-foreground result and malformed
  assignments. [RV-009](reviews/2026-10-08-009-weapon-depth-and-returned-pose.md): stable587-input
  Release/Smoke checks,136 tests,matching normal/olive package and72 shot cases pass.
  `build/survivor_aim_depth/candidate` and before/after preview delivered. The user's finger-wrap/
  front hugging-pose return remains unaccepted, with a concrete artwork correction brief.

- Standing bridge runtime, 2026-10-08: character schema11, canonical support schema2 and a
  target-resolved complete-hold selector integrate six received standing Aim/Fire holds into
  the existing encounter/shot pipeline. [RV-008](reviews/2026-10-08-008-standing-aim-bridge-runtime.md)
  records stable587-input technical checks and matched package. Subsequent user feedback returns
  occlusion/pose quality under RV-009; the original artifact is retained as historical evidence.

- Standing East→NE source bridge,2026-10-08: four weapon-free GPT Image holds extend the
  received endpoints into overlapping315–360° actual-barrel windows, with independent arms,
  grip/support/stock/cuffs and direction-dependent order.18 native layers and244 actual
  normal/olive cached-resource cases; stable575-input technical checks pass.
  [Handoff](contracts/DEV_SURVIVOR_AIM_BRIDGE_2026-10-08.md). Bounded asset/content candidate;
  canonical selector/default unchanged, real-target encounter transition still requires receipt.

- Survivor aim-layer dev receipt,2026-10-08: new weapon-free base/independent-arm source proof
  verified without canonical runtime changes. Existing resources/target solver exercised144
  normal/olive cases;36 of72 ground-target cases exceed the supplied actual-barrel windows.
  [RV-20261008-005](reviews/2026-10-08-005-survivor-aim-layer-dev-receipt.md): fresh stable568-input
  Release/Smoke checks pass,133 tests. Source/native receipt accepted; window-aware selection
  and the bounded next pose bridge remain before encounter promotion. Diagnostic preview:
  `build/survivor_aim_layer_receipt/index.html`; no replacement game executable delivered.

- Survivor standing-aim authoring proof2026-10-08: selected weapon-free East/NE source with
  independently authored trigger/support arms,12 native layers including mirrored counterparts,
  clean torso with retained identity/stance and per-pose grip/cuff/stock/range data. Both actual
  rifle skins render separately through the existing cached full-body/weapon/foreground path.
  [Exact handoff](contracts/DEV_SURVIVOR_AIM_LAYERS_2026-10-08.md). Small source/resource proof
  only; no canonical runtime/default/moving-action or full-angle quality promotion.

- Rifle native grip correction,2026-10-08: shared weapon geometry moves the attachment from
  receiver-side(14,9) to authored pistol-grip contact(10,8). Character hand anchors, layers and
  PNGs are unchanged; horizontal stock shifts outward about4 units and down about1.5 units.
  [RV-20261008-003](reviews/2026-10-08-003-rifle-native-grip.md): stable559 inputs,133 tests,
  normal/olive GPU/moving/sentry checks and both packaged encounter smokes pass. New package:
  `build/survivor_weapon_spacing/candidate`. Intermediate-angle support-hand art gate remains.

- Survivor weapon occlusion correction,2026-10-08: import2 per-pose hand/cuff crops split authored
  pixels into disjoint body/foreground through the same exporter;33 cardinal rear attachments
  recalibrated. Normal asset checks verify216 frames reconstruct retained artwork;8 actual-raster
  mutation cases verify loss/duplication/color/bounds rejection. [RV-20261008-002](reviews/2026-10-08-002-survivor-weapon-occlusion.md):
  stable559 inputs,133 tests/42,512 assertions,256 GPU captures,22 intermediate-angle sheets and
  both packaged encounter smokes pass. Package: `build/survivor_weapon_occlusion/candidate`.
  Full held-weapon quality still needs changes at intermediate angles; concrete artwork request
  delivered to existing character owner. Runtime C++, authored source PNGs and prior packages retained.

- Survivor diagonal pixel consistency,2026-10-08: all44 affected Aim/Fire/moving-rifle frames
  redrawn against retained cardinal artwork; matching boots/backpack/head/shading and two grip
  corrections use the same metadata/exporter/renderer. Five rejected trials remain unselected.
  [RV-20261008-001](reviews/2026-10-08-001-survivor-direction-style.md): fresh stable556 inputs,
  133 tests/42,512 assertions,256 GPU captures/768 socket rows and both packaged encounter smokes.
  All nine cardinal strips and1,450 modular PNGs unchanged. Complete package:
  `build/survivor_unified_alignment/candidate`; before/after preview and revision locks delivered.
  Scoped owner style check passes; independent character/Sprint gates remain separate.

- Survivor hair identity correction,2026-10-07: GPT Image source edits remove red/auburn diagonal
  hair mismatch with cardinal brown. Existing import/export/render path retained; no runtime tint
  or C++ changes. [RV-013](reviews/2026-10-07-013-survivor-hair-identity.md): stable548 inputs,
  133 tests/42,512 assertions,256 GPU captures and both packaged encounter smokes. New complete
  asset package: build/survivor_hair_alignment/candidate. Other character quality gates remain.

- Survivor directional alignment candidate,2026-10-07: schema10 authored diagonal standing/moving
  views and per-frame grips extend the same full-body sampler/cache. Body, gun and sockets share
  one complete pose sample; invalid view histories/skin coverage are rejected. Shared exporter
  handles row-based source cells. [RV-012](reviews/2026-10-07-012-survivor-directional-alignment.md):
  stable545 inputs,133 tests/42,512 assertions,256 GPU captures/768 rows, unchanged legacy rasters
  and both packaged encounter smokes. Separate package: `build/survivor_directional_alignment/candidate`.
  Identity/angle/art/gait gates remain; actor/loadout selection boundary is tracked in BL-053.

- Survivor full-body alignment runtime candidate,2026-10-07: schema9 extends the existing
  character loader/sampler/resource cache with real body/hand-foreground frames and whole-body
  skin compatibility. Moving Aim/Fire keep one locomotion clock across shots; wider canvas
  preserves body scale through death/melee. Authored pose projection shares the canonical
  rifle flip/rotate/socket transform. Received full-body sources and versioned GPT Image
  corrections reuse the shared raster exporter;1,450 legacy modular PNGs remain identical.
  [RV-011](reviews/2026-10-07-011-survivor-full-body-alignment.md): stable533 inputs,
  131 tests/42,448 assertions,256 GPU captures/768 socket rows and both packaged encounter smokes.
  Separate candidate: `build/survivor_alignment/candidate`; original packages are preserved.
  Diagonal support-hand/action quality, independent art/gait/portrait/human and default migration
  gates remain. Walker anatomy is unchanged; no full Sprint acceptance is claimed.

- Rifle alignment runtime candidate,2026-10-07: canonical per-asset geometry, reflected
  texture/pivot/socket transform and muzzle-origin target alignment; character8 stock/shoulder
  attachments calibrate Aim/Fire including moving bindings. Original melee phase/gait payloads
  are preserved. Player/sentry drawing, muzzle/tracer and randomized rear casing consume the
  accepted shot transform. Existing Raylib/Raymath/resource loader reused; generic sprite-index
  path supports a different native weapon geometry without weapon-specific coordinates.
  [RV-010](reviews/2026-10-07-010-weapon-alignment.md): fresh stable Release518 inputs,
  125 tests/42,240 assertions,48 actual GPU captures/384 socket rows, both packaged Sprint smokes.
  Candidate is `build/weapon_alignment/candidate`; previous Walker receipt is preserved.
  Received arms/full-body Survivor and independent visual gates remain; shotgun is not added.

- Walker completion runtime candidate,2026-10-07: authoritative shared pose/convex regions,
  support registration and six-part hitscan; living sever/down/crawl/right-arm claw;
  heavy flight/down/getup, standing/low landing, inherited corpse/gib motion and capped headshot
  through existing event/resource/feedback consumers. Character7/gameplay4/presentation6/gore3
  migrate together in explicit normal/olive candidates. [Runtime handoff](contracts/DEV_WALKER_RUNTIME_COMPLETION_2026-10-07.md)
  attaches executable/bundle/source hashes,176 metadata matrix rows,16 real-command fixtures/
  1,342 captures and both packaged Sprint smokes. Fresh Release report:508 unchanged inputs,
  118 tests/34,599 assertions, six local steps pass. Source defaults and full visual/human/
  Survivor/Sprint acceptance remain open; no dependent roster growth or second pipeline.
- Local handoff execution: one CMake game/test aggregate avoids repeated asset generation;
  project report schema2 checkpoints input hashes/completed steps. Five orchestration regressions
  pass. Historical Windows shutdown caller remains unknown; this does not claim a system fix.

- Walker gait/capped-headshot authoring alternative,2026-10-07: retained gait parts with24
  whole-pose contact/registration rows and144 matching geometry refs; selected16-frame GPT
  Image red-cap cloth attachment,128 source-native snapshot markers and HeadExplosion packet
  revision3. Native re-exports match retained/selected atlases; full support curve/raster model
  passes72 cases. [Exact source/native handoff](contracts/DEV_WALKER_COMPLETION_2026-10-07.md).
  Source/authoring integration only; shared runtime consumers and encounter/default quality
  require their own matching revision receipt.

- Walker authored heavy-recovery/landing packet,2026-10-07: eight selected real modular
  sources with cap/bandaged identity, four directions/six shared poses, standing/low contact,
  native atlas/ORA/playback and additive144-shape six-region bank. GPT Image left-leg correction
  removes East sole-height jump; offline cardinal stride model passes, diagonal/turn gait
  remains unaccepted. [Exact handoff](contracts/DEV_WALKER_HEAVY_RECOVERY_LANDING_2026-10-07.md).
  This integrates source/native authoring only; no new runtime/default/visual acceptance.

- Authored Walker gore runtime review slice: shared damage cause/impact/anatomy masks,
  owned part/variant snapshots, collapse/launch and blast partial/shatter, cached authored
  blood/chunks/jet/burst/splat/wounds, bounded feedback and shared casing/part ground flight.
  Versioned gameplay3/presentation5/finite character-effect6/gore2/joints1 consumers preserve
  existing defaults. [Matched artifact](contracts/DEV_GORE_RUNTIME_2026-10-07.md): fresh
  Release455 unchanged inputs,103 tests/21,305 assertions;64 actual combat fixtures/768 PNGs
  and both gore-selected Sprint smokes. Regional/live/headshot/momentum and visual gates remain.
- [Zombie Sprint asset audit](reviews/2026-10-07-002-zombie-sprint-asset-readiness.md) receives
  the now-delivered hurt regions/live parts and identifies only remaining cap/heavy recovery/
  contact/gait/material inputs. Runtime migration is distinguished from missing artwork;
  no full Sprint or character acceptance and no default promotion.

- User-directed governing design revision D-035: player/Survivor uses complete body pose
  sprites; zombie retains real modular parts for sever/gore. Art direction, asset/instruction
  gates and Sprint/R1b precedence notices now match the [migration handoff](contracts/DEV_SURVIVOR_FULL_BODY_2026-10-06.md).
  Required action/direction/weapon/portrait quality remains; no new art/runtime promotion.

- Shared authored death-motion proposal in the existing force recipe revision2: inherited
  collision-resolved ground velocity plus accepted bullet/blast/external impact vector for
  body, parts and HeadExplosion root. [Motion handoff](contracts/DEV_WALKER_DEATH_MOMENTUM_2026-10-06.md)
  identifies missing event velocity/ground-slide boundaries and legacy-consumer retirement;
  no runtime momentum completion or new physics/asset pipeline is claimed.

- Walker lethal-headshot design/art addition: HeadExplosion branch, authored four-direction
  default flipbook, frame registration through the existing native exporter, mask/snapshot
  recipe and [dev handoff](contracts/DEV_WALKER_LETHAL_HEADSHOT_2026-10-06.md). Two cap attempts
  remain unselected; subsequent GPT Image correction was blocked, without fallback. Runtime
  death/FX consumer and matching cap acceptance are not established by this design addition.

- Walker live-sever authored/native revision1: eight selected GPT Image modular part sources
  from eleven attempts; four-direction down/crawl with cap/bandage replacements; numeric
  six-region pose/frame geometry and contact/state handoff. Existing exporter accepts optional
  explicit source cells under import schema4; older auto-band imports stay supported.
  [Handoff](contracts/DEV_WALKER_LIVE_SEVER_REGIONS_2026-10-06.md) separates source/native
  coverage from missing actual region-hit/living-injury runtime and visual acceptance.

- BL-020/S01-18 and BL-048 source/native design continuation: 28 versioned GPT Image sources,
  48 numeric rifle/body compositions with both skins, 30-bank Survivor replacements, measured
  gait contacts and portrait UI compositions. Force/gore packet adds six-layer/four-direction
  recoil/airborne poses plus cap/bandage, 48 authored FX rectangles, eight outcome recipes and
  state diagrams. Existing native exporters are reused; three attempts remain unselected.
  [R1b art revision 2](contracts/DEV_R1B_DESIGN_ARTWORK_V2_2026-10-06.md) and
  [force/gore handoff](contracts/DEV_WALKER_DEATH_FORCE_GORE_2026-10-06.md) document actual
  artifacts and limitations. These are authoring candidates; current default/runtime gore,
  independent visual, gait/weapon and full R1b acceptance are not changed.

- BL-020/S01-18 contact source-study clarification: actual four-direction melee pose2 and
  Walker reaction row2 nominated for first-Active contact, with candidate hashes/variant
  overrides and phase groups. Read-only inspection verifies all 48 body quads and records
  v1 timing disagreements. [Revision 1](contracts/DEV_R1B_CONTACT_CLARIFICATION_2026-10-06.md)
  does not patch runtime, accept weapon angles/layers or replace the original art candidate.

- BL-020/S01-18 design authoring packet: 24 versioned GPT Image part/portrait sources
  (14 selected, 10 retained unselected), registered through the existing exporter into one
  22-part Survivor bank. Candidate metadata covers eight Survivor and seven Walker actions;
  claw active/recovery reuse existing real reaction arms. Canonical catalog records prompts,
  origins, source hashes and the six preceding gait attempts. Native checks preserve all four
  original Walk poses; fresh C++ preview captures 38 four-direction action/pose cases.
  Stable Release project checks passed (89 tests / 14,798 assertions).
  [Artwork handoff](contracts/DEV_CHARACTER_ART_HANDOFF_2026-10-06.md) declares source/native
  scope. Gait, weapons/anatomy/replacements, portrait UI, moving/encounter acceptance and
  default/olive promotion remain open; these sources are not selected by default.

### Fixed

- Backward locomotion,2026-10-14: signed collision-resolved phase unwinds Walk/moving
  Aim/Fire/grenade without flipping body identity or reversing action/damage timers. Shared
  cycle wrapping handles phase zero and continuity; coordinate error bounds keep strafe
  forward. Fresh900-input pass,172 tests;1842 native captures verify41 backward cases,
  56 forward/strafe cases and96 stops, with grenade/portable main regressions passing.
  Stride/art/human acceptance remains open. See DEV_SURVIVOR_REVERSE_PLAYBACK_2026-10-14
  and RV-20261014-003.

- Survivor directional cadence return,2026-10-14: partial full-body banks now share walking-
  equivalent time from resolved distance/configured speed; sprint and collision use the same
  policy. Import4 reflects received side legs into West and SW/NW held consumers, retaining
  upper identity and transforming contacts. Actual submitted renderer snapshots show six
  phases across40 moving cases and frozen motion in40 stop cases. Fresh899-input technical
  pass,169 tests and portable urban smoke; lower stride still yields12-unit stance projection
  and full gait/human receipt remains open. See DEV_SURVIVOR_DIRECTIONAL_CADENCE_2026-10-14
  and RV-20261014-002. Earlier East-only candidate is preserved as returned evidence.

- BL-020/S01-18 authored action runtime slice: explicit default/olive review manifests select
  the handed eight-action Survivor and seven-action Walker banks through the existing pipeline.
  Schema 5 maps Melee to authoritative pose groups; first Active uses nominated pose2 and Walker
  Active holds the nominated strike including variants. Preparation uses Idle/Walk. Original art
  candidates and default selection remain unchanged. Frozen local checks pass: 367 unchanged
  inputs, 96 tests / 18,159 assertions; fresh renderer playback and both Sprint smokes pass.
  [Handoff](contracts/R1B_DEV_AUTHORED_ACTIONS_2026-10-06.md) and
  [self-review RV-008](reviews/2026-10-06-008-r1b-authored-encounter.md) preserve limitations.
  Numeric weapon composition, corrected gait/replacements/portrait and full acceptance remain open;
  [concrete design inputs](contracts/R1B_DESIGN_DELIVERABLES_FOR_DEV_2026-10-06.md) start with 48 weapon poses.

- BL-020/S01-18 R1b developer slice: Walker locomotion advances from collision-resolved
  self displacement, excluding impulse. Character schema 4 carries a trial stride and
  imported contact study through the existing bank/sampler. Claw hit/miss/prop attacks expose
  authoritative windup/active/recovery; melee contact follows anticipation exactly once and
  cancels reload before ammo transfer. Gameplay schema 2 migrates both playable configs.
  Prepared action consumers preserve moving legs and simulation phase; terminal Survivor
  playback can advance after simulation stops. Missing artwork remains an explicit prototype
  fallback, with no default promotion or full character/visual acceptance. See D-032 and the
  developer handoff for measured limits and required artwork.

- BL-020/S01-18: correct Death cap artwork from olive military cap to the existing red-cap
  outfit, using a versioned authored source and canonical native export. Same actor/variant/rig
  identities and renderer; cross-action/encounter and mask snapshots verified. F-01 accepted
  by [independent RV-003](reviews/2026-10-06-003-independent-cap-fix-review.md); foot sliding,
  smoothness/readability and full R1b remain unaccepted. [Self-review 002](reviews/2026-10-06-002-cap-identity-correction.md).

- BL-049: fixed Walker Walk being reset to Idle by same-tick consume/draw updates. The
  existing authored four-direction/six-pose animation now retains its accepted tick pose;
  clear/retry and later stationary/action ticks still update normally. R1a/R1b regression,
  stable Release checks and normal-renderer playback pass; full character acceptance remains
  separate. [Self-review 015](reviews/2026-10-05-015-walker-walk-regression.md).

- BL-020/S01-18 bounded Walker death rework: eight authored part/replacement source sheets,
  six-pose four-direction finite collapse, per-pose joint registration and explicit R1b
  default/olive review bundles. Actor appearance/identity survives death and slot reuse through
  an owned event snapshot; the normal renderer plays Death and holds the terminal body with
  masks/variants and depth ordering. Reuses the existing pipelines. Full character/default
  promotion and BL-048 sever/gibs remain open; [self-review 013](reviews/2026-10-05-013-walker-death-rework.md).

- BL-047: rifle casing angle preset narrowed from 35–145° to 135–165° relative to shot aim, keeping random ejection consistently behind/right for player and sentry. Existing sampler/renderer/schema reused; eight-direction regression first reproduced forward scatter then passed. [RV-010](reviews/2026-10-05-010-rear-casing-cone.md): stable Release entry, 62 tests/3764 assertions and viewed GPU smoke pass; only quality tuning/tests changed from RV-009.

- BL-045: casing scatter now uses one presentation RNG stream, sampling speed/angle/lift/bounce/spin/tumble per shot. Duplicate delivery leaves RNG unchanged; retry does not repeat its decorative sequence. Quality schema 3 validates lift/bounce ranges. [RV-009](reviews/2026-10-05-009-random-casing-design-fx.md): stable Release entry pass, 61 tests/3235 assertions, distinct GPU clouds with equal combat totals. Independent visual acceptance remains open.

- BL-044: project-format legacy asset preview; only whitespace and namespace comment changed. Preview Release build/hidden capture and mandatory Release entry pass on stable inputs, 58 tests/2557 assertions, source/assets/load smoke pass. [RV-008](reviews/2026-10-05-008-preview-format-gate.md) retires inherited format blocker for BL-008/042/043; failed reports stay historical. Casing/gameplay source and executable unchanged; character and independent review gates remain open.

- BL-042: sentry barrel xoay theo target hợp lệ mỗi tick, kể cả cooldown; setup facing giữ tâm cung 120°. Shot và cached rifle PNG dùng cùng aim, place/rotate init đúng; reuse pipeline/asset hiện có. [Self-review 006](reviews/2026-10-05-006-sentry-rotation.md): Release build, 52 tests/2483 assertions, hai góc GPU và default Sprint smoke pass. Mandatory project entry vẫn failed vì preview tool format ngoài scope; fix ở Review, chưa nhận tổng technical/production/playtest acceptance.

- BL-038/039: loader reject lane anchor đè closed gate, runtime spawn dùng chung collider predicate với movement và không tiêu budget/generation khi chặn. Shared Blast event giữ radius thực, feedback renderer scale authored PNG theo snapshot; mine 120 / grenade 68 không còn đọc chung tuning. D-022 và [RV-20261005-002](reviews/2026-10-05-002-encounter-fixes.md) ghi migration/evidence: Debug/Release build, 50 tests / 2320 assertions mỗi cấu hình, CTest, format/source/assets và bốn GPU scenarios đạt. Hai fixes ở Review, không nhận toàn Sprint/production art hoặc human playtest.

- BL-032: hết spawn candidate hợp lệ thì hoãn, giữ budget/generation; initial fill dừng và retry theo interval. BL-033: exit center phải đủ player clearance tới props ở cả hai district, reject layout bị chặn trước scene. BL-034: kiểm tra exact length/numeric finite type cho bounds, spawn/exit và nested prop/district arrays trước conversion.
- Bản sửa được self-review ở [RV-20261004-002](reviews/2026-10-04-002-arena-fixes.md), baseline giữ nguyên. Debug/Release 32 tests / 1863 assertions, CTest, format/source checker và default GPU smoke đạt. Probe trước/sau xác nhận ba lỗi được khắc phục; D-019 ghi policy/tradeoff. Không đổi content/demo.json hoặc nghiệm thu LAN/navigation/production art.

### Added

- Horde density return,2026-10-14: active Sprint cap24→32,Tiled total148→178,earlier/faster pulses
  and two closer existing entry centers. Camera-safe r64 spawning/art/combat settings retained.
  Six actual capacity workloads precede promotion. Matched visible-center arrival14s→9s and
  first30s mean1.45→5.77;117 captures,932 stable inputs/202 tests and fresh portable178-death
  victory. Tuning lives in existing JSON/Tiled; human fun/overlap and parent gates remain open.


- Distributed spawns,2026-10-14: encounter4 samples configurable entry discs around native
  Tiled points; active four maps have8 centers,r64. Reject visible/near/blocked/occupied samples;
  wait without spending budget or catch-up bursts. Keep148 planned zombies and wave schedule.
  Existing authored actor/resources reused. Generic cues fit HUD; smoke driver respects rifle
  range without changing player fire.932-input stable pass,202 tests,48 actual entry samples,
  r96 extension and fresh portable victory. Human arrival/pressure and LAN gates remain open.


- Survivor hair identity correction,2026-10-07: GPT Image source edits remove red/auburn diagonal
  hair mismatch with cardinal brown. Existing import/export/render path retained; no runtime tint
  or C++ changes. [RV-013](reviews/2026-10-07-013-survivor-hair-identity.md): stable548 inputs,
  133 tests/42,512 assertions,256 GPU captures and both packaged encounter smokes. New complete
  asset package: build/survivor_hair_alignment/candidate. Other character quality gates remain.

- Survivor directional alignment candidate,2026-10-07: schema10 authored diagonal standing/moving
  views and per-frame grips extend the same full-body sampler/cache. Body, gun and sockets share
  one complete pose sample; invalid view histories/skin coverage are rejected. Shared exporter
  handles row-based source cells. [RV-012](reviews/2026-10-07-012-survivor-directional-alignment.md):
  stable545 inputs,133 tests/42,512 assertions,256 GPU captures/768 rows, unchanged legacy rasters
  and both packaged encounter smokes. Separate package: `build/survivor_directional_alignment/candidate`.
  Identity/angle/art/gait gates remain; actor/loadout selection boundary is tracked in BL-053.

- Walker R1b [contact authoring study](../art/characters/zombies/walker/prototype_v1/design/README.md):
  48 authored sole landmarks across four directions/six poses/two anatomical feet, proposed
  contact phases and source hashes, with a debug overlay against existing native artwork.
  Geometry validation confirms all markers lie on opaque pixels of the correct part/cell.
  No gait/stride acceptance, runtime loading or new action artwork is claimed.

- [R1b authoring design](contracts/R1B_CHARACTER_DESIGN.md): Walker contact phases and drift
  calibration, Survivor/Walker action storyboards and authoritative hit/miss phase handoff,
  directional grip/occlusion, full-matrix identity/mask/corpse checks and portrait reuse brief.
  Linked current sprint and dev handoff; preserves accepted corrections and active owners.
  Documentation only; no new PNG, runtime action, default promotion or R1b acceptance.

- [Independent cap correction review RV-20261006-003](reviews/2026-10-06-003-independent-cap-fix-review.md):
  fresh stable entry and current four-direction cross-action/death render confirm the cap mismatch
  corrected. Gait and full character gates remain open; review artifacts only, no implementation edits.

- [Independent Walker quality review 2026-10-06](reviews/2026-10-06-001-walker-animation-quality.md):
  BL-049 same-tick Walk fix accepted after fresh checks/playback; found living/death cap identity
  mismatch under BL-020/S01-18. Added review artifacts/evidence; no runtime or artwork changes.

- Independent R1b review [RV-014](reviews/2026-10-05-014-independent-r1b-acceptance.md): fresh
  stable Release entry, eight windup/hurt death edge probes, normal Renderer and Sprint playback.
  Walker death logic passes the bounded local scope; required actions/default migration and
  human/visual acceptance remain open. Review artifacts only; no runtime/art changes.

- BL-048: bổ sung diagrams attachment/body death/part lifecycle và lethal arm_l sequence trong
  [LOCATIONAL_GORE](contracts/LOCATIONAL_GORE.md). Làm rõ attached parts dùng shared death pose,
  detached parts giữ sever snapshot rồi bay riêng, mask ownership/corpse terminal/empty-body;
  thêm G13–G15 acceptance. Chỉ đổi design/handoff, chưa runtime states hoặc artwork mới.

- [LOCATIONAL_GORE](contracts/LOCATIONAL_GORE.md), BL-048/D-030: design/handoff hitbox riêng sáu
  body regions, authoritative sever/masks, bộ blood/gib/wound/decal recipes, Walker death suite,
  live-sever dependencies, ownership và G01–G12 acceptance trong encounter. Đồng bộ yêu cầu
  mới vào VISION/ZOMBIES/S1.2/index; giữ R1a, active owners và timebox. Chỉ đổi docs, chưa tạo
  asset/animation clips, implementation hitboxes/particles hoặc nhận feature production Done.

- BL-020/S01-18 R1a runtime slice: explicit default/olive review manifests now integrate layered
  Survivor idle/walk/fire and Walker windup/hurt in the real encounter, with identity-owned
  direction/action clocks, shared locomotion composition and accepted Shot pose sockets for
  gun/muzzle/casing. Reuse existing assets/exporter/resource/feedback; three authored Walker arm
  reaction sources added to canonical inventory. Schema 3 character/import schema 2 and all
  affected consumers migrate together. R1b full action/death/variant and independent visual
  acceptance remain open; default production selection is not promoted.

- Handoff asset mới theo yêu cầu người dùng: [DEV_ASSET_HANDOFF_2026-10-05](contracts/DEV_ASSET_HANDOFF_2026-10-05.md)
  xác định phần nguồn/clip character chưa đủ, phần consumer cần migrate, reuse VFX/casing đã sửa,
  owner và trình tự R1a/R1b, socket snapshot, matrix/death/swaps, evidence và acceptance.
  Handoff nguồn cũ và planning index dẫn tài liệu mới; chỉ đổi docs, chưa sửa runtime/asset hoặc
  nghiệm thu character production. Status và validation tài liệu ở BACKLOG.

- BL-046: reuse four existing design sheets for muzzle flash, prop-break impact, zombie-hit blood and melee sweep, replacing grenade/UI substitutions through the existing exporter/cache/feedback consumer. Default/olive presentation schema 4 includes Blood and authored melee-angle metadata; four frames per role verified in native export and actual renderer capture. [WEAPON_FEEDBACK](contracts/WEAPON_FEEDBACK.md) maps source/metadata/consumer/limits; no new art generation or character ownership change.

- BL-043: authored four-view empty brass casing PNG/provenance and native 64x24 export; player/sentry Shot feedback ejects from a rotated rifle socket, tumbles, bounces once, settles and fades. Dedicated cosmetic cap/lifecycle reuses CombatFeedback and cached assets; no combat balance change. Presentation schema 3/default+olive and quality schema 2 migrated together. [Self-review 007](reviews/2026-10-05-007-casing-feedback.md): Release build, 58 tests/2557 assertions, CTest, source/assets and three GPU scenarios pass; project entry still failed on existing preview format. Runtime slice in Review, not full character/S01P2-06 acceptance.

- [Sprint 1.2](sprints/SPRINT_01_2.md): 15 ngày/ba tuần được người dùng cho thêm, thay đề xuất một tuần; nâng reaction/death vỡ xác, VFX/audio, support salvo và same-pipeline extension trong encounter. 16 packages S01P2 + BL-041 Inbox/Unassigned, giữ active S01 owners. D-025 đưa tổng roadmap lên 11 tuần, S02 tuần 6–7/S03 tuần 8–9/S04 tuần 10–11, giữ phạm vi sau; đồng bộ PLAN/VISION/WORKFLOW/AGENTS và indices. [RV-20261005-005](reviews/2026-10-05-005-sprint-01-2-foundation.md) ghi source gap/reuse và hashes; chỉ tích hợp design/docs, chưa tạo asset, sửa runtime hoặc nghiệm thu gameplay mới.
- Kiểm tra tài liệu S1.2: 18 Markdown/272 local links, fences/anchors, 100 task IDs/26 decision IDs duy nhất; 16 packages khớp BACKLOG, lịch D1–D15 đầy đủ, 13 source hashes không đổi và AGENTS bằng tiếng Anh. Không chạy lại game/build/tests trong lượt design này.

- Chỉ thị người dùng 2026-10-05: [PRODUCT_CONTINUITY](PRODUCT_CONTINUITY.md) là Markdown riêng về phát triển open-ended/incremental, giữ chất game và đường xây tiếp; không biến demo/animation mẫu thành trần sản phẩm hoặc dùng build/tests thay trải nghiệm. AGENTS dẫn bắt buộc bằng tiếng Anh, planning index liên kết tài liệu. Ghi rõ animation/reaction, chết vỡ xác và hỏa lực/oanh tạc; giảm lượng content trước khi làm mất trụ cột. Chỉ thay tài liệu, chưa sửa runtime/asset hoặc nghiệm thu sản phẩm.

- [RV-20261005-004](reviews/2026-10-05-004-recovery-boundaries.md): xác nhận consumer character còn study/default Walk, actor/request singleton và orchestration demo; phân biệt giới hạn roadmap với lỗi local, ghi thứ tự sửa/retirement trên task hiện có trong BACKLOG. Chạy lại entry Release: app/tests build, 50 tests/2320 assertions, source 72/0/0 và asset check pass; format fail ở character header/preview, tổng exit 1. Chưa sửa runtime, nghiệm thu visual/playtest/co-op hoặc kết luận cần rewrite toàn bộ.

- BL-040: [design Sprint 01](sprints/SPRINT_01_DESIGN.md) cụ thể hóa map/two-setup fixtures,
  tick/state/input/UI/transactions/timers, lịch wave, actor action-direction/clock/socket/corpse,
  22 acceptance cases và A/B/control. Sprint 01/index dẫn design, D-024 và
  [RV-20261005-003](reviews/2026-10-05-003-sprint-01-design.md) ghi source snapshot và giới hạn.
  Chỉ thay tài liệu; giữ active owners, không reset sprint hoặc đổi runtime/JSON/balance mặc định.

- Kế hoạch incremental D-023: [mục lục sprint](sprints/README.md), Sprint 02/03/04 chi tiết mục tiêu/entry, 10 ngày tương đối, dependency/file scope/acceptance, reuse/migration và candidate handoff; thêm 24 packages Inbox/Unassigned vào BACKLOG. Đồng bộ PLAN/WORKFLOW/AGENTS và S01 theo D-020 local trước, network spike tiếp nối S02, runner forecast S03. Giữ task/owner/evidence đang có; thêm horizon mở và replan theo playtest. Chỉ thay tài liệu, chưa thực thi hay nghiệm thu các sprint.
- Kiểm tra tài liệu của D-023: 12 Markdown, 164 local links, fences cân bằng; 82 task IDs và 24 decision IDs duy nhất, 24 packages mới khớp BACKLOG, AGENTS giữ tiếng Anh. Không chạy lại game/build/tests vì lượt này không sửa runtime/content/tooling.

- BL-008 local entry `tools/validation/check_project.ps1` ghép format/source/build/headless/assets, optional smoke, JSON policy và report/log/hash. Năm regression cases đạt; run thật bắt format/build failure và bảy input thay đổi trong active character migration, trả unstable_snapshot. Sau thêm running marker chống stale report đã chạy lại regression; chưa có full green run ở source ổn định, review độc lập hoặc CI. Không sửa source runtime để chữa migration của owner khác.
- [RV-20261005-001](reviews/2026-10-05-001-handoff-enforcement.md) kiểm tra lại prototype risks, phân biệt migration đang làm với candidate đã bàn giao; cập nhật ưu tiên bằng chứng trong BACKLOG và lệnh handoff WORKFLOW/AGENTS. Giữ các foundation có thể reuse và active owners; không kết luận cần rewrite toàn bộ hoặc claim production/playtest đạt.

- RV-20261004-008 independent review code/candidate mới: Release app/tests build, 45 tests/2037 assertions, CTest, format 21 files, source/bundle checks và hai GPU smokes đạt. Probe xác nhận anchor trong gate bị nhận/spawn kẹt và mine blast VFX dùng radius grenade; đưa BL-038/039, chưa sửa runtime. Local gameplay phù hợp nhiều luật; toàn Sprint/production character/player evidence chưa nghiệm thu, giữ owners/gates hiện có.

- RV-20261004-006 audit prototype contracts và phần foundation giữ lại; WORKFLOW mục 8,
  AGENTS, sprint handoff và review/task template yêu cầu scope Done, proof mở rộng với core contract,
  debt owner/trigger/migration/check và quyết định nhận/trả theo acceptance. D-021 ghi lý do;
  giữ active owners và scope solo D-020. Chỉ thay tài liệu, chưa sửa character/multi-actor runtime,
  nhận production sprint hoặc cài enforcement/CI.

- Sprint 01 local candidate: budgeted sentry/mines, atomic refund/rotation, fixed forward firing arc and finite ammo, planted arm/trigger/fuse/shared blast, hold-zone progress, a collision-locked gate and extraction with live threats. Seven finite lane waves replace the interactive kill-all loop; results and same-seed retry are owned by LocalSession. No LAN acceptance claimed.
- Encounter/objective state PNGs and cue atlas register existing authored sources through presentation schema 2 and the same AssetResources cache. Setup/objective/results HUD uses asset skin/font and metadata; eight CC0 OGG cues use a bounded sound pool. Raw generation catalog and character owners are preserved. Schemas, default/reskin, VS/build entry and [local contract](contracts/SPRINT_01_LOCAL.md) migrate together. Final candidate evidence is recorded separately in the integration self-review; balance/art/audio approval and human playtests remain open.

- RV-20261004-005 review tiến độ các owner Sprint 01 qua backlog/source/evidence, đồng bộ claim S01-18 hiện có và ghi các gate QA/playtest/character còn thiếu. Reviewer build tuần tự app/tests Release, 45 tests/2028 assertions, CTest và smoke setup A tới Victory; lần parallel đầu gặp OOM được ghi riêng. Đây là review/evidence, không nghiệm thu toàn sprint hoặc sửa runtime.

- BL-029 có [mục lục 55 PNG nguồn GPT Image](../art/generation/INDEX.md), catalog prompt và provenance/hashes trong project: 28 actor sheets bốn hướng, 2 anime portraits, 25 environment/weapon/deployable/FX/UI nguồn. Sáu lần sửa bằng GPT Image bỏ rifle baked-in và sửa runner action; first attempts được giữ trong drafts. PNG signature/dimensions, 61 source/attempt hashes, 14 references và catalog/ledger parity đạt. [RV-20261004-004](reviews/2026-10-04-004-generated-art-sources.md) đối chiếu art direction và ghi style/native/layer/playback còn thiếu; chỉ bàn giao nguồn, không thay C++/runtime hoặc nhận production art Done. Audio chưa được tạo.

- Review RV-20261004-003 đối chiếu hướng/action của actor với art/sprint acceptance: Walker có modular walk bốn hướng; Survivor runtime còn walk.s một hướng, súng xoay riêng. Ghi evidence/acceptance vào task BL-010/020/021 hiện có; không sửa asset/runtime hoặc nhận production visual Done. Direction test 1/21 và Walker preview capture chạy trong lượt review.

- Hồ sơ senior review tại `planning/reviews/`: quy trình theo đầu não planning hiện có, template và báo cáo RV-20261004-001; AGENTS/WORKFLOW/index dẫn quy trình mỗi lần review có Markdown riêng. Baseline đã build app/tests Release, 26 tests/558 assertions, CTest, source checker, asset checker và GPU smoke local; probe tái hiện ba lỗi arena/spawn/checkpoint đưa vào BL-032/033/034, chưa sửa runtime. Không cài giám sát tự động/CI và không nghiệm thu production visual/LAN/performance từ các checks này.

- Asset integration chạy thật: native PNG cho rifle/sentry/grenade/street/debris/tracer/blast/crosshair, Kenney skin/font có license; manifest resolve IDs một lần, AssetResources sở hữu cache và draw interface chung. HUD dùng skin/font/nine-slice/layout metadata; weapon dùng grip/muzzle sockets. BL-019 đạt lát integration; thiếu production state/hướng vẫn theo BL-020.
- Walker prototype: sáu body-part PNG, hai replacement head/arm, bốn hướng × sáu shared walk poses, OpenRaster 24 layer và atlas build-time. Runtime compose từng slot; character_preview dùng cùng resource API, pause/step, mask và swap. Rig/revision/layout mismatch bị reject. Đây chưa phải anime roster/actions/Survivor production hoàn chỉnh.
- Debug/Release: 26 tests / 558 assertions, CTest Release, GPU smoke 240 ticks/100 peak walkers/59 shots/30 deaths/1 blast/HP 100; kiểm tra 17 PNG + 5 upstream files + 24 OpenRaster layers đạt. Reskin rifle/UI qua asset/metadata giữ executable; thiếu file/sai decoded dimensions dừng bằng lỗi ID/path. Preview directions/layers/masks/swaps đã xem; checker 46 source, 0 blocking/0 review. Không suy diễn FPS, LAN hay playtest acceptance.
- Tám native part exports tái lập cùng hash; JSON/fences và 115 local links trong 14 tài liệu thay đổi đạt. Source prompt/provenance nằm trong art; raw drafts nằm trong .local (không cần khi build), không để project reference chỉ ở thư mục generated_images của Codex.

- Sprint 01 chi tiết: bốn team, 10 ngày tương đối, 19 work packages có dependency/contract/acceptance, hai vòng playtest, correctness/visual gates và handoff; trạng thái S01 chỉ trong BACKLOG. Nhân lực chưa gán theo yêu cầu người dùng.
- ART_DIRECTION: anime pixel gameplay và portrait anime 2D cùng identity; audit flattened walk study và đường actor draw chưa modular. ASSETS bổ sung character/portrait folder contract; gate shared pose, mask/swap, action/direction đưa vào S01-18/19. Đồng bộ VISION, PLAN, WORKFLOW, AGENTS và thông báo chung; không claim đã sửa runtime asset hoặc gửi trực tiếp tới phiên agent khác.
- Kiểm chứng lượt Sprint 01/art correction: 20 tài liệu, 197 local links, Markdown fences, 49 task rows/19 sprint cards và 16 decision IDs không trùng; card ↔ backlog mapping và AGENTS tiếng Anh đạt. Đây là kiểm tra tài liệu; không chạy build hoặc nghiệm thu rig/portrait trong lượt này.

- GAMEPLAY_DESIGN: audit nguyên nhân vòng chơi local ít hậu quả; đề xuất nhiệm vụ mở đường tiếp tế, encounter nhỏ, setup trade-off, carry-over/route, pacing, counterplay và phiếu playtest. FOUNDATION bổ sung research Valve/Wube/Tiled có nguồn; BL-023–028 là epic cần refinement, chưa triển khai.
- Kiểm chứng tài liệu kế hoạch hai tháng: 17 Markdown files, 173 local links, fences và ID duy nhất của 28 task/15 decision đạt; AGENTS giữ tiếng Anh. Không chạy build/gameplay test cho lượt chỉ sửa tài liệu này; chưa có playtest để xác nhận các giả thuyết.

- Một file `trigger_codex_1112.bat` tự chứa PowerShell, chờ 11:12 ngày 04/10/2026 theo giờ máy và gửi một prompt OK qua Codex CLI; có `--dry-run`, chặn giờ đã qua và giữ cửa sổ để xem kết quả. Parser/dry-run từ hai working directory và đường lỗi giờ đã qua đạt; chưa gửi request thật hoặc kiểm chứng reset quota.
- Chỉ thị bắt buộc dùng asset thật cho UI/weapon/environment/VFX, contract format/metadata/resource interface và visual acceptance; thông báo chung AGENT_NOTICE, ưu tiên BL-019/020/021. Đây là cập nhật quy tắc và backlog; chưa thay artwork runtime trong thay đổi này.
- TODO tiếp theo có thứ tự phụ thuộc, file scope và điều kiện nghiệm thu trong BACKLOG; không tạo danh sách status thứ hai.
- Checker source/folder local đọc JSON policy, xuất report và phân biệt review/block/error; regression script cho checker. CI integration vẫn là backlog.
- Demo combat local hai arena: preparation đặt sentry, rifle/ammo/reload, melee/knockback, grenade fuse/blast, walker chase/windup, thùng phá được, HP/defeat/pause/restart và checkpoint/extraction.
- Target `zombie_sim` không link graphics, `zombie_content` cho loader/validation và `zombie_tests` với doctest; app/presentation đọc command/state/event tách khỏi gameplay. Damage và reaction thuộc attack definitions, weapons reference attack IDs.
- JSON nguồn app/gameplay/quality, schema, đọc sprite metadata, source config qua build/VS Code, F5 reload khi preparation. Dependency pin/license và hướng dẫn ở README/DEPENDENCIES.
- SOURCE_STRUCTURE: thiết kế source/module theo chức năng, public/internal API, ngưỡng review/chặn file và folder, reuse/vendor policy và lộ trình tách code. Chưa thực hiện migration runtime hoặc CI size checker trong thay đổi tài liệu này.
- Thiết kế App flow/ScreenManager/overlay tách MissionPhase, lifecycle/input và pause co-op; task BL-014. ScreenManager chưa được triển khai.
- Workspace planning với vision, asset/animation/config contract, zombie/co-op design, architecture, coding guide và roadmap.
- Audit source và pattern map; workflow Ready/Done, grooming, ownership, backlog/debt và release checks.

### Changed

- Cập nhật vision và roadmap theo thời gian **hai tháng** người dùng xác nhận 2026-10-04; PLAN giữ G0–G4 nhưng phân bổ tám tuần tương đối. Gameplay increment và LAN sớm dẫn thứ tự backlog; refactor/tooling hỗ trợ feature. D-015 phân biệt yêu cầu đã chốt với cơ chế đề xuất; thay đổi này chỉ là tài liệu, không thay runtime hoặc nhận scope asset BL-019.

- Tách presentation thành `render/Renderer` (GPU/canvas/camera), `WorldRenderer` (scene/sort), `hud/HudRenderer` và `feedback/CombatFeedback` + drawing. Texture có một owner, feedback có một state/event sequence; sprite drawing dùng chung. Target `zombie_feedback` kiểm thử headless; consumer/CMake chuyển và renderer aggregate cũ được bỏ. Debug/Release: 17 tests/151 assertions; checker 0 blocking/0 review; GPU smoke giữ event counts và ảnh byte-identical trước/sau. Chi tiết/evidence ở BACKLOG; World/screens và tuning inventory vẫn là task riêng.
- Tách DemoLoader thành gameplay/application/quality/sprite loaders với header riêng và validation nội bộ dùng chung; consumer/CMake được chuyển cùng lúc, giữ nlohmann_json và schema/behavior hiện có. Module content không còn file vượt ngưỡng review kích thước.
- AGENTS.md dùng tiếng Anh; quy tắc reuse first, format đã chốt, config thay tuning hardcode và branding độc lập.
- Tài liệu dùng tên dự án zombie co-op; SE220 chỉ còn là mã môn học/tên thư mục, không phải tên sản phẩm. Workspace planning dùng `planning.code-workspace`.

BL-001/013/017 đã qua kiểm chứng local: Debug/Release build, 13 tests/110 assertions, format và GPU smoke 100 zombie từ working directory khác; rename JSON giữ nguyên executable. Evidence ở BACKLOG. Nhật ký không suy diễn rằng co-op, rig modular, ScreenManager, CI hoặc performance target đã đạt.

- Sprint 01 local candidate validation: [RV-20261004-007](reviews/2026-10-04-007-sprint-01-local-candidate.md), Debug/Release 45 tests / 2037 assertions, CTest and bundle/format/structure checks. GPU default objective smoke and separate 100-zombie load smoke passed. Gameplay/art/audio/production sprint gates still require the evidence recorded in BACKLOG.


### Character contract/source handoff · 2026-10-05

- Changed: character schema2 named clips/action/moving bindings,finite hold,per-pose order/weapon
  sockets và variant coverage; schema1 Walker normalize cùng runtime model. Existing cached resource
  và consumer/preview/tests migrate, không có renderer/loader riêng cho Survivor.
- Added: Survivor identity/six-part sources, same-tool combat-arm corrections, native walk/ORA và
  import/parts/presentation metadata; provenance/prompt trong catalog hiện có. Walk/idle GPU proof
  và51tests/2331assertions Debug đạt; nguồn/action/grip vẫn chưa production acceptance.
- [Handoff](contracts/CHARACTER_HANDOFF.md)/[self-review](reviews/2026-10-05-001-character-contract-handoff.md)
  ghi phạm vi và limitations. Default Survivor/game action/corpse chưa migrate; BL-020/S01-18 còn mở.
