"use client";

import {
  PROTOTYPE_PAGE_CLASS,
  PROTOTYPE_SCROLL_CONTAINER_CLASS,
  PrototypeComponent,
  usePrototypeComments,
  usePrototypeReviewOptional,
  type PrototypeStateCanvasConfig,
} from "proto-plugin";
import { useCallback, useEffect, useState } from "react";

import { SettingsMainContent } from "./_components/settings-main-content";
import {
  createLiveStateForPreview,
  DEFAULT_SETTINGS_PREVIEW_STATE,
  type SettingsPreviewStateId,
} from "./_components/settings-preview-states";
import { SettingsPreviewStateSelect } from "./_components/settings-preview-state-select";
import { SettingsShellLayout } from "./_components/settings-shell-layout";
import { buildSettingsStateCanvasConfig } from "./_components/settings-state-canvas-config";
import type { SettingsLiveState } from "./_components/settings-types";
import "./_components/settings-tokens.css";

function createDefaultLiveState(): SettingsLiveState {
  return createLiveStateForPreview(DEFAULT_SETTINGS_PREVIEW_STATE);
}

function inferPreviewStateId(state: SettingsLiveState): SettingsPreviewStateId {
  if (state.isLoading) return "general-settings-loading";
  if (state.isSubmitting) return "general-settings-saving";
  if (state.isHelpMenuOpen) return "help-menu-open";
  if (state.isSidebarCollapsed) return "sidebar-collapsed";
  if (!state.isTelemetryEnabled) return "general-settings-telemetry-off";
  return "general-settings-default";
}

export default function SettingsPage() {
  const [liveState, setLiveState] = useState<SettingsLiveState>(createDefaultLiveState);
  const review = usePrototypeReviewOptional();
  const setStateCanvasConfig = review?.setStateCanvasConfig;

  const onRestore = useCallback((restored: SettingsLiveState) => {
    setLiveState(restored);
  }, []);

  usePrototypeComments(liveState, onRestore);

  const setPreviewState = useCallback((previewStateId: SettingsPreviewStateId) => {
    setLiveState(createLiveStateForPreview(previewStateId));
  }, []);

  const setInstanceName = useCallback((instanceName: string) => {
    setLiveState((current) => {
      const next = { ...current, instanceName };
      return { ...next, previewStateId: inferPreviewStateId(next) };
    });
  }, []);

  const setTelemetryEnabled = useCallback((isTelemetryEnabled: boolean) => {
    setLiveState((current) => {
      const next = { ...current, isTelemetryEnabled };
      return { ...next, previewStateId: inferPreviewStateId(next) };
    });
  }, []);

  const setSidebarCollapsed = useCallback((isSidebarCollapsed: boolean) => {
    setLiveState((current) => {
      const next = { ...current, isSidebarCollapsed };
      return { ...next, previewStateId: inferPreviewStateId(next) };
    });
  }, []);

  const setHelpMenuOpen = useCallback((isHelpMenuOpen: boolean) => {
    setLiveState((current) => {
      const next = { ...current, isHelpMenuOpen };
      return { ...next, previewStateId: inferPreviewStateId(next) };
    });
  }, []);

  const handleSave = useCallback(() => {
    setLiveState((current) => ({
      ...current,
      isSubmitting: true,
      previewStateId: "general-settings-saving",
    }));
  }, []);

  useEffect(() => {
    if (!setStateCanvasConfig) return;

    setStateCanvasConfig(
      buildSettingsStateCanvasConfig(setPreviewState) as PrototypeStateCanvasConfig,
    );

    return () => setStateCanvasConfig(null);
  }, [setPreviewState, setStateCanvasConfig]);

  return (
    <PrototypeComponent
      id="scroll-container"
      className={PROTOTYPE_SCROLL_CONTAINER_CLASS}
      data-plane-admin
    >
      <PrototypeComponent id="page" className={PROTOTYPE_PAGE_CLASS}>
        <SettingsShellLayout
          isSidebarCollapsed={liveState.isSidebarCollapsed}
          isHelpMenuOpen={liveState.isHelpMenuOpen}
          onToggleSidebar={() => setSidebarCollapsed(!liveState.isSidebarCollapsed)}
          onToggleHelpMenu={() => setHelpMenuOpen(!liveState.isHelpMenuOpen)}
        >
          <SettingsMainContent
            liveState={liveState}
            onInstanceNameChange={setInstanceName}
            onTelemetryChange={setTelemetryEnabled}
            onSave={handleSave}
          />
        </SettingsShellLayout>

        <SettingsPreviewStateSelect
          previewStateId={liveState.previewStateId}
          onPreviewStateChange={setPreviewState}
        />
      </PrototypeComponent>
    </PrototypeComponent>
  );
}
