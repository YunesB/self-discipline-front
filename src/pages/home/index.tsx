import { FC } from "react";

import { Renderer } from "./ui";

export const HomeRoute: FC = () => {
  return (
    <div className="mx-auto w-fit space-y-4 mt-4">
      <Renderer />
    </div>
  );
};
