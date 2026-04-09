import { FC } from "react";

import { DayRate } from "./date-rate";
import { WeekRateChart } from "./week-rate-chart";
import { WritingArea } from "./writing-area";

import { RoundedBox } from "@/shared/ui/atoms";

export const Renderer: FC = () => {
  return (
    <div className="flex items-stretch gap-4">
      <WritingArea />
      <RoundedBox tag="section">
        <DayRate />
        <hr className="my-6" />
        <WeekRateChart />
      </RoundedBox>
    </div>
  );
};
