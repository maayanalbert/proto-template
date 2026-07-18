"use client";

import {
  ControlsPanelSelect,
  PrototypeControl,
  usePrototypeReviewOptional,
} from "proto-plugin";
import { useLayoutEffect } from "react";

import {
  SIMPLE_SCREEN_PREVIEW_OPTIONS,
  type SimpleScreenPreviewStateId,
} from "./simple-screen-preview-states";

type SimpleScreenPreviewStateSelectProps = {
  previewStateId: SimpleScreenPreviewStateId;
  onPreviewStateChange: (id: SimpleScreenPreviewStateId) => void;
};

export function SimpleScreenPreviewStateSelect({
  previewStateId,
  onPreviewStateChange,
}: SimpleScreenPreviewStateSelectProps) {
  const review = usePrototypeReviewOptional();
  const setTweaksContent = review?.setTweaksContent;
  const setActivePreviewStateId = review?.setActivePreviewStateId;

  useLayoutEffect(() => {
    if (!setActivePreviewStateId) return;
    setActivePreviewStateId(previewStateId);
    return () => setActivePreviewStateId(null);
  }, [previewStateId, setActivePreviewStateId]);

  useLayoutEffect(() => {
    if (!setTweaksContent) return;

    setTweaksContent(
      <ControlsPanelSelect
        appearance="menuList"
        value={previewStateId}
        onValueChange={onPreviewStateChange}
        options={SIMPLE_SCREEN_PREVIEW_OPTIONS}
      />,
    );

    return () => setTweaksContent(null);
  }, [onPreviewStateChange, previewStateId, setTweaksContent]);

  return <PrototypeControl id="simple-screen-preview-state-select" />;
}
