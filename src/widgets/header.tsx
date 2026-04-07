import { FC } from "react";

import { Link } from "atomic-router-react";
import { useUnit } from "effector-react";
import { UserRound } from "lucide-react";

import { LangSwitcher } from "@/entities/lang-switcher";

import { NAV_LINKS } from "@/shared/lib/constants/nav";
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
              <Logo />
            </Link>
          )}

          <nav>
            <ul>
              {NAV_LINKS.map(({ name, route }) => (
                <li key={name} className="inline-block ml-6">
                  <Link
                    to={route}
                    activeClassName="!text-blue-400 underline"
                    className="text-gray-500 hover:opacity-70 text-sm"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-x-4">
          <LangSwitcher />
          <UserRound />
        </div>
      </div>
    </header>
  );
};
