import { definePrototypeConfig } from "proto-plugin";

import EventTypes from "./src/prototypes/event-types";
import { eventTypesComponentRegistry } from "./src/prototypes/event-types/component-ids";
import EventTypesStateMapPage from "./src/prototypes/event-types/state-map-page";

export default definePrototypeConfig({
  prototypes: [
    {
      slug: "event-types",
      title: "Event types",
      screenshot: "/prototypes/screenshots/event-types.png",
      component: EventTypes,
      componentRegistry: eventTypesComponentRegistry,
      stateMapComponent: EventTypesStateMapPage,
    },
  ],
});
