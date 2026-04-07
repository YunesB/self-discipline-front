import { FC, useState } from "react";

import { useUnit } from "effector-react";
import { LogOut, UserRound } from "lucide-react";

import { $$profileModel } from "./model";

import { Button } from "@/shared/ui/atoms";
import { Popover, PopoverTrigger, PopoverContent } from "@/shared/ui/shadcn";

export const Profile: FC = () => {
  const [isOpen, setOpen] = useState(false);
  const handleLogout = useUnit($$profileModel.handleLogout);

  return (
    <Popover open={isOpen} onOpenChange={setOpen}>
      <PopoverTrigger>
        <UserRound
          className={
            isOpen ? "text-blue-500" : "text-gray-600 hover:text-gray-800"
          }
        />
      </PopoverTrigger>

      <PopoverContent align="end" sideOffset={12} className="w-fit p-3">
        <div className="w-[150px]">
          <p className="text-gray-800 mb-2">John Doe</p>
          <p className="text-xs text-gray-400">
            Currently working on self-discipline
          </p>
        </div>

        <hr className="my-2" />

        <Button
          fullWidth
          variant="outline"
          onClick={() => {
            handleLogout();
            setOpen(false);
          }}
          className="bg-white border-red-400 text-red-400 hover:bg-red-50/40 hover:text-red-500"
        >
          <LogOut className="mr-2 size-4" />
          Logout
        </Button>
      </PopoverContent>
    </Popover>
  );
};
