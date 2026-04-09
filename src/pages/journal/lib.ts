import dayjs from "dayjs";

import { TChartDataPoint } from "./types";

import { WEEKDAYS } from "@/shared/lib/constants/calendar";

const TODAY = new Date();

const getAvgRating = (data: TChartDataPoint[]) =>
  data.reduce((sum, point) => sum + point.rating, 0) / data.length;

const getChartColor = (data: TChartDataPoint[]) => {
  const avgRating = getAvgRating(data);

  if (avgRating >= 7)
    return {
      fill: "#dcfce7",
      stroke: "#bbf7d0",
    }; // Very Light Green
  if (avgRating >= 4)
    return {
      fill: "#fef3c7",
      stroke: "#fde68a",
    }; // Very Light Orange
  return {
    fill: "#fee2e2",
    stroke: "#fecaca",
  }; // Very Light Pink
};

const generateChartData = (todayRating: number): TChartDataPoint[] => {
  const data: TChartDataPoint[] = [];

  for (let i = 6; i >= 0; i--) {
    const date = new Date(TODAY);
    date.setDate(TODAY.getDate() - i);

    // Adjust for WEEKDAYS array which starts with Monday (index 0)
    // while Date.getDay() starts with Sunday (index 0)
    const dayIndex = (date.getDay() + 6) % 7;
    const dayName = WEEKDAYS[dayIndex];
    const shortDay = dayName.slice(0, 3);

    const rating = i === 6 ? todayRating : Math.floor(Math.random() * 10) + 1;

    data.push({
      day: shortDay,
      rating,
      label: `${dayName}, ${dayjs(date).format("DD.MM.YYYY")}`,
    });
  }

  return data;
};

export { getAvgRating, getChartColor, generateChartData };
