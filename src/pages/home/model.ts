import dayjs from "dayjs";
import { sample, combine, createEvent, createStore } from "effector";

import {
  MONTHS,
  TMonths,
  generateMonthCalendar,
} from "@/shared/lib/constants/calendar";
import { routes } from "@/shared/routing/shared";
import { chainAppLoaded } from "@/shared/routing/shared/app-loaded-chain";

const appLoadedRoute = chainAppLoaded(routes.home);

const $currentMonth = createStore(dayjs().format("MMMM"));
const $currentYear = createStore(dayjs().year());

const $currentCalendar = combine($currentMonth, $currentYear, (month, year) =>
  generateMonthCalendar(month as TMonths, year),
);

const goToNextMonth = createEvent();
const goToPreviousMonth = createEvent();
const gotoMonth = createEvent<TMonths>();

$currentMonth.on(goToNextMonth, (currentMonth) => {
  const currentMonthIndex = MONTHS.indexOf(currentMonth as TMonths);
  const nextMonthIndex = (currentMonthIndex + 1) % MONTHS.length;
  return MONTHS[nextMonthIndex];
});

$currentMonth.on(goToPreviousMonth, (currentMonth) => {
  const currentMonthIndex = MONTHS.indexOf(currentMonth as TMonths);
  const previousMonthIndex =
    (currentMonthIndex - 1 + MONTHS.length) % MONTHS.length;
  return MONTHS[previousMonthIndex];
});

sample({
  clock: goToNextMonth,
  source: { month: $currentMonth, year: $currentYear },
  filter: ({ month }) => month === "December",
  fn: ({ year }) => year + 1,
  target: $currentYear,
});

sample({
  clock: goToPreviousMonth,
  source: { month: $currentMonth, year: $currentYear },
  filter: ({ month }) => month === "January",
  fn: ({ year }) => year - 1,
  target: $currentYear,
});

$currentMonth.on(gotoMonth, (_, month) => month);

export const $$homeModel = {
  appLoadedRoute,
  $currentMonth,
  $currentYear,
  $currentCalendar,
  goToNextMonth,
  goToPreviousMonth,
  gotoMonth,
};
