import { FC } from "react";

import { Renderer } from "./ui";

import { PageHeader } from "@/shared/ui/atoms";

export const JournalPage: FC = () => {
  return (
    <>
      <PageHeader title="Journal" />
      <Renderer />
    </>
  );
};
