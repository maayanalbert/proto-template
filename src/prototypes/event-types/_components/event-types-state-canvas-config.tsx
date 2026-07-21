"use client";

import type { PrototypeStateCanvasConfig } from "proto-plugin";
import { PR_TARGET_HIGHLIGHT_BORDER, PR_TARGET_HIGHLIGHT_FILL } from "proto-plugin";

import { EVENT_TYPES_PREVIEW_STATE_REGISTRY } from "./event-types-preview-states";
import type { EventTypesPreviewStateId } from "./event-types-types";

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

function renderWireframe(stateId: EventTypesPreviewStateId) {
  switch (stateId) {
    case "loading":
      return (
        <div className="flex h-full flex-col gap-1 p-2">
          <WireBlock className="h-3 w-1/3 rounded-sm" />
          <WireBlock className="h-2 w-2/3 rounded-sm" />
          <WireBlock className="flex-1 rounded-sm" highlight />
        </div>
      );
    case "empty":
      return (
        <div className="relative flex h-full gap-1 p-2">
          <WireBlock className="w-[18%] rounded-sm" />
          <div className="relative flex-1">
            <WireBlock className="absolute inset-0 rounded-sm opacity-60" />
            <WireBlock
              className="absolute left-1/2 top-1/2 h-8 w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-sm"
              highlight
            />
          </div>
        </div>
      );
    case "search-no-results":
      return (
        <div className="relative flex h-full gap-1 p-2">
          <WireBlock className="w-[18%] rounded-sm" />
          <div className="relative flex-1">
            <WireBlock className="absolute inset-0 rounded-sm" highlight />
            <WireBlock className="absolute left-1/2 top-1/3 h-3 w-2/3 -translate-x-1/2 rounded-sm opacity-70" />
            <WireBlock className="absolute left-1/2 top-1/2 h-6 w-1/3 -translate-x-1/2 rounded-sm opacity-70" />
          </div>
        </div>
      );
    case "create-dialog":
    case "delete-dialog":
      return (
        <div className="relative flex h-full gap-1 p-2">
          <WireBlock className="w-[18%] rounded-sm" />
          <div className="relative flex-1">
            <WireBlock className="absolute inset-0 rounded-sm opacity-50" />
            <WireBlock
              className="absolute left-1/2 top-1/2 h-10 w-2/5 -translate-x-1/2 -translate-y-1/2 rounded-sm"
              highlight
            />
          </div>
        </div>
      );
    case "row-options-menu":
      return (
        <div className="relative flex h-full gap-1 p-2">
          <WireBlock className="w-[18%] rounded-sm" />
          <div className="relative flex-1">
            <WireBlock className="absolute inset-0 rounded-sm" highlight />
            <WireBlock className="absolute right-2 top-1/2 h-8 w-16 -translate-y-1/2 rounded-sm opacity-80" />
          </div>
        </div>
      );
    case "populated":
    default:
      return (
        <div className="flex h-full gap-1 p-2">
          <WireBlock className="w-[18%] rounded-sm" />
          <WireBlock className="flex-1 rounded-sm" highlight />
        </div>
      );
  }
}

export function buildEventTypesStateCanvasConfig(
  onStateSelect: (previewStateId: EventTypesPreviewStateId) => void,
): PrototypeStateCanvasConfig<EventTypesPreviewStateId> {
  const registry = EVENT_TYPES_PREVIEW_STATE_REGISTRY;

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
