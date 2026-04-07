import { Layout } from "@/layouts";
import { AuthLayout } from "@/layouts/auth";
import {
  HomePage,
  LoginPage,
  HabitsPage,
  CalendarPage,
  NotFoundPage,
  DashboardPage,
  AuthErrorRoute,
} from "@/pages";
import { createRoutesView } from "atomic-router-react";

import { routes } from "./shared";
import { createView } from "./shared/create-view";

const CommonLayoutPages = [
  {
    route: routes.home,
    view: HomePage,
  },
  {
    route: routes.calendar,
    view: CalendarPage,
  },
  {
    route: routes.dashboard,
    view: DashboardPage,
  },
  {
    route: routes.habits,
    view: HabitsPage,
  },
];

const CustomLayoutPages = [
  {
    route: routes.authError,
    view: AuthErrorRoute,
  },
];

const AuthLayoutPages = [
  {
    route: routes.login,
    view: LoginPage,
  },
];

const LayoutsMap = [
  {
    layout: Layout,
    pages: CommonLayoutPages,
  },
  {
    layout: null,
    pages: CustomLayoutPages,
  },
  {
    layout: AuthLayout,
    pages: AuthLayoutPages,
  },
];

export const Pages = createRoutesView({
  otherwise: NotFoundPage,
  routes: LayoutsMap.flatMap(({ pages, layout }) =>
    pages.map(({ route, view }) => ({
      route,
      ...(layout ? { layout } : {}),
      view: createView({ route, view }),
    })),
  ),
});
