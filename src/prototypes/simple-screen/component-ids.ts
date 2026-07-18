import { definePrototypeComponentRegistry } from "proto-plugin";

export const SIMPLE_SCREEN_COMPONENT_IDS = [
  "page",
  "scroll-container",
  "simple-screen-preview-state-select",
  "simple-screen-content",
] as const;

export const SIMPLE_SCREEN_DYNAMIC_TARGET_PREFIXES = [] as const;

export const simpleScreenComponentRegistry = definePrototypeComponentRegistry({
  ids: SIMPLE_SCREEN_COMPONENT_IDS,
  dynamicPrefixes: SIMPLE_SCREEN_DYNAMIC_TARGET_PREFIXES,
});
