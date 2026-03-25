import Section from "../section";
import Space from "./space";

export default function Partners() {
  return (
    <Section
      classNameBg="bg-white min-h-screen overlay overflow-hidden relative"
      className="flex items-center "
    >
      <Space />
      <section className="relative z-10 w-full">
        <div className="">
          <h2 className="text-4xl font-bold mb-20 text-gray-900 left-animation">
            Parceiros
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center">
            <div className="top-animation flex items-center justify-center">
              <span className="text-xl font-bold italic text-gray-900">
                LORENZETTI
              </span>
            </div>
            <div className="top-animation flex items-center justify-center">
              <span className="text-xl font-bold text-gray-900">
                biancogres
              </span>
            </div>
            <div className="top-animation flex items-center justify-center">
              <div className="w-32 h-16 bg-white rounded-full flex items-center justify-center border-4 border-gray-900">
                <span className="font-bold text-gray-900">
                  AMANCO
                  <br />
                  wavin
                </span>
              </div>
            </div>
            <div className="top-animation flex items-center justify-center">
              <div className="text-center">
                <div className="w-8 h-8 bg-black mb-2 mx-auto"></div>
                <span className="text-sm font-bold text-gray-900">
                  behr
                  <br />
                  HANDELSAGENTUR
                </span>
              </div>
            </div>
            <div className="top-animation flex items-center justify-center">
              <div className="text-center">
                <div className="w-8 h-8 bg-black mb-2 mx-auto"></div>
                <span className="text-sm font-bold text-gray-900">
                  behr
                  <br />
                  HANDELSAGENTUR
                </span>
              </div>
            </div>
            <div className="top-animation flex items-center justify-center">
              <div className="text-center">
                <div className="w-8 h-8 bg-black mb-2 mx-auto"></div>
                <span className="text-sm font-bold text-gray-900">
                  behr
                  <br />
                  HANDELSAGENTUR
                </span>
              </div>
            </div>
            <div className="top-animation flex items-center justify-center">
              <div className="text-center">
                <div className="w-8 h-8 bg-black mb-2 mx-auto"></div>
                <span className="text-sm font-bold text-gray-900">
                  behr
                  <br />
                  HANDELSAGENTUR
                </span>
              </div>
            </div>
            <div className="top-animation flex items-center justify-center">
              <div className="text-center">
                <div className="w-8 h-8 bg-black mb-2 mx-auto"></div>
                <span className="text-sm font-bold text-gray-900">
                  behr
                  <br />
                  HANDELSAGENTUR
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Section>
  );
}
