"use client";

import { Building2, Calendar, Home, MapPin } from "lucide-react";
import { GridBackground } from "../background/grid-background";
import Section from "../section";
import Space from "./space";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Fragment, useState } from "react";

import type { Swiper as SwiperType } from "swiper";

import content from "@/content/mmb";
import Image from "next/image";

export default function Ventures({ onClick }: { onClick?: (index: number) => void }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  return (
    <Section
      classNameBg="bg-[#002F17] min-h-screen overflow-hidden z-20 relative"
      className="flex"
    >
      <GridBackground />
      <Space />

      {/* CORREÇÃO: min-w-0 é essencial aqui para o Swiper não "explodir" o Flexbox */}
      <section className="relative z-50 flex-1 min-w-0 md:px-0">
        <h1 className="text-5xl font-bold text-white mb-8 text-left left-animation">
          {content.ventures.title}
        </h1>

        {/* Cards Grid */}
        <Swiper
          spaceBetween={10}
          onSwiper={setSwiperInstance} // Guarda a instância para usar nos botões
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          modules={[Pagination, Navigation]}
          loop
          autoplay
          slidesPerView={1.05}
          breakpoints={{
            640: {
              slidesPerView: 2.05,
              spaceBetween: 20, // Mostra um pedaço do próximo card no mobile
            },
            1024: {
              slidesPerView: 3.05,
              spaceBetween: 20,
            },
          }}
          className="property-swiper w-full pb-12 pr-4 bottom-animation" // pb-12 para dar espaço às bolinhas da paginação
        >
          {content.ventures.projects.map((project) => {
        
            return (
              <SwiperSlide
                key={project.id}
                className="h-auto"
                onClick={() => onClick && onClick(project.id)}
              >
                {/* h-full garante que todos os cards tenham a mesma altura */}
                <div className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col">
                  {/* Image Container */}

                  <div className="relative h-52 aspect-269/233 bg-blue-200 flex items-center justify-center overflow-hidden">
                    <Image
                      src={project.image}
                      alt={""}
                      fill
                      unoptimized
                      className="object-cover object-top w-full"
                    />

                    {/* Home Icon */}

                    <div
                      className={`absolute top-4 left-4 ${project.logo.bgColor} bg-opacity-80 rounded-lg p-3 z-10`}
                    >
                      <Image
                        src={project.logo.image}
                        alt={project.logo.alt}
                        width={20}
                        unoptimized
                        className="w-5"
                      />
                    </div>
                  </div>

                  {/* Content */}

                  <div className="p-4 grow flex flex-col">
                    {/* Title */}

                    <div className="mb-4 flex items-center justify-center">
                      <Image
                        src={project.title.url}
                        alt=""
                        unoptimized
                        className={project.title.className}
                      />
                    </div>

                    {/* Info Grid */}

                    <div className="gap-2 grid grid-cols-2 grow">
                      {/* Tipo */}

                      <div className="flex items-start gap-3">
                        <div className="shrink-0 mt-1">
                          <Home className="w-5 h-5 text-gray-700" />
                        </div>

                        <div>
                          <p className="text-xs text-gray-600 uppercase">
                            Tipo
                          </p>

                          <p className="text-sm font-semibold text-gray-900">
                            {project.tipo}
                          </p>
                        </div>
                      </div>

                      {/* Andares */}

                      <div className="flex items-start gap-3">
                        <div className="shrink-0 mt-1">
                          <Building2 className="w-5 h-5 text-gray-700" />
                        </div>

                        <div>
                          <p className="text-xs text-gray-600 uppercase">
                            Andares
                          </p>

                          <p className="text-sm font-semibold text-gray-900">
                            {project.andares}
                          </p>
                        </div>
                      </div>

                      {/* Unidades */}

                      <div className="flex items-start gap-3">
                        <div className="shrink-0 mt-1">
                          <Home className="w-5 h-5 text-gray-700" />
                        </div>

                        <div>
                          <p className="text-xs text-gray-600 uppercase">
                            Unidades
                          </p>

                          <p className="text-sm font-semibold text-gray-900">
                            {project.unidades}
                          </p>
                        </div>
                      </div>

                      {/* Entrega */}

                      <div className="flex items-start gap-3">
                        <div className="shrink-0 mt-1">
                          <Calendar className="w-5 h-5 text-gray-700" />
                        </div>

                        <div>
                          <p className="text-xs text-gray-600 uppercase">
                            Entrega
                          </p>

                          <p className="text-sm font-semibold text-gray-900">
                            {project.entrega}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Endereço */}

                    <div className="flex items-start gap-3 mt-2">
                      <div className="shrink-0 mt-1">
                        <MapPin className="w-5 h-5 text-gray-700" />
                      </div>

                      <div>
                        <p className="text-xs text-gray-600 uppercase">
                          Endereço
                        </p>

                        <p className="text-sm font-semibold text-gray-900">
                          {project.endereco}
                        </p>
                      </div>
                    </div>

                    {/* Button */}

                    <Link href={project.button.link}>
                      <button className="w-full mt-4 bg-linear-to-r from-[#167853] to-[#002F17] hover:bg-emerald-800 text-white font-semibold py-3 px-4 rounded-md transition-colors duration-200">
                        {project.button.label}
                      </button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="flex justify-center gap-2 mt-4 bottom-animation md:hidden">
          {content.ventures.projects.map((_, index) => (
            <div
              key={index}
              onClick={() => swiperInstance?.slideTo(index)} // Vai para o slide ao clicar no dot
              className={`transition-all duration-300 h-2 rounded-full bg-white ${
                activeIndex === index
                  ? "w-8" // Estilo para o dot ATIVO
                  : "w-2" // Estilo para o dot INATIVO
              }`}
            />
          ))}
        </div>

        
      </section>
    </Section>
  );
}
