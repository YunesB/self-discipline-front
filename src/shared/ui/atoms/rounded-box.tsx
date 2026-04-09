import { FC, PropsWithChildren } from "react";

import { cn } from "@/shared/lib/utils";

type TProps = {
  className?: string;
  tag?: keyof JSX.IntrinsicElements;
} & PropsWithChildren;

export const RoundedBox: FC<TProps> = ({
  className,
  children,
  tag: Tag = "div",
}) => (
  <Tag
    className={cn(
      "p-4 rounded-xl bg-white w-full max-w-full animate-fade-in",
      className,
    )}
  >
    {children}
  </Tag>
);
