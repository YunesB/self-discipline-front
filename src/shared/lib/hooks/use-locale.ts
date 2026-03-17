import dayjs from "dayjs";
import { useUnit } from "effector-react";

import { $language } from "@/app/model";

export const useLocale = () => {
  const locale = useUnit($language);

  dayjs.locale(locale === "en" ? "en" : locale === "kz" ? "kk" : "ru");
};
