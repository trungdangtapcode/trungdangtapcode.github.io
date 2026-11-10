# Grenade artwork return · 2026-10-13

Returns section5 of [GRENADE_THROW_DESIGN](GRENADE_THROW_DESIGN.md), under BL-055.
Deliverable: **native art/content integration candidate**, not implemented grenade gameplay
or independent production-art acceptance. BL-029 Codex asset preparation retains inventory;
Codex Sprint01 integration retains the shared runtime/input/combat/schema/resource writer.
In-thread design owns this bounded artwork/export return. Art/playtest reviewers: Unassigned.

## Exact files to receive

| Need | Artifact / coverage | Reuse and limits |
| --- | --- | --- |
| Hold, pin pull, windup, release, follow-through, recovery | `art/characters/squad/survivor/grenade_v1/`; selected upper sources documented in `generation.json` | Same Survivor identity; no rifle or grenade painted into body |
| Four directions and moving legs | `build/grenade_design_review/native/survivor_grenade.png`,576×3584 |168 complete body frames:4 directions×6 action poses×(standing+6 Walk phases); runtime full-body, not player limb animation |
| Hand release / layering | `content/art/authoring/grenade_v1/feedback_packet.json` |28 release sockets across standing/moving;70 authored palm foreground masks; held item is a separate asset |
| Grenade, shadow and prediction markers | Reused `art/deployables/grenade/grenade.png`; new `art/fx/grenade/throw_v1/markers_source.png` | Six native32×32 cells: shadow, trajectory dot, first-contact diamond, bounce chevrons, explosion-point burst, fuse icon |
| Fuse UI / danger | Existing pixel skin/font and red ring from `art/ui/sprint_01/world_cues.png` | Real textured bar clipping, numeric remaining time, distinct shapes; thresholds from audio_mapping warning owner |
| Pin, throw, impact | `art/audio/grenade_foley/`, six unmodified licensed OGGs | Kenney RPG/Impact CC0; pin click, cloth windup, throw whoosh, two hard contacts and soft contact; existing blast/warning reused |

Primary metadata: [feedback_packet.json](../../content/art/authoring/grenade_v1/feedback_packet.json).
It is an **authoring packet**, not a runtime CharacterPresentation manifest accepted unchanged
by today's loader. Palette/crops/imports/bake/audio mapping are together under that directory.
Source and exact GPT prompts: [generation.json](../../art/characters/squad/survivor/grenade_v1/generation.json).
Native/source/tool/report hashes and original project run logs accompany
`build/grenade_design_review/revision.json`; outputs are rebuildable, never source of truth.

## Selection and exporter method

The old throw sheet had four directions but lacked explicit hold/prime and open-hand release
coverage. New GPT sources supply24 selected upper poses. Whole moving GPT banks and targeted
repairs did not keep handedness/gait consistently; they are retained as **unselected studies**.
The user explicitly answered **Cho phép bake với chân Walk gốc**. The final producer combines
selected upper poses with the existing six-phase whole-body Walk lower source. One standing
leg basis per direction prevents stationary foot movement. Authored sleeve/skin pixels below
the waist and tiny grip foreground pixels are selected from the source, never redrawn.

Existing RasterFrameExport provides crop detection, nearest/palette/alpha registration and
CopyPixels. The narrow registered-bank adapter supports different column/row counts required
by targeted full-body repairs; it is not a new loader or automatic atlas packer. The bake
adapter selects authored pixels into complete frames. Original moving-bank art is not hidden
inside this production candidate. There is exactly one final-atlas producer:
`full_body_bake.json` through `tools/assets/bake_full_body_actions.ps1`.

## Dev integration contract

- Canvas96×64, pivot48,56; coordinates are local pixels, x-right/y-down. Base plane starts
  at y0, palm foreground plane at y1792. Each direction owns seven rows: standing, then
  six Walk phases; columns hold/prime/windup/release/follow-through/recovery. Explicit frame
  rects and optional foreground rects are in the packet; do not infer runtime IDs from grid.
- Choose action from simulation hand phase and feet from the existing Walk clock independently.
  Switching Hold/Prime/Throw/Recovery must not restart feet. Blocked/standing movement selects
  standing rows. Baked frames preserve the nearest extension, moving Prime/Throw/Recovery,
  through the same source Walk clock/pixels. Forward gait is authored; strafe/backpedal quality
  has not been accepted. Calibrate movement/stance in the real encounter.
