import { FC, PropsWithChildren } from "react";

type TProps = {
  title: string;
} & PropsWithChildren;

export const PageHeader: FC<TProps> = ({ title, children }) => (
  <section className="flex items-center justify-between mb-6 mt-2 px-4">
    <h1 className="text-2xl font-bold animate-slide-left">{title}</h1>
    <div className="space-x-4 animate-slide-right">{children}</div>
  </section>
);
