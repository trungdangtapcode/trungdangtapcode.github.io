# RV-20261024-005 · Dynamic camera, aimed firearms and equipped knife

## Snapshot, ownership and scope

Date: 2026-10-24, Asia/Saigon. BL-089 is a local runtime slice. Implementation and shared
integration owner: Codex Sprint 01 integration, with the bounded contributors recorded in
[the contract](../contracts/DEV_CAMERA_AIM_KNIFE_2026-10-24.md). This is an author runtime
self-review, following independent [source review003](2026-10-24-003-camera-aim-source.md)
and [source follow-up004](2026-10-24-004-camera-aim-source-followup.md). Independent human
camera-feel and knife-art reviewers remain Unassigned. Source revision: `0487560`
(runtime implementation42585f8 plus native-driver corrections).

Scope includes camera configuration/motion/projection, input and native rendering, authoritative
aim accuracy/sight, inventory-owned melee admission and existing-hand blade composition.
Parent inventory, character and Sprint acceptance, LAN, performance guarantees and human
encounter balance are excluded. Reviewed boundaries include RendererCamera, WorldCamera,
RendererWeapons, AssetAttachments, MeleeCombat, inventory/loadout consumers, aim/perception
loaders, the melee exporter and native input/art probes. This is not a whole-repository audit.

## Behavior and source review

The spring advances once before input. Pointer projection and drawing use the same resulting
camera snapshot; camera lookahead samples the previous submitted view, resolving source003's
synthetic-camera finding. Normal target weights are actor0.9/pointer0.1, aim0.3/pointer0.7,
before configured dead zone, offset, actor-screen-margin and map bounds. Zoom has separate
velocity, limits and wheel response. UI remains in its own viewport. Actor/session replacement
reinitializes framing while preserving the user's manual zoom. World spawn exclusions account
for the actual zoomed view and its near movement forecast.

Accepted firearm aim modifies base spread and observer range in simulation; shot bloom, map
attenuation/caps, traits and LOS remain active. Modal, reload, sprint, throw, equip and death
transitions clear aim. Knife is a real owned item in the existing quick-slot list, with
per-definition contact phases, reach, damage and impulse. LMB only requests melee while that
item is selected; contact checks the same owned/equipped identity. No dummy firearm or
always-available rifle melee remains in this slice.

The authored knife uses grip/tip geometry, not firearm muzzle/ejection fields. Production
composition is shared with the native art probe. Existing full-body character pixels are
retained: 66 direct sockets and 14 registered forearm/palm overlays cover 80 Idle/Walk/Melee/Hurt
poses. The source bank, atlas, body rect pixels and reused attachment planes are hash-checked
at export. Root inspected the four preflight production sheets and encounter frames: the
blade is visible across directions, without an obvious duplicated support arm. The retained
melee body motion is a thrust/punch-like choreography, not newly authored knife animation.
Human motion/overlap approval is still required before multiplying melee content.

No new confirmed runtime defect remains in the scenarios recorded below. This does not assert
that all camera transitions, character poses or combat situations are defect-free.

## Historical failures and compatibility

Preserved early preflight logs contain stale-object ABI crashes after core layout changes.
A complete rebuild of the test target resolved them; the clean run passed396 tests and
2,366,862 assertions. Native harness failures exposed numeric item-ID type comparison,
insufficient spring settling time and a mixed DPI context; those harness defects were fixed
before native acceptance. No combat tuning or stress threshold was reduced for these checks.

Final-package driver checks also exposed an equipment key sent during knife recovery and a
double-versus-float32 limit comparison at session restart (`2.2` versus `2.200000047683716`).
The driver now waits for committed recovery before changing equipment and compares limits
using the same float32 representation as runtime settings. Game recovery, limits and tuning
were retained. Failed captures remain in `native_failed_recovery` and
`native_failed_float_boundary` under `build/camera_aim`.

The first integrated technical entry failed canonical stress at load: validation demanded
the new blade catalog from its historical scene-only presentation. The failed report remains
at `build/camera_aim/project_checks_failed_legacy.json`, with logs under
`build/validation/project_runs/d652c9807e4549b6a52e24400719ee5d`.
`RendererWeapons.cpp:25` now validates the owned catalog when a presentation exposes inventory
or melee. Scene-only legacy presentations retain their existing capability; explicitly
selecting an unsupported blade still throws. The modern encounter retains strict missing
binding errors. Canonical stress population, timing and positive combat requirements remain
unchanged. A diagnostic run pairing modern Walker art with historical anatomy correctly
rejected that incompatible combination; it was not adopted as a fallback.

