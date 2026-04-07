import { redirect } from "atomic-router";
import { createEvent } from "effector";

import { routes } from "@/shared/routing/shared";
import { chainAppLoaded } from "@/shared/routing/shared/app-loaded-chain";

const appLoadedRoute = chainAppLoaded(routes.login);

const handleLogin = createEvent();

redirect({
  clock: handleLogin,
  route: routes.dashboard,
});

export const $$loginModel = {
  appLoadedRoute,
  handleLogin,
};
