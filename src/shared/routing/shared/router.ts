import { createHistoryRouter } from "atomic-router";

import { controls } from "./controls";
import { home, login, habits, calendar, authError, dashboard } from "./routes";

const PATHS = {
  HOME: "/",
  LOGIN: "/login",
  AUTH_ERROR: "/auth-error",

  CALENDAR: "/calendar",
  DASHBOARD: "/dashboard",
  HABITS: "/habits",
};

const ROUTES = {
  HOME: home,
  LOGIN: login,
  AUTH_ERROR: authError,
  CALENDAR: calendar,
  DASHBOARD: dashboard,
  HABITS: habits,
};

const routes = [
  { route: ROUTES.HOME, path: PATHS.HOME },
  { route: ROUTES.LOGIN, path: PATHS.LOGIN },
  { route: ROUTES.AUTH_ERROR, path: PATHS.AUTH_ERROR },
  { route: ROUTES.CALENDAR, path: PATHS.CALENDAR },
  { route: ROUTES.DASHBOARD, path: PATHS.DASHBOARD },
  { route: ROUTES.HABITS, path: PATHS.HABITS },
];

const router = createHistoryRouter({ routes, controls });

export { PATHS, ROUTES, router };
