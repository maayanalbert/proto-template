import { definePreviewStateRegistry } from "proto-plugin";

import { EXAMPLE_DOMAIN } from "./simple-screen-mock-data";
import type {
  SimpleScreenLiveState,
  SimpleScreenPreviewStateId,
} from "./simple-screen-types";

export type { SimpleScreenPreviewStateId };

export const DEFAULT_SIMPLE_SCREEN_PREVIEW_STATE: SimpleScreenPreviewStateId =
  "default";

export function createLiveStateForPreview(
  previewStateId: SimpleScreenPreviewStateId = DEFAULT_SIMPLE_SCREEN_PREVIEW_STATE,
): SimpleScreenLiveState {
  return { previewStateId };
}

export function inferPreviewStateId(): SimpleScreenPreviewStateId {
  return "default";
}

export const SIMPLE_SCREEN_PREVIEW_STATE_REGISTRY = definePreviewStateRegistry({
  canvasLayout: {
    rows: [
      {
        section: { label: "Example domain" },
        states: ["default"],
      },
    ],
  },
  states: [
    {
      id: "default",
      label: "Default",
      annotation: `Static "${EXAMPLE_DOMAIN.title}" page with heading, description, and external learn-more link.`,
    },
  ],
  edges: [],
});

export const SIMPLE_SCREEN_PREVIEW_OPTIONS =
  SIMPLE_SCREEN_PREVIEW_STATE_REGISTRY.pickerOptions;
