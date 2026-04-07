import { createRoute } from "atomic-router";

const home = createRoute();
const authError = createRoute();
const calendar = createRoute();
const dashboard = createRoute();
const habits = createRoute();

export { home, habits, calendar, authError, dashboard };
