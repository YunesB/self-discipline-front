import { FC } from "react";

import { Linkedin, Facebook, Instagram } from "lucide-react";

import { LoginForm } from "./form";

import { Logo } from "@/shared/ui/atoms";

export const Renderer: FC = () => (
  <section className="p-6 rounded-xl bg-white shadow-lg min-w-[400px] space-y-4 animate-slide-down">
    <Logo />
    <LoginForm />

    <hr />
    <div className="flex items-center justify-center gap-6">
      <Linkedin />
      <Instagram />
      <Facebook />
    </div>
  </section>
);
