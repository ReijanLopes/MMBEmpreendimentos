import Image from "next/image";
import { GridBackground } from "../background/grid-background";
import Section from "../section";
import Space from "./space";

import viniciusBrunetti from "@/public/person/vini.webp";

export default function AboutViniciusBrunetti() {
  return (
    <section className="relative bg-[#002F17] w-full overflow-hidden min-h-screen">
      <GridBackground />
      <Image
        src={viniciusBrunetti}
        alt="Foto do Engenheiro Civil Vinicius Brunetti"
        className="min-w-150 w-full aspect-1336/1796 absolute -bottom-10 inset-0 block z-10 lg:hidden bottom-animation"
      />

      <Section
        classNameBg="min-h-screen overflow-hidden z-20 relative bg-linear-to-t from-[#002F17] via-[75%] via-transparent"
        className="flex h-screen py-14 lg:py-36"
      >

        <Space />
        <section className="relative z-10 flex flex-col justify-end lg:justify-start">
          <div className="flex flex-col justify-end pb-20 lg:justify-start space-y-6">
            <div>
              <p className="text-sm font-medium text-white mb-4 left-animation">
                Engenheiro Fundador
              </p>
              <h1 className="custom-h1 font-bold text-white leading-tight left-animation">
                Vinicius
                <br />
                Brunetti
              </h1>
            </div>

            <p className="text-base lg:text-lg text-gray-100 leading-relaxed max-w-md left-animation">
              Mais do que erguer paredes, meu compromisso é edificar conquistas.
              Acredito que cada projeto é a materialização de um sonho, por
              isso, uno a precisão da engenharia à dedicação de quem entende o
              valor de cada detalhe.
            </p>
          </div>
        </section>
        <section className="absolute -right-[10%] xl:-right-[6%] 2xl:right-[10%] -top-30  hidden lg:block right-animation">
          <div className="w-full h-full relative">
           
          <Image
            src={viniciusBrunetti}
            alt="Foto do Engenheiro Civil Vinicius Brunetti"
            className="min-w-250 w-full aspect-1336/1796"
          />
           <div className="absolute bottom-0 w-full h-20 bg-linear-to-t from-[#002F17] to-transparent"></div>
          </div>
          
        </section>
      </Section>
    </section>
  );
}
