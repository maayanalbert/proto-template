import { definePrototypeConfig } from "proto-plugin";

import ProtoPartnerPage from "./src/prototypes/proto-partner-page";
import { protoPartnerPageComponentRegistry } from "./src/prototypes/proto-partner-page/component-ids";
import TableEditorFilters from "./src/prototypes/table-editor-filters";
import { tableEditorFiltersComponentRegistry } from "./src/prototypes/table-editor-filters/component-ids";
import TableEditorFiltersStateMapPage from "./src/prototypes/table-editor-filters/state-map-page";
import EventTypes from "./src/prototypes/event-types";
import { eventTypesComponentRegistry } from "./src/prototypes/event-types/component-ids";
import EventTypesStateMapPage from "./src/prototypes/event-types/state-map-page";

export default definePrototypeConfig({
  prototypes: [
    {
      slug: "proto-partner-page",
      title: "Proto Partner Page",
      screenshot: "/prototypes/screenshots/proto-partner-page.png",
      component: ProtoPartnerPage,
      componentRegistry: protoPartnerPageComponentRegistry,
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
      slug: "event-types",
      title: "Event types",
      screenshot: "/prototypes/screenshots/event-types.png",
      component: EventTypes,
      componentRegistry: eventTypesComponentRegistry,
      stateMapComponent: EventTypesStateMapPage,
    },
  ],
});
