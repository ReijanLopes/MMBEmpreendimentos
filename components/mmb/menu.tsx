"use client";

import Section from "@/components/section";
import { Instagram, Mail, Phone } from "lucide-react";
import Link from "next/link";
import LogoMMB from "../logo/logo-mmb";

export default function Menu() {
  return (
    <Section
      classNameBg="fixed min-h-screen w-full overflow-hidden z-[7] pointer-events-none header-hidden-animation"
      className={`flex justify-between py-5 lg:py-10 min-h-screen transition-all duration-300 text-white header-text-animation pointer-events-none`}
    >
      {/* 2. Adicionamos 'pointer-events-auto' na div que contém os itens interativos do menu */}
      <div className="flex flex-col gap-10 relative z-10 pointer-events-auto">
        <div className="h-10 w-12.5">
          <LogoMMB className={`w-12 header-fill-animation fill-white`} />
        </div>

        <div className="flex-1 w-6 justify-center hidden lg:flex">
          <span className=" border border-red-text-red-500 w-px"></span>
        </div>

        <div className="hidden lg:flex flex-col gap-7">
          <Link href={""} className="hover:opacity-80 transition-opacity">
            <Instagram className="w-6 h-6" />
          </Link>
          <Link href={""} className="hover:opacity-80 transition-opacity">
            <Mail className="w-6 h-6" />
          </Link>
          <Link href={""} className="hover:opacity-80 transition-opacity">
            <Phone className="w-6 h-6" />
          </Link>
        </div>

        <div className="flex-1 w-6 hidden lg:flex justify-center">
          <span className=" border border-red-text-red-500 w-px"></span>
        </div>

        <div className="h-10 hidden lg:flex">
          <p>MMB Empreendimentos</p>
        </div>
      </div>

      {/* Se essa barra da direita também precisar de interação (hover, clique), adicione pointer-events-auto nela também */}
      <div className="min-h-[calc(100vh-20rem)] w-1 py-20 hidden lg:block pl-2 relative pointer-events-auto">
        <div className="h-full w-1 bg-white progress-bg"></div>
        <div
          className="w-1 bg-[#5D9D85] absolute top-20 progress"
          style={
            {
              height: "var(--progress)",
              "--progress": "16%", // Valor inicial para o GSAP ter um ponto de partida
            } as React.CSSProperties
          }
        ></div>
      </div>
    </Section>
  );
}