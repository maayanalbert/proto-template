import { definePrototypeComponentRegistry } from "proto-plugin";

export const SETTINGS_COMPONENT_IDS = [
  "page",
  "scroll-container",
  "settings-preview-state-select",
  "settings-shell-layout",
  "settings-sidebar",
  "settings-sidebar-dropdown",
  "settings-sidebar-menu",
  "settings-sidebar-help-section",
  "settings-header",
  "settings-main-content",
  "settings-page-wrapper",
  "settings-general-form",
  "settings-ui.settings-input",
  "settings-ui.settings-button",
  "settings-ui.settings-toggle-switch",
  "settings-ui.settings-avatar",
] as const;

export const SETTINGS_DYNAMIC_TARGET_PREFIXES = [] as const;

export const settingsComponentRegistry = definePrototypeComponentRegistry({
  ids: SETTINGS_COMPONENT_IDS,
  dynamicPrefixes: SETTINGS_DYNAMIC_TARGET_PREFIXES,
});
