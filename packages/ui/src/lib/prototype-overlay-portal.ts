const PROTOTYPE_VIEWPORT_ID = "prototype-viewport";
const PROTOTYPE_PREVIEW_STAGE_ID = "prototype-preview-stage";

/**
 * Product overlays in proto-plugin previews should portal into the preview frame
 * so they inherit light product tokens from `[data-prototype-screenshot]`.
 */
export function getPrototypeProductOverlayPortalContainer(): HTMLElement | undefined {
  if (typeof document === "undefined") return undefined;

  return (
    document.getElementById(PROTOTYPE_VIEWPORT_ID) ??
    document.getElementById(PROTOTYPE_PREVIEW_STAGE_ID) ??
    undefined
  );
}
