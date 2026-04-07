import { FC, ReactNode } from "react";

import { cn } from "@/shared/lib/utils";
import {
  SheetTitle,
  SheetFooter,
  SheetHeader,
  SheetContent,
  SheetDescription,
  Sheet as ShaSheet,
} from "@/shared/ui/shadcn";

type TProps = {
  isOpen: boolean;
  footer?: ReactNode;
  className?: string;
  children: ReactNode;
  onClose: VoidFunction;
  title?: string | JSX.Element;
  description?: string | JSX.Element;
};

export const Sheet: FC<TProps> = ({
  title,
  footer,
  children,
  description,
  isOpen = false,
  className,
  onClose = () => null,
}) => {
  return (
    <ShaSheet open={isOpen}>
      <SheetContent
        onClose={onClose}
        className={cn("sm:max-w-none", className)}
      >
        <SheetHeader>
          {title && <SheetTitle>{title}</SheetTitle>}
          {description && <SheetDescription>{description}</SheetDescription>}
        </SheetHeader>
        {children}
        {footer && <SheetFooter>{footer}</SheetFooter>}
      </SheetContent>
    </ShaSheet>
  );
};
