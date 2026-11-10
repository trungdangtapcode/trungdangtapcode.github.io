# Service Court: coordinated design and implementation plan

Integration owner: Codex Sprint 01 integration. The user requested an expanded design team
and a detailed plan on 2026-11-02. This plan coordinates concrete corrections to the existing
court; it does not authorize a second map implementation or declare the concept complete.
Scope of this handoff: reviewed design packets and a verified baseline candidate. Subsequent
map/art changes need their own matching candidate evidence. Status stays in BACKLOG.

## Intended player experience

Enter through the south threshold and recognize a working industrial compound. Find the
electrical workshop, restore power and choose an exit when noise draws attention. Cross a
loading yard with purposeful cover and clear destination landmarks. Enter the large security
complex, search its connected rooms, clear the defenders and release the gate lock. Return
to Gate A, start its motor, see the yard lights activate and defend against approaching
zombies. Cross north and close the gate behind you, then continue through the loading lanes,
Gate B and coastal extraction in the same world. Reaching Gate A is not victory.

The location must offer decisions rather than a long walk between markers. Indoor space is
for discovery, repositioning and escape. Furniture explains the room and shapes a useful
route; small decorations attach to desks, shelves, equipment or walls. Do not make a room
feel full by narrowing every aisle or putting unexplained marks on the floor.

## Baseline to preserve

Source `3b3dfa1` contains the 3840 x 4096 Tiled world, 512 x 640 two-door electrical workshop
and 1536 x 1536 registered security complex. The latter contains an archive, office, lobby
and service corridor. Twelve small interior assets, four exterior details and four freight
props supplement retained assets. Keep the current objective IDs, roof cutaway ownership,
gate close visibility fix, north-route visible blockers, authored collision and motor lamp
pipeline. Keep old artwork and rejected studies as provenance; do not delete them to simplify
the catalog.

The four sampled security floors currently have 85.61% collision-clear area and connected
sampled regions. That is a baseline estimate, not proof of combat space or exploration.
Preserve the existing door openings and verified routes before adding density. A new shelf
cluster must have a reason and demonstrate that the intended crossing/retreat still works.

The technical snapshot passes 473 tests / 2,573,235 assertions over 1,777 unchanged inputs.
Both selected routes pass on the packaged application; final evidence and remaining gates are
recorded in [review 007](../reviews/2026-11-02-007-indoor-candidate-handoff.md). Technical success
does not accept early motor pressure, full-map art, human navigation or all-route performance.

## Eight bounded design assignments

| Packet / owner role | Required concrete output | Integration use |
| --- | --- | --- |
| [01 Security level designer](service_court_design_2026-11-02/01_security_layout.md) | Room functions, source-verified doors, main/alternate route, proposed furniture clusters and control center | Root edits security placements after checking gaps and native anchors |
| [02 Workshop designer](service_court_design_2026-11-02/02_workshop.md) | Repair-work story, power-control approach, workbench/tool clusters, two retreat choices | Root edits west-room dressing while retaining both exits |
| [03 Outdoor level designer](service_court_design_2026-11-02/03_yard_routes.md) | Asymmetric loading/work lanes, south arrival, freight purpose, gate approach and protected circulation | Root resolves outdoor placements against all room entrances and spawn approaches |
| [04 Lighting designer](service_court_design_2026-11-02/04_lighting_wayfinding.md) | Existing event/fixture capabilities, cue states and specific fixture proposals | Root integrates only supported bindings; new behavior gets an explicit dev boundary |
| [05 Encounter designer](service_court_design_2026-11-02/05_motor_pressure.md) | First-contact/escalation/crossing proposal, arrival metrics and a bounded A/B | Root changes one supported pressure variable at a time and captures the actual application |
| [06 Asset librarian](service_court_design_2026-11-02/06_asset_reuse.md) | Real paths/IDs, native sizes, metadata, current use and minimum justified art gaps | Existing assets are selected before authoring any missing item |
| [07 Technical artist](service_court_design_2026-11-02/07_building_registration.md) | Measured roof/base/opening defects, scale concerns and exact repair crops | Registration is corrected before multiplying dependent building details |
| [08 Independent QA designer](service_court_design_2026-11-02/08_review_scenarios.md) | Native visual checklist, route/space checks, two human rounds and performance sampling plan | Root supplies matching artifacts; human participants judge discovery and pacing |

