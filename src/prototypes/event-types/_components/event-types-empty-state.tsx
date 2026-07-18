"use client";

import { PrototypeComponent } from "proto-plugin";

import { NeutralButton, NeutralEmptyScreen } from "./neutral-ui";

type EventTypesEmptyStateProps = {
  searchTerm: string;
  onCreateClick: () => void;
};

export function EventTypesEmptyState({
  searchTerm,
  onCreateClick,
}: EventTypesEmptyStateProps) {
  const headline = searchTerm
    ? `No result found for "${searchTerm}"`
    : "Add a new event type";

  return (
    <PrototypeComponent id="event-types-empty-state" className="w-full">
      <NeutralEmptyScreen
        Icon="link"
        headline={headline}
        description="Event types enable you to share links that show available times on your calendar and allow people to make bookings with you."
        className="mb-16"
        buttonRaw={
          <NeutralButton variant="button" onClick={onCreateClick}>
            Create
          </NeutralButton>
        }
      />
    </PrototypeComponent>
  );
}
