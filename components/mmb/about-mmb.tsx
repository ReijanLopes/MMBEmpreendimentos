import Image from "next/image";
import { GridBackground } from "../background/grid-background";
import Section from "../section";
import Space from "./space";

import floorPlanBuilding from "@/public/mmb/bg/bg-planta-base.png"

export default function AboutMMB() {
  return (
    <Section classNameBg="bg-[#002F17] min-h-screen overflow-hidden relative" className="flex">
      <GridBackground />
      <Image alt="Planta baixa" src={floorPlanBuilding} className="absolute hidden -right-[70%] rotate-5  lg:block"/>
      <Space />
      <section className="relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-white mb-8 left-animation">
            Sobre a MMB Empreendimentos
          </h1>

          <div className="space-y-4 text-white text-base lg:text-lg leading-relaxed mb-10 left-animation">
            <p>
              Somos uma empresa especializada em construção civil, com
              acabamento em alto padrão, assinada pelo Engenheiro Civil Vinícius
              Brunetti.
            </p>

            <p>
              Iniciamos nossas atividades com esta marca em 2021, mas já são 15
              anos de experiência no ramo de construção e projetos estruturais.
            </p>

            <p>
              Nossa missão é realizar o sonho dos que desejam um empreendimento
              de qualidade, com preço justo, entregue com pontualidade e
              transparência
            </p>
          </div>

          {/* Cards de Estatísticas */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 lg:gap-4">
            <div className="bg-white rounded-[5px] flex items-center gap-2 p-4 text-center bottom-animation">
              <div className="text-2xl lg:text-3xl font-bold">
                15+
              </div>
              <div className="text-sm lg:text-base font-medium">
                Anos de experiência
              </div>
            </div>

            <div className="bg-white rounded-[5px] flex items-center gap-2 p-4 text-center bottom-animation">
              <div className="text-2xl lg:text-3xl font-bold">
                500+
              </div>
              <div className="text-sm lg:text-base font-medium">
                Clientes satisfeitos
              </div>
            </div>

            <div className="bg-white rounded-[5px] flex items-center gap-2 p-4 text-center bottom-animation">
              <div className="text-2xl lg:text-3xl font-bold">
                100+
              </div>
              <div className="text-sm lg:text-base font-medium">
                Projetos concluídos
              </div>
            </div>
          </div>
        </div>
      </section>
    </Section>
  );
}
