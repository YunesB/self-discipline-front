import dayjs from "dayjs";

type TCalendarDay = {
  id: string;
  date: number;
  week: number;
  day: TDayOfWeek;
  isEmpty?: false;
};

type TEmptyCalendarCell = {
  id: string;
  date: number;
  week: number;
  isEmpty: true;
  day: TDayOfWeek;
  isFromNextMonth?: boolean;
  isFromPreviousMonth?: boolean;
};

type TCalendarCell = TCalendarDay | TEmptyCalendarCell;

const WEEKDAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

type TDayOfWeek = (typeof WEEKDAYS)[number];
type TMonths = (typeof MONTHS)[number];

const CURRENT_MONTH_NAME: (typeof MONTHS)[number] = dayjs().format(
  "MMMM",
) as TMonths;
const CURRENT_YEAR = dayjs().year();

const generateMonthCalendar = (
  month: TMonths,
  year: number,
): TCalendarCell[] => {
  const monthIndex = MONTHS.indexOf(month);
  const firstDayOfMonth = dayjs().year(year).month(monthIndex).date(1);
  const lastDayOfMonth = dayjs()
    .year(year)
    .month(monthIndex)
    .date(firstDayOfMonth.daysInMonth());
  const daysInMonth = firstDayOfMonth.daysInMonth();
  const calendar: TCalendarCell[] = [];

  const firstDayWeekday = firstDayOfMonth.day();
  const startPadding = firstDayWeekday === 0 ? 6 : firstDayWeekday - 1;

  const previousMonth = firstDayOfMonth.subtract(1, "month");
  const previousMonthDays = previousMonth.daysInMonth();

  for (let i = 0; i < startPadding; i++) {
    const date = previousMonthDays - startPadding + i + 1;
    const dayInPrevMonth = previousMonth.date(date);
    calendar.push({
      id: `prev-${date}-${month}-${year}`,
      isEmpty: true,
      isFromPreviousMonth: true,
      week: 1,
      date,
      day: dayInPrevMonth.format("dddd") as TDayOfWeek,
    });
  }

  for (let date = 1; date <= daysInMonth; date++) {
    const currentDay = firstDayOfMonth.date(date);
    const dayOfWeek = currentDay.format("dddd") as TDayOfWeek;
    const week = Math.floor((startPadding + date - 1) / 7) + 1;

    calendar.push({
      id: `${date < 10 ? `0${date}` : date}-${
        monthIndex < 9 ? `0${monthIndex + 1}` : monthIndex + 1
      }-${year}`,
      day: dayOfWeek,
      date,
      week,
      isEmpty: false,
    });
  }

  const lastDayWeekday = lastDayOfMonth.day();
  const endPadding = lastDayWeekday === 0 ? 0 : 7 - lastDayWeekday;
  const lastWeek = Math.floor((startPadding + daysInMonth - 1) / 7) + 1;
  const nextMonth = firstDayOfMonth.add(1, "month");

  for (let i = 0; i < endPadding; i++) {
    const date = i + 1;
    const dayInNextMonth = nextMonth.date(date);
    calendar.push({
      id: `next-${date}-${month}-${year}`,
      isEmpty: true,
      isFromNextMonth: true,
      week: lastWeek,
      date,
      day: dayInNextMonth.format("dddd") as TDayOfWeek,
    });
  }

  return calendar;
};

const CALENDAR_DATA: Record<TMonths, TCalendarCell[]> = {
  January: generateMonthCalendar("January", CURRENT_YEAR),
  February: generateMonthCalendar("February", CURRENT_YEAR),
  March: generateMonthCalendar("March", CURRENT_YEAR),
  April: generateMonthCalendar("April", CURRENT_YEAR),
  May: generateMonthCalendar("May", CURRENT_YEAR),
  June: generateMonthCalendar("June", CURRENT_YEAR),
  July: generateMonthCalendar("July", CURRENT_YEAR),
  August: generateMonthCalendar("August", CURRENT_YEAR),
  September: generateMonthCalendar("September", CURRENT_YEAR),
  October: generateMonthCalendar("October", CURRENT_YEAR),
  November: generateMonthCalendar("November", CURRENT_YEAR),
  December: generateMonthCalendar("December", CURRENT_YEAR),
};

const CURRENT_MONTH_CALENDAR = CALENDAR_DATA[CURRENT_MONTH_NAME];

const getCurrentCalendar = (month: TMonths): TCalendarCell[] =>
  CALENDAR_DATA[month] || [];

const getMonthByIndex = (index: number): TMonths => MONTHS[index] || "January";

const getMonthIndex = (month: TMonths): number => MONTHS.indexOf(month);

export {
  MONTHS,
  WEEKDAYS,
  CURRENT_YEAR,
  type TMonths,
  CALENDAR_DATA,
  getMonthIndex,
  getMonthByIndex,
  type TDayOfWeek,
  type TCalendarDay,
  type TCalendarCell,
  getCurrentCalendar,
  CURRENT_MONTH_NAME,
  generateMonthCalendar,
  CURRENT_MONTH_CALENDAR,
  type TEmptyCalendarCell,
};