These are actual bounded contributor assignments, not eight competing map editors. Root owns
the shared TMJ, encounter/scenario configuration, integration tests, BACKLOG and final report.
Packets may propose changes but must not silently implement another contributor's scope.
The human playtest participants are still Unassigned; an AI route script is not a substitute.

## Root selections after cross-review

| Issue | Selected next change | Deferred or rejected alternative |
| --- | --- | --- |
| Security discovery | Keep south lobby → office → corridor/archive → west retreat as the taught review route; allow west entry as a player alternative | Do not silently reverse the guide or invent another archive/office door |
| South threshold | First trial removes only security canopy placement 1501 and its post footprints; retain its source and workshop instance. Move the two south bollard pairs outward after anchor checks | Canopy removal alone is insufficient: current canopy gap is 113 and bollard gap 116, versus the 152-unit facade opening. A wider canopy derivative is optional later |
| Interior density | Use packet 01's unequal shelf runs and reserved aisle, packet 02's compact repair cluster, and small details attached to real surfaces | No new generic clutter bank; all 12 existing small-detail types already have nested runtime placements |
| Outdoor composition | Trial the staggered freight and rearward forklift proposal from packet 03, preserving visual/collider identity and the two bypasses | Do not turn the entire freight envelope into one invisible collision rectangle |
| Objective landmarks | Verify actual runtime control artwork first. The west control study object 1132 is explicitly runtime-excluded; an annotation or lit patch does not establish a visible cabinet | Do not solve a missing physical landmark by increasing global brightness or changing the interaction coordinate to match an unrelated wall |
| Motor lights | Keep all ten existing Gate A activation bindings for the first pass | Early power/security light cues are optional later; use exact step-ID + existing StepCompleted if selected, not duplicate semantic event types |
| First contact | Rebaseline after freight placement, then compare packet 05 B1: loading marker `(1808,2640)` → trial `(1792,2448)` with all other pressure settings fixed | Do not combine B1 with optional B2 wave staging or count increases in the same comparison |
| Authoring consistency | Reconcile stale authoring spawn 1014 `(1536,3392)` with the actual runtime marker 1098 `(1536,3968)` during the next map edit | Do not move the runtime spawn back to the obsolete study marker |
| Registration | Independently scan/crop the roof/base pair before deciding which visible seams need repair | Alpha-bound overhang alone is not a proven defect; do not globally shift/regenerate the building from a bounding-box difference |

These are selected proposals, not already applied map changes. Packet coordinates remain
subject to the stated anchor, collision and native-view checks. The cross-review corrected
wrong inherited door coordinates, missed nested asset placements and an inappropriate
post-gate cue proposed for a lamp south of the gate; those errors are not implementation input.

## Implementation sequence and dependencies

### Pass 0 — finish the baseline evidence

Preserve the completed technical report and direct route. Finish the interrupted service route,
settled cutaway/closed-gate probe, source-to-package identity checks, Tiled receipts and the
review board. This provides a reproducible before state. Do not certify an interrupted run.
Record the direct run's quiet motor midpoint and slow arrival phase rather than hiding them.

### Pass 1 — lock spatial and registration constraints

Root reconciles packets 01, 03 and 07 against the actual Tiled object IDs and coordinates.
Door centers, exterior openings, control approaches, roof ownership and the broad yard route
are fixed constraints for the dressing pass. A proposed placement through a wall is rejected,
even if its Markdown table looks plausible. Geometry must follow inspected artwork and
explicit footprints, not a prompt's intended geometry.

Check the source/native 1254-to-1536 import and roof/base bounds separately. If artwork needs
repair, scope it to the affected pair or edge; preserve the working mission and older files.
No building-wide regeneration is assumed. Root records which proposals are selected and which
are held because the existing asset does not support them.

### Pass 2 — place functional clusters using existing assets

