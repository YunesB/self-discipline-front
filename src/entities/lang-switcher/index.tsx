import { FC } from "react";

import { useUnit } from "effector-react";

import { $$langSwitcherModel } from "./model";

import { $language } from "@/app/model";

import { Select } from "@/shared/ui/molecules";

const LANGUAGES = [
  { value: "ru", label: "Русский" },
  { value: "kz", label: "Қазақша" },
  { value: "en", label: "English" },
];

export const LangSwitcher: FC = () => {
  const [language, changeLanguage] = useUnit([
    $language,
    $$langSwitcherModel.changeLanguage,
  ]);

  return (
    <Select
      className="w-28"
      options={LANGUAGES}
      value={language || "ru"}
      onChange={changeLanguage}
      triggerClassName="min-w-[unset]"
    />
  );
};
