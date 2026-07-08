"use client";

import { PrototypeComponent } from "proto-plugin";

import { cn } from "@/lib/cn";

import { NeutralInput, NeutralLabel } from "./neutral-ui";

type EventTypesFormFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  addOnLeading?: React.ReactNode;
  addOnSuffix?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  "data-testid"?: string;
};

export function EventTypesFormField({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
  addOnLeading,
  addOnSuffix,
  className,
  containerClassName,
  "data-testid": dataTestId,
}: EventTypesFormFieldProps) {
  return (
    <PrototypeComponent
      id="event-types-form-field"
      className={cn("mb-2", containerClassName)}
    >
      <NeutralLabel className="mb-1 block leading-6">
        {label}
        {required ? <span className="text-error ml-1">*</span> : null}
      </NeutralLabel>
      <div
        className={cn(
          "border-default bg-default flex w-full items-stretch overflow-hidden rounded-[10px] border shadow-outline-gray-rested",
          addOnLeading && "[&>div:first-child]:rounded-l-[10px] [&>div:first-child]:border-r",
        )}
      >
        {addOnLeading ? (
          <div className="border-default bg-subtle text-subtle flex items-center px-3 text-sm">
            {addOnLeading}
          </div>
        ) : null}
        <NeutralInput
          data-testid={dataTestId}
          type={type}
          value={value}
          placeholder={placeholder}
          required={required}
          onChange={(event) => onChange(event.target.value)}
          className={cn(
            "rounded-none border-0 shadow-none focus:shadow-none",
            className,
          )}
        />
        {addOnSuffix ? (
          <div className="border-default text-subtle flex items-center border-l px-3 text-sm">
            {addOnSuffix}
          </div>
        ) : null}
      </div>
    </PrototypeComponent>
  );
}