Apply the selected security, workshop and outdoor clusters through existing Tiled layers.
Desk/chair/control clusters, archive shelf runs, workshop tool storage and cargo staging must
read as different functions. Place papers on work surfaces and wall fixtures on walls.
Keep an unobstructed primary route and a useful retreat option. Roof-mounted detail belongs
to its roof's cutaway; floor dressing must not disappear with the roof.

Recalculate clearances and sampled usable floor after each region. Compare native views at
player scale and the whole composition before increasing object count. Required evidence:
exterior roof-on view, settled roof-off view, entry/control/alternate-exit views, and an actual
walk through every modified passage. A clean Tiled overview alone is insufficient.

Only after reuse review may an artist receive a missing-asset job. Every job names the exact
gap, native extent, perspective/palette reference, alpha, pivot, footprint, layer and runtime
consumer. Source/prompt, exported PNG, metadata and a matching native review are the deliverable.
Do not generate a broad new prop sheet just to increase the file count.

### Pass 3 — make objectives and motor pressure readable

Apply supported cues from packet 04 without flattening darkness, removing wall occlusion or
granting whole-yard visibility. The physical security control and its approach must remain
identifiable when the roof has settled. The motor event must visibly activate the intended
court fixtures while leaving meaningful dark approaches.

Use packet 05 to run one small pressure experiment at a time on the same mission pipeline.
The current 120 actors, cadence, radius and 30-second motor remain the comparison baseline.
Measure actual arrival and approach traffic under the moving/aiming camera, not only total
alive count. Keep midpoint and end-of-motor images and events. A static test reaching the
observer range after 401 ticks is useful regression evidence, not proof of a tense hold.
The chosen variant must preserve offscreen admission, normal collision and the ability to
cross/close the gate; no visible pop-in or enemy spawning inside blocked art is acceptable.

### Pass 4 — verify performance before adding more density

The enlarged direct route recorded 13.6 mean FPS in the arrival/power phase. Earlier >20 FPS
evidence does not cover this content. The later service run recorded 60.6 FPS in the same
phase without a performance code change, so the first finding needs a controlled cold/steady
comparison rather than an assumed root cause. Root profiles the actual slow phase through existing
debug/stage counters, separating cold startup, steady scene/sight work, simulation and external
load. Build, game and rasterizer jobs remain sequential on this machine.

Use identical content, camera route, quality, population and hardware for before/after
measurements. Report phase means, p95 and frames over 50 ms, including the lower yard and
both interiors. The user target is above 20 FPS; phase averages alone must not conceal long
stalls. Preserve asset appearance, sight/occlusion, mission logic and horde tuning. Reuse the
current prepared-map/cache boundaries; an unmeasured new engine is not the proposed fix.

### Pass 5 — review two player rounds, then package the accepted revision

Round 1 uses the current integrated route without verbal directions beyond normal controls.
Record choices, wrong turns, missed controls, blocked retreats, pressure onset and resource
consequences. Root selects specific fixes with evidence and keeps a before/after list.
Round 2 repeats the tasks on the changed revision and compares those observations. Automated
smokes cover route completion and regression; human rounds decide discovery and pacing.

After the final source/content edit, run the stable project entry, both selected routes,
native visual scenes and package identity checks on that snapshot. Publish one current
`play.cmd`, `index.html`, evidence report and revision. A gate lacking evidence stays open;
the parent sprint is not accepted merely because these technical checks pass.

## Scheduling and handoff boundaries

The eight design packets can proceed concurrently because they have separate write ownership.
Pass 1 selection precedes shared-map edits. Registration repair and asset reuse audit can run
independently; detailed placement waits for their selected constraints. The three region
dressing proposals can be prepared together, but root integrates and reviews one region at a
time. Pressure design and profiling preparation can proceed while art is reviewed; heavy
validation runs remain sequential. Each accepted implementation pass gets a scoped commit.

The next implementation handoff is a better furnished, readable court using this same route,
not additional distant districts or another disconnected demo. First close the specific
registration, composition, control-cue, early-pressure and arrival-performance findings.
More agents are added only for a distinct missing deliverable with an identified consumer.
