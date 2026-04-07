import { redirect } from "atomic-router";
import { createEvent } from "effector";

import { routes } from "@/shared/routing/shared";

const handleLogout = createEvent();

redirect({
  clock: handleLogout,
  route: routes.login,
});

export const $$profileModel = {
  handleLogout,
};
