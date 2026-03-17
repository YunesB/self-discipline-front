import { FC } from "react";

import { LoaderCircle } from "lucide-react";

import { cn } from "@/shared/lib/utils";

type TProps = {
  className?: string;
};

export const LoaderIcon: FC<TProps> = ({ className }) => (
  <LoaderCircle className={cn("size-6 animate-spin", className)} />
);
