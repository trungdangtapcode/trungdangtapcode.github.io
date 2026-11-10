# RV-20261029-002 · Escape Gate Clearance Audit

## Snapshot and responsibility

- Date: 2026-10-29.
- Reviewer: independent bounded source reviewer.
- Implementation owner: not established by this audit. Integration owner recorded in BACKLOG: Codex Sprint 01 integration.
- Task: BL-098, dependent on BL-097; governing references are the [escape map asset brief](../contracts/ESCAPE_MAP_ASSET_BRIEF_2026-10-25.md) and [escape mission design](../contracts/ESCAPE_MISSION_DESIGN_2026-10-25.md).
- Scope: static audit of actor radii, candidate map gate geometry, loader contract, and current gate consumers. This is not a runtime slice or crowd-playtest acceptance.
- Base revision: `7034da60fab4915ffd8759d8963d4dda4eb92340`. No source or map files changed. Existing unrelated worktree changes (`AGENTS.md`, `todo.txt`) were excluded.
- Source hashes are recorded below. Review type: independent source/config/map audit.

## Result at this snapshot

**Insufficient evidence for BL-098 runtime-clearance acceptance.** The authored 56-pixel opening is geometrically wide enough for one currently configured player or Walker circle, with 20 or 21 pixels of nominal clearance per side. That calculation does not prove the route is traversable in-game: the candidate gate layers are explicitly authoring-only/unsupported by the current map loader, while gameplay and presentation currently consume a single arena gate state. No executable, movement, collision, or crowd test was run in this review.

## Findings

### F-01 · [P1] Two authored gates are not demonstrated through the runtime gate contract

