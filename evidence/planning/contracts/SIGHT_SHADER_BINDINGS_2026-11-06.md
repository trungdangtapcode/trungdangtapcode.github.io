# Shader-lifetime bindings: bounded shared-rendering increment

## Scope, ownership and acceptance

Task: BL-114. Root personally implements the C++ change; an independent read-only reviewer
checks name/field correspondence and submission ordering. Deliverable: runtime slice, pending
the validation evidence below. This is the first bounded optimization candidate from the
[Godot study](GODOT_2D_RENDERING_STUDY_2026-11-04.md), not the complete typed-pass migration.

File scope: `SightScene.h/.cpp`, `SightComposite.cpp`, new `SightShaderBindings.h/.cpp`, and
their existing CMake target source list. No gameplay/asset/schema changes are required.

Acceptance:

1. Resolve all 31 application-controlled uniform locations once per linked shader. Raylib
   retains ownership of its standard `texture0` binding.
2. Fail at scene construction if a required location is unavailable; preserve the existing
   resource cleanup and include the missing name in the error.
3. Keep every shader value, texture binding, batch flush and draw order unchanged.
4. Pass the stable integrated Release gate and the existing native visibility checks.
5. Compare 25 native PNGs against the prior small-map, Service Court and workshop evidence
   with the same frozen assets and fixtures. Verify masks/uploads and exact capture coverage.

## Implementation contract

`SightScene` owns a `SightShaderBindings` table next to its `Shader`. Constructing the table
queries and validates the linked shader. Destroying/recreating the scene replaces both;
locations are not a global cache and cannot be shared across different shader programs.

Composition reads the stored integer locations. The former five independently stored
locations are folded into the same table so there is one source of binding ownership.
The table caches locations only: values, sampler lifetime and Raylib batch boundaries still
follow the existing draw sequence. In particular, `surface()` still flushes pending geometry
before changing its per-surface state.

The constructor's existing allocation-failure cleanup now also handles a binding-validation
exception. This does not replace all GPU resources with a new lifetime framework. The proposed
complete surface/pass description and lifecycle migration remain separate work.

## Why this is not a tuning setting

A uniform's name and type belong to the C++/GLSL contract. They are not a map/gameplay knob.
Radius, cone and brightness still come from their current typed/configured owners. Introducing
a JSON option to look up uniforms on every draw would add a redundant alternate implementation.

The code change removes repeated driver name queries, but there is no measured FPS claim.
Actual frame time may be dominated by sampling, pixel cost, uploads or other work. Native
image equivalence proves a bounded output property, not performance or the absence of every
lighting defect. BL-093 remains open.

## Evidence location

Generated local reports and galleries belong in `build/sight_bindings_20261106/`, outside Git.
The tracked review records actual results after completion; this design does not predeclare
them passed. The separate build journal remains BL-115 and is not published by this change.
