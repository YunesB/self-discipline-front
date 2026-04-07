import { createRoute } from "atomic-router";

const home = createRoute();
const login = createRoute();
const authError = createRoute();

const calendar = createRoute();
const dashboard = createRoute();
const habits = createRoute();

export {
  home,
  login,
  habits,
  //
  calendar,
  authError,
  dashboard,
};
