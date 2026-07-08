import { definePreviewStateRegistry } from "proto-plugin";

import {
  DEFAULT_ADMIN_EMAIL,
  DEFAULT_INSTANCE_ID,
  DEFAULT_INSTANCE_NAME,
} from "./settings-mock-data";
import type { SettingsLiveState, SettingsPreviewStateId } from "./settings-types";

export type { SettingsPreviewStateId };

export const DEFAULT_SETTINGS_PREVIEW_STATE: SettingsPreviewStateId =
  "general-settings-default";

function baseLoadedState(
  previewStateId: SettingsPreviewStateId,
  overrides: Partial<SettingsLiveState> = {},
): SettingsLiveState {
  return {
    previewStateId,
    instanceName: DEFAULT_INSTANCE_NAME,
    adminEmail: DEFAULT_ADMIN_EMAIL,
    instanceId: DEFAULT_INSTANCE_ID,
    isTelemetryEnabled: true,
    isSubmitting: false,
    isLoading: false,
    isSidebarCollapsed: false,
    isHelpMenuOpen: false,
    ...overrides,
  };
}

export function createLiveStateForPreview(
  previewStateId: SettingsPreviewStateId = DEFAULT_SETTINGS_PREVIEW_STATE,
): SettingsLiveState {
  switch (previewStateId) {
    case "general-settings-telemetry-off":
      return baseLoadedState(previewStateId, { isTelemetryEnabled: false });
    case "general-settings-loading":
      return baseLoadedState(previewStateId, { isLoading: true });
    case "general-settings-saving":
      return baseLoadedState(previewStateId, { isSubmitting: true });
    case "sidebar-collapsed":
      return baseLoadedState(previewStateId, { isSidebarCollapsed: true });
    case "help-menu-open":
      return baseLoadedState(previewStateId, { isHelpMenuOpen: true });
    case "general-settings-default":
    default:
      return baseLoadedState("general-settings-default");
  }
}

export const SETTINGS_PREVIEW_STATE_REGISTRY = definePreviewStateRegistry({
  canvasLayout: {
    rows: [
      {
        section: { label: "General settings" },
        states: ["general-settings-default", "general-settings-telemetry-off"],
      },
      {
        section: { label: "Loading & save" },
        startColumn: 0,
        states: ["general-settings-loading", "general-settings-saving"],
      },
      {
        section: { label: "Sidebar" },
        startColumn: 0,
        states: ["sidebar-collapsed", "help-menu-open"],
      },
    ],
  },
  states: [
    {
      id: "general-settings-default",
      label: "General settings",
      annotation: "Default loaded form with telemetry enabled.",
    },
    {
      id: "general-settings-telemetry-off",
      label: "Telemetry off",
      annotation: "Telemetry toggle disabled.",
    },
    {
      id: "general-settings-loading",
      label: "Loading",
      annotation: "Page header visible while instance data is loading; form hidden.",
    },
    {
      id: "general-settings-saving",
      label: "Saving",
      annotation: 'Save button shows "Saving" with telemetry toggle dimmed.',
    },
    {
      id: "sidebar-collapsed",
      label: "Sidebar collapsed",
      annotation: "70px collapsed sidebar with icon-only navigation.",
    },
    {
      id: "help-menu-open",
      label: "Help menu open",
      annotation: "Help popover with documentation links and version.",
    },
  ],
  edges: [
    { from: "general-settings-default", to: "general-settings-telemetry-off" },
    { from: "general-settings-default", to: "general-settings-loading", dashed: true },
    { from: "general-settings-default", to: "general-settings-saving", dashed: true },
    { from: "general-settings-default", to: "sidebar-collapsed", dashed: true },
    { from: "general-settings-default", to: "help-menu-open", dashed: true },
  ],
});

export const SETTINGS_PREVIEW_OPTIONS = SETTINGS_PREVIEW_STATE_REGISTRY.pickerOptions;
