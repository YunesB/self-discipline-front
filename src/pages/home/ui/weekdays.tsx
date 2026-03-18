import { FC } from "react";

import { WEEKDAYS } from "@/shared/lib/constants/calendar";

export const Weekdays: FC = () => (
  <div className="flex items-center gap-x-4 ">
    <div className="w-[48px]" />
    <ul className="grid grid-cols-7 gap-4 w-full">
      {WEEKDAYS.map((day) => (
        <li key={day} className="text-center text-sm text-gray-800">
          {day}
        </li>
      ))}
    </ul>
    <div className="w-[48px]" />
  </div>
);
