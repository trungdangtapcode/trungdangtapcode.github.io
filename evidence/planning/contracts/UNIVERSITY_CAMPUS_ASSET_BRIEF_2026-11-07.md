# University campus environment asset brief · 2026-11-07

**Scope:** source-art asset library plus an editable Tiled placement study for a reusable university courtyard and library/study threshold. This is not a mission design, finished map, runtime map/game change, or production acceptance. The four source plates and 36-ID import catalog now exist; see the canonical [props import](../../content/art/authoring/campus_v1/props_import.json). Its IDs, filenames, native dimensions, pivots, support/contact and collision fields are authoritative. Do not duplicate that catalog here.

The user has not approved a campus plot, named institution, exact geography, mission objective or final map layout. Do not infer story from these generic assets or their placements. The two-mission direction describes Black Tide as action/investigation and Last Shift as survival-horror, but neither is implemented; this packet is reusable art, not assignment to either mission.

## Use and player readability

Use a compact exterior courtyard meeting a library/study threshold to test whether players can quickly read the entrance, open circulation route, optional exploration pocket and usable edge cover. Props may imply ordinary campus life and neglect; they do not imply clues, searchable containers, pickups or interactions. Keep a visually quiet movement lane, clear approach directions, and distinct silhouettes for actors, enemies, props, supplies and objective cues. Placement variety should come from relevant small groups and gaps, not rows or procedural scatter.

The source-art catalog contains four cohesive families of nine assets each: `study` (books, personal study objects and devices), `courtyard` (seating, bicycle parking and campus amenities), `grounds` (greenery, plant beds and surface wear), and `academic` (library/teaching/research furnishings). The import JSON is the exact item list and metadata source.

## Reuse and scope boundaries

Reuse verified existing desk, chair, locker, paper and bookshelf assets where they fit the study-space dressing; for example, the Service Court interior bank includes `environment.service_court.interior.desk_terminal`, `office_chair`, `locker_bank`, `folder_papers` and `archive_bookshelf`. Reuse suitable existing paving/material tiles and the established environment authoring/export and Tiled collection workflows. Record reused IDs and source provenance in the placement study. Do not regenerate generic desk/chair/locker/paper/bookshelf substitutes in this packet. The new campus plates focus on the four campus-specific families above.

Future disruption-state variants (such as tipped bins, scattered books or damaged furnishings) remain a wishlist for a later, explicitly scoped art increment. They are not delivered by this packet and are not accidental missing acceptance gates. Do not add them now or imply that static asset alternatives establish destruction behavior, plot, gore or combat feedback.

## Scale, metadata and placement

The imported native sizes are calibrated against the current Survivor study: 48-pixel opaque character height at one world unit per native pixel. Preserve each imported canvas/pivot from the canonical JSON; do not rescale to a common cell. Inspect assets alongside the character at native pixels and gameplay camera scale, particularly the larger benches, bicycle racks and whiteboard. Alpha bounds may be smaller than the canvas; keep the intended anchor/contact alignment.

Follow [ASSETS.md](../ASSETS.md), [the tile library handoff](ENVIRONMENT_TILE_LIBRARY_2026-10-11.md), [the small dressing handoff](SMALL_ENVIRONMENT_DRESSING_2026-11-03.md), and the existing [Service Court interior metadata](../../art/environment/service_court_freight_v1/interior_details_v1/metadata.json). Preserve authored source plates, prompts/provenance and hashes. Use existing native PNG, alpha and nearest-neighbor conventions. The import JSON's stable IDs, native size, pivot, support, contact and collision fields are the canonical catalog; do not create a parallel metadata description.

Prepare an editable Tiled placement study using the authored content placement input and the new prop collection. Keep its map/tileset outputs under `build/` as review artifacts, not source-of-truth product content. Show the library approach, courtyard circulation, a quiet study pocket and actor-scale combat readability. Mark placement as illustrative; do not alter any existing map or declare a canonical route. Any visual collection placement uses the existing Ground-pass visual-object path and explicit pivots/native dimensions.

Art metadata and image bounds do not create gameplay collision. Decorative props remain nonblocking. Any blocker proposal belongs to a separately reviewed gameplay/collision authoring decision, aligned to visible ground contact. Do not modify existing gameplay collision, objectives, loot, encounters, runtime consumers or map defaults in this packet.

## Acceptance and next step

This handoff is a **scoped source-art asset library and editable placement study**. Review actual source plates, native PNG exports, import metadata, and an editable Tiled preview at native and gameplay scale. Check route/threshold clearance, actor overlap, value contrast on paving, prop-versus-pickup/objective distinction, coherent family style and the useful reuse of existing furnishings. A source plate or successful export alone is insufficient; report visual gaps honestly. This is not a finished mission map or runtime slice, and no build/gameplay test is requested for this brief.

A later playable increment still needs an approved mission/map direction, an authored route with a player decision and observable consequence, and human route/combat playtest criteria. Only then should an owner integrate placements into a real mission map through the accepted Tiled/resource path.

## Source basis

- [Two-mission direction](TWO_MISSION_DIRECTION_2026-11-03.md) preserves the unapproved mission/story boundary.
- [Small environment dressing](SMALL_ENVIRONMENT_DRESSING_2026-11-03.md) documents purposeful clusters, existing Tiled visual-object handling and separate map readability acceptance.
- [World loot and scarcity design](WORLD_LOOT_AND_SCARCITY_DESIGN_2026-11-03.md) distinguishes visible decoration from implemented interaction.
- [Asset contract](../ASSETS.md) and [environment study index](../../art/environment/README.md) describe authored source, metadata and resource conventions.
