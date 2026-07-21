export type EventTypesDataMode = "populated" | "empty" | "loading" | "search-no-results";

export type EventTypesOverlay = "none" | "create-dialog" | "delete-dialog";

export type EventTypesPreviewStateId =
  | "populated"
  | "empty"
  | "search-no-results"
  | "loading"
  | "create-dialog"
  | "row-options-menu"
  | "delete-dialog";

export const EVENT_TYPES_PREVIEW_STATE_IDS = [
  "populated",
  "empty",
  "search-no-results",
  "loading",
  "create-dialog",
  "row-options-menu",
  "delete-dialog",
] as const satisfies readonly EventTypesPreviewStateId[];

export type MockEventType = {
  id: number;
  title: string;
  slug: string;
  durationMinutes: number;
  hidden: boolean;
};

export type EventTypesLiveState = {
  previewStateId: EventTypesPreviewStateId;
  dataMode: EventTypesDataMode;
  searchQuery: string;
  overlay: EventTypesOverlay;
  optionsMenuEventTypeId: number | null;
  deleteEventTypeId: number | null;
  hiddenEventTypeIds: number[];
};
