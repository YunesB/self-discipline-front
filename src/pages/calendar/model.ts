import dayjs from "dayjs";
import { sample, combine, createApi, createEvent, createStore } from "effector";
import { createForm } from "effector-forms";
import { spread } from "patronum";

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

const $currentMonth = createStore(dayjs().format("MMMM"));
const $currentYear = createStore(dayjs().year());

const $currentCalendar = combine($currentMonth, $currentYear, (month, year) =>
  generateMonthCalendar(month as TMonths, year),
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

const $$datesForm = createForm<{ year: number; month: TMonths }>({
  fields: {
    month: {
      init: CURRENT_MONTH_NAME,
      rules: [
        {
          name: "required",
          validator: (value) => ({
            errorText: "VALIDATION.REQUIRED",
            isValid: !!value,
          }),
        },
      ],
    },
    year: {
      init: CURRENT_YEAR,
      rules: [
        {
          name: "required",
          validator: (value) => ({
            errorText: "VALIDATION.REQUIRED",
            isValid: !!value,
          }),
        },
      ],
    },
  },
  validateOn: ["submit"],
});

sample({
  clock: $$datesForm.formValidated,
  source: $$datesForm.$values,
  fn: ({ month, year }) => ({ month, year }),
  target: spread({
    month: gotoMonth,
    year: goToYear,
  }),
});

sample({
  clock: $$datesForm.formValidated,
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

  $$datesForm,
};
