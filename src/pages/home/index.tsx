import { FC } from "react";

import { Link } from "atomic-router-react";
import { HomeIcon } from "lucide-react";

import { routes } from "@/shared/routing/shared";

export const HomePage: FC = () => {
  return (
    <div className="flex items-center flex-col gap-y-4 justify-center size-full">
      <HomeIcon
        strokeWidth={1}
        className="size-32 text-blue-400 animate-slide-down"
      />
      <Link to={routes.calendar} className="underline">
        Calendar
      </Link>
      <Link to={routes.dashboard} className="underline">
        Dashboard
      </Link>
    </div>
  );
};
