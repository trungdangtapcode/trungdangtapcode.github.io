# Game name decision: Black Veil

Decision date: 2026-11-03. Decision owner: the user / product owner.
Scope: naming evidence and the canonical source configuration; no new playable bundle.

## Recorded decision

After reviewing the twelve proposals below, the user selected **Black Veil** and requested
that the proposal list be retained in Markdown as evidence.

Faithful English translation of the user's instruction:

> Choose Black Veil, and save that proposal list in Markdown as evidence.

This records the user's explicit selection. The earlier assistant recommendation was Grave
Protocol, with Gravewake and Red Perimeter as alternatives; the user's selection supersedes
those recommendations. The descriptions below are translated from the original Vietnamese
brainstorm. No name-availability research was performed in that brainstorm.

## Original proposals, in order

| # | Proposed name | Intended impression |
| --- | --- | --- |
| 1 | Grave Protocol | A secret outbreak-related operation, suited to investigation followed by escape. |
| 2 | Dead Meridian | A strong, mysterious name that can cover multiple locations and campaigns. |
| 3 | Containment Lost | The quarantine perimeter has fallen and the original plan is breaking down. |
| 4 | Red Perimeter | A dangerous cordon suggesting military operations, quarantine and breaking out. |
| 5 | Hollow District | An intact urban district where almost all living people have disappeared. |
| 6 | Gravewake | A short, forceful name suggesting something deadly awakening. |
| 7 | **Black Veil — selected** | Secrets conceal the outbreak's center; suited to investigation and horror. |
| 8 | Exit Condition | Survival depends on discovering and fulfilling the conditions for escape. |
| 9 | Deadlock Directive | A mission trapped between orders and survival. |
| 10 | No Safe Return | Entry into the outbreak zone is possible, but the way back is no longer safe. |
| 11 | After the Sirens | The atmosphere after the alarm has gone silent, leaning toward horror. |
| 12 | Breach the Night | Active combat and forcing a path through the darkness. |

## Product and mission names

**Black Veil** is the game title. Black Tide and Last Shift remain the intended mission names:

- **Black Veil — Black Tide:** action and investigation into the outbreak, followed by escape.
- **Black Veil — Last Shift:** survival-horror with scarce ammunition and greater uncertainty.

These are naming examples, not a claim that either mission has been implemented. Service
Court Escape remains the current playable development reference. See the
[two-mission direction](contracts/TWO_MISSION_DIRECTION_2026-11-03.md).

## Runtime source and technical identity

The sole runtime title source is `display_name` in
[content/app/application.json](../content/app/application.json). The existing application
loader supplies it to window and game-title surfaces. This decision changes that field to
`Black Veil`; it does not introduce another runtime title configuration.

Keep `app.prototype`, `zombie::*`, `zombie_demo`, `zombie_*` targets, content/mission IDs,
protocol identity and save/preference directories stable. This decision does not rename the
workspace, Git repository, executable target or historical build artifacts.

New packages receive the source configuration through the existing copy/package pipeline.
Previously validated bundles retain their original configuration and evidence. No complete
project check, new build or new runtime candidate is claimed by this naming-only change.

Validation: both existing `ApplicationConfigTests.cpp` tests passed (27 assertions).
A structured JSON comparison confirmed that only `display_name` changed in the application
configuration. The pre-existing local AGENTS policy additions and untracked user TODO remain
outside this change.
