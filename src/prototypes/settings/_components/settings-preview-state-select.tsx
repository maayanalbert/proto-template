"use client";

import {
  ControlsPanelSelect,
  PrototypeControl,
  usePrototypeReviewOptional,
} from "proto-plugin";
import { useLayoutEffect } from "react";

import {
  SETTINGS_PREVIEW_OPTIONS,
  type SettingsPreviewStateId,
} from "./settings-preview-states";

type SettingsPreviewStateSelectProps = {
  previewStateId: SettingsPreviewStateId;
  onPreviewStateChange: (id: SettingsPreviewStateId) => void;
};

export function SettingsPreviewStateSelect({
  previewStateId,
  onPreviewStateChange,
}: SettingsPreviewStateSelectProps) {
  const review = usePrototypeReviewOptional();
  const setTweaksContent = review?.setTweaksContent;

  useLayoutEffect(() => {
    if (!setTweaksContent) return;

    setTweaksContent(
      <ControlsPanelSelect
        appearance="menuList"
        value={previewStateId}
        onValueChange={onPreviewStateChange}
        options={SETTINGS_PREVIEW_OPTIONS}
      />,
    );

    return () => setTweaksContent(null);
  }, [onPreviewStateChange, previewStateId, setTweaksContent]);

  return <PrototypeControl id="settings-preview-state-select" />;
}
