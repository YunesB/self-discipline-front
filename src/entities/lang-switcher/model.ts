import { sample, createEvent } from "effector";
import { persist } from "effector-storage/local";

import { $language, changeLanguageFx } from "@/app/model";

import { LANGUAGE_STORAGE_KEY } from "@/shared/lib/constants";

const changeLanguage = createEvent<string>();

sample({
  clock: changeLanguage,
  target: [changeLanguageFx],
});

persist({
  store: $language,
  key: LANGUAGE_STORAGE_KEY,
});

export const $$langSwitcherModel = {
  changeLanguage,
};
