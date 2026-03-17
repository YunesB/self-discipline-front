/* eslint-disable @typescript-eslint/no-explicit-any */
import { createFactory } from "@withease/factories";
import { createRouterControls } from "atomic-router";
import type { RouteInstance } from "atomic-router";
import { sample, createEvent } from "effector";

export const controls = createRouterControls();

export const createQueryControls = createFactory(
  (route: RouteInstance<any>) => {
    const clear = createEvent();
    const update = createEvent<Record<string, string | string[]>>();

    sample({
      clock: update,
      fn: ({ atomicParams, ...query }) => ({ query, params: atomicParams }),
      target: route.navigate,
    });

    sample({
      clock: clear,
      source: { query: route.$query, params: route.$params },
      fn: ({ query, params }) => ({
        params: params || {},
        query: query.edit ? { edit: query.edit } : {},
      }),
      target: route.navigate,
    });

    return {
      clear,
      update,
    };
  },
);
