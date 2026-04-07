import { FC } from "react";

import { Award } from "lucide-react";

import { cn } from "@/shared/lib/utils";

type TProps = {
  className?: string;
};

export const Logo: FC<TProps> = ({ className }) => (
  <div className={cn("flex items-center gap-x-2 text-blue-400", className)}>
    <Award className="size-6" />
    <p className="font-semibold">Self Discipline App</p>
  </div>
);
