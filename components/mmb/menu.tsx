"use client"

import Section from "@/components/section";
import { Instagram, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import logoMMB from "@/public/logo.png";
import { useEffect, useState } from "react";
import LogoMMB from "../logo/logo-mmb";


export default function Menu() {
  return (
    <Section
      classNameBg="fixed min-h-screen overflow-hidden"
      className={`flex justify-between py-5 lg:py-10 min-h-screen transition-all duration-300 text-white header-text-animation`}
    >
      <div className="flex flex-col gap-10 relative z-20">
        <div className="h-10 w-12.5">
          <LogoMMB className={`w-12 header-fill-animation fill-white`}/>
        </div>
        <div className="flex-1 w-6 justify-center hidden lg:flex">
          <span className=" border border-red-text-red-500 w-px"></span>
        </div>

        <div className="hidden lg:flex flex-col gap-7">
          <Link href={""}>
            <Instagram className="w-6 h-6" />
          </Link>
          <Link href={""}>
            <Mail className="w-6 h-6" />
          </Link>
          <Link href={""}>
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
      <div className="flex-1  relative -z-10"></div>
      <div className="min-h-[calc(100vh-80px)] py-20 w-px">
        <span className="bg-red-text-red-500 "></span>
      </div>
    </Section>
  );
}
