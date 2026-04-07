import { FC } from "react";

import { Link } from "atomic-router-react";

import { NAV_LINKS } from "@/shared/lib/constants/nav";

export const HomePage: FC = () => {
  return (
    <div className="flex items-center flex-col gap-y-4 justify-center size-full min-h-[calc(100dvh-100px)]">
      <ul className="flex flex-col items-center justify-center gap-4 bg-white px-4 py-12 rounded-lg shadow-md min-w-60">
        {NAV_LINKS.map(({ name, icon: Icon, route }) => (
          <li key={name}>
            <Link to={route} className="text-blue-500">
              <Icon className="inline-block mr-2 size-4" />
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
