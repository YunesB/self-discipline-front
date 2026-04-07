import { createRoute } from "atomic-router";

const home = createRoute();
const login = createRoute();
const authError = createRoute();

const calendar = createRoute();
const dashboard = createRoute();
const habits = createRoute();
const journal = createRoute();

export { home, login, habits, journal, calendar, authError, dashboard };
