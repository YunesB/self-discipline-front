import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Counter } from "@/entities/counter-button/ui";

export const HomeRoute: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="size-full flex flex-col items-center justify-center pb-[200px]">
      <div className="flex flex-col items-center justify-center max-w-[400px] w-full px-4 border shadow-lg rounded-lg p-8 animate-slide-down bg-white">
        <h1 className="text-3xl text-center max-w-[80%] font-semibold mb-10">
          {t("WELCOME")}
        </h1>

        <Counter />
      </div>
    </div>
  );
};
