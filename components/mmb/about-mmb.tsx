import Image from "next/image";
import { GridBackground } from "../background/grid-background";
import Section from "../section";
import Space from "./space";

import content from "@/content/mmb";

export default function AboutMMB() {
  return (
    <Section
      classNameBg="bg-[#002F17] min-h-screen overflow-hidden relative"
      className="flex"
    >
      <GridBackground />
      <Image
        alt="Planta baixa"
        src={content.aboutMMB.image}
        className="absolute hidden -right-[70%] rotate-5  lg:block"
      />
      <Space />
      <section className="relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-white mb-8 left-animation">
            {content.aboutMMB.title}
          </h1>

          <div className="space-y-4 text-white text-base lg:text-lg leading-relaxed mb-10 left-animation">
            {content.aboutMMB.description
              .split("/n")
              .map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
          </div>

          {/* Cards de Estatísticas */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 lg:gap-4">
            {content.aboutMMB.metrics.map(({ value, label }, index) => (
              <div
                key={index}
                className="bg-white rounded-[5px] flex items-center gap-2 p-4 text-center bottom-animation"
              >
                <div className="text-2xl lg:text-3xl font-bold">{value}</div>
                <div className="text-sm lg:text-base font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Section>
  );
}
