---
title: Using FlowPilot
description: Guide on how to use FlowPilot
---

To use FlowPilot:

1. Add `FlowPilotComponent` to any Actor you'd like. This can be a level actor or blueprint. (You control its lifetime)
2. Add a FlowPilot Asset reference.
3. Select Execution mode for the FlowPilot
4. Tick if you wish FlowPilot starts on Begin Play
    - In case you don't, you can manually call `StartFlow` from the `FlowPilotComponent`. See more on the reference page.
4. Run the game