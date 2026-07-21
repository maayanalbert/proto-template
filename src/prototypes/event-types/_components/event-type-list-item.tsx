"use client";

import { ExternalLink, Link2, MoreHorizontal } from "lucide-react";
import { PrototypeComponent } from "proto-plugin";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Switch,
  cn,
} from "ui";

import {
  calBrandButtonClass,
  calButtonActiveContentClass,
  calButtonGroupClass,
  calButtonGroupStyle,
  calSecondaryIconButtonClass,
  durationBadgeClass,
} from "./cal-primitive-classes";
import { MOCK_USER } from "./event-types-mock-data";
import type { MockEventType } from "./event-types-types";

type EventTypeListItemProps = {
  eventType: MockEventType;
  isFirst: boolean;
  isLast: boolean;
  isHidden: boolean;
  optionsMenuOpen: boolean;
  onToggleHidden: () => void;
  onOpenOptionsMenu: () => void;
  onCloseOptionsMenu: () => void;
  onDeleteClick: () => void;
  onDuplicateClick: () => void;
};

export function EventTypeListItem({
  eventType,
  isFirst,
  isLast,
  isHidden,
  optionsMenuOpen,
  onToggleHidden,
  onOpenOptionsMenu,
  onCloseOptionsMenu,
  onDeleteClick,
  onDuplicateClick,
}: EventTypeListItemProps) {
  const publicPath = `/${MOCK_USER.slug}/${eventType.slug}`;

  return (
    <PrototypeComponent id={`event-type-list-item.${eventType.id}`}>
      <li>
        <div className="flex w-full items-center justify-between transition hover:bg-cal-muted">
          <div className="group flex w-full max-w-full items-center justify-between overflow-hidden px-4 py-4 sm:px-6">
            {!isFirst ? (
              <button
                type="button"
                className="bg-default text-muted border-default hover:text-emphasis hover:border-emphasis invisible absolute left-0 -ml-4 -mt-4 mb-4 hidden h-6 w-6 scale-0 items-center justify-center rounded-md border p-1 transition-all group-hover:visible group-hover:scale-100 sm:ml-0 sm:flex lg:left-3"
                aria-hidden="true"
                tabIndex={-1}
              >
                ↑
              </button>
            ) : null}
            {!isLast ? (
              <button
                type="button"
                className="bg-default text-muted border-default hover:text-emphasis hover:border-emphasis invisible absolute left-0 -ml-4 mt-8 hidden h-6 w-6 scale-0 items-center justify-center rounded-md border p-1 transition-all group-hover:visible group-hover:scale-100 sm:ml-0 sm:flex lg:left-3"
                aria-hidden="true"
                tabIndex={-1}
              >
                ↓
              </button>
            ) : null}

            <div className="relative flex-1 overflow-hidden pr-4 text-sm">
              <button type="button" className="text-left w-full" title={eventType.title}>
                <div>
                  <span
                    className="break-words font-semibold text-default ltr:mr-1 rtl:ml-1"
                    data-testid={`event-type-title-${eventType.id}`}
                  >
                    {eventType.title}
                  </span>
                  <small
                    className="hidden font-normal text-subtle leading-4 sm:inline"
                    data-testid={`event-type-slug-${eventType.id}`}
                  >
                    {publicPath}
                  </small>
                </div>
                <div className="text-subtle">
                  <ul className="mt-2 flex flex-wrap gap-x-2 gap-y-1">
                    <li>
                      <div className={durationBadgeClass}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        {eventType.durationMinutes}m
                      </div>
                    </li>
                  </ul>
                </div>
              </button>
            </div>

            <div className="mt-4 hidden sm:mt-0 sm:flex">
              <div className="flex justify-between space-x-2 rtl:space-x-reverse">
                <div className="flex items-center justify-between space-x-2 rtl:space-x-reverse">
                  <div className="self-center rounded-md p-2">
                    <Switch checked={!isHidden} onCheckedChange={onToggleHidden} />
                  </div>
                  <div className={calButtonGroupClass} style={calButtonGroupStyle}>
                    <button
                      type="button"
                      className={calSecondaryIconButtonClass}
                      data-testid="preview-link-button"
                      aria-label="Preview"
                    >
                      <div className={calButtonActiveContentClass}>
                        <ExternalLink className="h-4 w-4 shrink-0" aria-hidden="true" />
                      </div>
                    </button>
                    <button type="button" className={calSecondaryIconButtonClass} aria-label="Copy link">
                      <div className={calButtonActiveContentClass}>
                        <Link2 className="h-4 w-4 shrink-0" aria-hidden="true" />
                      </div>
                    </button>
                    <DropdownMenu
                      open={optionsMenuOpen}
                      onOpenChange={(open) => (open ? onOpenOptionsMenu() : onCloseOptionsMenu())}
                      modal={false}
                    >
                      <DropdownMenuTrigger asChild>
                        <button
                          type="button"
                          className={cn(
                            calSecondaryIconButtonClass,
                            "ltr:radix-state-open:rounded-r-(--btn-group-radius) rtl:radix-state-open:rounded-l-(--btn-group-radius)",
                          )}
                          data-testid={`event-type-options-${eventType.id}`}
                          aria-label="Event type options"
                        >
                          <div className={calButtonActiveContentClass}>
                            <MoreHorizontal className="h-4 w-4 shrink-0" aria-hidden="true" />
                          </div>
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-default border-default text-default">
                        <DropdownMenuItem className="cursor-pointer">Edit</DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer" onClick={onDuplicateClick}>
                          Duplicate
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer">Embed</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          className="cursor-pointer text-destructive focus:text-destructive"
                          onClick={onDeleteClick}
                        >
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-5 flex min-w-9 sm:hidden">
            <DropdownMenu
              open={optionsMenuOpen}
              onOpenChange={(open) => (open ? onOpenOptionsMenu() : onCloseOptionsMenu())}
              modal={false}
            >
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className={calSecondaryIconButtonClass}
                  data-testid={`event-type-options-${eventType.id}`}
                  aria-label="Event type options"
                >
                  <div className={calButtonActiveContentClass}>
                    <MoreHorizontal className="h-4 w-4 shrink-0" aria-hidden="true" />
                  </div>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-default border-default text-default">
                <DropdownMenuItem className="cursor-pointer">Preview</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">Copy link</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">Edit</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" onClick={onDuplicateClick}>
                  Duplicate
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="cursor-pointer text-destructive focus:text-destructive"
                  onClick={onDeleteClick}
                >
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </li>
    </PrototypeComponent>
  );
}
