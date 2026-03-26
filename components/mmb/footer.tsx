import { Instagram, MapPin, Phone } from "lucide-react";
import { GridBackground } from "../background/grid-background";
import Section from "../section";
import Space from "./space";
import Image from "next/image";

import logoCompleta from "@/public/logo-completa.png"

export default function Footer() {
  return (
    <Section
      classNameBg="bg-[#002F17] min-h-screen relative"
      className="flex"
    >
      <GridBackground />
      <Space />
      <section className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-12">
          {/* Left Side */}
          <div>
            <div className="mb-8">
              <div className="w-48 aspect-220/122 rounded-lg mb-6 flex items-center justify-center">
                <Image src={logoCompleta} alt="Logo completa"/>
              </div>
            </div>

            <p className="text-sm leading-relaxed mb-8 text-gray-200">
              Construímos obras sólidas, seguros e com acabamento de alto
              padrão. Mais de 15 anos de experiência na construção civil,
              entregando qualidade, pontualidade e transparência em cada
              projeto.
            </p> 

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 shrink-0 mt-1 text-white" />
                <div>
                  <p className="text-white">Endereço</p>
                  <p className="text-sm font-semibold text-gray-200">
                    R. Agnelo Guimarães, 326 - Três Barras, Linhares - ES, 29907-030
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 shrink-0 mt-1 text-white" />
                <div>
                  <p className="text-white">Telefone</p>
                  <p className="text-sm text-gray-200 font-semibold">(27) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Instagram className="w-5 h-5 shrink-0 mt-1 text-white" />
                <div>
                  <p className="text-white">Media social</p>
                  <p className="text-sm text-gray-200 font-semibold">@mmbempreendimentos</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="hidden lg:block">
            <h3 className="text-2xl font-bold mb-8 text-white">
              Entre em contato
            </h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nome"
                  className="px-4 py-3 bg-white rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="px-4 py-3 bg-white rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
              <input
                type="text"
                placeholder="Assunto"
                className="w-full px-4 py-3 bg-white rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <textarea
                placeholder="Sua mensagem"
                rows={6}
                className="w-full px-4 py-3 bg-white rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white resize-none"
              />
              <button
                type="submit"
                className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Entrar em contato
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white py-2">
          <p className="text-center text-sm text-white">
            © MMBEmpreendimentos* todos os direitos reservados
          </p>
        </div>
      </section>
    </Section>
  );
}
