import { FC } from "react";

import { useUnit } from "effector-react";

import { $$habitsModel } from "../model";
import { HabitForm } from "./form";

import { Sheet } from "@/shared/ui/atoms";

export const HabitsDrawer: FC = () => {
  const [isOpen, handleClose] = useUnit([
    $$habitsModel.$isDrawerOpen,
    $$habitsModel.closeDrawer,
  ]);

  return (
    <Sheet
      isOpen={isOpen}
      title="Add Habit"
      onClose={handleClose}
      className="w-[450px]"
    >
      <HabitForm onClose={handleClose} />
    </Sheet>
  );
};
