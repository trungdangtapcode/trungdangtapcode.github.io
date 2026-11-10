# RV-20261102-008: Court surfaces, wall joins and cargo projection

## Scope and ownership

Runtime content slice following [review 007](2026-11-02-007-indoor-candidate-handoff.md).
Root/Codex integration owns the canonical TMJ, tileset reference and package. Cargo-front art
owns `art/environment/service_court_cargo_v2`, committed as `41c211c`. A separate read-only
agent audits gameplay invariants and straight-wall raster coverage. Root performs the visual
self-review; independent human art acceptance remains open.

## Findings and correction

1. **Angled cargo contradicted the frontal gameplay projection.** The existing
   `content/maps/escape_route_v1/service_cargo.tsj` now resolves its stable cargo ID to v2.
   GPT Image authored a frontal container with horizontal rails, vertical ends and a shallow
   roof band, without a visible diagonal end face. The native canvas remains 256 x 128 with
   bottom-center pivot (128,128). Source/prompt/alpha/export provenance lives beside the PNG.
   Seven existing placements consume the correction through the same Tiled/resource path.
   The old source/native assets remain intact.
2. **Canvas-width placement left actual transparent gaps between wall modules.**
   `art/environment/escape_industrial_v1/join_geometry.json` records measured main-face
   intervals and ordered material-pair pitches. Seven solid wall runs in the canonical TMJ
   overlap their authored end posts at native scale. Gate openings, blockers and existing
   object IDs stay in place; added infill receives new IDs. This is authoring geometry, not
   per-frame generated artwork or collision tuning. Corners/shutters are outside this scoped
   straight-run acceptance.
3. **A broad concrete overlay erased the yard's material hierarchy.** Layer 2 now uses
   existing asphalt/concrete/paving transition tiles around bounded work pads and entrances.
   Layer 1's authored asphalt distribution is preserved. Concrete buffers separate paving
   from asphalt because no direct transition bank is accepted. There are no new procedural
   textures, decorative random markings or invisible decoration blockers.

## Evidence and validation

- Existing Tiled rasterizer successfully exported the changed canonical map.
- Root inspected the court overview at reduced size and lossless native-size cargo and mixed
  wall crops in `build/service_court_surface_revision/`. Overview inspection establishes
  composition only; it does not prove exact alpha or runtime depth/visibility.
- Read-only semantic comparison found no changes in the audited collision, gate, mission,
  lighting, structure/cutaway and measurement layers, except editor-only start annotation
  1014 moving to the existing runtime spawn. Ground layer 1 is unchanged; 4,496 hardstand
  cells changed. Independent native alpha audit checked 97 adjacent wall pairs and 36,126
  pixels in the join strips: zero gaps at alpha >= 128 across main-face rows 9 through 89.
  The initial audit mislabeled two consecutive brick modules as alternating materials;
  the corrected GID-based audit and executable script retain the correction explicitly.
- Fresh `check_project.ps1 -Configuration Release -Smoke` passed: 1,785 stable inputs,
  473 tests / 2,573,235 assertions, format, source structure, build, assets and standard load
  smoke. Report/logs: `build/service_court_surface_revision/project_checks.json`.
- The existing isolated native gate/interior probe ran against the new package and passed,
  producing 22 captures. It retains production movement, collision, mission, cutaway,
  light and renderer paths while disabling waves. Root inspected the workshop side exit,
  the revised cargo on the north lane and Gate A after crossing/closure. These use the
  packaged map; the renderer and probe code are unchanged from review 007.
- The normal packaged application's **direct full encounter** reached extraction:
  16,557 ticks, peak 128 living zombies, 668 shots, 177 deaths, HP 100; exit code 0.
  The alternate service full-application smoke was not repeated for this art-only change.
  Its earlier result remains historical evidence in review 007, not a new pass here.
- Bundle identity verification passed 4,997 file comparisons with no mismatches, covering
  source inputs, executable, launch profile, build resources, world and encounter. The selected
  profile is `content/app/service_court_surface_candidate.json`. Evidence is in
  `build/service_court_surface_revision/file_checks.json` and `direct_smoke.json`.
- The aggregate historical build-board refresh still fails on a missing `display_name`.
  The package files were created, then `ExportBoard.ps1 -SkipCatalog` successfully exported
  this candidate's board; the custom comparison page was retained. This is not a claim that
  the all-build catalog command passed. Board/guide/Tiled links were checked separately.

## Revision and artifacts

- Runtime/content revision: `39ef136`; cargo art: `41c211c`.
- Map SHA-256: `515FC9F856E08D3909D9AADAD3B8E8793E8816ABF186011F6A0DB839390421F8`.
- Executable SHA-256: `910A6AC61955E41AA90A5D64B494EC92A718128520C632EBE0C5905620FCB04A`.
  It matches the prior executable because the product C++ code is unchanged; the new map,
  tileset and sprite hashes identify this content correction.
- Cargo native SHA-256: `0250B0E12EB1A4DED37254B37346292DFADCDE2961413EF054F6C54138947A6B`.
- Review board: `build/service_court_surface_revision/index.html`.
- Play: `build/service_court_surface_revision/candidate/play.cmd`.
- Authored PNG, metadata, prompt/provenance and deterministic exporter:
  `art/environment/service_court_cargo_v2/`. Wall geometry:
  `art/environment/escape_industrial_v1/join_geometry.json`.

## Scoped verdict

**Scoped technical handoff: passed.** The visible projection and straight-wall gaps are
corrected in the inspected crops and sampled native scenes. Whole-map composition, indoor clutter hierarchy,
doorway approach width, physical control cues, early motor pressure, human discovery/combat
and consistent performance remain open under their existing owners. The eight-role design
plan is not fully implemented by these three corrections.
