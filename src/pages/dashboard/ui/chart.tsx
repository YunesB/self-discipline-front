import { FC } from "react";

import { Area, XAxis, YAxis, AreaChart, CartesianGrid } from "recharts";

import { MOCK_HABITS } from "../lib";

import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  ChartLegend,
  ChartTooltip,
  ChartContainer,
  type ChartConfig,
  ChartLegendContent,
  ChartTooltipContent,
} from "@/shared/ui/shadcn";

type ChartDataPoint = {
  day: number;
  [habitName: string]: number;
};

const chartConfig: ChartConfig = MOCK_HABITS.reduce((config, habit) => {
  const key = habit.name.replace(/\s+/g, "-").toLowerCase();
  config[key] = {
    label: habit.name,
    color: habit.color,
  };
  return config;
}, {} as ChartConfig);

const transformDataForChart = (): ChartDataPoint[] => {
  const daysInMonth = 31; // You could make this dynamic based on current month
  const chartData: ChartDataPoint[] = [];

  // Initialize data for each day
  for (let day = 1; day <= daysInMonth; day++) {
    const dataPoint: ChartDataPoint = { day };

    // For each habit, calculate cumulative completion up to this day
    MOCK_HABITS.forEach((habit) => {
      const key = habit.name.replace(/\s+/g, "-").toLowerCase();
      const completedUpToDay = habit.checkedDates.filter(
        (date) => date <= day,
      ).length;
      dataPoint[key] = completedUpToDay;
    });

    chartData.push(dataPoint);
  }

  return chartData;
};

export const Chart: FC = () => {
  const chartData = transformDataForChart();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Habits Progress Over Time</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer className="h-80" config={chartConfig}>
          <AreaChart
            data={chartData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="day"
              fontSize={12}
              tickFormatter={(value) => `Day ${value}`}
            />
            <YAxis
              fontSize={12}
              label={{
                value: "Completions",
                angle: -90,
                position: "insideLeft",
              }}
            />

            <ChartTooltip
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => `Day ${value}`}
                />
              }
            />

            <ChartLegend content={<ChartLegendContent />} />

            {MOCK_HABITS.map((habit) => {
              const key = habit.name.replace(/\s+/g, "-").toLowerCase();
              return (
                <Area
                  stackId="1"
                  dataKey={key}
                  type="monotone"
                  strokeWidth={2}
                  key={habit.name}
                  fillOpacity={0.4}
                  fill={`var(--color-${key})`}
                  stroke={`var(--color-${key})`}
                />
              );
            })}
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
