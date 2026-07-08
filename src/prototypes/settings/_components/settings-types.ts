export type SettingsPreviewStateId =
  | "general-settings-default"
  | "general-settings-telemetry-off"
  | "general-settings-loading"
  | "general-settings-saving"
  | "sidebar-collapsed"
  | "help-menu-open";

export type SettingsLiveState = {
  previewStateId: SettingsPreviewStateId;
  instanceName: string;
  adminEmail: string;
  instanceId: string;
  isTelemetryEnabled: boolean;
  isSubmitting: boolean;
  isLoading: boolean;
  isSidebarCollapsed: boolean;
  isHelpMenuOpen: boolean;
};

export type SettingsSidebarMenuKey =
  | "general"
  | "email"
  | "workspace"
  | "authentication"
  | "ai"
  | "image";

export type SettingsSidebarMenuItem = {
  key: SettingsSidebarMenuKey;
  name: string;
  description: string;
  href: string;
};
