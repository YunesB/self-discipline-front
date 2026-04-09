import { FC, useState } from "react";

import dayjs from "dayjs";
import { useUnit } from "effector-react";
import { Meh, Frown, Smile } from "lucide-react";

import { $$journalModel } from "../model";

import { cn } from "@/shared/lib/utils";
import { LoaderIcon, openSuccessToast } from "@/shared/ui/atoms";
import { Slider } from "@/shared/ui/shadcn";

const TODAY = dayjs().format("DD.MM.YYYY");
const RATES = [
  { label: "It was hard", value: 1, color: "text-red-500", icon: Frown },
  { label: "Just Okay", value: 5, color: "text-gray-600", icon: Meh },
  { label: "It was great", value: 10, color: "text-green-500", icon: Smile },
];

export const DayRate: FC = () => {
  const [rate, setRate] = useState(7);
  const changeRating = useUnit($$journalModel.changeTodaysRating);
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = (rate: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      changeRating(Number(rate));
      openSuccessToast("Day rate saved successfully!");
    }, 1000);
  };

  return (
    <div className="space-y-4 w-full">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Rate your day ({TODAY})</h2>
        <p className="rounded-full bg-blue-500 text-white font-semibold text-lg size-10 flex items-center justify-center shadow-lg">
          {rate}
        </p>
      </div>

      <div className="w-full p-4 bg-gray-100 rounded-lg shadow-inner relative overflow-hidden">
        <Slider
          step={1}
          max={10}
          value={[rate]}
          className="w-full"
          onValueChange={(v) => setRate(v[0])}
          onBlur={(e) => handleSave(e.target.ariaValueNow ?? "0")}
        />
        <ul className="flex items-center justify-between gap-4 mt-4">
          {RATES.map(({ label, value, color, icon: Icon }) => (
            <li key={value} className={cn(`text-sm`, color)}>
              <Icon className="inline-block mr-2" />
              {label}
            </li>
          ))}
        </ul>

        {isLoading && (
          <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center rounded-lg animate-pulse">
            <LoaderIcon className="size-10" />
          </div>
        )}
      </div>
    </div>
  );
};
