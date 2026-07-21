"use client";

import { Link2 } from "lucide-react";
import { PrototypeComponent } from "proto-plugin";

import { calBrandButtonClass, calButtonActiveContentClass } from "./cal-primitive-classes";

type EventTypesEmptyStateProps = {
  searchTerm?: string;
  onCreateClick: () => void;
};

export function EventTypesEmptyState({ searchTerm, onCreateClick }: EventTypesEmptyStateProps) {
  const isSearchEmpty = Boolean(searchTerm?.trim());

  return (
    <PrototypeComponent id="event-types-empty-state">
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emphasis text-emphasis">
          <Link2 className="h-6 w-6" aria-hidden="true" />
        </div>
        <h3 className="text-emphasis text-lg font-semibold">
          {isSearchEmpty ? `No result found for "${searchTerm}"` : "Create a new event type"}
        </h3>
        <p className="text-default mt-2 max-w-md text-sm leading-normal">
          {isSearchEmpty
            ? "Try searching with a different term or clear the search field."
            : "Event types enable you to share links for booking events."}
        </p>
        {!isSearchEmpty ? (
          <div className="mt-6">
            <button type="button" className={calBrandButtonClass} onClick={onCreateClick}>
              <div className={calButtonActiveContentClass}>Create</div>
            </button>
          </div>
        ) : null}
      </div>
    </PrototypeComponent>
  );
}
