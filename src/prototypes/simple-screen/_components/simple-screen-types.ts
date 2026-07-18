export const SIMPLE_SCREEN_PREVIEW_STATE_IDS = ["default"] as const;

export type SimpleScreenPreviewStateId =
  (typeof SIMPLE_SCREEN_PREVIEW_STATE_IDS)[number];

export type SimpleScreenLiveState = {
  previewStateId: SimpleScreenPreviewStateId;
};
