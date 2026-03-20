import { sample, combine, createApi, createEvent, createStore } from "effector";
import { spread } from "patronum";

import { TCalendarValues } from "./types";

import {
  MONTHS,
  TMonths,
  CURRENT_YEAR,
  CURRENT_MONTH_NAME,
  generateMonthCalendar,
} from "@/shared/lib/constants/calendar";
import { routes } from "@/shared/routing/shared";
import { chainAppLoaded } from "@/shared/routing/shared/app-loaded-chain";

const appLoadedRoute = chainAppLoaded(routes.calendar);

const $currentMonth = createStore(CURRENT_MONTH_NAME);
const $currentYear = createStore(CURRENT_YEAR);
const $currentCalendar = combine($currentMonth, $currentYear, (month, year) =>
  generateMonthCalendar(month, year),
);

const $isModalOpen = createStore(false);
const { openModal, closeModal } = createApi($isModalOpen, {
  openModal: () => true,
  closeModal: () => false,
});

const goToNextMonth = createEvent();
const goToPreviousMonth = createEvent();
const gotoMonth = createEvent<TMonths>();
const goToYear = createEvent<number>();
const resetDate = createEvent();
const handleDateSelection = createEvent<TCalendarValues>();

$currentMonth.on(goToNextMonth, (currentMonth) => {
  const currentMonthIndex = MONTHS.indexOf(currentMonth);
  const nextMonthIndex = (currentMonthIndex + 1) % MONTHS.length;
  return MONTHS[nextMonthIndex];
});

$currentMonth.on(goToPreviousMonth, (currentMonth) => {
  const currentMonthIndex = MONTHS.indexOf(currentMonth);
  const previousMonthIndex =
    (currentMonthIndex - 1 + MONTHS.length) % MONTHS.length;
  return MONTHS[previousMonthIndex];
});

sample({
  clock: goToNextMonth,
  source: { month: $currentMonth, year: $currentYear },
  filter: ({ month }) => month === MONTHS[MONTHS.length - 1],
  fn: ({ year }) => year + 1,
  target: $currentYear,
});

sample({
  clock: goToPreviousMonth,
  source: { month: $currentMonth, year: $currentYear },
  filter: ({ month }) => month === MONTHS[0],
  fn: ({ year }) => year - 1,
  target: $currentYear,
});

$currentMonth.on(gotoMonth, (_, month) => month).reset(resetDate);
$currentYear.on(goToYear, (_, year) => year).reset(resetDate);

sample({
  clock: handleDateSelection,
  fn: ({ month, year }) => ({ month, year }),
  target: spread({
    month: gotoMonth,
    year: goToYear,
  }),
});

sample({
  clock: handleDateSelection,
  target: closeModal,
});

export const $$calendarModel = {
  appLoadedRoute,

  $currentMonth,
  $currentYear,
  $currentCalendar,

  goToNextMonth,
  goToPreviousMonth,
  resetDate,

  $isModalOpen,
  openModal,
  closeModal,

  handleDateSelection,
};
