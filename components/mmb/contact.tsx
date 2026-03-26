import { GridBackground } from "../background/grid-background";
import Section from "../section";
import Space from "./space";

export default function Contact() {
  return (
    <Section classNameBg="bg-[#002F17] min-h-screen relative" className="flex">
      <GridBackground />
      <Space />
      <section className="relative z-10">
        {/* Right Side - Contact Form */}

        <h2 className="text-2xl font-bold mb-8 text-white bottom-animation">Entre em contato</h2>
        <form className="space-y-2 lg:space-y-4">
          <div className="grid grid-cols-2 gap-2 lg:gap-4">
            <input
              type="text"
              placeholder="Nome"
              className="bottom-animation px-4 py-3 bg-white rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-3 bottom-animation bg-white rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          <input
            type="text"
            placeholder="Assunto"
            className="bottom-animation w-full px-4 py-3 bg-white rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <textarea
            placeholder="Sua mensagem"
            rows={6}
            className="bottom-animation w-full px-4 py-3 bg-white rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white resize-none"
          />
          <button
            type="submit"
            className="bottom-animation w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Entrar em contato
          </button>
        </form>
      </section>
    </Section>
  );
}
