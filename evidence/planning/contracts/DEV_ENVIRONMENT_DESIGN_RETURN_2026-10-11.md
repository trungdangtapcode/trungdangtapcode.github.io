# Design request · map composition and authored environment

Round01 source/layout delivery now available:
[A/B artwork, editable Tiled, renders and eight answers](ENVIRONMENT_DESIGN_ROUND_01_2026-10-11.md).
This prior request/consultation remains historical input. Neither option is selected or default;
the rendered studies do not establish production environment acceptance.

User explicitly requests help from team design and more questions after returning image8.png.
Integration owner: Codex Sprint 01 integration. Existing BL-029 source/inventory owner remains
Codex asset preparation. Environment production-art acceptance owner remains Unassigned.
This is a concrete request for design/authoring decisions, not runtime implementation or acceptance.

## Evidence and current gate

The returned image shows a curb island cut from the original street and disconnected stripe/
asphalt patches. These are features of the OLD / BEFORE native render in the comparison page;
the corrected map removed them. Previous side-by-side labeling was easy to misread. The page
now puts CURRENT / AFTER native and game renders first, with OLD / BEFORE collapsed and marked.
This clarification does not accept the current map: it still reads as a broad grainy combat
sheet with reused/mirrored frontage and weak destination identity.

Inspect [current map](../../build/tiled_world_polish/tiled_map.png),
[actual core](../../build/tiled_world_polish/runtime/encounter_combat.png),
[actual extended region](../../build/tiled_world_polish/runtime/camera_east_south.png), and
[user return](../../image8.png). Independent image/source reviews 004/005 accept only the
patch correction. Their 65/100 comparative score is not a finished-map quality gate.

Runtime geometry/markers/combat are unchanged this turn. Native 32px TMJ/TSJ and the existing
ground/overhead/prop paths remain the integration target. Previous technical checks cover
their existing snapshot, not a future authored map. No further random scatter/asset batch is
being used to substitute for design of this location.

## Design should answer these questions first

| Question to design | Concrete answer/artifact needed | Dev consequence |
| --- | --- | --- |
| What is this place and its primary route? | Two editable blockouts: street→station→extraction, and utility yard/street boundary; choose one after user input | Keep one map implementation; marker/route changes are explicit data migrations, not branches by map name |
| What should the player recognize at objective and exit? | Distinct landmark silhouettes and frontage proposals, shown with the current actor at actual game scale | Station/exit use authored assets plus existing marker roles; avoid reliance on HUD labels alone |
| Why is the extended south/east space playable? | Identify approach, preparation, fighting and travel regions; justify empty space versus intentional edge dressing | Preserve horde lanes; collision changes need spawn/placement/hitscan and reachability checks |
| Which ground palette and detail scale should ship? | Selected native 32px quiet base/material variants, explicit palette, a scrolling adjacency render with actors/VFX | Retain useful terrain/decal IDs; replace noisy source variants through the same recipes, without shader/drawing hacks |
| Which surfaces are floor and which are raised/solid? | Annotated curb, wall, fence, vehicle and pavement footprints; intended standable boundaries | Static collision and destructible prop/state mappings differ; no visually solid object with unacknowledged walk-through behavior |
| What goes below/above actors? | Named layer/pass split for ground, markings, details, structure backs and foreground roofs/edges, plus actual occlusion examples | Existing global ground/overhead passes suffice only where authored placement supports them; identify any genuine Y-sort requirement before asset integration |
| Which existing sources can be reused cleanly? | Selected crops/modules from crossroad/warehouse/extraction/car/fence source inventory, with reasons for replacing unsuitable studies | Author usable native modules, not more arbitrary pieces of a flattened scene; preserve existing provenance/inventory owner |
| Who authors and who receives the art? | Named authoring owner and separate acceptance owner, or explicitly Unassigned; artifact/revision and staged delivery | Status stays in BACKLOG; do not claim external team/session received this request without delivery evidence |

User confirmed delivery through chat or Markdown and requested two proposed layouts for
selection by rendered images. This file is the concrete Markdown handoff. Neither layout is
selected; do not choose one on the user's behalf or install either as the default map.
An AI environment-design consultant was explicitly delegated to propose options, not take over
the user's external design team or BL-029 ownership. Its output is
[ENVIRONMENT_DESIGN_OPTIONS](ENVIRONMENT_DESIGN_OPTIONS_2026-10-11.md).

## Staged design handoff

1. Return two composition blockouts and native-scale visual references first. Annotate what
   is preserved/moved in current spawn/objective/exit/wave anchors and collision footprints.
   The current 1280×640 world is a candidate layout, not a permanent size ceiling.
   Required round-one artifacts: editable Tiled drafts A/B, a full-map native raster for each,
   and arrival/objective/exit/south viewport renders for each at identical resolution and
   actor scale. Identify unfinished art and proposed solids on annotated companion images.
   Put generated previews under build/environment_design_round_01/. Text-only options or
   AI concept paintings alone do not fulfill the requested rendered-layout comparison.
2. After the chosen direction, deliver one coherent playable viewport plus its adjoining
   route transition: quiet ground, connected curb/paving, distinct frontage and one recognizable
   destination. This is a review slice within the scrollable world, not a return to static map.
3. Deliver editable source, native PNG/TSJ/crop metadata, layer/footprint mapping and Tiled
   arrangement; see the existing [art packet](ENVIRONMENT_ART_REQUEST_2026-10-10.md).
   Source is art/, authoring metadata content/, generated artifacts build/.
4. Dev integrates that exact revision through current consumers, renders native/core/exit/
   scrolling comparisons, validates geometry and the matching executable/resources. QA reviews
   composition/material/readability and user return; human route/setup remains S01-15/16.

Blocked/concave routes cannot grow before BL-024 navigation proof. Perimeter-only dressing or
flat accents can proceed through current paths. More blocking objects or a taller building
footprint requires a reviewed spatial integration, not hidden movement/spawn retuning.

## Delivery routing

User-confirmed route: chat or Markdown. This is the shared-workspace design handoff; it does
not prove another session has read it. Active in-thread consultation is recorded separately.
User-confirmed next receipt: two layouts reviewed by rendered images, then user selection.
Keep S01-12 in Review and full environment
quality Needs changes until the selected authored slice is received in the encounter.
