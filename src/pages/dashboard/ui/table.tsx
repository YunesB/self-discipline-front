import { FC, Fragment } from "react";

import dayjs from "dayjs";
import { useUnit } from "effector-react";
import { ClassNameValue } from "tailwind-merge";

import { $$dashboardModel } from "../model";

import { HOLIDAYS } from "@/shared/lib/constants/calendar";
import { cn } from "@/shared/lib/utils";
import { Checkbox } from "@/shared/ui/shadcn";

const COMMON_CLASSES = "p-4 border border-collapse";
const HEADER_CLASSES = "text-sm";
const DAY_WIDTH = "min-w-[60px]";
const GOAL_WIDTH = "min-w-[110px]";

const getPercentageColor = (percentage: number): ClassNameValue => {
  if (percentage >= 100) return "text-green-500";
  if (percentage > 60) return "text-cyan-600";
  if (percentage > 30) return "text-yellow-500";
  if (percentage > 0) return "text-orange-500";
  return "text-red-500";
};

export const DashboardTable: FC = () => {
  const today = dayjs().date();
  const [calendarByWeeks, habits, handleCheck] = useUnit([
    $$dashboardModel.$calendarByWeeks,
    $$dashboardModel.$habits,
    $$dashboardModel.changeHabitState,
  ]);

  return (
    <div className="p-4 rounded-xl bg-white max-w-full overflow-auto">
      <table className="w-full border-collapse border">
        <thead>
          <tr>
            <th rowSpan={2} className={cn(COMMON_CLASSES, HEADER_CLASSES)}>
              Habit
            </th>
            <th
              rowSpan={2}
              className={cn(COMMON_CLASSES, GOAL_WIDTH, HEADER_CLASSES)}
            >
              Goal
            </th>
            <th
              rowSpan={2}
              className={cn(COMMON_CLASSES, GOAL_WIDTH, HEADER_CLASSES)}
            >
              Progress
            </th>
            {calendarByWeeks.map((_, index) => (
              <th
                key={index}
                colSpan={7}
                className={cn(
                  COMMON_CLASSES,
                  "text-sm font-normal",
                  index % 2 === 0 ? "bg-gray-50 shadow-inner" : "bg-white",
                )}
              >
                Week {index + 1}
              </th>
            ))}
          </tr>
          <tr>
            {calendarByWeeks.map((week, id) => (
              <Fragment key={id}>
                {week.map(({ date, day }, dayIndex) => (
                  <th
                    key={dayIndex}
                    className={cn(
                      DAY_WIDTH,
                      COMMON_CLASSES,
                      HOLIDAYS.includes(day) && "text-green-500",
                      today === date && "bg-blue-50 text-blue-400",
                    )}
                  >
                    <p>{date}</p>
                    <p className="text-[10px] font-normal">{day.slice(0, 3)}</p>
                  </th>
                ))}
              </Fragment>
            ))}
          </tr>
        </thead>
        <tbody>
          {habits.map(
            ({ name, monthlyGoal, days, checkedDates, id: habitId }) => {
              const percentage = Math.round(
                (checkedDates.length / monthlyGoal) * 100,
              );

              return (
                <tr key={habitId}>
                  <td
                    className={cn(COMMON_CLASSES, "whitespace-nowrap text-sm")}
                  >
                    {name}
                  </td>
                  <td className={cn(COMMON_CLASSES, "text-right text-sm")}>
                    {monthlyGoal}
                  </td>
                  <td
                    className={cn(
                      COMMON_CLASSES,
                      "text-right text-sm",
                      getPercentageColor(percentage),
                    )}
                  >
                    {checkedDates.length} ({percentage}%)
                  </td>

                  {calendarByWeeks.map((week, weekIndex) =>
                    week.map(({ day, date }, dayIndex) => {
                      const hasCheckbox = days.includes(day);

                      return (
                        <td
                          key={`${weekIndex}-${dayIndex}`}
                          className={cn(
                            !hasCheckbox && "bg-gray-50 shadow-inner",
                            date === today && "bg-blue-50/70",
                          )}
                        >
                          <div className="flex items-center justify-center">
                            {hasCheckbox && (
                              <Checkbox
                                disabled={date > today}
                                checked={checkedDates.includes(date)}
                                onCheckedChange={() => {
                                  console.log({ date, habitId });

                                  handleCheck({
                                    date,
                                    habitId,
                                  });
                                }}
                              />
                            )}
                          </div>
                        </td>
                      );
                    }),
                  )}
                </tr>
              );
            },
          )}
        </tbody>
      </table>
    </div>
  );
};
