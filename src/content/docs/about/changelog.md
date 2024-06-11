---
title: Changelog
description: Record of all FLowPilot changes per version update.
---

### v0.8

- Improve Error Logging
- Adds Example content to plugin
- Adds Customization and improves Debug View.
- Adds FlowPilotEditor
- Adds Base functionality to FlowPilotEditor
- Renames UFPTaskNode to UFlowPilotTask

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
