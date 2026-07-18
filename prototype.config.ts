import { definePrototypeConfig } from "proto-plugin";

import EventTypes from "./src/prototypes/event-types";
import { eventTypesComponentRegistry } from "./src/prototypes/event-types/component-ids";
import EventTypesStateMapPage from "./src/prototypes/event-types/state-map-page";
import TableEditorFilters from "./src/prototypes/table-editor-filters";
import { tableEditorFiltersComponentRegistry } from "./src/prototypes/table-editor-filters/component-ids";
import TableEditorFiltersStateMapPage from "./src/prototypes/table-editor-filters/state-map-page";
import SimpleScreen from "./src/prototypes/simple-screen";
import { simpleScreenComponentRegistry } from "./src/prototypes/simple-screen/component-ids";
import SimpleScreenStateMapPage from "./src/prototypes/simple-screen/state-map-page";

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
      slug: "table-editor-filters",
      title: "Table Editor Filters",
      screenshot: "/prototypes/screenshots/table-editor-filters.png",
      component: TableEditorFilters,
      componentRegistry: tableEditorFiltersComponentRegistry,
      stateMapComponent: TableEditorFiltersStateMapPage,
    },
    {
      slug: "simple-screen",
      title: "Simple screen",
      screenshot: "/prototypes/screenshots/simple-screen.png",
      component: SimpleScreen,
      componentRegistry: simpleScreenComponentRegistry,
      stateMapComponent: SimpleScreenStateMapPage,
    },
  ],
});
