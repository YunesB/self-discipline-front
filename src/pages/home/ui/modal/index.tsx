import { FC } from "react";

import { useUnit } from "effector-react";

import { $$homeModel } from "../../model";
import { SearchMonthForm } from "./form";

import { Dialog } from "@/shared/ui/atoms";

export const SearchModal: FC = () => {
  const [isOpen, closeModal] = useUnit([
    $$homeModel.$isModalOpen,
    $$homeModel.closeModal,
  ]);

  return (
    <Dialog isOpen={isOpen} title="Go to month" onClose={closeModal}>
      <SearchMonthForm />
    </Dialog>
  );
};
