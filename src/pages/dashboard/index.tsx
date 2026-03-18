import { FC } from "react";

import { useUnit } from "effector-react";

import { MOCK_HABITS } from "./lib";
import { $$dashboardModel } from "./model";

import { HOLIDAYS } from "@/shared/lib/constants/calendar";
import { cn } from "@/shared/lib/utils";

export const DashboardPage: FC = () => {
  const [calendarByWeeks] = useUnit([$$dashboardModel.$calendarByWeeks]);

  return (
    <div className="flex items-start gap-x-12">
      <ul className="pt-8">
        {MOCK_HABITS.map(({ name }, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      <ul className="flex items-center">
        {calendarByWeeks.map((week, index) => (
          <li
            key={index}
            className={cn(
              "px-4 py-2",
              index % 2 === 0 ? "bg-gray-100" : "bg-white",
              index === 0 && "rounded-l-xl",
              index === calendarByWeeks.length - 1 && "rounded-r-xl",
            )}
          >
            <p className="text-center whitespace-nowrap mb-2">
              Week {index + 1}
            </p>
            <ul className="flex items-center gap-4">
              {week.map(({ date, day }, dayIndex) => (
                <li
                  key={dayIndex}
                  className={cn(
                    "text-center",
                    HOLIDAYS.includes(day) && "text-green-500",
                  )}
                >
                  <p className="[10px]">{day.slice(0, 3)}</p>
                  <p>{date}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};
