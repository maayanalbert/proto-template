"use client";

import {
  PR_TARGET_HIGHLIGHT_BORDER,
  PR_TARGET_HIGHLIGHT_FILL,
  type PrototypeStateCanvasConfig,
} from "proto-plugin";

import { SETTINGS_PREVIEW_STATE_REGISTRY } from "./settings-preview-states";
import type { SettingsPreviewStateId } from "./settings-types";

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

function renderWireframe(stateId: SettingsPreviewStateId) {
  switch (stateId) {
    case "general-settings-default":
    case "general-settings-telemetry-off":
    case "general-settings-saving":
      return (
        <div className="flex h-full gap-1 p-2">
          <WireBlock className="w-1/4 rounded-sm" />
          <div className="flex flex-1 flex-col gap-1">
            <WireBlock className="h-4 w-full rounded-sm" />
            <WireBlock className="flex-1 rounded-sm" highlight />
          </div>
        </div>
      );
    case "general-settings-loading":
      return (
        <div className="flex h-full gap-1 p-2">
          <WireBlock className="w-1/4 rounded-sm" />
          <div className="flex flex-1 flex-col gap-1">
            <WireBlock className="h-4 w-full rounded-sm" />
            <WireBlock className="flex-1 rounded-sm border border-dashed opacity-40" />
          </div>
        </div>
      );
    case "sidebar-collapsed":
      return (
        <div className="flex h-full gap-1 p-2">
          <WireBlock className="w-[18%] rounded-sm" highlight />
          <div className="flex flex-1 flex-col gap-1">
            <WireBlock className="h-4 w-full rounded-sm" />
            <WireBlock className="flex-1 rounded-sm" />
          </div>
        </div>
      );
    case "help-menu-open":
      return (
        <div className="relative flex h-full gap-1 p-2">
          <div className="relative w-1/4">
            <WireBlock className="h-full rounded-sm" highlight />
            <WireBlock className="absolute bottom-2 left-full ml-1 h-8 w-10 rounded-sm border border-dashed" highlight />
          </div>
          <div className="flex flex-1 flex-col gap-1">
            <WireBlock className="h-4 w-full rounded-sm" />
            <WireBlock className="flex-1 rounded-sm" />
          </div>
        </div>
      );
    default:
      return null;
  }
}

export function buildSettingsStateCanvasConfig(
  onStateSelect: (stateId: SettingsPreviewStateId) => void,
): PrototypeStateCanvasConfig<SettingsPreviewStateId> {
  const registry = SETTINGS_PREVIEW_STATE_REGISTRY;

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
