import { FC } from "react";
import { useTranslation } from "react-i18next";

import { AuthLayout } from "@/layouts/auth";
import { Link } from "atomic-router-react";
import { ShieldX } from "lucide-react";

import { RoundedBox } from "../rounded-box";

import { routes } from "@/shared/routing/shared";

export const AuthError: FC = () => {
  const { t } = useTranslation();

  return (
    <AuthLayout>
      <div className="size-full flex items-center justify-center animate-slide-down">
        <RoundedBox className="w-[90%] max-w-[400px] px-4 py-7 flex flex-col items-center justify-center text-center">
          <ShieldX className="size-12 mb-4 text-red-500" />
          <h1 className="text-2xl font-semibold">{t("AUTH.TITLE")}</h1>
          <div className="text-gray-500 my-4">
            <p>{t("AUTH.SUBTITLE_1")}</p>
            <p>{t("AUTH.SUBTITLE_2")}</p>
          </div>
          <Link to={routes.home} className="underline text-blue-400">
            {t("TO_HOME")}
          </Link>
        </RoundedBox>
      </div>
    </AuthLayout>
  );
};