Independent source reviewer `/root/camera_aim_review` re-read this compatibility guard and
its callers after42585f8: no concrete issue found. Firearm validation still runs first,
modern inventory/melee-capable manifests stay strict, and the stress driver's initial and
fallback selections remain firearm-only. This follow-up was read-only; it supplied no
runtime/build evidence and does not independently accept this candidate's visuals.

This legacy consumer remains owned by integration under BL-089/D-087. Retirement trigger:
intentional migration of the complete canonical stress art/anatomy/scale bundle, followed by
the unchanged stress criteria. New melee/character content must use the current registered
pipeline. The nearest extension is another camera profile and another melee definition
through the same loaders, equipment path and grip/tip transform, rather than a copied animator.

## Final validation and scoped verdict

Release `check_project.ps1 -Smoke -ReportPath build/camera_aim/project_checks.json` passes
all six steps on1,477 unchanged source inputs. The final run is
`build/validation/project_runs/f779e25a0a7c4b9a8184d4358797c4f8`. Its396 tests pass
2,366,862 assertions. Source structure reports423 files, zero blocking findings and14 review
notices; D-087 records the scoped ownership/size decisions. Canonical stress passes240 ticks,
peak100 alive,59 shots,28 deaths and one blast. These are local technical results, not a
performance benchmark or evidence of fun.

The packaged native driver passes22 named snapshots, including real pointer/reticle projection,
motion/aim responses, both zoom limits, owned knife selection/contact, firearm RMB without
ammo consumption, modal wheel isolation and F2 restart. Effective sight changes204->275.4
and standing base half-angle0.60->0.27 degrees while aiming. Evidence:
`build/camera_aim/native/result.json`, corresponding JSON/PNG captures and `native_run.log`.
Executable SHA256: `30CDA23B1E8DF3A737A950C466A62A24F15774AAFA6C26642F847A52FFC40F3B`.
The author inspected the actual final aim and melee-contact encounter screenshots.

The production resource probe run against the candidate assets captures80 poses/14 registered
hand overlays. Root inspected all four final4x sheets (Idle, Walk, Melee, Hurt); their1x versions
are included under `build/camera_aim/art`. The probe result intentionally says `captured`, not
automatic visual approval. This is a socket/composition inspection, not a claim of newly
authored knife choreography or final character quality.

Selected encounter smoke with the existing `content/scenarios/sight_encounter_smoke.json`
setup/exit route passes at tick9,657, peak106 alive,669 shots,466 deaths and60HP. It has no
required explosion criterion; canonical stress separately requires its blast. The first
invocation omitted that authored exit route, killed488 enemies and timed out against a
straight-line obstacle. Its log remains `encounter_smoke_without_route.log`; no gameplay or
criteria were changed to get the routed run to pass. Matching scenario log:
`build/camera_aim/encounter_smoke.log`.

The final integrated technical entry passes after the native driver corrections, with zero
changed inputs. The rebuilt executable matches the SHA256 recorded above. Candidate runtime
resources and the final package manifest are recorded in `build/camera_aim/receipt.json`.
After packaging again against the final passed report, all3,135 files were hashed against
the validated bundle. Sixteen regenerated OpenRaster authoring archives differ; every other
file, including executable, runtime PNG/JSON, Tiled map, shader, font, audio and licenses,
matches. These archives are not loaded by the runtime. `bundle_changes.json` records the
archive-only differences; no redundant game run was used in place of this byte comparison.
Independent physical-monitor DPI, resize/shake playback, human camera feel and knife-motion
approval, LAN and performance remain unverified here. Unit tests cover resize/map bounds,
small worlds and shake math; native captures do not replace those missing human checks.

**Scoped verdict: receive the local implementation on technical checks and author composition
inspection; insufficient evidence for independent human camera/knife quality and parent gates.**
Play `build/camera_aim/candidate/play.cmd`, which selects the matching lighting-map/gameplay/
inventory-presentation profile. Direct executable startup uses its default profile instead.
Reproduce with `check_project.ps1 -Configuration Release -Smoke`, the tracked camera native
driver, `grenade_runtime_probe.exe <candidate/assets/demo> --melee-art-review <output>`, and
the selected encounter invocation with `--smoke-setup content/scenarios/sight_encounter_smoke.json`.
Task status and remaining ownership stay only in BACKLOG. No full Sprint acceptance follows.
