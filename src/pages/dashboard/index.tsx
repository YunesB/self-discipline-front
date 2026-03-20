import { FC } from "react";

import { Chart } from "./ui/chart";
import { DashboardTable } from "./ui/table";

export const DashboardPage: FC = () => {
  return (
    <>
      <DashboardTable />
      <Chart />
    </>
  );
};
