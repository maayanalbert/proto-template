import { definePrototypeConfig } from "proto-plugin";

import EventTypes from "./src/prototypes/event-types";
import { eventTypesComponentRegistry } from "./src/prototypes/event-types/component-ids";
import EventTypesStateMapPage from "./src/prototypes/event-types/state-map-page";
import AutomatWorkflowsPage from "./src/prototypes/automat-workflows-page";
import { automatWorkflowsPageComponentRegistry } from "./src/prototypes/automat-workflows-page/component-ids";
import AutomatWorkflowsPageStateMapPage from "./src/prototypes/automat-workflows-page/state-map-page";
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
    {
      slug: "automat-workflows-page",
      title: "Automat Workflows Page",
      screenshot: "/prototypes/screenshots/automat-workflows-page.png",
      component: AutomatWorkflowsPage,
      componentRegistry: automatWorkflowsPageComponentRegistry,
      stateMapComponent: AutomatWorkflowsPageStateMapPage,
    },
  ],
});
