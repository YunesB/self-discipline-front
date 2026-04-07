import { FC } from "react";

import { columns } from "./columns";

import { MOCK_HABITS } from "@/shared/lib/mocks";
import { DataTable } from "@/shared/ui/atoms";

export const HabitsTable: FC = () => {
  return (
    <section className="p-4 rounded-xl bg-white animate-fade-in">
      <DataTable columns={columns} data={MOCK_HABITS} />
    </section>
  );
};
