"use client";

import { PrototypeComponent, PrototypeVariantExplorer } from "proto-plugin";

import {
  buildEventTypesSecretEventsTransitionDesignExplorationConfig,
} from "./event-types-secret-events-transition-design-exploration-config";
import type { EventTypesSecretEventsTransitionChoice } from "./event-types-secret-events-transition-content";
import { EVENT_TYPES_SECRET_EVENTS_TRANSITION_VARIANT_SET } from "./event-types-variant-sets";

type EventTypesSecretEventsTransitionVariantToggleProps = {
  variant: EventTypesSecretEventsTransitionChoice;
  onVariantChange: (next: EventTypesSecretEventsTransitionChoice) => void;
  registerOnly?: boolean;
};

export function EventTypesSecretEventsTransitionVariantToggle({
  variant,
  onVariantChange,
  registerOnly = false,
}: EventTypesSecretEventsTransitionVariantToggleProps) {
  return (
    <PrototypeComponent
      id="event-types-secret-events-transition-variant-toggle"
      className="relative z-30 shrink-0"
    >
      <PrototypeVariantExplorer
        {...buildEventTypesSecretEventsTransitionDesignExplorationConfig(
          variant,
          onVariantChange,
        )}
        variantSet={EVENT_TYPES_SECRET_EVENTS_TRANSITION_VARIANT_SET}
        mobbinGalleryId="event-types-secret-events-transition-mobbin-inspiration-gallery"
        wrapRoot={false}
        registerOnly={registerOnly}
        hideInlinePreview={!registerOnly}
      />
    </PrototypeComponent>
  );
}