- **Evidence:** [sprint_01.json](../../content/gameplay/sprint_01.json#L119) sets player `radius_units` to 8 and Walker radius to 7 at line 124. The circles therefore have diameters 16 and 14 units.
- The candidate [escape route map](../../content/maps/escape_route_v1/escape_route_v1.tmj) uses 32-pixel tiles (map properties around lines 56480–56515). Gate A's static wall segments end at x=1508 and resume at x=1564 (lines 43232–43269); Gate B uses the same x coordinates (lines 43291–43326). Each clear opening is 56 pixels. Under the current map/world unit scale, one centered player has `(56 - 16) / 2 = 20` pixels of clearance on each side; one Walker has `(56 - 14) / 2 = 21` pixels. This establishes static, single-circle geometric feasibility only.
- Each candidate dynamic barrier occupies the 56×32 region at x=1508 (Gate A y=2048, lines 55863–55869; Gate B y=448, lines 55902–55908). Both are marked `authoring_only_loader_unsupported` (A lines 55894–55896; B lines 55933–55935); their parent layer says `runtime_support=unsupported_by_current_tile_map_loader` (lines 55944–55948). Passage regions are separately annotated as authoring-only (A lines 43676–43709; B lines 44032–44065).
- **Consumer mismatch:** [TileMapLoader.cpp](../../src/content/maps/TileMapLoader.cpp#L141) requires object roles and handles collision/gameplay/lighting roles (lines 141–146, 172–217); the candidate's `geometry_role: static_world_collision` and authoring-only barrier annotations do not establish a supported runtime binding. [MapLayout.cpp](../../src/content/maps/MapLayout.cpp#L38) transfers only static obstacles and sight obstacles. [World.cpp](../../src/game/World.cpp#L341) and the existing combat, grenade, sentry, perception, and renderer consumers use one `arena.exit_position` / `gate_open()` state, rather than independently identified Gate A and Gate B instances. Relevant consumers include [Combat.cpp](../../src/game/Combat.cpp#L152), [GrenadeCombat.cpp](../../src/game/grenades/GrenadeCombat.cpp#L124), [WorldSentryControl.cpp](../../src/game/deployables/WorldSentryControl.cpp#L66), [WorldPerception.cpp](../../src/game/perception/WorldPerception.cpp#L25), and [WorldRenderer.cpp](../../src/presentation/render/WorldRenderer.cpp#L328).
- **Expected / current evidence:** BL-098 requires the open route to be clear of immutable wall collision and passable. The authored candidate geometry leaves a 56-pixel static opening, but the current source audit does not show a supported map-to-runtime binding for two gates or movement/collision evidence that uses it. This is an integration/evidence gap, not proof that a particular actor currently gets stuck.
- **Impact:** The opening is plausible for individual actors at configured radii, but the route cannot be accepted from geometry alone. Narrow passages may also become bottlenecks with multiple actors; the 56-pixel measurement does not quantify throughput, blocking, path choice, or recovery from body overlap.
- **Scoped correction and acceptance:** Continue through BL-097's existing integration owner. Bind stable IDs and per-gate dynamic footprints through the existing map/mission contract; keep dynamic barriers separate from immutable static collision. Migrate movement/collision, path/navigation, projectile collision, sight/LOS, and rendering against one authoritative gate snapshot, including both independently configured instances. Preserve legacy callers through the documented migration rather than adding a second World or renderer. Demonstrate both gates closed and open in the same session; test a player and Walker passing at configured radii and maximum player speed, including the first tick the gate becomes passable, and prove no static wall remains across the open path. Verify projectile and sight behavior follows the same state. Crowd throughput and player route choice remain separate evidence required for broader map/playtest acceptance.
- **Backlog/owner:** BL-097 and BL-098; integration owner remains Codex Sprint 01 integration as recorded in BACKLOG. This report does not change task status or ownership.

## Validation

| Check performed | Result | Limits |
| --- | --- | --- |
| Read-only inspection of gameplay radii, TMJ gate/wall objects, loader, and listed runtime consumers | Completed | Establishes source/config geometry and contract mismatch; does not execute them. |
| Circle-to-aperture clearance calculation | Player: 20 px/side; Walker: 21 px/side | Assumes map pixel coordinates and configured radius share the current world-unit scale; single centered circle, no tolerance or crowd model. |
| Native gate PNG metadata/provenance inspection | `gate.png` is 288×96; the brief selects three 96×96 presentation states | Art frames are not collision metadata. The image does not define gate footprints. |
| Build, `check_project.ps1`, runtime movement, gate transition, collision, LOS, or crowd scenario | Not run | Explicitly outside this bounded audit. No gameplay acceptance is implied. |

## Snapshot evidence

| File | SHA-256 |
| --- | --- |
| `planning/BACKLOG.md` | `ED0340CE02074D180047017E28F46840F34A9064FD172134CD332CA533EB7BED` |
| `content/gameplay/sprint_01.json` | `2B29FD6DAE2F4C016AE0656A0A4FA5A5573A9CF5B8A35C1334B0E3FA502B9BFE` |
| `content/maps/escape_route_v1/escape_route_v1.tmj` | `2E0A8E2DF08444D2C6680BFA67CEFDF056B855FF36DC8C447F6DF551F8A3ADC8` |
| `art/environment/objectives/sprint_01/gate.png` | `C4C00AE9E614ECC5FD71C45235537924131EC655BE9EBD4394AF4B0B4E9EC980` |
| `planning/contracts/ESCAPE_MAP_ASSET_BRIEF_2026-10-25.md` | `3BEE7300FA60C66A9F73F319E0C821B3A945F076405C4FAF9A3219E84C90A5C8` |
| `planning/contracts/ESCAPE_MISSION_DESIGN_2026-10-25.md` | `AA66106EEC4FE7DD0DF5D7BFFE26EDAAFDE1A2516D115E94F4ADBA48309E978C` |
| `src/content/maps/TileMapLoader.cpp` | `21C6EF5539B78B387E81C43D81662C050B2BD1A1F6BD054DDD77658AACA66348` |
| `src/content/maps/MapLayout.cpp` | `35F6CA84BE6D614AAAC9558CD9C020A99CB4BEC7C27B17A027770AC220A0AB15` |
| `src/game/World.cpp` | `791F26D15575014BDECC875D98539D842383FC3944369528E3886685CAECC2DD` |
| `src/game/Combat.cpp` | `5C66533455CA871698B16841A7344CBDE376084CF2FA3BDA312EC90AFD55EED1` |
| `src/game/grenades/GrenadeCombat.cpp` | `58C4C87E5B1F707130775A45E4350879E3B8E91FB2222D59516B4B674A2CDECD` |
| `src/game/deployables/WorldSentryControl.cpp` | `FAE2100350F6FC230CD30A8FD3C8A1534972C6CF1C84BC49C9A0362AE04DBC58` |
| `src/game/perception/WorldPerception.cpp` | `A8FD7C943D0ECEDD9BE3B61E965B51F3E347E8817A846A3ADE7D5833B185D4FF` |
| `src/presentation/render/WorldRenderer.cpp` | `3C37F4F0016A98B5696C98594075A74317D197CFA6310E7B680C5239B4E7FE49` |

## Handoff

BL-098 remains insufficiently evidenced for runtime clearance. The integration owner should provide a stable matching map/config/source candidate, demonstrate both gate instances through the shared authoritative state in movement, projectile, sight, and presentation consumers, and attach the local project check report required for runtime/content handoff. Re-review those exact artifacts; evaluate crowd flow separately rather than inferring it from this single-actor calculation.
