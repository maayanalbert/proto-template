"use client";

import {
  Calendar,
  ChevronDown,
  Clock,
  Copy,
  ExternalLink,
  Grid3x3,
  Link2,
  MoreHorizontal,
  Search,
  Settings,
} from "lucide-react";
import { PrototypeComponent } from "proto-plugin";
import { cn } from "ui";

import { MOCK_USER } from "./event-types-mock-data";

const NAV_ITEMS = [
  { label: "Event types", icon: Link2, active: true },
  { label: "Bookings", icon: Calendar, active: false },
  { label: "Availability", icon: Clock, active: false },
  { label: "Apps", icon: Grid3x3, active: false, hasChevron: true },
] as const;

const FOOTER_ITEMS = [
  { label: "View public page", icon: ExternalLink },
  { label: "Copy public page link", icon: Copy },
  { label: "Settings", icon: Settings },
] as const;

const MOBILE_NAV_ITEMS = [
  { label: "Event types", icon: Link2, active: true },
  { label: "Bookings", icon: Calendar, active: false },
  { label: "Availability", icon: Clock, active: false },
  { label: "More", icon: MoreHorizontal, active: false },
] as const;

function SidebarNavLink({
  label,
  icon: Icon,
  active,
  hasChevron,
}: {
  label: string;
  icon: typeof Link2;
  active?: boolean;
  hasChevron?: boolean;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-current={active ? "page" : undefined}
      className={cn(
        "todesktop:py-[7px] text-default group flex w-full items-center rounded-md px-2 py-1.5 font-medium transition text-sm md:justify-center lg:justify-start hover:bg-subtle hover:text-emphasis",
        active && "bg-emphasis text-emphasis",
      )}
    >
      <Icon
        className={cn(
          "h-4 w-4 shrink-0 lg:ltr:mr-2 lg:rtl:ml-2",
          active ? "text-inherit" : "fill-transparent",
        )}
        aria-hidden="true"
      />
      <span className="hidden w-full justify-between truncate text-ellipsis lg:flex">{label}</span>
      {hasChevron ? (
        <ChevronDown className="fill-transparent ml-auto hidden h-4 w-4 lg:block" aria-hidden="true" />
      ) : null}
    </button>
  );
}

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <PrototypeComponent id="dashboard-shell" className="flex flex-1 min-h-0 h-full w-full">
      <PrototypeComponent
        id="dashboard-sidebar"
        className="relative hidden md:flex shrink-0"
      >
        <aside className="sticky top-0 flex h-full w-14 flex-col overflow-y-auto overflow-x-hidden border-muted border-r bg-cal-muted lg:w-56 lg:px-3 max-h-full">
          <div className="flex h-full flex-col justify-between py-3 lg:pt-4">
            <header className="todesktop:flex-col-reverse items-center justify-between md:hidden lg:flex">
              <div className="todesktop:mt-4 w-full">
                <span className="hidden lg:inline">
                  <button
                    type="button"
                    className="hover:bg-emphasis group mx-0 flex w-full cursor-pointer appearance-none items-center rounded-full text-left outline-none transition focus:outline-none focus:ring-0 lg:rounded px-2 py-1.5"
                  >
                    <span className="h-5 w-5 ltr:mr-2 rtl:ml-2 relative shrink-0 rounded-full">
                      <span className="bg-emphasis border-default relative inline-flex aspect-square items-center justify-center border align-top w-5 h-5 min-w-5 min-h-5 rounded-full overflow-hidden">
                        <img
                          alt={`${MOCK_USER.name} Avatar`}
                          className="w-full h-full object-cover"
                          src={MOCK_USER.avatarUrl}
                        />
                      </span>
                      <span className="border-muted absolute rounded-full border bg-green-500 -bottom-0.5 right-0 h-2 w-2" />
                    </span>
                    <span className="flex grow items-center gap-2">
                      <span className="w-24 shrink-0 text-sm leading-none">
                        <span className="text-emphasis block truncate py-0.5 font-medium leading-normal">
                          {MOCK_USER.name}
                        </span>
                      </span>
                      <ChevronDown className="group-hover:text-subtle text-muted h-4 w-4 shrink-0 transition" />
                    </span>
                  </button>
                </span>
              </div>
              <div className="flex w-full justify-end rtl:space-x-reverse">
                <button
                  type="button"
                  className="todesktop:hover:!bg-transparent group flex rounded-md px-3 py-2 font-medium text-default text-sm transition hover:bg-subtle lg:px-2 lg:hover:bg-emphasis lg:hover:text-emphasis"
                >
                  <Search className="h-4 w-4 shrink-0 text-inherit" aria-hidden="true" />
                </button>
              </div>
            </header>

            <nav className="mt-2 flex-1 md:px-2 lg:mt-4 lg:px-0">
              {NAV_ITEMS.map((item) => (
                <SidebarNavLink key={item.label} {...item} />
              ))}
            </nav>
          </div>

          <div className="md:px-2 md:pb-4 lg:p-0">
            {FOOTER_ITEMS.map((item) => (
              <button
                key={item.label}
                type="button"
                aria-label={item.label}
                className="text-left group flex items-center rounded-md px-2 py-1.5 font-medium text-default transition w-full text-sm hover:bg-subtle hover:text-emphasis mt-0.5 first:mt-3"
              >
                <item.icon
                  className="h-4 w-4 shrink-0 ml-3 md:mx-auto lg:ltr:mr-2 lg:rtl:ml-2"
                  aria-hidden="true"
                />
                <span className="hidden w-full justify-between lg:flex">
                  <div className="flex">{item.label}</div>
                </span>
              </button>
            ))}
            <small className="text-default mx-3 mb-2 mt-1 hidden text-[0.5rem] opacity-50 lg:block">
              © 2026 Cal.com, Inc.
            </small>
          </div>
        </aside>
      </PrototypeComponent>

      <div className="flex w-0 flex-1 flex-col min-h-0 min-w-0">
        <main className="bg-default relative z-0 flex-1 focus:outline-none flex flex-col min-h-0 overflow-hidden">
          <PrototypeComponent
            id="dashboard-mobile-header"
            className="bg-cal-muted/50 border-subtle sticky top-0 z-40 flex w-full items-center justify-between border-b px-4 py-1.5 backdrop-blur-lg sm:p-4 md:hidden shrink-0"
          >
            <div className="font-cal text-emphasis text-sm font-semibold">Cal.diy</div>
            <div className="flex items-center gap-2 self-center">
              <button
                type="button"
                className="todesktop:hover:!bg-transparent group flex rounded-md px-3 py-2 font-medium text-default text-sm transition hover:bg-subtle"
              >
                <Search className="h-4 w-4 shrink-0 text-inherit" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="hover:bg-cal-muted hover:text-subtle text-muted rounded-full p-1 transition"
              >
                <Settings className="text-default h-4 w-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="hover:bg-emphasis group flex cursor-pointer appearance-none items-center rounded-full p-2"
              >
                <span className="h-4 w-4 relative shrink-0 rounded-full">
                  <span className="bg-emphasis border-default relative inline-flex aspect-square items-center justify-center border align-top w-4 h-4 rounded-full overflow-hidden">
                    <img
                      alt={`${MOCK_USER.name} Avatar`}
                      className="w-full h-full object-cover"
                      src={MOCK_USER.avatarUrl}
                    />
                  </span>
                  <span className="border-muted absolute rounded-full border bg-green-500 -bottom-0.5 -right-0.5 h-2.5 w-2.5" />
                </span>
              </button>
            </div>
          </PrototypeComponent>

          <div className="flex-1 min-h-0 overflow-y-auto">{children}</div>

          <PrototypeComponent
            id="dashboard-mobile-nav"
            className="fixed bottom-0 left-0 z-30 flex w-full border-subtle border-t bg-cal-muted/40 px-1 shadow backdrop-blur-md md:hidden shrink-0"
          >
            {MOBILE_NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                type="button"
                aria-current={item.active ? "page" : undefined}
                className={cn(
                  "hover:text-default bg-transparent! relative my-2 min-w-0 flex-1 overflow-hidden rounded-md p-1 text-center text-xs font-medium focus:z-10 sm:text-sm",
                  item.active ? "text-emphasis" : "text-muted",
                )}
              >
                <item.icon
                  className={cn(
                    "mx-auto mb-1 block h-5 w-5 shrink-0 text-center text-inherit",
                    item.active && "text-emphasis",
                  )}
                  aria-hidden="true"
                />
                <span className="block truncate">{item.label}</span>
              </button>
            ))}
          </PrototypeComponent>
          <div className="block pt-12 md:hidden shrink-0" aria-hidden="true" />
        </main>
      </div>
    </PrototypeComponent>
  );
}
