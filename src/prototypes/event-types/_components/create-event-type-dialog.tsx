"use client";

import { PrototypeComponent } from "proto-plugin";
import { DialogDescription, DialogFooter, DialogHeader, DialogTitle, Input, Label, cn } from "ui";

import {
  calBrandButtonClass,
  calButtonActiveContentClass,
  calSecondaryIconButtonClass,
} from "./cal-primitive-classes";
import { MOCK_USER } from "./event-types-mock-data";

type CreateEventTypeDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function CreateEventTypeDialog({ open, onOpenChange }: CreateEventTypeDialogProps) {
  if (!open) return null;

  return (
    <PrototypeComponent id="create-event-type-dialog">
      <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-xs">
        <div
          role="dialog"
          aria-modal="true"
          className="bg-default border border-default text-default grid w-full max-w-lg gap-4 rounded-lg p-6 shadow-lg"
        >
          <DialogHeader>
            <DialogTitle className="text-emphasis text-lg font-semibold">Add a new event type</DialogTitle>
            <DialogDescription className="text-default text-sm">
              Set up a new event type for people to book on your calendar.
            </DialogDescription>
          </DialogHeader>

          <div className="stack-y-4">
            <div className="space-y-2">
              <Label htmlFor="event-type-title">Title</Label>
              <Input
                id="event-type-title"
                data-testid="event-type-quick-chat"
                placeholder="Quick chat"
                defaultValue=""
                className="bg-default border-default"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="event-type-slug">{`URL: /${MOCK_USER.slug}/`}</Label>
              <Input
                id="event-type-slug"
                placeholder="quick-chat"
                defaultValue=""
                className="bg-default border-default"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="event-type-duration">Duration (minutes)</Label>
              <Input
                id="event-type-duration"
                type="number"
                defaultValue={15}
                className="bg-default border-default"
              />
            </div>
          </div>

          <DialogFooter className="gap-2 sm:gap-0">
            <button
              type="button"
              className={cn(calSecondaryIconButtonClass, "min-w-[88px] px-4")}
              onClick={() => onOpenChange(false)}
            >
              <div className={calButtonActiveContentClass}>Cancel</div>
            </button>
            <button type="button" className={calBrandButtonClass} onClick={() => onOpenChange(false)}>
              <div className={calButtonActiveContentClass}>Continue</div>
            </button>
          </DialogFooter>
        </div>
      </div>
    </PrototypeComponent>
  );
}
