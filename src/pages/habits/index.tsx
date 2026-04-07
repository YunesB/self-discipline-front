import { FC } from "react";

import { Renderer } from "./ui";

import { Button, PageHeader } from "@/shared/ui/atoms";

export const HabitsPage: FC = () => {
  return (
    <>
      <PageHeader title="My Habits">
        <Button>Add Habit</Button>
      </PageHeader>
      <Renderer />
    </>
  );
};
