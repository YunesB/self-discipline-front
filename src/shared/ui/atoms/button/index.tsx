import { FC, forwardRef } from "react";

import { Trash, Pencil, Loader2, LucideIcon } from "lucide-react";

import {
  ButtonProps,
  DropdownMenuItem,
  Button as ShaButton,
} from "../../shadcn";
import { LoaderIcon } from "../loader-icon";

import { cn } from "@/shared/lib/utils";

type TProps = {
  isLoading?: boolean;
  fullWidth?: boolean;
} & ButtonProps;

export const Button = forwardRef<HTMLButtonElement, TProps>(
  ({ isLoading, disabled, children, fullWidth, ...props }) => {
    return (
      <ShaButton
        disabled={disabled || isLoading}
        {...props}
        className={cn(props.className, fullWidth && "w-full")}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </ShaButton>
    );
  },
);

export const TableActionButton: FC<TProps> = (props) => {
  return (
    <DropdownMenuItem className="p-0">
      <Button {...props} variant="ghost" className="px-5 py-3 h-full w-full" />
    </DropdownMenuItem>
  );
};

const BUTTON_CLASS = "justify-start gap-2 w-full text-sm";
const ICON_CLASS = "size-4 mr-1";
const LOADER_CLASS = "size-4 mr-1 animate-spin";

export const ActionButton: FC<
  TProps & {
    icon?: LucideIcon;
    isLoading?: boolean;
    actionType?: "edit" | "delete" | "default";
  }
> = ({ actionType = "default", icon: Icon, isLoading, ...props }) => {
  if (actionType === "delete") {
    return (
      <Button
        size="sm"
        {...props}
        variant="ghost"
        disabled={props.disabled || isLoading}
        className={cn("text-red-500", BUTTON_CLASS, props.className)}
      >
        {isLoading ? (
          <LoaderIcon className={LOADER_CLASS} />
        ) : (
          <Trash className={ICON_CLASS} />
        )}
        Delete
      </Button>
    );
  }

  if (actionType === "edit") {
    return (
      <Button
        size="sm"
        {...props}
        variant="ghost"
        disabled={props.disabled || isLoading}
        className={cn("text-blue-500", BUTTON_CLASS, props.className)}
      >
        {isLoading ? (
          <LoaderIcon className={LOADER_CLASS} />
        ) : (
          <Pencil className={ICON_CLASS} />
        )}
        Edit
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      {...props}
      variant="ghost"
      disabled={props.disabled || isLoading}
      className={cn(
        "text-gray-700",
        BUTTON_CLASS,
        isLoading && !Icon && "animate-pulse",
        props.className,
      )}
    >
      {Icon && isLoading ? (
        <LoaderIcon className={LOADER_CLASS} />
      ) : Icon ? (
        <Icon className={ICON_CLASS} />
      ) : null}
      {props.children}
    </Button>
  );
};
