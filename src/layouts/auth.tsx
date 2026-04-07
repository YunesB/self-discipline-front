import { FC, PropsWithChildren } from "react";

import { useLocale } from "@/shared/lib/hooks";

export const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  useLocale();

  return (
    <main className="h-screen w-screen relative flex items-stretch overflow-hidden bg-gradient-to-br from-slate-100 via-gray-50 to-blue-50">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-200/30 via-gray-200/25 to-blue-200/30 animate-pulse" />

      <div
        style={{ animationDuration: "6s" }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-300/60 to-slate-400/50 rounded-full blur-3xl animate-bounce"
      />
      <div
        style={{ animationDuration: "8s" }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-gray-300/45 to-blue-400/40 rounded-full blur-2xl animate-pulse"
      />
      <div
        style={{ animationDuration: "10s" }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-slate-300/55 to-teal-300/45 rounded-full blur-3xl animate-ping"
      />

      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-slate-200/12 to-blue-200/15" />

      <div
        className="absolute inset-0 opacity-4"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(100,116,139,0.25) 1px, transparent 0)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="inset-0 absolute flex items-center justify-center z-10">
        {children}
      </div>
    </main>
  );
};