- Hide rifle while grenade action owns hands. For visible held poses: body→separate grenade→
  authored palm foreground. North Hold/Prime place the item behind the body; occlusion is
  intentional. Release has no attached item/foreground and a visible accepted hand socket.
  Grenade grip4,3 and scale0.55 are presentation values, not a hardcoded weapon in the body.
- Prime cue reads PrimeCommit; windup reads ThrowBegin; release reads authoritative Release;
  recovery uses the authoritative interval. The brief owns gameplay0.12/0.18s proposals.
  Cosmetic selection never commits inventory, starts/reset fuse, spawns or causes damage.
- Register launch/drop to the packet hand socket using actual actor scale, launch height and
  shared height projection. Ground xy plus projected height must land on that hand. Dev owns
  the typed gameplay anchor; the server must not sample texture pixels or call Raylib.
  Do not use rifle muzzle or cursor position as launch origin. Same-tick fuse expiry wins.
- Markers consume the actual readonly shared predictor: cyan first ground contact differs
  from amber later contacts and orange fuse/explosion point. Shadow stays at ground xy;
  projectile sprite projects height. Airburst warning/footprint uses actual height/radius.
  Do not turn this playback into a second integrator or derive collision from alpha.
- Map audio to typed action/contact identities through the existing cache/mixer. Prime and
  release are once per action; impact is once per resolved contact, never per draw frame.
  Foley gain/material matching and countdown warning need encounter review. Physical fuse
  hiss was not requested/delivered; existing UI warning is identified as a UI cue.
- Append/migrate these actions and attachment/marker/audio bindings through the current
  full-body loader/schema/cache and packaged profiles. Update contract versions/consumers
  together, validate missing required assets, and retain the one integration writer.

## Playback, actual checks and receipt

[Interactive native playback / layer and audio review](../../build/grenade_design_review/index.html)
has four directions, pose stepping, independent gait, release matrix, fuse-skin demonstration
and actual audio controls. It is explicitly **authoring playback**, not a playable grenade
simulation or proof of runtime collision/prediction. HTML is generated from canonical metadata
by `tools/assets/export_grenade_review.ps1`; the temporary inspector retires when existing
asset_preview and the encounter can consume the migrated grenade actions/attachments.

Reproduce source/native export using [authoring README](../../content/art/authoring/grenade_v1/README.md).
Then run:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File tools/validation/check_grenade_art.ps1
powershell -NoProfile -ExecutionPolicy Bypass -File tools/assets/export_grenade_review.ps1
```

Actual native receipt:168 body frames /1,032,192 body samples,339,192 exact original Walk lower
samples outside foreground regions,98 visible hand sockets,28 release sockets,70 original
palm foregrounds,6 marker cells /6144 samples. Palette/binary-alpha/canvas/source-copy checks
pass. Raylib LoadWave decoded all six OGGs; this is not human audition. Project report/logs
and closed revision are attached at closure; only their stable final run supports technical
receipt, not earlier changed-source diagnostics.

Final Release report passed on **856 unchanged source inputs**, 2026-10-13
09:49:39–09:54:55 Asia/Saigon. All five steps passed;151 tests /2,025,608 assertions;
source structure169 files, zero blocking/review notices. Report is `project_checks.json`;
copied logs are `build/grenade_design_review/logs/`, with original run path in revision.json.
The earlier unstable report changed only while adding this return's three persistent tools;
it is archived as `project_checks_changed_tools.json` and is not acceptance evidence.

## Remaining acceptance and retirement

Dev can integrate the actual native files/metadata now. This design return does not change
input, state, physics, cooking, damage, loader enums or regular default/profile. Receive the
native art scope separately from the BL-055 encounter gate. Integration must capture standing/
moving throws in four directions at real scale, projection/hand detachment, quick tap, cooking,
drop/expiry, moving turn, wall/ground contacts and retry; include30/60/144FPS frame skipping.
Review skin/identity, waist/sleeve joins, gait/stance and readability among blood and zombies.
Play the existing two human rounds and adjust launch/recovery/contact/audio feel on that build.

Any awkward waist/hand/gait or unreadable marker observed in encounter returns to this recipe/
source selection; do not manufacture primitive art or multiply grenade variants past the gate.
The integration owner attaches matching executable/bundle/hash and a fresh stable check_project
report after migration. BL-055 remains unreceived for runtime/visual/human quality; current
task status and temporary consumers/retirement are only in BACKLOG.
