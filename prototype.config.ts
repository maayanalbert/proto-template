import { definePrototypeConfig } from "proto-plugin";

import TableEditorFilters from "./src/prototypes/table-editor-filters";
import { tableEditorFiltersComponentRegistry } from "./src/prototypes/table-editor-filters/component-ids";
import TableEditorFiltersStateMapPage from "./src/prototypes/table-editor-filters/state-map-page";

export default definePrototypeConfig({
  prototypes: [
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
