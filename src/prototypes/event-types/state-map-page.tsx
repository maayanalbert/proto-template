"use client";

import {
  PREVIEW_STATE_PARAM,
  PrototypeComponent,
  PrototypeStateCanvasRegistrar,
  PrototypeStateCanvasView,
  getDefaultPrototypeStateMapPath,
  parseStateMapReturnTo,
} from "proto-plugin";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";

import { buildEventTypesStateCanvasConfig } from "./_components/event-types-state-canvas-config";
import type { EventTypesPreviewStateId } from "./_components/event-types-types";

const EVENT_TYPES_SLUG = "event-types";

export default function EventTypesStateMapPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pagePath = getDefaultPrototypeStateMapPath(EVENT_TYPES_SLUG);
  const prototypePath = `/prototypes/${EVENT_TYPES_SLUG}`;
  const backHref = useMemo(() => {
    const returnTo = parseStateMapReturnTo(searchParams);
    if (returnTo) return returnTo;
    return prototypePath;
  }, [prototypePath, searchParams]);

  const handleStateSelect = useCallback(
    (previewStateId: EventTypesPreviewStateId) => {
      const url = new URL(backHref, window.location.origin);
      url.searchParams.set(PREVIEW_STATE_PARAM, previewStateId);
      router.push(`${url.pathname}${url.search}`);
    },
    [backHref, router],
  );

  const config = useMemo(
    () => buildEventTypesStateCanvasConfig(handleStateSelect),
    [handleStateSelect],
  );

  return (
    <PrototypeComponent id="page">
      <PrototypeStateCanvasRegistrar pagePath={pagePath} />
      <PrototypeStateCanvasView config={config} layout="page" backHref={backHref} />
    </PrototypeComponent>
  );
}
