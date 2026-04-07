import { createHistoryRouter } from "atomic-router";

import { controls } from "./controls";
import { home, habits, calendar, authError, dashboard } from "./routes";

const routes = [
  { route: home, path: "/" },
  { route: authError, path: "/auth-error" },
  { route: calendar, path: "/calendar" },
  { route: dashboard, path: "/dashboard" },
  { route: habits, path: "/habits" },
];

export const router = createHistoryRouter({ routes, controls });
