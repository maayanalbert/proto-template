"use client";

import { useMemo } from "react";
import { PrototypeComponent } from "proto-plugin";

import { CreateEventTypeDialog } from "./create-event-type-dialog";
import { DeleteEventTypeDialog } from "./delete-event-type-dialog";
import { EventTypeListItem } from "./event-type-list-item";
import { EventTypesEmptyState } from "./event-types-empty-state";
import { EventTypesPageHeader } from "./event-types-page-header";
import { EventTypesSkeleton } from "./event-types-skeleton";
import { MOCK_EVENT_TYPES } from "./event-types-mock-data";
import type { EventTypesLiveState, MockEventType } from "./event-types-types";
import { withInferredPreviewState } from "./event-types-preview-states";

type EventTypesPageContentProps = {
  liveState: EventTypesLiveState;
  onLiveStateChange: (updater: (current: EventTypesLiveState) => EventTypesLiveState) => void;
};

function filterEventTypes(eventTypes: MockEventType[], query: string): MockEventType[] {
  const trimmed = query.trim().toLowerCase();
  if (!trimmed) return eventTypes;
  return eventTypes.filter(
    (eventType) =>
      eventType.title.toLowerCase().includes(trimmed) ||
      eventType.slug.toLowerCase().includes(trimmed),
  );
}

export function EventTypesPageContent({ liveState, onLiveStateChange }: EventTypesPageContentProps) {
  const visibleEventTypes = useMemo(() => {
    if (liveState.dataMode === "empty") return [];
    return filterEventTypes(MOCK_EVENT_TYPES, liveState.searchQuery);
  }, [liveState.dataMode, liveState.searchQuery]);

  const deleteTarget = MOCK_EVENT_TYPES.find((item) => item.id === liveState.deleteEventTypeId);

  const handleSearchChange = (value: string) => {
    onLiveStateChange((current) => {
      if (current.dataMode === "empty" || current.dataMode === "loading") {
        return withInferredPreviewState(current, { searchQuery: value });
      }

      const filtered = filterEventTypes(MOCK_EVENT_TYPES, value);
      const dataMode = value.trim() && filtered.length === 0 ? "search-no-results" : "populated";

      return withInferredPreviewState(current, {
        searchQuery: value,
        dataMode,
        overlay: "none",
        optionsMenuEventTypeId: null,
        deleteEventTypeId: null,
      });
    });
  };

  const handleNewClick = () => {
    onLiveStateChange((current) =>
      withInferredPreviewState(current, {
        overlay: "create-dialog",
        optionsMenuEventTypeId: null,
      }),
    );
  };

  const handleCreateDialogChange = (open: boolean) => {
    if (open) return;
    onLiveStateChange((current) =>
      withInferredPreviewState(current, {
        overlay: "none",
      }),
    );
  };

  const handleDeleteDialogChange = (open: boolean) => {
    if (open) return;
    onLiveStateChange((current) =>
      withInferredPreviewState(current, {
        overlay: "none",
        deleteEventTypeId: null,
      }),
    );
  };

  return (
    <PrototypeComponent id="event-types-page-content" className="relative max-w-full p-2 sm:p-4 lg:p-6">
      <EventTypesPageHeader
        searchQuery={liveState.searchQuery}
        onSearchChange={handleSearchChange}
        onNewClick={handleNewClick}
      />

      <div className="mt-4">
        {liveState.dataMode === "loading" ? (
          <EventTypesSkeleton />
        ) : liveState.dataMode === "empty" ? (
          <EventTypesEmptyState onCreateClick={handleNewClick} />
        ) : visibleEventTypes.length === 0 ? (
          <EventTypesEmptyState
            searchTerm={liveState.searchQuery}
            onCreateClick={handleNewClick}
          />
        ) : (
          <PrototypeComponent id="event-types-list">
            <div className="flex flex-col overflow-hidden rounded-md border border-subtle bg-default">
              <ul className="static! w-full divide-y divide-subtle" data-testid="event-types">
                {visibleEventTypes.map((eventType, index) => {
                  const isHidden =
                    eventType.hidden || liveState.hiddenEventTypeIds.includes(eventType.id);

                  return (
                    <EventTypeListItem
                      key={eventType.id}
                      eventType={eventType}
                      isFirst={index === 0}
                      isLast={index === visibleEventTypes.length - 1}
                      isHidden={isHidden}
                      optionsMenuOpen={liveState.optionsMenuEventTypeId === eventType.id}
                      onToggleHidden={() => {
                        onLiveStateChange((current) => {
                          const alreadyHidden = current.hiddenEventTypeIds.includes(eventType.id);
                          const hiddenEventTypeIds = alreadyHidden
                            ? current.hiddenEventTypeIds.filter((id) => id !== eventType.id)
                            : [...current.hiddenEventTypeIds, eventType.id];
                          return withInferredPreviewState(current, { hiddenEventTypeIds });
                        });
                      }}
                      onOpenOptionsMenu={() => {
                        onLiveStateChange((current) =>
                          withInferredPreviewState(current, {
                            optionsMenuEventTypeId: eventType.id,
                            overlay: "none",
                          }),
                        );
                      }}
                      onCloseOptionsMenu={() => {
                        onLiveStateChange((current) =>
                          withInferredPreviewState(current, {
                            optionsMenuEventTypeId: null,
                          }),
                        );
                      }}
                      onDeleteClick={() => {
                        onLiveStateChange((current) =>
                          withInferredPreviewState(current, {
                            overlay: "delete-dialog",
                            deleteEventTypeId: eventType.id,
                            optionsMenuEventTypeId: null,
                          }),
                        );
                      }}
                      onDuplicateClick={() => {
                        onLiveStateChange((current) =>
                          withInferredPreviewState(current, {
                            optionsMenuEventTypeId: null,
                          }),
                        );
                      }}
                    />
                  );
                })}
              </ul>
            </div>
          </PrototypeComponent>
        )}
      </div>

      <CreateEventTypeDialog
        open={liveState.overlay === "create-dialog"}
        onOpenChange={handleCreateDialogChange}
      />

      <DeleteEventTypeDialog
        open={liveState.overlay === "delete-dialog"}
        eventTypeTitle={deleteTarget?.title}
        onOpenChange={handleDeleteDialogChange}
        onConfirm={() => handleDeleteDialogChange(false)}
      />
    </PrototypeComponent>
  );
}
