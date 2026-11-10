# Learning the rendering architecture through Black Veil

This tutorial connects the project's C++ code to rendering and software architecture concepts.
Start here if you know basic classes and functions but want to understand why the game has
separate simulation, resource, perception and rendering modules.

**Source baseline:** `8906bf3`, 2026-11-04. Godot examples use **4.5-stable**, pinned to
`876b290332ec6f2e6d173d08162a02aa7e6ca46d`. This is a teaching reference, not a latest-version
claim. Statements marked **proposed** are not implemented by writing this tutorial.

## Reading path

| Lesson | What you will learn | Suggested exercise |
| --- | --- | --- |
| [1. Follow a frame](01_FOLLOW_A_FRAME.md) | Application lifecycle, simulation authority, resources and presentation | Trace a portable lamp from input to visible pixels |
| [2. Light, visibility and caches](02_LIGHT_VISIBILITY_AND_CACHES.md) | Coordinate spaces, invalidation, partial updates and state leakage | Explain a lamp that remains active but appears dark |
| [3. What Godot separates and optimizes](03_LEARNING_FROM_GODOT.md) | Scene API versus backend, retained commands, culling and batching | Identify which technique addresses which cost |
| [4. Debug and measure](04_DEBUG_AND_MEASURE.md) | Reference checks, false passes, profiling and a safe refactor | Inspect a report and design a missing-capture regression |

Read the lessons in order, then use their source links as a guided code tour. The diagrams
show responsibility/data flow, not a literal dependency or thread diagram.

## Vocabulary to keep nearby

| Term | Meaning in this tutorial |
| --- | --- |
| Tick | One logical simulation update; not necessarily one displayed frame |
| Frame | One rendered image, potentially after zero or multiple simulation ticks |
| Resource | Reusable loaded data, such as a texture, rig or shader |
| Render target | A texture/framebuffer into which drawing writes |
| Pass | A drawing stage with a defined target, state and purpose |
| Cache | A stored result derived from other data |
| Invalidation | Marking a stored result unusable because an input changed |
| Culling | Skipping rendering work that cannot affect the relevant output |
| Batch | Compatible draw work submitted together |
| Uniform | Shader input shared by a draw submission, such as opacity or ground height |
| Occlusion | Blocking light or visibility; its policy depends on the query |
| Frame time | Time to produce a frame; inspect its distribution, not only average FPS |

## Scope and current gaps

The game already has reusable modules. PR #1 did **not** add a universal engine that all code
now passes through. It added cache/upload diagnostics and a repair design. A typed composition
boundary remains proposed; the intermittent-light report remains open. The cache checker's
missing/duplicate-capture defect at the tutorial baseline is recorded in
[RV-004](../reviews/2026-11-04-004-rendering-pr-double-check.md). Its subsequent repair and
regressions are recorded in [RV-005](../reviews/2026-11-04-005-capture-matrix-fix-and-merge.md).

The lessons explain these limits rather than presenting the current code as a flawless model.
They add no runtime behavior, new dependency or new art. Runtime task status stays in
[BACKLOG](../BACKLOG.md); this directory is teaching material, not a second roadmap.

For the deeper implementation proposal, read the
[Godot source study](../contracts/GODOT_2D_RENDERING_STUDY_2026-11-04.md) and
[shared rendering design](../contracts/SHARED_RENDERING_RESEARCH_2026-11-04.md).
