"use client";

import { PrototypeComponent } from "proto-plugin";
import type { ReactNode } from "react";

import { SettingsHeader } from "./settings-header";
import { SettingsSidebar } from "./settings-sidebar";

type SettingsShellLayoutProps = {
  isSidebarCollapsed: boolean;
  isHelpMenuOpen: boolean;
  onToggleSidebar: () => void;
  onToggleHelpMenu: () => void;
  children: ReactNode;
};

export function SettingsShellLayout({
  isSidebarCollapsed,
  isHelpMenuOpen,
  onToggleSidebar,
  onToggleHelpMenu,
  children,
}: SettingsShellLayoutProps) {
  return (
    <PrototypeComponent
      id="settings-shell-layout"
      className="bg-canvas relative flex h-full w-full overflow-hidden"
    >
      <SettingsSidebar
        activeMenuKey="general"
        isSidebarCollapsed={isSidebarCollapsed}
        isHelpMenuOpen={isHelpMenuOpen}
        onToggleSidebar={onToggleSidebar}
        onToggleHelpMenu={onToggleHelpMenu}
      />
      <main className="bg-surface-1 relative flex h-full w-full flex-col overflow-hidden">
        <SettingsHeader onToggleSidebar={onToggleSidebar} />
        <div className="h-full w-full overflow-hidden overflow-y-auto">{children}</div>
      </main>
    </PrototypeComponent>
  );
}
