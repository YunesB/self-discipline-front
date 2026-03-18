import { FC } from "react";

import { useUnit } from "effector-react";

import { $$homeModel } from "./model";
import { Calendar } from "./ui/calendar";
import { Weekdays } from "./ui/weekdays";

export const HomeRoute: FC = () => {
  const [currentMonth, currentYear] = useUnit([
    $$homeModel.$currentMonth,
    $$homeModel.$currentYear,
  ]);

  return (
    <div className="mx-auto w-fit">
      <h1 className="mb-4 font-semibold text-center">
        {currentMonth}, {currentYear}
      </h1>
      <Weekdays />
      <Calendar />
    </div>
  );
};
