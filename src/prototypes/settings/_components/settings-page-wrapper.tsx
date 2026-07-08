"use client";

import { PrototypeComponent } from "proto-plugin";
import type { ReactNode } from "react";

type SettingsPageWrapperProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export function SettingsPageWrapper({ title, description, children }: SettingsPageWrapperProps) {
  return (
    <PrototypeComponent
      id="settings-page-wrapper"
      className="mx-auto h-full w-full max-w-[1000px] space-y-6 py-4 md:px-4 2xl:max-w-[1200px]"
    >
      <div className="border-subtle mx-4 flex shrink-0 items-center justify-between gap-4 space-y-1 border-b py-4">
        <div className="space-y-1">
          <div className="text-h5-semibold text-primary">{title}</div>
          <div className="text-body-sm-regular text-secondary">{description}</div>
        </div>
      </div>
      <div className="flex-grow overflow-hidden overflow-y-auto px-4 pb-4">{children}</div>
    </PrototypeComponent>
  );
}
