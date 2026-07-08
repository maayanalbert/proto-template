import { definePrototypeConfig } from "proto-plugin";

import EventTypes from "./src/prototypes/event-types";
import { eventTypesComponentRegistry } from "./src/prototypes/event-types/component-ids";
import EventTypesStateMapPage from "./src/prototypes/event-types/state-map-page";
import Settings from "./src/prototypes/settings";
import { settingsComponentRegistry } from "./src/prototypes/settings/component-ids";
import SettingsStateMapPage from "./src/prototypes/settings/state-map-page";

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
    {
      slug: "settings",
      title: "Settings",
      screenshot: "/prototypes/screenshots/settings.png",
      component: Settings,
      componentRegistry: settingsComponentRegistry,
      stateMapComponent: SettingsStateMapPage,
    },
  ],
});
