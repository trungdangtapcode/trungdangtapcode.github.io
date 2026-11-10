# World loot runtime candidate

Run `candidate/play.cmd` from Explorer. The launcher selects the loot profile and the existing
continuous escape map. Launching a historical executable or launching the exe without these
arguments does not select this profile.

## Controls

- Enter: start the mission after preparation.
- E: pick up the focused loose supply; hold E to search a closed case; E reopens a searched case.
- F: cycle eligible overlapping nearby sources.
- Tab: open/close the personal case. Battle continues while the case is open.
- Select an item in the source pane, then Take or Take All. Wheel over the item details changes
  the requested amount. Q cycles source items.
- Select a carried item, then Store to leave it in the open local case. Store moves that item or
  stack; it does not create a remote stash. Split a carried stack first to store only part.
- J: drop the selected carried item or stack. U: unload the selected firearm into available case
  capacity. Rejected actions retain the original item and rounds.
- Existing drag, rotate, split, equip and shop controls remain in the personal case.

## Profile

Start with a loaded rifle (32), loaded pistol (12), knife, 64 reserve rifle rounds, 12 reserve
pistol rounds and two grenades. Eleven finite sources occupy the entrance, workshop, security,
motor, post-gate route, freight yard and coast. The workshop has another rifle instance; the
security supply case contains a discoverable shotgun. Shops have finite purchase counts.

Source contents, search duration and interaction/drop settings are authored in
`content/gameplay/loot/service_court.json`; source positions are named Tiled objects. Starter
ownership and shop stock have separate JSON files in the same authoring directory.

## Evidence scope

The native fixture exercises the real renderer and authoritative commands in an active
encounter. Its PNGs show the entrance pack, closed/open/empty supply case, transfers, dropped
rifle recovery and unloading. It does not simulate mouse clicking through the controller.
The technical report and final review record which other checks were actually completed.

Checkpoint retry restores a complete in-memory snapshot, including carried/world supplies,
credits and stock. Closing the application does not save a campaign. Disk persistence, corpse
or destructible-crate spills, elevated shelf support anchors, story items and human scarcity
balance remain separate work. This candidate does not implement the proposed 40-minute story.
