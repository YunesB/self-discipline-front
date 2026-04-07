import { FC } from "react";

import { useUnit } from "effector-react";
import { Plus } from "lucide-react";

import { $$habitsModel } from "../model";

import { Button, PageHeader } from "@/shared/ui/atoms";

export const HabitsHeader: FC = () => {
  const openDrawer = useUnit($$habitsModel.openDrawer);

  return (
    <PageHeader title="My Habits">
      <Button onClick={openDrawer}>
        <Plus className="mr-2 size-4" />
        Add Habit
      </Button>
    </PageHeader>
  );
};
