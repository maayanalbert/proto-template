"use client";

import { PrototypeComponent } from "proto-plugin";
import {
  BrainCog,
  Cog,
  HelpCircle,
  Image,
  Lock,
  Mail,
  MessageSquare,
  MoveLeft,
  UserCog2,
} from "lucide-react";

import { cn } from "@/lib/cn";

import {
  DEFAULT_PLANE_VERSION,
  DEFAULT_USER_DISPLAY_NAME,
  SETTINGS_HELP_OPTIONS,
  SETTINGS_SIDEBAR_MENU,
} from "./settings-mock-data";
import { SettingsAvatar } from "./settings-ui";

type SettingsSidebarProps = {
  activeMenuKey: "general";
  isSidebarCollapsed: boolean;
  isHelpMenuOpen: boolean;
  onToggleSidebar: () => void;
  onToggleHelpMenu: () => void;
};

function WorkspaceIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden
    >
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

const MENU_ICONS = {
  general: Cog,
  email: Mail,
  workspace: WorkspaceIcon,
  authentication: Lock,
  ai: BrainCog,
  image: Image,
} as const;

function NewTabIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden>
      <path
        d="M12 2h2v2M14 2l-5 5M6 10H3.5A1.5 1.5 0 0 1 2 8.5v-5A1.5 1.5 0 0 1 3.5 2h5A1.5 1.5 0 0 1 10 3.5V6"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PageIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden>
      <path
        d="M4 2.5h5l3 3v8a.5.5 0 0 1-.5.5h-7A.5.5 0 0 1 4 13.5v-11A.5.5 0 0 1 4.5 2.5Z"
        stroke="currentColor"
        strokeWidth="1.25"
      />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className} aria-hidden>
      <path d="M8 1.25a6.75 6.75 0 0 0-2.135 13.15c.337.062.459-.146.459-.325 0-.16-.006-.582-.01-1.142A2.65 2.65 0 0 1 4.8 12.1c-.225-.38-.95-1.3-1.29-1.74-.44-.52-.72-.88-.72-1.36 0-.66.5-1.18 1.27-1.18.37 0 .85.13 1.29.95.37.64 1.08 1.1 1.78 1.1.7 0 1.41-.46 1.78-1.1.44-.82.92-.95 1.29-.95.77 0 1.27.52 1.27 1.18 0 .48-.28.84-.72 1.36-.34.44-1.065 1.36-1.29 1.74-.28.47-.08.88.21 1.09.62.5 1.01.81 1.01 1.56 0 1.13-.01 2.04-.01 2.32 0 .18.12.39.46.325A6.75 6.75 0 0 0 8 1.25Z" />
    </svg>
  );
}

const HELP_ICONS = {
  Documentation: PageIcon,
  "Join our Forum": MessageSquare,
  "Report a bug": GithubIcon,
} as const;

