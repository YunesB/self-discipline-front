import { FC } from "react";

import { HabitsDrawer } from "./drawer";
import { HabitsHeader } from "./header";
import { HabitsTable } from "./table";

export const Renderer: FC = () => (
  <>
    <HabitsHeader />
    <HabitsTable />
    <HabitsDrawer />
  </>
);
