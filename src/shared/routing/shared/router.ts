import { createHistoryRouter } from "atomic-router";

import { controls } from "./controls";
import { home, authError } from "./routes";

const routes = [
  { route: home, path: "/" },
  { route: authError, path: "/auth-error" },
];

export const router = createHistoryRouter({ routes, controls });
