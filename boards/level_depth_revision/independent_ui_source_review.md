# RV-20261103-004 — Independent UI source review

## Scope and snapshot

Read-only review of menu typography/resources, schema 3 and renderer layout, and the three
inventory text-placement changes in `683aa69`. Reviewer: `menu_visual_design`; implementation
owner: root integration. Reviewed source snapshot: `3e92c278e2854183360daefcd63f63581e2e0fd4`.
The relevant menu and renderer files have no source changes after `683aa69` in this snapshot.

Files read: `src/presentation/resources/AssetText.cpp`, `src/presentation/menu/MenuRenderer.cpp`,
`src/content/application/MenuDefinition.cpp`, `content/app/menu.json`, and
`src/presentation/inventory/{CaseRenderer,LootPanelRenderer,ShopRenderer}.cpp`.

## Findings

No concrete source regressions found in the assigned scope.

- Menu font files and logical sizes are data-driven from `content/app/menu.json`. The renderer
  registers the regular and semibold sets once and uses the corresponding set for measure and
  draw. `AssetResources::set_text_viewport` unloads and reloads the primary and additional sets
  when the native raster scale changes; the additional set indices remain stable across reloads.
- The configured controls list is bounded to 15 rows. At the configured 13 px label size plus
  1 px gap, those rows fit within the expanded info panel. Layout bounds are checked against the
  presentation canvas; dynamic button bounds reject overflow into the footer.
- The `683aa69` quantity-label inset in `CaseRenderer.cpp` and `LootPanelRenderer.cpp` keeps counts
  clear of cell borders, and `ShopRenderer.cpp` vertically centers offer labels in their rows.
  Selected-item details no longer expose the internal item ID.

## Visual context and validation limits

Inspected capped preview of `build/level_depth_revision/native/menu_main.png` (1280×768 JPEG)
and the 154,478-byte `build/level_depth_revision/loot_input/native/input_take_all.png` PNG.
The menu hierarchy and button labels are legible in the former; the latter shows the loot action
row and quantity/details text. Both captures predate the three placement changes and are context
only, not acceptance evidence for the final visual state. Native DPI resize behavior and the
post-polish screenshots were not independently exercised here. No build or validation command was
run; root owns the integrated `check_project` verification.
