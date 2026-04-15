import { FC } from "react";

import { Award } from "lucide-react";

import { cn } from "@/shared/lib/utils";

type TProps = {
  className?: string;
  type?: "link" | "default";
};

export const Logo: FC<TProps> = ({ className, type = "default" }) => (
  <div
    className={cn(
      "flex items-center gap-x-2",
      type === "default" ? "text-brand" : "text-gray-400  hover:text-brand",
      className,
    )}
  >
    <Award className="size-6" />
    <p className="font-semibold">Self Discipline App</p>
  </div>
);
