import { definePrototypeConfig } from "proto-plugin";

import ProtoPartnerPage from "./src/prototypes/proto-partner-page";
import { protoPartnerPageComponentRegistry } from "./src/prototypes/proto-partner-page/component-ids";
import TableEditorFilters from "./src/prototypes/table-editor-filters";
import { tableEditorFiltersComponentRegistry } from "./src/prototypes/table-editor-filters/component-ids";
import TableEditorFiltersStateMapPage from "./src/prototypes/table-editor-filters/state-map-page";

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
  ],
});
