import { definePrototypeComponentRegistry } from "proto-plugin";

export const EVENT_TYPES_COMPONENT_IDS = [
  "page",
  "scroll-container",
  "event-types-preview-state-select",
  "dashboard-shell",
  "dashboard-sidebar",
  "dashboard-mobile-header",
  "dashboard-mobile-nav",
  "event-types-page-content",
  "event-types-page-header",
  "event-types-list",
  "event-type-list-item",
  "event-types-skeleton",
  "event-types-empty-state",
  "create-event-type-dialog",
  "delete-event-type-dialog",
] as const;

export const EVENT_TYPES_DYNAMIC_TARGET_PREFIXES = ["event-type-list-item."] as const;

export const eventTypesComponentRegistry = definePrototypeComponentRegistry({
  ids: EVENT_TYPES_COMPONENT_IDS,
  dynamicPrefixes: EVENT_TYPES_DYNAMIC_TARGET_PREFIXES,
});
