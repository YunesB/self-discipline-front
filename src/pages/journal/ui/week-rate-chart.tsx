import { FC } from "react";

import { useUnit } from "effector-react";
import { Area, XAxis, YAxis, AreaChart, CartesianGrid } from "recharts";

import { $$journalModel } from "../model";

import { Heading } from "@/shared/ui/atoms";
import {
  ChartTooltip,
  ChartContainer,
  type ChartConfig,
  ChartTooltipContent,
} from "@/shared/ui/shadcn";

export const WeekRateChart: FC = () => {
  const [chartData, averageRating, { fill, stroke }] = useUnit([
    $$journalModel.$chartData,
    $$journalModel.$averageRating,
    $$journalModel.$chartColors,
  ]);

  return (
    <div className="w-full space-y-4">
      <div className="flex items-center justify-between">
        <Heading>Weekly Rating</Heading>

        <p className="bg-gray-100 rounded-md px-3 py-1 text-sm">
          Average rating:{" "}
          <span className="font-semibold">{averageRating.toFixed(1)}</span>
        </p>
      </div>
      <ChartContainer
        className="h-80 w-full"
        config={
          {
            label: "Daily Rating",
            color: "#10b981",
          } as ChartConfig
        }
      >
        <AreaChart
          data={chartData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid
            vertical={false}
            horizontalFill={["#f5f5f5", "#ffffff"]}
          />
          <XAxis fontSize={12} dataKey="day" />
          <YAxis
            fontSize={12}
            domain={[0, 10]}
            label={{
              value: "Rating (1-10)",
              angle: -90,
              position: "insideLeft",
            }}
          />

          <ChartTooltip
            content={
              <ChartTooltipContent
                formatter={(value) => [`Rating: `, `${value as number}/10`]}
                labelFormatter={(value, item) => [
                  `${item?.[0]?.payload?.label || value}`,
                ]}
              />
            }
          />

          <Area
            fill={fill}
            type="monotone"
            strokeWidth={2}
            stroke={stroke}
            dataKey="rating"
            fillOpacity={0.4}
          />
        </AreaChart>
      </ChartContainer>
    </div>
  );
};
