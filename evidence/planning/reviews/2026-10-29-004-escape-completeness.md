# Escape asset completeness review

## Snapshot and responsibility

- Date: 2026-10-29, Asia/Saigon.
- Reviewer: Codex Sprint 01 integration, with a separate read-only asset inventory audit
  by Codex escape asset QA and transition reuse audit by Codex escape reuse audit.
- Scope: BL-098 source study; not a runtime candidate or independent art acceptance.
- Base: `67217cd`. Follow-up to [composition review 003](2026-10-29-003-escape-composition.md).
- Existing layout, industrial, coastal and integration owners remain assigned in BACKLOG.
- Read: native map layers, packet references, source receipts, courtyard tileset contracts
  and four phase renders. No gameplay, crowd, audio listening or native seam acceptance.

## Verdict

Needs changes. Sources exist for all four phases, but source coverage does not establish
a complete, readable escape environment. Preserve the warehouse composition improvement.
Continue bounded reuse and placement before requesting more decorative artwork.

## Findings

### F-01: Route and destination composition remain unclear

The overview and route-choice crop show broad repetitive asphalt with sparse markings.
The two intended transit lanes are not clearly communicated by scenery. The extraction crop
shows separated seawall segments and an isolated arrow sign rather than a convincing arrival
space. This can conceal the next objective despite connected route geometry.

BL-098 layout/coastal owners must first assemble existing modules into a readable route
and destination, then record connector or landmark art that actually remains missing.
Review at encounter scale with actors and the intended lighting before acceptance.

### F-02: Material boundaries need placement work before new art

The service court has a large abrupt rectangular boundary. The freight apron also used
untrimmed concrete fill at its outer edge. The existing full courtyard bank supplies
asphalt-to-concrete outer corner, straight edge, inner corner and saddle tiles (local IDs
2 through 5 in `content/maps/urban_integration/courtyard.tsj`). The smaller proof tileset
does not provide the complete bank. Try the full bank through the existing Tiled transforms;
inspect actual seams before accepting it. A JSON registration alone cannot close this finding.

### F-03: Delivered props do not close the freight and gate scenes

The roof and frontage now read as a warehouse, but the isolated forklift comparison does
not prove a loading landmark, its footprint or placement. The inspected overview lacks
readable authored gate/control visuals at the authoring markers. The layout owner is
placing existing gate and control source art through native collection tiles; collision,
state changes and gate passage remain separate BL-097 runtime gates.

### F-04: Production evidence and some deliverables remain missing

Industrial matte quality, roof/facade joins, coast joins and material repetition remain
unaccepted. Gate motor start/loop/stop and all-clear audio are not accepted deliveries.
BL-097 still needs native loader/role integration, physical gates, navigation and sight
updates through the existing runtime. No playable escape candidate or human pacing evidence
is supplied here. Keep BL-099 separate; smoke cannot substitute for its two player rounds.

## Evidence and validation limits

The following SHA-256 values identify the renders inspected before the placement follow-up:

| Render | SHA-256 |
| --- | --- |
| Overview | `c8c5300a26fd95daa521fb4efe50525084087d689c94d6581b917ab8d6de5bdb` |
| Service court | `efbea222f6625a730e9bf2e18a75d3f503ebf5b4f55d79e3adde805d51cd1f18` |
| Route choice | `d5fcd6a0f61f96fee19491fdfbab2aa40302551cc5c639aa547ebb41092c6e7d` |
| Coastal extraction | `104617bc194c2f431d8b578869e5c907a07ce59c6c3fbfd7befeec28a17047f6` |

Inspection used capped JPEG previews, at most two new images per model step. These support
composition observations only, not exact pixels, transparency or native tile seams.
The source map at that point had SHA-256
`90261ad52a9f449535c23dccd903d00a245aa22b4abdaa4b4dc54a3c6cff3220`.
Later render receipts must be treated as separate snapshots, not certified by these images.

The refreshed freight (`22fdfd15c14bcaeb99b989a45c5325a8dfe975c6edaaa9b1f6e894132e7eae3b`)
and service-court (`5fcbdfdf5e8037f5cc4b125f97c78e12212b4841383b0e9672b6260959cf0297`)
crops were also inspected as capped previews. The warehouse remains readable; both areas
still read as sparse rectangular material fields. The service crop excludes Gate A and the
freight crop clips Gate B, so these two images do not establish gate visual acceptance.
Material seam quality remains open despite the apron placement changes.

Gate detail previews subsequently show the authored open-gate sprite and separate control
at both sites. However, each white footprint marker appears south of the visible opening,
and the road stripe lies farther south. Placement is visible, but visual aperture versus
physical footprint registration needs correction or an explicit anchor explanation before
acceptance. Preserve authoritative geometry until that contract is resolved. Detail hashes:
Gate A `cc7c9a75a62208b7743d0dca2cae28a291b103de8c2ec68c2959fbb31b6b38f5`;
Gate B `699f45e2e3e466deaf2be52d0e45656fb54bb34b8fc36730db62c035d7ad6bf0`.

No C++ build, game run, performance measurement or `check_project.ps1` was run for this
source-study review. Generated review pages are reproducible with the asset packet's
`Export-Board.ps1` and `Check-Board.ps1`; their checks establish file/media integrity only.

Reviewer reran both board scripts: export and media/link checks succeeded (34 images,
three positive audio durations, 55 links). Scoped `git diff --check` passed for the owned
tracked documentation/packet changes. A repository-wide whitespace check also reported
existing trailing whitespace in the unrelated user-edited `AGENTS.md`; it was left untouched.

## Handoff

Keep current owners and statuses in BACKLOG. First place existing gate/control visuals and
reuse the apron edge bank. Then resolve route framing and coast assembly on the same editable
map, with a missing-art list derived from those renders. Do not multiply environment banks
or claim asset completion before this composition boundary is demonstrated.
