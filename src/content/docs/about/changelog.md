---
title: Changelog
description: Record of all FLowPilot changes per version update.
---

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
