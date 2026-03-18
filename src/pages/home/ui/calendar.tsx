import { FC, ButtonHTMLAttributes } from "react";

import { useUnit } from "effector-react";
import { LucideIcon, ChevronLeft, ChevronRight } from "lucide-react";

import { $$homeModel } from "../model";

import { cn } from "@/shared/lib/utils";

const CommonButton: FC<
  ButtonHTMLAttributes<HTMLButtonElement> & { icon: LucideIcon }
> = ({ className, icon: Icon, ...rest }) => (
  <button
    type="button"
    className={cn(
      "rounded-xl hover:bg-gray-300 hover:opacity-70 transition-all px-3",
      className,
    )}
    {...rest}
  >
    <Icon className="size-6 text-gray-600" />
  </button>
);

export const Calendar: FC = () => {
  const [currentCalendar, goToNextMonth, goToPreviousMonth] = useUnit([
    $$homeModel.$currentCalendar,
    $$homeModel.goToNextMonth,
    $$homeModel.goToPreviousMonth,
  ]);

  return (
    <section className="flex items-stretch gap-x-4">
      <CommonButton icon={ChevronLeft} onClick={goToPreviousMonth} />

      <ul className="grid grid-cols-7 gap-4 animate-fade-in">
        {currentCalendar.map(({ id, isEmpty, date, day, week, isToday }) => (
          <li
            key={id}
            className={cn(
              "size-32 rounded-xl p-4 shadow-md flex flex-col justify-between transition-all ring-0",
              isEmpty
                ? "bg-gray-50 text-gray-300"
                : "bg-white text-gray-800 hover:ring-4 ring-blue-300 cursor-pointer",
              isToday && "text-blue-400",
            )}
          >
            <h2 className="font-bold text-xl">{date}</h2>
            <div>
              <p className="text-xs text-gray-500">{day}</p>
              <p className="text-xs text-gray-400">Week {week}</p>
            </div>
          </li>
        ))}
      </ul>

      <CommonButton icon={ChevronRight} onClick={goToNextMonth} />
    </section>
  );
};
