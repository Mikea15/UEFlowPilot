---
title: FlowActorReference
description: Class used to grab a reference to an actor in FlowPilot
---

## Description

Flow Actor Reference is a class that helps find a reference to an actor that can be in game, in the level, or not spawned yet.
It uses 3 modes of operation.

- You can reference 'Self', which will return the current object running FlowPilot (that owns FlowPilotComponent)
- You can reference an Actor in a Level.
- You can reference an Actor via GameplayTag. These are most useful when an Actor is not persistent in the level. These will also allow returning groups of Actors
