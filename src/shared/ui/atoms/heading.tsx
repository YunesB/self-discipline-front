import { FC, PropsWithChildren } from "react";

import { cn } from "@/shared/lib/utils";

type TProps = {
  className?: string;
} & PropsWithChildren;

export const Heading: FC<TProps> = ({ children, className }) => (
  <h2 className={cn("text-lg font-semibold", className)}>{children}</h2>
);
