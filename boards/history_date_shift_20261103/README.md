# Existing Git history: 20-day date shift

Requested on 2026-11-03. Scope: every reachable commit on the five existing local branches,
including archive branches. Both author and committer timestamps move back exactly 1,728,000
seconds, retaining each original timezone offset. This operation does not install a hook for
future commits.

The Black Veil naming commit was completed before taking the backup. The naming decision and
all twelve proposals are in [planning/GAME_NAME_DECISION.md](../../planning/GAME_NAME_DECISION.md).

## Evidence

- [Verification result](verification.json): final status, commit/branch counts, preserved
  content/identity/parent graph, working-tree preservation and backup hash.
- [Original history bundle](before.bundle): all original branch histories.
- [Original refs and local file hashes](before.json).
- [Rewritten refs](after_refs.json) and [old-to-new commit IDs](commit-map.txt).
- [Workflow log](rewrite.log), [error log](rewrite.stderr.log) and [filter log](filter.log).
- [Uncommitted tracked diff](working_tree.patch) and `working_files/` copies of local files.

The rewrite is performed with pinned
[git-filter-repo 2.47.0](https://github.com/newren/git-filter-repo/tree/v2.47.0), in a separate
mirror. [Tool provenance](tool/provenance.json) records the upstream download paths and hashes.
The official callback and preservation options are documented in the
[upstream manual](https://github.com/newren/git-filter-repo/blob/v2.47.0/Documentation/git-filter-repo.txt).

Verification compares every rewritten commit byte-for-byte to the original after changing
only author/committer epochs and mapping parent hashes. It also verifies equal branch trees,
equal reachable commit counts, equal index contents, and unchanged local modifications.
Only then are the five branch refs updated together in one Git transaction.

## Recover the original history into a separate directory

Use a destination that does not already exist:

```powershell
git clone --branch feat/live-inventory-case `
  D:/workspace/se220/build/history_date_shift_20261103/before.bundle `
  D:/workspace/black-veil-before-date-shift
```

This creates a separate repository from the original history. The bundle contains committed
content; local uncommitted files are preserved separately under `working_files/`.
Retain this backup directory outside Git history and do not delete it with routine build cleanup.
