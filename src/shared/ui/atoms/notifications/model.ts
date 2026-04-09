import toast from "react-hot-toast";

import { sample, createEvent, createEffect } from "effector";

import { notifyHelper } from "./lib";
import type { TAction, TOptions } from "./types";
import { createNotificationComponent } from "./ui";

const notifyFx = createEffect((options: TOptions) => {
  const Component = createNotificationComponent(options);
  toast.custom(Component, { position: "bottom-center", duration: 3000 });
});

export const success = createEvent<string | TAction>();
export const failure = createEvent<string | TAction>();
export const info = createEvent<string | TAction>();
export const loading = createEvent<string | TAction>();

sample({
  clock: success,
  fn: (options) => notifyHelper(options, "success"),
  target: notifyFx,
});

sample({
  clock: failure,
  fn: (options) => notifyHelper(options, "error"),
  target: notifyFx,
});

sample({
  clock: loading,
  fn: (options) => notifyHelper(options, "loading"),
  target: notifyFx,
});

sample({
  clock: info,
  fn: (options) => notifyHelper(options, "blank"),
  target: notifyFx,
});
