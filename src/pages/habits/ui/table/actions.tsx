import { FC } from "react";

import { ActionButton, TableActions } from "@/shared/ui/atoms";

export const Actions: FC = () => {
  return (
    <TableActions>
      <ActionButton actionType="edit" />
      <ActionButton actionType="delete" />
    </TableActions>
  );
};
