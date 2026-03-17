import { FC } from "react";

import { useUnit } from "effector-react";

import { $$counterModel } from "./model";

import { Button } from "@/shared/ui/atoms";

export const Counter: FC = () => {
  const [clicksCount, buttonClicked] = useUnit([
    $$counterModel.$clicksCount,
    $$counterModel.buttonClicked,
  ]);

  return (
    <Button onClick={buttonClicked} className="min-w-[100px] animate-fade-in">
      {clicksCount}
    </Button>
  );
};
