import { FC, PropsWithChildren } from "react";

import { Header } from "@/widgets/header";

import { useLocale } from "@/shared/lib/hooks";
import { cn } from "@/shared/lib/utils";

type TProps = PropsWithChildren & {
  className?: string;
};

export const Layout: FC<TProps> = ({ children, className }) => {
  useLocale();

  return (
    <div className="bg-gray-200 overflow-hidden flex flex-col h-screen">
      <Header />
      <main
        className={cn(`flex-grow overflow-y-auto p-4 app-scroll`, className)}
      >
        {children}
      </main>
    </div>
  );
};
