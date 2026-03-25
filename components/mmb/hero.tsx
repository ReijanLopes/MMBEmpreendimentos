import Section from "../section";
import Space from "./space";

export default function Hero() {
  return (
    <Section
      classNameBg="min-h-screen bg-[#002F17] overflow-hidden relative bg-linear-to-t from-black to-transparent"
      className="flex h-screen"
    >
      <Space />
      <section className="flex items-end relative z-10 pb-32">
        <div className="max-w-2xl ">
          {/* Badge */}
          <div className="mb-8 left-animation">
            <span className="inline-block bg-white text-black text-sm font-semibold px-4 py-2 rounded-[5px]">
              Construção Civil
            </span>
          </div>

          {/* Heading */}
          <div className="mb-8 left-animation">
            <h1 className="text-white text-xl md:text-2xl font-medium mb-2">
              Realizando
              {/* <p>Sonhos</p> */}
            </h1>
            <h1 className="text-white text-5xl! md:text-6xl! lg:text-7xl! font-bold leading-[0.76]">
              Sonhos
            </h1>
          </div>

          {/* Description */}
          <p className="text-white text-base md:text-lg leading-relaxed max-w-lg left-animation">
            Construímos obras sólidas, seguras e com acabamento de alto padrão.
            Mais de 15 anos de experiência na construção civil, entregando
            qualidade, pontualidade e transparência em cada projeto.
          </p>
        </div>
      </section>
    </Section>
  );
}
