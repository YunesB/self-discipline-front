import { FC } from "react";

import { Chart } from "./ui/chart";
import { DashboardTable } from "./ui/table";

import {
  CURRENT_YEAR,
  CURRENT_MONTH_NAME,
} from "@/shared/lib/constants/calendar";
import { PageHeader } from "@/shared/ui/atoms";

export const DashboardPage: FC = () => {
  return (
    <div className="w-full space-y-6">
      <PageHeader
        title={`Dashboard (${CURRENT_MONTH_NAME}, ${CURRENT_YEAR})`}
      />
      <DashboardTable />
      <Chart />
    </div>
  );
};
