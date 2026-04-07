import { ColumnDef } from "@tanstack/react-table";

import { Actions } from "./actions";

import { getWeekDayColor } from "@/shared/lib/constants/calendar";
import { THabit } from "@/shared/lib/mocks";
import { cn } from "@/shared/lib/utils";
import { ActionHeader } from "@/shared/ui/atoms";

export const columns: ColumnDef<THabit>[] = [
  {
    accessorKey: "name",
    header: "Habit Name",
  },
  {
    accessorKey: "monthlyGoal",
    header: "Monthly Goal",
  },
  {
    accessorKey: "days",
    header: "Days of the Week",
    cell: ({ row }) => (
      <div className="flex gap-1">
        {row.original.days.map((day) => (
          <span
            key={day}
            className={cn("px-2 py-1 text-sm rounded", getWeekDayColor(day))}
          >
            {day}
          </span>
        ))}
      </div>
    ),
  },
  {
    accessorKey: "actions",
    header: () => <ActionHeader />,
    cell: () => <Actions />,
  },
];
