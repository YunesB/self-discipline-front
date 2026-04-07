import { FC } from "react";

import { Link } from "atomic-router-react";
import { useUnit } from "effector-react";
import { UserRound } from "lucide-react";

import { Nav } from "./nav";

import { LangSwitcher } from "@/entities/lang-switcher";

import { routes, $$routingModel } from "@/shared/routing/shared";
import { Logo } from "@/shared/ui/atoms";

export const Header: FC = () => {
  const [isHomePage] = useUnit([$$routingModel.$isHomePage]);

  return (
    <header className="w-full bg-white shadow-md z-10">
      <div className="w-full max-w-screen-xl mx-auto flex items-center justify-between py-2 px-4">
        <div className="flex items-center gap-x-12">
          {isHomePage ? (
            <Logo />
          ) : (
            <Link to={routes.home}>
              <Logo type="link" />
            </Link>
          )}
          <Nav />
        </div>

        <div className="flex items-center gap-x-4">
          <LangSwitcher />
          <UserRound />
        </div>
      </div>
    </header>
  );
};
