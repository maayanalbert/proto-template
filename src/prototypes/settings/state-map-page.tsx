"use client";

import {
  buildPrototypeTargetId,
  encodeShareState,
  getDefaultPrototypeStateMapPath,
  parseStateMapReturnTo,
  PrototypeStateCanvasRegistrar,
  PrototypeStateCanvasView,
  SHARE_STATE_PARAM,
  SHARE_TARGET_PARAM,
} from "proto-plugin";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";

import { buildSettingsStateCanvasConfig } from "./_components/settings-state-canvas-config";
import {
  createLiveStateForPreview,
  type SettingsPreviewStateId,
} from "./_components/settings-preview-states";

const SETTINGS_SLUG = "settings";

export default function SettingsStateMapPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pagePath = getDefaultPrototypeStateMapPath(SETTINGS_SLUG);
  const prototypePath = `/prototypes/${SETTINGS_SLUG}`;
  const backHref = useMemo(() => {
    const returnTo = parseStateMapReturnTo(searchParams);
    if (returnTo) return returnTo;
    return prototypePath;
  }, [prototypePath, searchParams]);

  const handleStateSelect = useCallback(
    (stateId: SettingsPreviewStateId) => {
      const url = new URL(backHref, window.location.origin);
      url.searchParams.set(
        SHARE_TARGET_PARAM,
        buildPrototypeTargetId(SETTINGS_SLUG, "page"),
      );
      url.searchParams.set(
        SHARE_STATE_PARAM,
        encodeShareState(createLiveStateForPreview(stateId)),
      );
      router.push(`${url.pathname}${url.search}`);
    },
    [backHref, router],
  );

  const config = useMemo(
    () => buildSettingsStateCanvasConfig(handleStateSelect),
    [handleStateSelect],
  );

  return (
    <>
      <PrototypeStateCanvasRegistrar pagePath={pagePath} />
      <PrototypeStateCanvasView
        config={config}
        layout="page"
        backHref={backHref}
      />
    </>
  );
}
