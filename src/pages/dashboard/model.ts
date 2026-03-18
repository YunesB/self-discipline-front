import { combine, createStore } from "effector";

import {
  CURRENT_YEAR,
  CURRENT_MONTH_NAME,
  generateMonthCalendar,
} from "@/shared/lib/constants/calendar";
import { routes } from "@/shared/routing/shared";
import { chainAppLoaded } from "@/shared/routing/shared/app-loaded-chain";

const appLoadedRoute = chainAppLoaded(routes.dashboard);

const $currentMonth = createStore(CURRENT_MONTH_NAME);
const $currentYear = createStore(CURRENT_YEAR);
const $currentCalendar = combine($currentMonth, $currentYear, (month, year) =>
  generateMonthCalendar(month, year).filter((day) => !day.isEmpty),
);
const $calendarByWeeks = $currentCalendar.map((calendar) => {
  const weeks: (typeof calendar)[] = [];
  let currentWeek: typeof calendar = [];

  calendar.forEach((day) => {
    currentWeek.push(day);

    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  });

  if (currentWeek.length > 0) {
    weeks.push(currentWeek);
  }

  return weeks;
});

export const $$dashboardModel = {
  appLoadedRoute,
  $currentMonth,
  $currentYear,
  $currentCalendar,
  $calendarByWeeks,
};
