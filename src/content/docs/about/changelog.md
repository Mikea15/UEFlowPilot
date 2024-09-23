---
title: Changelog
description: Record of all FlowPilot changes per version update.
---

### v0.9.3

_21/09/2024_

**Breaking change:**
> Unimplemented Tick tasks no longer automatically succeed, allowing FlowPilotComponent to continue execution.
> FinishTask has to be called for the task to complete, or implement Tick and return manually.

- Feature: Allows changing ticking group in Project Settings.
- Add: Modal to confirm task deletion
- Add: Automatic Documentation export to FlowPilot.dev
- Add: Flow Pilot asset can be created from the Content Browser via the Gameplay Menu
- Add: New Option to spawn Class at a specific world location/rotation
- Fix: Rare crash when Task was selected without Outer Class.
- Fix: Crash on Demo Map when you don't have a class to spawn, but still play the game. Gracefully Log and Exit instead of crash. 
- Fix: Parallel Task was not respecting disabled nodes.
- Update: Set default spawn lifetime to persistent
- Update: Move Defines to FlowPilotGlobals.h
- Update: Remove Root Task and Children from details view. No longer needed as the Tree view works correctly.
- Update: Demo Maps and basic TP Character to remove Dependencies.
- Update: Default Root node is named after data asset now upon creation
- Update: Change Delegates to dynamic multicast to allow subscribing via BP
- Update: Simplify finishing of ongoing tasks by calling FinishTask.
- Update: Rename UFPTask_FlowActorAsset to UFPTask_SubFlow to make it more akin to a group of FlowTasks. (aka SubTree)
- Update: Remove UFPTaskRunner. Simplified method calls so that most of it is handled via UFPTask_Sequencer. UFPTask_Selector now inherits from UFPTask_Sequencer and swaps Success/Fail behavior

### v0.9.2

_24/08/2024_

- Add: New FPTask_PossessPawn, allowing pawn possession by Players or AI
- Add: New FPTask_PlayAnimation. Similar to BTTask_PlayAnimation, but can play animation on multiple Pawns, and has Soft Pointer to Anim Asset.
- Fix: Spawning new Classes at runtime with existing cached Tags will properly cache them as well.
- Fix: Crash when pasting Task form one FlowPilotAsset to another
- Fix: Some undo functionality has been restored
- Fix: Properly removes null tasks when saving.
- Add: Task Palette now has a search box to filter out the list of Tasks.
- Update: Task Palette has Categories expanded by default now.
- Update: Exposed method to grab Brushes directly from Tasks for customization

### v0.9.1

_14/07/2024_

- Fix: Task icons paths not showing up.
- Del: Removes temporary icons for validation to prevent a crash

### v0.9

_13/07/2024_

- Add: Class Switcher in FlowPilotTask Customization View
- Feature: Editor Task Palette Tab. You can now easily see tasks, grouped by category, and quickly add them to the flow.
- Add: Show Quick Buttons Task is selected or hovered
- Update: Only show toolbar when multiple tasks selected.
- Add: Support for Unreal Engine 5.4

### v0.8

_29/06/2014_

- Update: Improve Error Logging
- Add: New example content
- Add: Customization and improves Debug View.
- Add: FlowPilotEditor with Basic functionality
- Add: Drag and Drop Support
- Add: data validation to FlowPilotEditor
- Add: Implemented Parent/Child relationship on `UFlowPilotTask`
- Refactor: Rename `UFPTaskNode` to `UFlowPilotTask`
- Add: missing ExitChildTask call from `UFPTask_Sequence` when a Task returns Failure
- Add: Editor data to customize display of Tasks
- Add: Editor Settings to customize editing experience
- Fix: `UFPTaskRunner` was not correctly handling running the last Task if it was Disabled, returning Failure, instead of the last task result
- Add: New FlowPilot Website and Online Documentation at <http://flowpilot.dev>
- Deprecate: MainFlow in `UFlowPilot` in favor of `UFPTask_Sequence` as the root node
- Add: Data Versioning to automatically convert MainFlow to Sequence Child Tasks
- Add: Support for Unreal Engine 5.4
- Fix: FlowPilot Control not properly setup for callbacks.
- Refactor: Cancellation and Exit flow, it now normalized. All Successful and Failing tasks should call Exit Method
- Adds: Exit method now has the task result passed as parameter
- Adds: Validation to FlowActorReference
- Adds: Validation to FlowPilotTasks that didn't have it
- Fix: Bad usage of CPU Traces. Added others and CPU CYCLE Stats.
- Update: Usage of ForEachActor methods, now returns a boolean

### v0.6

17/02/2024

- Add support for 5.2
- Set plugin to runtime so we can use FlowPilotComponent in Blueprints
- Adds FlowPilotEditor
- Minor bug fixes

### v0.5

08/02/2024

- Removes Component from Cache
- Fix Data asset sharing with instancing of assets
- Sanitization pass across API calls
- Adds Stats Trackers at various points

### v0.4.1

24/01/2024

- Updates validation pattern
- Adds support for Unreal Engine 5.1

### v0.4

23/01/2024

- Added ways to Pause and Unpause FlowPilot
- Added parameters to settings to configure Debug Rendering
- Added proper Reset and Aborts to any Node that has Child Nodes, so they are properly propagated
- Fix Parallel node wrong execution end
- Fix debug rendering. Removed some options that we don't need for now and can be added later.
- Simplified flow. Removed Instant nodes, they were not being used.
- Added internal node state to better progress tracking
- Added a way to find multiple actors from 1 external tag, so we can use group references
- Added option to prefetch actors on Setup in Settings.
- Inverted ChangeLog timestamps

### v0.3.2

31/12/2023

- Implement Actor Reference Tag Prefetch.
- Prevent swapping FlowPilot Actor asset when Flow is already running
- Allows returning Groups of Actors from an FlowActorReference via Tags. Allows Group Search, Caching and Selection

### v0.3.1

30/12/2023

- Add Retry timer to FlowPilotComponent
- Properly add State change to FlowPilotComponent
- Properly invalidate Database Cache in FlowPilotSubsystem when an Actor is not valid when fetching it

### v0.3

29/12/2023

- Fix Parallel Node not completing correctly.
- Fix FlowComponent not registering correct FlowState

### v0.1 alpha

12/12/2023

- Initial release
