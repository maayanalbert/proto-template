"use client";

import { PrototypeComponent } from "proto-plugin";
import { Telescope } from "lucide-react";

import { SettingsButton, SettingsInput, SettingsToggleSwitch } from "./settings-ui";
import type { SettingsLiveState } from "./settings-types";

type SettingsGeneralFormProps = {
  liveState: SettingsLiveState;
  onInstanceNameChange: (value: string) => void;
  onTelemetryChange: (value: boolean) => void;
  onSave: () => void;
};

export function SettingsGeneralForm({
  liveState,
  onInstanceNameChange,
  onTelemetryChange,
  onSave,
}: SettingsGeneralFormProps) {
  const { instanceName, adminEmail, instanceId, isTelemetryEnabled, isSubmitting } = liveState;

  return (
    <PrototypeComponent id="settings-general-form" className="space-y-8">
      <div className="space-y-4">
        <div className="text-16 text-primary font-medium">Instance details</div>
        <div className="grid w-full grid-cols-1 items-center justify-between gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-1">
            <h4 className="text-13 text-tertiary">Name of instance</h4>
            <SettingsInput
              id="instance_name"
              name="instance_name"
              type="text"
              value={instanceName}
              onChange={(event) => onInstanceNameChange(event.target.value)}
              placeholder="Instance name"
              className="w-full rounded-md font-medium"
              disabled={isSubmitting}
            />
          </div>

          <div className="flex flex-col gap-1">
            <h4 className="text-13 text-tertiary">Email</h4>
            <SettingsInput
              id="email"
              name="email"
              type="email"
              value={adminEmail}
              placeholder="Admin email"
              className="settings-text-placeholder w-full cursor-not-allowed"
              autoComplete="on"
              disabled
            />
          </div>

          <div className="flex flex-col gap-1">
            <h4 className="text-13 text-tertiary">Instance ID</h4>
            <SettingsInput
              id="instance_id"
              name="instance_id"
              type="text"
              value={instanceId}
              className="settings-text-placeholder w-full cursor-not-allowed rounded-md font-medium"
              disabled
            />
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="border-subtle text-16 text-primary border-b pb-1.5 font-medium">Telemetry</div>
        <div className="flex items-center gap-14">
          <div className="flex grow items-center gap-4">
            <div className="shrink-0">
              <div className="bg-layer-1 flex size-11 items-center justify-center rounded-lg">
                <Telescope className="text-tertiary size-5" />
              </div>
            </div>
            <div className="grow">
              <div className="text-13 text-primary leading-5 font-medium">
                Let Plane collect anonymous usage data
              </div>
              <div className="text-11 text-tertiary leading-5 font-regular">
                No PII is collected.This anonymized data is used to understand how you use Plane and build new
                features in line with{" "}
                <a
                  href="https://developers.plane.so/self-hosting/telemetry"
                  target="_blank"
                  className="text-accent-primary hover:underline"
                  rel="noreferrer"
                >
                  our Telemetry Policy.
                </a>
              </div>
            </div>
          </div>
          <div className={isSubmitting ? "shrink-0 opacity-70" : "shrink-0"}>
            <SettingsToggleSwitch
              value={isTelemetryEnabled}
              onChange={onTelemetryChange}
              disabled={isSubmitting}
            />
          </div>
        </div>
      </div>

      <div>
        <SettingsButton variant="primary" size="lg" loading={isSubmitting} onClick={onSave}>
          {isSubmitting ? "Saving" : "Save changes"}
        </SettingsButton>
      </div>
    </PrototypeComponent>
  );
}
