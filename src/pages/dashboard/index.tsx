import { FC } from "react";

import { Chart } from "./ui/chart";
import { DashboardTable } from "./ui/table";

export const DashboardPage: FC = () => {
  return (
    <div className="w-full space-y-6">
      <DashboardTable />
      <Chart />
    </div>
  );
};
