import { FC } from "react";

import { useUnit } from "effector-react";
import { CalendarSync, CalendarSearch } from "lucide-react";

import { $$calendarModel } from "../model";

import { Button } from "@/shared/ui/atoms";

export const CalendarHeader: FC = () => {
  const [currentMonth, currentYear, resetDate, openModal] = useUnit([
    $$calendarModel.$currentMonth,
    $$calendarModel.$currentYear,
    $$calendarModel.resetDate,
    $$calendarModel.openModal,
  ]);

  return (
    <div className="w-full flex items-center justify-between border-b border-gray-300 pb-4">
      <h1 className="font-semibold text-center text-2xl">
        {currentMonth}, {currentYear}
      </h1>

      <div className="flex items-center gap-x-2">
        <Button size="icon" variant="outline" onClick={resetDate}>
          <CalendarSync />
        </Button>

        <Button size="icon" variant="outline" onClick={openModal}>
          <CalendarSearch />
        </Button>
      </div>
    </div>
  );
};
