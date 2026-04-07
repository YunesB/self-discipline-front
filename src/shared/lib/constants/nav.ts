import { RouteInstance } from "atomic-router";
import {
  Calendar,
  LucideIcon,
  RefreshCcwDot,
  LayoutDashboard,
} from "lucide-react";

import { PATHS, ROUTES } from "@/shared/routing/shared";

type TNavLink = {
  name: string;
  icon: LucideIcon;
  route: RouteInstance<{}>;
  path: (typeof PATHS)[keyof typeof PATHS];
};

const NAV_LINKS: TNavLink[] = [
  {
    name: "Calendar",
    icon: Calendar,
    route: ROUTES.CALENDAR,
    path: PATHS.CALENDAR,
  },
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    route: ROUTES.DASHBOARD,
    path: PATHS.DASHBOARD,
  },
  {
    name: "Habits",
    icon: RefreshCcwDot,
    route: ROUTES.HABITS,
    path: PATHS.HABITS,
  },
];

export { NAV_LINKS, type TNavLink };
