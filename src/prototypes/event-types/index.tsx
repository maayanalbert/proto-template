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

import { DashboardShell } from "./_components/dashboard-shell";
import { EventTypesPageContent } from "./_components/event-types-page-content";
import {
  createLiveStateForPreview,
  DEFAULT_EVENT_TYPES_PREVIEW_STATE,
} from "./_components/event-types-preview-states";
import { EventTypesPreviewStateSelect } from "./_components/event-types-preview-state-select";
import { buildEventTypesStateCanvasConfig } from "./_components/event-types-state-canvas-config";
import type { EventTypesLiveState, EventTypesPreviewStateId } from "./_components/event-types-types";
import { EVENT_TYPES_PREVIEW_STATE_IDS } from "./_components/event-types-types";

function createDefaultLiveState(): EventTypesLiveState {
  return createLiveStateForPreview(DEFAULT_EVENT_TYPES_PREVIEW_STATE);
}

export default function EventTypesPage() {
  const [liveState, setLiveState] = useState<EventTypesLiveState>(createDefaultLiveState);
  const review = usePrototypeReviewOptional();
  const setStateCanvasConfig = review?.setStateCanvasConfig;

  const onRestore = useCallback((restored: EventTypesLiveState) => {
    setLiveState(restored);
  }, []);

  const setPreviewState = useCallback((previewStateId: EventTypesPreviewStateId) => {
    setLiveState(createLiveStateForPreview(previewStateId));
  }, []);

  usePrototypeComments(liveState, onRestore);
  useSyncPrototypePreviewStateToUrl(liveState.previewStateId, setPreviewState, {
    validStateIds: EVENT_TYPES_PREVIEW_STATE_IDS,
  });

  useEffect(() => {
    if (!setStateCanvasConfig) return;
    setStateCanvasConfig(buildEventTypesStateCanvasConfig(setPreviewState));
    return () => setStateCanvasConfig(null);
  }, [setPreviewState, setStateCanvasConfig]);

  return (
    <PrototypeComponent
      id="scroll-container"
      className={cn(PROTOTYPE_SCROLL_CONTAINER_CLASS, "bg-default text-default min-h-0 h-full")}
    >
      <PrototypeComponent id="page" className={cn(PROTOTYPE_PAGE_CLASS, "relative min-h-0 h-full")}>
        <EventTypesPreviewStateSelect
          previewStateId={liveState.previewStateId}
          onPreviewStateChange={setPreviewState}
        />
        <DashboardShell>
          <EventTypesPageContent
            liveState={liveState}
            onLiveStateChange={(updater) => setLiveState(updater)}
          />
        </DashboardShell>
      </PrototypeComponent>
    </PrototypeComponent>
  );
}
