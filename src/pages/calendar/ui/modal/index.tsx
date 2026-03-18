import { FC } from "react";

import { useUnit } from "effector-react";

import { $$calendarModel } from "../../model";
import { SearchMonthForm } from "./form";

import { Dialog } from "@/shared/ui/atoms";

export const SearchModal: FC = () => {
  const [isOpen, closeModal] = useUnit([
    $$calendarModel.$isModalOpen,
    $$calendarModel.closeModal,
  ]);

  return (
    <Dialog isOpen={isOpen} title="Go to month" onClose={closeModal}>
      <SearchMonthForm />
    </Dialog>
  );
};
