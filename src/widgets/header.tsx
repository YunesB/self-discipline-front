import { FC } from "react";

import { Gem, UserRound } from "lucide-react";

import { LangSwitcher } from "@/entities/lang-switcher";

export const Header: FC = () => {
  return (
    <header className="w-full bg-white">
      <div className="w-full max-w-screen-xl mx-auto flex items-center justify-between py-4">
        <div className="flex items-center gap-x-2">
          <Gem className="size-6 text-orange-600" />
          <p className="text-orange-600 font-semibold">Self Discipline App</p>
        </div>

        <div className="flex items-center gap-x-4">
          <LangSwitcher />
          <UserRound />
        </div>
      </div>
    </header>
  );
};
