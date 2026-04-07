import { FC, PropsWithChildren } from "react";

type TProps = {
  title: string;
} & PropsWithChildren;

export const PageHeader: FC<TProps> = ({ title, children }) => {
  return (
    <section className="flex items-center justify-between mb-6 mt-2 px-4">
      <h1 className="text-2xl font-bold">{title}</h1>
      {children}
    </section>
  );
};
