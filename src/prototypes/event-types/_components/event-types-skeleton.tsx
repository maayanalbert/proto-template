"use client";

import { PrototypeComponent } from "proto-plugin";
import { Skeleton } from "ui";

export function EventTypesSkeleton() {
  return (
    <PrototypeComponent id="event-types-skeleton">
      <div className="flex flex-col overflow-hidden rounded-md border border-subtle bg-default">
        <ul className="w-full divide-y divide-subtle">
          {Array.from({ length: 3 }).map((_, index) => (
            <li key={index} className="px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-40 bg-subtle" />
                  <Skeleton className="h-3 w-24 bg-subtle" />
                  <Skeleton className="h-6 w-14 bg-subtle rounded-[4px]" />
                </div>
                <div className="hidden sm:flex items-center gap-2">
                  <Skeleton className="h-6 w-11 rounded-full bg-subtle" />
                  <Skeleton className="h-9 w-[108px] bg-subtle rounded-[10px]" />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </PrototypeComponent>
  );
}
