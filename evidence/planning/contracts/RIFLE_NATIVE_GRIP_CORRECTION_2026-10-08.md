# Rifle native grip correction

User reports the held rifle is too high and embedded in the character after the layer slice.
Deliverable: metadata-only runtime correction, BL-052, Codex Sprint 01 integration. Preserve
character ownership, both prior packages, disjoint body/foreground and per-pose attachments.

Inspect the actual36×14 native rifle, not only the complete character. Old canonical grip(14,9)
lies beside the magazine/receiver, away from the authored pistol grip. Calibrate the canonical
weapon contact at the upper pistol grip, compare cached-resource renders before selecting it.
This should move the stock out of the torso and lower the visible receiver relative to the
same painted palm, without arbitrary per-character translation or another transform.

Selected native contact: (10,8), the upper pistol-grip/trigger-hand contact on the actual PNG.
With identical character grips and120-unit target, East stock moves(+3.826,+1.5231) units and
West stock moves(-3.820,+1.5379); the hand anchor does not move. Diagnostic native texture and
before/after renders live under the output directory. Treat remaining arm/angle fit separately.

Scope: `content/weapons/rifle_geometry.json`; update the active art request's construction
reference after choosing the native point. Other weapon geometry, character coordinates, PNGs,
timing, flip policy and source defaults remain under existing ownership. No new schema/renderer.
Nearest extension: the same geometry drives normal and olive rifles plus sentry, draw/muzzle/
ejection and accepted shot snapshots. Inspect those consumers, not only one standing East pose.

Acceptance: source-native contact is on the pistol-grip artwork; before/after eight-bearing and
5-degree stationary/moving captures show the intended spacing without breaking reflection or
muzzle rays. Fresh stable Release check_project, matching package and both encounter smokes.
Record exact source/bundle hashes. Fixed support-hand art can still fail at intermediate angles;
retain that gate and concrete layer request rather than passing the full held-weapon character.

Output: `build/survivor_weapon_spacing/candidate/`, comparison and a new dated review.
