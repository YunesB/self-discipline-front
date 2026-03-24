import { FC } from "react";

import { useUnit } from "effector-react";
import { Area, XAxis, YAxis, AreaChart, CartesianGrid } from "recharts";

import { $$dashboardModel } from "../model";

import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  ChartTooltip,
  ChartContainer,
  type ChartConfig,
  ChartTooltipContent,
} from "@/shared/ui/shadcn";

export const Chart: FC = () => {
  const chartData = useUnit($$dashboardModel.$chartData);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Habits Progress Over Time</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          className="h-80 w-full"
          config={
            {
              label: "Habits Progress",
              color: "#5fa5fa",
            } as ChartConfig
          }
        >
          <AreaChart
            data={chartData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis fontSize={12} dataKey="date" />
            <YAxis
              fontSize={12}
              domain={[0, 100]}
              label={{
                value: "Progress (%)",
                angle: -90,
                position: "insideLeft",
              }}
            />

            <ChartTooltip
              content={
                <ChartTooltipContent
                  formatter={(value) => [`${value as number}%`, ` progress`]}
                  labelFormatter={(value, item) => [
                    `${item?.[0]?.payload?.label || value}`,
                  ]}
                />
              }
            />

            <Area
              fill="#5fa5fa"
              type="monotone"
              strokeWidth={2}
              stroke="#5fa5fa"
              fillOpacity={0.4}
              dataKey="progress"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
