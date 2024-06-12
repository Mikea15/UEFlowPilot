---
title: 'Console Commands'
description: 'List of FlowPilot console commands'
---

The following is a list of all console commands provided by FlowPilot, to help debug and understand its execution, at runtime.

### `fp.DebugList [0: Off | 1: On]`
> Shows a list of all FlowPilotComponents in the Level. Each of them as an Index besides the name. This index is used in conjunction with `fp.DebugFlowPilot X` where X is the index for the FlowPilotComponent


### `fp.DebugFlowPilot [-1: Off | X: On]`
> Displays debug for FlowPilotComponent with an Index shown from `fp.DebugList`

### `fp.DebugCache [0: Off | 1: On]`
> Displays a list of actors that are pre-fetched and have a reference held by the `FlowPilotSystemComponent`.
