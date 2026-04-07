import { FC } from "react";

import { HabitForm } from "./form";

import { Sheet } from "@/shared/ui/atoms";

export const HabitsDrawer: FC = () => {
  const isOpen = true;
  const handleClose = () => {};

  return (
    <Sheet
      title={""}
      isOpen={isOpen}
      onClose={handleClose}
      className="min-w-[500px]"
    >
      <HabitForm />
    </Sheet>
  );
};
