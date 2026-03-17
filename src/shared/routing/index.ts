import { Layout } from "@/layouts";
import { AuthErrorRoute } from "@/pages/auth-error";
import { HomeRoute } from "@/pages/home";
import { NotFoundPage } from "@/pages/not-found";
import { createRoutesView } from "atomic-router-react";

import { routes } from "./shared";
import { createView } from "./shared/create-view";

const CommonLayoutPages = [
  {
    route: routes.home,
    view: HomeRoute,
  },
];

const CustomLayoutPages = [
  {
    route: routes.authError,
    view: AuthErrorRoute,
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
