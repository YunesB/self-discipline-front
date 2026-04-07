import { FC, PropsWithChildren } from "react";

import { useLocale } from "@/shared/lib/hooks";

export const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  useLocale();

  return (
    <main className="h-screen w-screen relative flex items-stretch overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse" />

      <div
        style={{ animationDuration: "6s" }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-400/30 to-purple-500/30 rounded-full blur-3xl animate-bounce"
      />
      <div
        style={{ animationDuration: "8s" }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-2xl animate-pulse"
      />
      <div
        style={{ animationDuration: "10s" }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-indigo-400/25 to-cyan-500/25 rounded-full blur-3xl animate-ping"
      />

      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-indigo-500/5 to-purple-500/10" />

      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="inset-0 absolute flex items-center justify-center z-10">
        {children}
      </div>
    </main>
  );
};
