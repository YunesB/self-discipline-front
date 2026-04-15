import { FC } from "react";

import { SwitchProps } from "@radix-ui/react-switch";
import { Loader } from "lucide-react";

import { Switch as ShaSwitch } from "../../shadcn";

type TProps = {
  label?: string;
  isLoading?: boolean;
} & SwitchProps;

export const Switch: FC<TProps> = ({ isLoading, label, ...props }) => {
  if (isLoading) {
    return (
      <div className="min-w-[44px] h-6 rounded-3xl bg-slate-200 flex items-center justify-center">
        <Loader className="size-4 animate-spin" />
      </div>
    );
  }

  if (label) {
    return (
      <div className="flex items-center gap-2">
        <ShaSwitch {...props} />
        <span className="text-gray-500 text-sm">{label}</span>
      </div>
    );
  }

  return <ShaSwitch {...props} />;
};
