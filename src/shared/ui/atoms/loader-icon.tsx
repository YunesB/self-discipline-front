import { FC } from "react";

import { Loader } from "lucide-react";

import { cn } from "@/shared/lib/utils";

type TProps = {
  className?: string;
};

export const LoaderIcon: FC<TProps> = ({ className }) => (
  <Loader className={cn("size-6 animate-spin", className)} />
);
