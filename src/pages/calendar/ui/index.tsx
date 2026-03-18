import { FC } from "react";

import { Calendar } from "./calendar";
import { CalendarHeader } from "./header";
import { SearchModal } from "./modal";
import { Weekdays } from "./weekdays";

export const Renderer: FC = () => (
  <>
    <CalendarHeader />
    <Weekdays />
    <Calendar />
    <SearchModal />
  </>
);
