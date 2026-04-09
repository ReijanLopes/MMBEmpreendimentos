import Image from "next/image";
import Section from "../section";
import Space from "./space";

import imageDefault from "@/public/mmb/bg/image-hero.webp";

import content from "@/content/mmb"

export default function Hero() {
  return (
    <section className="relative bg-[#002F17] w-full min-h-screen">
      <Image
        src={content.hero.imagedefault}
        fill
        className="object-cover object-top"
        loading="lazy"
        alt="Entrega de chaves de imóvel ao cliente"
      />
      <Section
        classNameBg="min-h-screen  overflow-hidden relative bg-linear-to-t from-black to-transparent"
        className="flex h-screen"
      >
        <Space />
        <section className="flex items-end relative z-10 pb-40">
          <div className="max-w-2xl ">
            {/* Badge */}
            <div className="mb-8 left-animation">
              <span className="inline-block bg-white text-black text-sm font-semibold px-4 py-2 rounded-[5px]">
                {content.hero.badge}
              </span>
            </div>

            {/* Heading */}
            <div className="mb-8 left-animation">
              <h1 className="text-white text-xl md:text-2xl font-medium mb-2">
                {content.hero.title.line1}
              </h1>
              <h1 className="text-white text-5xl! md:text-6xl! lg:text-7xl! font-bold leading-[0.76]">
                {content.hero.title.line2}
              </h1>
            </div>

            {/* Description */}
            <p className="text-white text-base md:text-lg leading-relaxed max-w-lg left-animation">
              {content.hero.description}
            </p>
          </div>
        </section>
      </Section>
    </section>
  );
}
