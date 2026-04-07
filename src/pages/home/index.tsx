import { FC } from "react";

import { Link } from "atomic-router-react";

import { routes } from "@/shared/routing/shared";

const LINKS = [
  { name: "Calendar", to: routes.calendar },
  { name: "Dashboard", to: routes.dashboard },
  { name: "Habits", to: routes.habits },
];

export const HomePage: FC = () => {
  return (
    <div className="flex items-center flex-col gap-y-4 justify-center size-full">
      <ul className="flex flex-col items-center justify-center gap-4  bg-white px-4 py-12 rounded-lg shadow-md min-w-60">
        {LINKS.map(({ name, to }) => (
          <li key={name}>
            <Link to={to} className="underline">
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
