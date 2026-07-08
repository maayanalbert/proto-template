import type { SettingsSidebarMenuItem } from "./settings-types";

export const DEFAULT_INSTANCE_NAME = "me";
export const DEFAULT_ADMIN_EMAIL = "maayan.albert@gmail.com";
export const DEFAULT_INSTANCE_ID = "e93216fe3c6d9f726a41acca";
export const DEFAULT_PLANE_VERSION = "0.28.0";
export const DEFAULT_USER_DISPLAY_NAME = "M";

export const SETTINGS_SIDEBAR_MENU: SettingsSidebarMenuItem[] = [
  {
    key: "general",
    name: "General",
    description: "Identify your instances and get key details.",
    href: "/general/",
  },
  {
    key: "email",
    name: "Email",
    description: "Configure your SMTP controls.",
    href: "/email/",
  },
  {
    key: "authentication",
    name: "Authentication",
    description: "Configure authentication modes.",
    href: "/authentication/",
  },
  {
    key: "workspace",
    name: "Workspaces",
    description: "Manage all workspaces on this instance.",
    href: "/workspace/",
  },
  {
    key: "ai",
    name: "Artificial intelligence",
    description: "Configure your OpenAI creds.",
    href: "/ai/",
  },
  {
    key: "image",
    name: "Images in Plane",
    description: "Allow third-party image libraries.",
    href: "/image/",
  },
];

export const SETTINGS_HELP_OPTIONS = [
  {
    name: "Documentation",
    href: "https://docs.plane.so/",
  },
  {
    name: "Join our Forum",
    href: "https://forum.plane.so",
  },
  {
    name: "Report a bug",
    href: "https://github.com/makeplane/plane/issues/new/choose",
  },
] as const;
