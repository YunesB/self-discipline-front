import { FC } from "react";

import { DayRate } from "./date-rate";
import { WritingArea } from "./writing-area";

export const Renderer: FC = () => {
  return (
    <>
      <WritingArea />
      <DayRate />
    </>
  );
};
