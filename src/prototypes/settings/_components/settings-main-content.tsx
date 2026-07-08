"use client";

import { PrototypeComponent } from "proto-plugin";

import { SettingsGeneralForm } from "./settings-general-form";
import { SettingsPageWrapper } from "./settings-page-wrapper";
import type { SettingsLiveState } from "./settings-types";

type SettingsMainContentProps = {
  liveState: SettingsLiveState;
  onInstanceNameChange: (value: string) => void;
  onTelemetryChange: (value: boolean) => void;
  onSave: () => void;
};

export function SettingsMainContent({
  liveState,
  onInstanceNameChange,
  onTelemetryChange,
  onSave,
}: SettingsMainContentProps) {
  return (
    <PrototypeComponent id="settings-main-content" className="h-full w-full">
      <SettingsPageWrapper
        title="General settings"
        description="Change the name of your instance and instance admin e-mail addresses. Enable or disable telemetry in your instance."
      >
        {!liveState.isLoading ? (
          <SettingsGeneralForm
            liveState={liveState}
            onInstanceNameChange={onInstanceNameChange}
            onTelemetryChange={onTelemetryChange}
            onSave={onSave}
          />
        ) : null}
      </SettingsPageWrapper>
    </PrototypeComponent>
  );
}
