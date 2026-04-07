import { createApi, createStore } from "effector";

import { routes } from "@/shared/routing/shared";
import { chainAppLoaded } from "@/shared/routing/shared/app-loaded-chain";

const appLoadedRoute = chainAppLoaded(routes.habits);

const $isDrawerOpen = createStore(false);

const { openDrawer, closeDrawer } = createApi($isDrawerOpen, {
  openDrawer: () => true,
  closeDrawer: () => false,
});

export const $$habitsModel = {
  appLoadedRoute,

  $isDrawerOpen,
  openDrawer,
  closeDrawer,
};
