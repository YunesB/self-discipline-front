import { sample, combine, createEvent, createStore } from "effector";

import { MOCK_HABITS } from "./lib";
import { TChartType } from "./types";

import {
  CURRENT_YEAR,
  CURRENT_MONTH_NAME,
  generateMonthCalendar,
} from "@/shared/lib/constants/calendar";
import { routes } from "@/shared/routing/shared";
import { chainAppLoaded } from "@/shared/routing/shared/app-loaded-chain";

const appLoadedRoute = chainAppLoaded(routes.dashboard);

const changeHabitState = createEvent<{
  date: number;
  habitId: string;
}>();

const $currentMonth = createStore(CURRENT_MONTH_NAME);
const $currentYear = createStore(CURRENT_YEAR);
const $currentCalendar = combine($currentMonth, $currentYear, (month, year) =>
  generateMonthCalendar(month, year).filter((day) => !day.isEmpty),
);

const $habits = createStore(MOCK_HABITS);

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

const $chartData = combine($currentCalendar, $habits, (calendar, habits) => {
  const chartData: TChartType[] = calendar.map(({ date, day }) => {
    const completedHabits = habits.filter((habit) =>
      habit.checkedDates.includes(date),
    ).length;

    const totalHabits = habits.length;
    const progressPercentage =
      totalHabits > 0 ? Math.round((completedHabits / totalHabits) * 100) : 0;

    return {
      date,
      label: `${day} ${date}`,
      progress: progressPercentage,
    };
  });

  return chartData;
});

sample({
  clock: changeHabitState,
  source: $habits,
  fn: (habits, { date, habitId }) => {
    const habitIndex = habits.findIndex((h) => h.id === habitId);
    if (habitIndex === -1) return habits;

    const habit = habits[habitIndex];
    const isChecked = habit.checkedDates.includes(date);

    const updatedCheckedDates = isChecked
      ? habit.checkedDates.filter((d) => d !== date)
      : [...habit.checkedDates, date];

    const updatedHabit = {
      ...habit,
      checkedDates: updatedCheckedDates,
    };

    const updatedHabits = [...habits];
    updatedHabits[habitIndex] = updatedHabit;

    return updatedHabits;
  },
  target: $habits,
});

export const $$dashboardModel = {
  appLoadedRoute,
  $currentMonth,
  $currentYear,
  $currentCalendar,
  $calendarByWeeks,
  $chartData,

  $habits,
  changeHabitState,
};
