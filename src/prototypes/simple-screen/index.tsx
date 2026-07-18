"use client";

import {
  PROTOTYPE_PAGE_CLASS,
  PROTOTYPE_SCROLL_CONTAINER_CLASS,
  PrototypeComponent,
  usePrototypeComments,
  usePrototypeReviewOptional,
  useSyncPrototypePreviewStateToUrl,
} from "proto-plugin";
import { cn } from "ui";
import { useCallback, useEffect, useState } from "react";

import { SimpleScreenContent } from "./_components/simple-screen-content";
import {
  createLiveStateForPreview,
  DEFAULT_SIMPLE_SCREEN_PREVIEW_STATE,
} from "./_components/simple-screen-preview-states";
import { SimpleScreenPreviewStateSelect } from "./_components/simple-screen-preview-state-select";
import { buildSimpleScreenStateCanvasConfig } from "./_components/simple-screen-state-canvas-config";
import type {
  SimpleScreenLiveState,
  SimpleScreenPreviewStateId,
} from "./_components/simple-screen-types";
import { SIMPLE_SCREEN_PREVIEW_STATE_IDS } from "./_components/simple-screen-types";

function createDefaultLiveState(): SimpleScreenLiveState {
  return createLiveStateForPreview(DEFAULT_SIMPLE_SCREEN_PREVIEW_STATE);
}

export default function SimpleScreenPage() {
  const [liveState, setLiveState] = useState<SimpleScreenLiveState>(createDefaultLiveState);
  const review = usePrototypeReviewOptional();

  const onRestore = useCallback((restored: SimpleScreenLiveState) => {
    setLiveState(restored);
  }, []);

  usePrototypeComments(liveState, onRestore);

  const setPreviewState = useCallback((previewStateId: SimpleScreenPreviewStateId) => {
    setLiveState(createLiveStateForPreview(previewStateId));
  }, []);

  useSyncPrototypePreviewStateToUrl(liveState.previewStateId, setPreviewState, {
    validStateIds: SIMPLE_SCREEN_PREVIEW_STATE_IDS,
  });

  const setStateCanvasConfig = review?.setStateCanvasConfig;
  useEffect(() => {
    if (!setStateCanvasConfig) return;

    setStateCanvasConfig(buildSimpleScreenStateCanvasConfig(setPreviewState));

    return () => setStateCanvasConfig(null);
  }, [setPreviewState, setStateCanvasConfig]);

  return (
    <PrototypeComponent
      id="scroll-container"
      className={cn(
        "simple-screen-theme",
        PROTOTYPE_SCROLL_CONTAINER_CLASS,
        "min-h-full flex-1",
      )}
    >
      <PrototypeComponent id="page" className={cn(PROTOTYPE_PAGE_CLASS, "min-h-full flex-1")}>
        <SimpleScreenContent />
        <SimpleScreenPreviewStateSelect
          previewStateId={liveState.previewStateId}
          onPreviewStateChange={setPreviewState}
        />
      </PrototypeComponent>
    </PrototypeComponent>
  );
}
