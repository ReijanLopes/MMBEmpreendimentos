import Image from "next/image";
import { GridBackground } from "../background/grid-background";
import Section from "../section";
import Space from "./space";

import content from "@/content/mmb"

export default function AboutViniciusBrunetti() {
  return (
    <section className="relative bg-[#002F17] w-full overflow-hidden min-h-screen">
      <GridBackground />
      <div className="absolute top-10 flex justify-end min-w-150 h-screen w-full aspect-1336/1796 lg:hidden bottom-animation">
        <Image
        src={content.aboutVinicius.image}
        alt="Foto do Engenheiro Civil Vinicius Brunetti"
        className="min-w-190 w-full absolute aspect-1336/1796 "
        unoptimized
        loading="eager"
      />
        <div className="bottom-0 relative z-10 w-full h-full bg-linear-to-t from-[#002F17] to-transparent"></div>
      </div>
      

      <Section
        classNameBg="min-h-screen overflow-hidden z-20 relative"
        className="flex h-screen py-14 lg:py-36"
      >

        <Space />
        <section className="relative z-10 flex flex-col justify-end lg:justify-start">
          <div className="flex flex-col justify-end pb-20 lg:justify-start space-y-6 left-animation">
            <div>
              <p className="text-sm font-medium text-white mb-4">
                {content.aboutVinicius.badge}
              </p>
              <h1 className="custom-h1 font-bold text-white leading-tight">
                {content.aboutVinicius.title.line1}
                <br/>
                {content.aboutVinicius.title.line2}
              </h1>
            </div>

            <p className="text-base lg:text-lg text-gray-100 leading-relaxed max-w-md">
              {content.aboutVinicius.description}
            </p>
          </div>
        </section>
        <section className="absolute -right-[10%] xl:-right-[6%] 2xl:right-[10%] top-10 hidden lg:block right-animation">
          <div className="w-full h-full relative">
           
          <Image
            src={content.aboutVinicius.image}
            alt="Foto do Engenheiro Civil Vinicius Brunetti"
            className="min-w-260 w-full aspect-1336/1796"
            unoptimized
            loading="eager"
          />
           <div className="absolute bottom-0 w-full h-40 bg-linear-to-t from-[#002F17] to-transparent"></div>
          </div>
          
        </section>
      </Section>
    </section>
  );
}
