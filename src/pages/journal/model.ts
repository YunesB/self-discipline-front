import { combine, createEvent, createStore } from "effector";

import { getAvgRating, getChartColor, generateChartData } from "./lib";

import { routes } from "@/shared/routing/shared";
import { chainAppLoaded } from "@/shared/routing/shared/app-loaded-chain";

const appLoadedRoute = chainAppLoaded(routes.habits);

const $todaysRating = createStore(7);
const changeTodaysRating = createEvent<number>();

const $chartData = combine($todaysRating, (todayRating) =>
  generateChartData(todayRating),
);
const $averageRating = combine($chartData, (chartData) =>
  getAvgRating(chartData),
);

const $chartColors = combine($chartData, (chartData) =>
  getChartColor(chartData),
);

$todaysRating.on(changeTodaysRating, (_, newRating) => newRating);

export const $$journalModel = {
  appLoadedRoute,

  $todaysRating,
  changeTodaysRating,

  $chartData,
  $averageRating,
  $chartColors,
};
