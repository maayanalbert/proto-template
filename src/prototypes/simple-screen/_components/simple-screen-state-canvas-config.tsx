"use client";

import {
  PR_TARGET_HIGHLIGHT_BORDER,
  PR_TARGET_HIGHLIGHT_FILL,
  type PrototypeStateCanvasConfig,
} from "proto-plugin";

import type { SimpleScreenPreviewStateId } from "./simple-screen-types";
import { SIMPLE_SCREEN_PREVIEW_STATE_REGISTRY } from "./simple-screen-preview-states";

function WireBlock({
  className,
  highlight,
}: {
  className?: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={className}
      style={
        highlight
          ? {
              background: PR_TARGET_HIGHLIGHT_FILL,
              border: `1px solid ${PR_TARGET_HIGHLIGHT_BORDER}`,
            }
          : { background: "var(--cal-bg-emphasis, #e5e7eb)" }
      }
    />
  );
}

function renderWireframe(stateId: SimpleScreenPreviewStateId) {
  switch (stateId) {
    case "default":
      return (
        <div className="flex h-full items-center justify-center p-4">
          <div className="flex w-3/4 flex-col gap-1 rounded-sm p-2">
            <WireBlock className="h-3 w-2/3 rounded-sm" highlight />
            <WireBlock className="h-2 w-full rounded-sm" />
            <WireBlock className="h-2 w-full rounded-sm" />
            <WireBlock className="h-2 w-1/4 rounded-sm" />
          </div>
        </div>
      );
    default:
      return null;
  }
}

export function buildSimpleScreenStateCanvasConfig(
  onStateSelect: (stateId: SimpleScreenPreviewStateId) => void,
): PrototypeStateCanvasConfig<SimpleScreenPreviewStateId> {
  const registry = SIMPLE_SCREEN_PREVIEW_STATE_REGISTRY;

  return {
    onStateSelect,
    nodes: registry.canvasNodes,
    edges: registry.canvasEdges,
    sections: registry.canvasSections,
    canvasWidth: registry.canvasSize.width,
    canvasHeight: registry.canvasSize.height,
    renderWireframe,
  };
}
