# Service Court level art completion plan

**Date:** 2026-11-02
**Deliverable:** current map art/layout review for the Service Court runtime slice. The source is dressed and a regenerated after-image is available for review. This is not an accepted product level or accepted production art.
**Integration owner:** root integration/design review. Preserve existing owners for runtime, map schema, renderer, lighting, and gameplay.

## Intended player experience

The Service Court must make a six-beat escape sequence readable in one continuous world. The player enters from the south, chooses how to approach west power and east security, activates Gate A, fights through the heavier response, crosses and closes the gate, then continues north toward Gate B and coastal extraction. The art should make the player decision, route consequence, and next destination visible without covering controls or narrowing the authored paths.

Runtime ordering and event behavior remain in the [Service Court runtime contract](SERVICE_COURT_CONCEPT_RUNTIME_2026-11-02.md). Objective IDs, interaction timing, wave behavior, and route-smoke ownership belong there.

## Current source composition

Current positions are preserved in `content/maps/escape_route_v1/escape_route_v1.tmj`:

- Four warehouse masses are placed at `(480,2904)`, `(2624,2904)`, `(576,2424)`, and `(2496,2424)`. They frame the court as connected industrial frontage while retaining south and north circulation.
- The cargo island uses container art at x=`1360` and `1616`, y=`2504` and `2632`. The six small crates sit at `(1136,2568)`, `(1168,2568)`, `(1200,2568)`, `(1136,2600)`, `(1168,2600)`, and `(1200,2600)`. Keep their authored footprint/blocker separate from the container footprints and preserve both broad bypasses.
- Quiet asphalt uses GIDs 292-294. Connected concrete margins define the north/south bands and the cargo and motor aprons. Drains are sparse accents rather than a repeated decorative grid.
- Two Gate A piers, power/security facade signs and six approach bollards use the native `service_court_landmarks_v1` exports through `service_landmarks.tsj`. Signs follow the existing roof cutaway groups; solid props have separate authored footprints.
- Existing authored objective coordinates, clearance regions, crossing, controls, spawn, and route intent remain authoritative. Automated waypoint fixtures now bypass the cargo via west and east lanes, so their paths have changed; the exact former automated waypoints are not preserved. Art placement must not silently move or redefine authored objectives or route intent.

The current review image is [`service_court.png`](../../build/service_court_tile_fix/after/service_court.png). Compare it with the historical [`before` image](../../build/service_court_tile_fix/before/service_court.png), the selected [Concept A study](../../art/environment/service_court_concept_v1/layout_a.png), and the source map. The concept is a direction study; neither it nor the render is production acceptance evidence by itself.

## Six beats and layout requirements

1. **South arrival:** Spawn is `(1536,3136)`. Frame a clear entry into the yard and retain at least a 96 px egress path. The apron should connect naturally to the two cargo bypasses and the northbound lane.
2. **West power and noise:** The west service destination leads to `restore_power.control` at `(896,2784)` within bounds `(848,2736,96,96)`. Keep the control visible and reachable. Its interruptible hold and noise consequence are runtime behavior, not implied by art alone.
3. **East security and local clearance:** The distinct checkpoint destination leads to `security_release.control` at `(2208,2784)`. Keep clearance `(2096,2720,224,128)` and the south doorway around `(2208,2888)` unobstructed. The security objective is local; do not communicate a global kill quota.
4. **Gate A motor and heavy response:** Preserve the motor at `(1600,2136)`, lamp anchor `(1536,2176)`, and crossing bounds `(1508,2016,56,96)`. The apron and light cluster should identify the threshold and frame the opening. The larger wave follows motor activation while the player can still move and fight.
5. **Cross and close:** Preserve the far-side close control at `(1536,1936)`. The opening must read as a passage, remain clear, and support the runtime rule that an occupied crossing cannot close. Closing restores the blocker and cuts off pursuit on this route.
6. **Continue north:** The space beyond Gate A must read as a continuing loading route toward Gate B, not a mission exit or dead end. The player and session continue in the same world toward the coastal exit.

## Review plan and acceptance evidence

1. **Composition at overview and gameplay scale.** Inspect the after-image against before and Concept A. Confirm that the four masses frame connected frontage, west and east destinations have distinct visual identities, central cargo offers two obvious routes, and the south and north links remain apparent. Inspect at gameplay scale for cover readability and interaction visibility; a reduced overview cannot establish small-control legibility.
2. **Geometry and route.** Check spawn egress, both bypasses, room approaches and doorways, each objective reach/clearance area, defenders/wave lanes, motor access, the 56 px crossing, far-side close approach, and the northbound continuation. Visual art does not author collision. Review each blocker against its actual authored footprint and preserve existing objective coordinates.
3. **Material and lighting hierarchy.** Check quiet asphalt GIDs 292-294 against the connected concrete margins, north/south bands, cargo/motor aprons, and sparse drains. Surfaces should help identify zones and traffic flow without arbitrary striping or clutter. Confirm event-driven lighting remains coherent with the route and does not suggest a false exit.
4. **Asset and depth review.** Inspect current catalog entries, source provenance, dimensions, pivots, transforms, footprints, and draw order for placed cargo/warehouse/industrial art. Roof/cutaway treatment must reveal controls and threats while preserving building silhouette. Current candidates or studies do not become accepted production art merely through placement.
5. **Current runtime evidence.** Use the current `build/service_court_concept/native/` captures for the six beats and current route smoke reports only after checking their source revision and capture provenance. Confirm the visual is the same map revision. Reports and captures are evidence inputs, not acceptance claims; current stable project checks and human navigation/art review are still separate gates.
6. **Handoff.** Record source revision, image/capture provenance, actual check commands and outcomes, route/collision findings, and unresolved visual or playtest issues. Do not claim co-op, complete mission, performance, production art, or product acceptance from this bounded runtime slice.

## Required remaining visual work

Gate piers, room signs and bollards now close the immediate landmark gaps. Their first checkerboard-backed drafts remain rejected; only corrected transparent exports are consumed. Review their native-scale joins, depth and legibility in the executable before accepting the art. The broad south approach and four repeated warehouse masses still need human composition review; the northern loading lanes and coast retain earlier study detail. Do not fill these spaces with arbitrary props merely to increase density. Source further art only for a demonstrated navigation, silhouette or environmental-storytelling gap through the existing asset pipeline.

## Extension path

The next level extension should retain this map, objective/control contracts, route and collision pipeline, and same-world state while refining the northbound loading lanes. Verify the new landmarks' collision/depth relationship and route continuity in this same implementation before expanding the map or prop roster. Keep temporary studies/candidates visibly identified until an integrated review accepts them.

## Scope verdict

This work is a **runtime-slice art/layout review**, not a product candidate acceptance. The current source and after-render provide concrete material for review. Acceptance requires matching route/collision and technical evidence, plus human review of navigation, visual readability and pacing. A technical pass cannot replace art or playtest evidence.
