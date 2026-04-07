import { FC } from "react";

import { Link } from "atomic-router-react";
import { useUnit } from "effector-react";
import { Award, UserRound } from "lucide-react";

import { LangSwitcher } from "@/entities/lang-switcher";

import { routes, $$routingModel } from "@/shared/routing/shared";

const Logo: FC = () => (
  <div className="flex items-center gap-x-2 text-blue-400">
    <Award className="size-6" />
    <p className="font-semibold">Self Discipline App</p>
  </div>
);

export const Header: FC = () => {
  const isHomePage = useUnit($$routingModel.$isHomePage);

  return (
    <header className="w-full bg-white shadow-md">
      <div className="w-full max-w-screen-xl mx-auto flex items-center justify-between py-2 px-4">
        {isHomePage ? (
          <Logo />
        ) : (
          <Link to={routes.home}>
            <Logo />
          </Link>
        )}

        <div className="flex items-center gap-x-4">
          <LangSwitcher />
          <UserRound />
        </div>
      </div>
    </header>
  );
};
