import type { CSSProperties } from "react";

export const calBrandButtonClass =
  "group whitespace-nowrap inline-flex items-center font-medium relative rounded-[10px] cursor-pointer disabled:cursor-not-allowed gap-1 bg-brand-default text-brand not-disabled:hover:bg-brand-emphasis focus-visible:outline-none focus-visible:ring-0 focus-visible:shadow-button-solid-brand-focused border border-brand-default disabled:opacity-30 shadow-button-solid-brand-default not-disabled:active:shadow-button-solid-brand-active not-disabled:hover:shadow-button-solid-brand-hover transition-transform duration-100 px-2.5 py-2 text-sm leading-none";

export const calSecondaryIconButtonClass =
  "group whitespace-nowrap items-center font-medium relative rounded-[10px] cursor-pointer disabled:cursor-not-allowed gap-1 flex justify-center bg-default text-default border border-default not-disabled:hover:bg-cal-muted not-disabled:hover:text-emphasis disabled:opacity-30 focus-visible:bg-subtle focus-visible:outline-none focus-visible:ring-0 focus-visible:shadow-outline-gray-focused shadow-outline-gray-rested not-disabled:hover:shadow-outline-gray-hover not-disabled:active:shadow-outline-gray-active transition-shadow duration-200 px-2.5 py-2 text-sm leading-none min-h-[36px] min-w-[36px] p-2! hover:border-default";

export const calButtonGroupClass =
  "flex [&>*:first-child]:rounded-l-(--btn-group-radius) rtl:[&>*:first-child]:rounded-l-none rtl:[&>*:first-child]:rounded-r-(--btn-group-radius) [&>*:last-child]:rounded-r-(--btn-group-radius) rtl:[&>*:last-child]:rounded-l-(--btn-group-radius) rtl:[&>*:last-child]:rounded-r-none [&>*:not(:first-child)]:-ml-px *:rounded-none *:border hover:*:z-1";

export const calButtonGroupStyle = { "--btn-group-radius": "8px" } as CSSProperties;

export const calButtonActiveContentClass =
  "contents visible group-[:not(div):active]:translate-y-[0.5px]";

export const durationBadgeClass =
  "font-medium inline-flex items-center justify-center rounded-[4px] gap-x-1 bg-emphasis text-emphasis py-1 px-1.5 text-xs leading-none";
