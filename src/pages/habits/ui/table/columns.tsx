import { ColumnDef } from "@tanstack/react-table";

import { Actions } from "./actions";

import { THabit } from "@/shared/lib/mocks";
import { ActionHeader } from "@/shared/ui/atoms";

export const columns: ColumnDef<THabit>[] = [
  {
    accessorKey: "name",
    header: "Habit Name",
  },
  {
    accessorKey: "actions",
    header: () => <ActionHeader />,
    cell: () => <Actions />,
  },
];