export function SettingsSidebar({
  activeMenuKey,
  isSidebarCollapsed,
  isHelpMenuOpen,
  onToggleSidebar,
  onToggleHelpMenu,
}: SettingsSidebarProps) {
  return (
    <PrototypeComponent
      id="settings-sidebar"
      className={cn(
        "border-subtle bg-surface-1 relative z-20 flex h-full flex-shrink-0 flex-grow-0 flex-col border-r duration-300",
        isSidebarCollapsed ? "w-[70px]" : "w-[290px]",
      )}
    >
      <div className="flex h-full w-full flex-1 flex-col">
        <PrototypeComponent
          id="settings-sidebar-dropdown"
          className="max-h-header border-subtle flex items-center gap-x-5 gap-y-2 border-b px-4 py-2.5"
        >
          <div className="h-full w-full truncate">
            <div
              className={cn(
                "flex flex-grow items-center gap-x-2 truncate rounded-sm",
                isSidebarCollapsed ? "justify-center" : "",
              )}
            >
              <div className="bg-layer-1 flex size-8 flex-shrink-0 items-center justify-center rounded-sm">
                <UserCog2 className="text-primary size-5" />
              </div>
              {!isSidebarCollapsed ? (
                <div className="flex w-full gap-2">
                  <h4 className="text-body-md-medium text-primary grow truncate">Instance admin</h4>
                </div>
              ) : null}
            </div>
          </div>
          {!isSidebarCollapsed ? (
            <SettingsAvatar name={DEFAULT_USER_DISPLAY_NAME} />
          ) : null}
        </PrototypeComponent>

        <PrototypeComponent
          id="settings-sidebar-menu"
          className="flex h-full w-full flex-col gap-2.5 overflow-y-auto px-4 py-4"
        >
          {SETTINGS_SIDEBAR_MENU.map((item) => {
            const Icon = MENU_ICONS[item.key];
            const isActive = item.key === activeMenuKey;
            return (
              <div key={item.key}>
                <div
                  className={cn(
                    "group flex w-full items-center gap-3 rounded-md px-3 py-2 transition-colors outline-none",
                    isActive
                      ? "bg-layer-transparent-active text-primary"
                      : "text-secondary hover:bg-layer-transparent-hover active:bg-layer-transparent-active",
                    isSidebarCollapsed ? "justify-center" : "w-[260px]",
                  )}
                >
                  <Icon className="h-4 w-4 flex-shrink-0" />
                  {!isSidebarCollapsed ? (
                    <div className="w-full">
                      <div className="text-body-xs-medium transition-colors">{item.name}</div>
                      <div className="text-caption-sm-regular transition-colors">{item.description}</div>
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })}
        </PrototypeComponent>

        <PrototypeComponent
          id="settings-sidebar-help-section"
          className={cn(
            "border-subtle bg-surface-1 flex h-14 w-full flex-shrink-0 items-center justify-between gap-1 self-baseline border-t px-4",
            isSidebarCollapsed ? "h-auto flex-col py-1.5" : "",
          )}
        >
          <div
            className={cn(
              "flex items-center gap-1",
              isSidebarCollapsed ? "flex-col justify-center" : "w-full",
            )}
          >
            <a
              href="https://app.plane.so/"
              className="bg-layer-1 text-body-xs-medium relative flex items-center gap-1 rounded-sm px-2 py-1 whitespace-nowrap text-secondary"
            >
              <NewTabIcon className="h-3.5 w-3.5" />
              {!isSidebarCollapsed ? "Redirect to Plane" : null}
            </a>
            <button
              type="button"
              className={cn(
                "hover:bg-layer-1-hover hover:text-primary ml-auto grid place-items-center rounded-md p-1.5 text-secondary outline-none",
                isSidebarCollapsed ? "w-full" : "",
              )}
              onClick={onToggleHelpMenu}
              aria-label="Help"
            >
              <HelpCircle className="size-4" />
            </button>
            <button
              type="button"
              className={cn(
                "hover:bg-layer-1-hover hover:text-primary grid place-items-center rounded-md p-1.5 text-secondary outline-none",
                isSidebarCollapsed ? "w-full" : "",
              )}
              onClick={onToggleSidebar}
              aria-label="Toggle sidebar"
            >
              <MoveLeft className={cn("size-4 duration-300", isSidebarCollapsed ? "rotate-180" : "")} />
            </button>
          </div>

          <div className="relative">
            {isHelpMenuOpen ? (
              <div
                className={cn(
                  "shadow-raised-100 bg-surface-1 absolute bottom-2 z-[15] min-w-[10rem] divide-y rounded-sm p-1 whitespace-nowrap",
                  isSidebarCollapsed ? "left-full" : "-left-[75px]",
                )}
              >
                <div className="space-y-1 pb-2">
                  {SETTINGS_HELP_OPTIONS.map(({ name, href }) => {
                    const Icon = HELP_ICONS[name];
                    return (
                      <a key={name} href={href} target="_blank" rel="noreferrer">
                        <div className="hover:bg-layer-1-hover flex items-center gap-x-2 rounded-sm px-2 py-1 text-11">
                          <div className="grid flex-shrink-0 place-items-center">
                            <Icon className="text-secondary h-3.5 w-3.5" />
                          </div>
                          <span className="text-11">{name}</span>
                        </div>
                      </a>
                    );
                  })}
                </div>
                <div className="text-10 px-2 pt-2 pb-1">Version: v{DEFAULT_PLANE_VERSION}</div>
              </div>
            ) : null}
          </div>
        </PrototypeComponent>
      </div>
    </PrototypeComponent>
  );
}
