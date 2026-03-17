/* eslint-disable @typescript-eslint/no-explicit-any */
import toast from "react-hot-toast";

import type { Query, Mutation } from "@farfetched/core";
import { createFactory } from "@withease/factories";
import { merge, sample, createEffect } from "effector";

import { $t } from "@/app/model";

import {
  TOptions,
  notifyHelper,
  createNotificationComponent,
} from "@/shared/ui/atoms";

type CombinedFactoryParams = {
  description?: string;
  errorMessage?: string;
  successMessage?: string;
  queryOrMutation:
    | Query<any, any, any>
    | Mutation<any, any, any>
    | (Query<any, any, any> | Mutation<any, any, any>)[];
};

export const createFeedbackHandler = createFactory(
  ({
    description,
    errorMessage,
    successMessage,
    queryOrMutation,
  }: CombinedFactoryParams) => {
    const queriesOrMutations = Array.isArray(queryOrMutation)
      ? queryOrMutation
      : [queryOrMutation];
    const failureEvents = queriesOrMutations.map((q) => q.finished.failure);
    const mergedFailure = merge(failureEvents);

    const successEvents = queriesOrMutations.map((q) => q.finished.success);
    const mergedSuccess = merge(successEvents);

    const notifyFx = createEffect((options: TOptions) => {
      const Component = createNotificationComponent(options);
      toast.custom(Component, { position: "bottom-left" });
    });
    sample({
      clock: mergedFailure,
      fn: ({ error }) =>
        notifyHelper(
          {
            description,
            message: error?.message || errorMessage,
          },
          "error",
        ),
      target: notifyFx,
    });

    sample({
      clock: mergedSuccess,
      source: $t,
      fn: (t) =>
        notifyHelper(
          {
            description,
            message: successMessage
              ? t(successMessage)
              : t("Успешно выполнено"),
          },
          "success",
        ),
      target: notifyFx,
    });
  },
);
