"use client";

import { PrototypeComponent } from "proto-plugin";
import { cn } from "ui";

import { calButtonActiveContentClass, calSecondaryIconButtonClass } from "./cal-primitive-classes";

type DeleteEventTypeDialogProps = {
  open: boolean;
  eventTypeTitle?: string;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
};

export function DeleteEventTypeDialog({
  open,
  eventTypeTitle,
  onOpenChange,
  onConfirm,
}: DeleteEventTypeDialogProps) {
  if (!open) return null;

  return (
    <PrototypeComponent id="delete-event-type-dialog">
      <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-xs">
        <div
          role="alertdialog"
          aria-modal="true"
          className="bg-default border border-default text-default grid w-full max-w-md gap-4 rounded-lg p-6 shadow-lg"
        >
          <div className="space-y-2">
            <h2 className="text-emphasis text-lg font-semibold">Delete event type</h2>
            <p className="text-default text-sm">
              {eventTypeTitle
                ? `Are you sure you want to delete "${eventTypeTitle}"? Anyone with whom you shared this link will no longer be able to book using it.`
                : "Are you sure you want to delete this event type?"}
            </p>
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              className={cn(calSecondaryIconButtonClass, "min-w-[88px] px-4")}
              onClick={() => onOpenChange(false)}
            >
              <div className={calButtonActiveContentClass}>Cancel</div>
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-[10px] border border-destructive bg-destructive px-4 py-2 text-sm font-medium text-white hover:bg-destructive/90"
              onClick={onConfirm}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </PrototypeComponent>
  );
}
