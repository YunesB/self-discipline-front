import { FC } from "react";

import { Link } from "atomic-router-react";
import { ChevronRight } from "lucide-react";

import { NAV_LINKS } from "@/shared/lib/constants/nav";

export const HomePage: FC = () => (
  <div className="flex items-center flex-col gap-y-4 justify-center size-full min-h-[calc(100dvh-100px)]">
    <ul className="flex flex-col items-center justify-center gap-2 bg-white p-4 rounded-lg shadow-md min-w-60 animate-slide-down">
      {NAV_LINKS.map(({ name, icon: Icon, route }) => (
        <li key={name} className="w-full">
          <Link
            to={route}
            className="p-2 w-full bg-gray-100 rounded-md flex items-center justify-between hover:text-brand hover:bg-blue-50 transition-all hover:pr-0"
          >
            <div>
              <Icon className="inline-block mr-2 size-4" />
              {name}
            </div>
            <ChevronRight className="text-gray-600" />
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
