import type { MockEventType } from "./event-types-types";

export const MOCK_USER = {
  name: "Maayan Albert",
  slug: "maayan",
  avatarUrl: "/prototypes/event-types/avatar.svg",
} as const;

export const MOCK_EVENT_TYPES: MockEventType[] = [
  { id: 3, title: "Secret meeting", slug: "secret", durationMinutes: 15, hidden: false },
  { id: 2, title: "30 min meeting", slug: "30min", durationMinutes: 30, hidden: false },
  { id: 1, title: "15 min meeting", slug: "15min", durationMinutes: 15, hidden: false },
];

export const MOCK_SEARCH_NO_RESULTS_QUERY = "nonexistent";
