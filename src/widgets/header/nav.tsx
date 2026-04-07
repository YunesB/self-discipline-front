import { FC } from "react";

import { Link } from "atomic-router-react";

import { NAV_LINKS } from "@/shared/lib/constants/nav";

export const Nav: FC = () => (
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
);
