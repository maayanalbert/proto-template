import { definePreviewStateRegistry } from "proto-plugin";

import { MOCK_SEARCH_NO_RESULTS_QUERY } from "./event-types-mock-data";
import type {
  EventTypesLiveState,
  EventTypesPreviewStateId,
} from "./event-types-types";

export type { EventTypesPreviewStateId };

export const DEFAULT_EVENT_TYPES_PREVIEW_STATE: EventTypesPreviewStateId = "populated";

const POPULATED_BASE = {
  dataMode: "populated",
  searchQuery: "",
  overlay: "none",
  optionsMenuEventTypeId: null,
  deleteEventTypeId: null,
  hiddenEventTypeIds: [],
} as const satisfies Omit<EventTypesLiveState, "previewStateId">;

export function createLiveStateForPreview(
  previewStateId: EventTypesPreviewStateId = DEFAULT_EVENT_TYPES_PREVIEW_STATE,
): EventTypesLiveState {
  switch (previewStateId) {
    case "empty":
      return {
        previewStateId,
        dataMode: "empty",
        searchQuery: "",
        overlay: "none",
        optionsMenuEventTypeId: null,
        deleteEventTypeId: null,
        hiddenEventTypeIds: [],
      };
    case "search-no-results":
      return {
        previewStateId,
        dataMode: "search-no-results",
        searchQuery: MOCK_SEARCH_NO_RESULTS_QUERY,
        overlay: "none",
        optionsMenuEventTypeId: null,
        deleteEventTypeId: null,
        hiddenEventTypeIds: [],
      };
    case "loading":
      return {
        previewStateId,
        dataMode: "loading",
        searchQuery: "",
        overlay: "none",
        optionsMenuEventTypeId: null,
        deleteEventTypeId: null,
        hiddenEventTypeIds: [],
      };
    case "create-dialog":
      return {
        previewStateId,
        ...POPULATED_BASE,
        overlay: "create-dialog",
      };
    case "row-options-menu":
      return {
        previewStateId,
        ...POPULATED_BASE,
        optionsMenuEventTypeId: 3,
      };
    case "delete-dialog":
      return {
        previewStateId,
        ...POPULATED_BASE,
        overlay: "delete-dialog",
        deleteEventTypeId: 3,
      };
    case "populated":
    default:
      return {
        previewStateId: "populated",
        ...POPULATED_BASE,
      };
  }
}

export function inferPreviewStateId(
  state: Pick<
    EventTypesLiveState,
    "dataMode" | "overlay" | "optionsMenuEventTypeId" | "deleteEventTypeId" | "searchQuery"
  >,
): EventTypesPreviewStateId {
  if (state.overlay === "create-dialog") return "create-dialog";
  if (state.overlay === "delete-dialog") return "delete-dialog";
  if (state.optionsMenuEventTypeId != null) return "row-options-menu";
  if (state.dataMode === "loading") return "loading";
  if (state.dataMode === "empty") return "empty";
  if (state.dataMode === "search-no-results") return "search-no-results";
  return "populated";
}

export function withInferredPreviewState(
  current: EventTypesLiveState,
  patch: Partial<EventTypesLiveState>,
): EventTypesLiveState {
  const next = { ...current, ...patch };
  return {
    ...next,
    previewStateId: inferPreviewStateId(next),
  };
}

export const EVENT_TYPES_PREVIEW_STATE_REGISTRY = definePreviewStateRegistry({
  canvasLayout: {
    options: {
      rowGap: 72,
    },
    rows: [
      {
        section: { label: "List data" },
        states: ["loading", { id: "empty", column: 1 }, { id: "populated", column: 2 }],
      },
      {
        states: [
          { id: "search-no-results", column: 0 },
          { id: "create-dialog", column: 2 },
          { id: "row-options-menu", column: 3 },
          { id: "delete-dialog", column: 4 },
        ],
      },
    ],
  },
  states: [
    {
      id: "loading",
      label: "Loading",
      annotation: "Skeleton placeholders while event types load.",
    },
    {
      id: "empty",
      label: "Empty",
      annotation: "No event types yet — empty screen with create call to action.",
    },
    {
      id: "populated",
      label: "Populated",
      annotation:
        "Default list of three event types with search, visibility toggles, and row actions.",
    },
    {
      id: "search-no-results",
      label: "Search — no results",
      annotation: "Active search query with zero matching event types.",
    },
    {
      id: "create-dialog",
      label: "Create dialog",
      annotation: "New event type modal opened from the header New button.",
    },
    {
      id: "row-options-menu",
      label: "Row options menu",
      annotation: "Ellipsis menu open on an event type row.",
    },
    {
      id: "delete-dialog",
      label: "Delete dialog",
      annotation: "Delete confirmation dialog for an event type.",
    },
  ],
  edges: [
    { from: "loading", to: "populated" },
    { from: "loading", to: "empty" },
    { from: "empty", to: "create-dialog" },
    { from: "populated", to: "search-no-results" },
    { from: "populated", to: "create-dialog" },
    { from: "populated", to: "row-options-menu" },
    { from: "row-options-menu", to: "delete-dialog" },
    { from: "create-dialog", to: "populated" },
    { from: "delete-dialog", to: "populated" },
    { from: "search-no-results", to: "populated" },
  ],
});

export const EVENT_TYPES_PREVIEW_OPTIONS = EVENT_TYPES_PREVIEW_STATE_REGISTRY.pickerOptions;
