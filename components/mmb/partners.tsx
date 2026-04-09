import Image from "next/image";
import Section from "../section";
import Space from "./space";

import content from "@/content/mmb";

export default function Partners() {
  return (
    <Section
      classNameBg="bg-white min-h-screen overlay overflow-hidden relative z-20"
      className="flex items-center "
    >
      <Space />
      <section className="relative z-10 w-full">
        <div className="">
          <h2 className="text-4xl font-bold mb-20 text-gray-900 left-animation">
            {content.partners.title}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center">
            {content.partners.partners.map(({image, alt, className}, index) => (
              <div key={index} className="top-animation flex items-center justify-center">
                <Image src={image} alt={alt} className={`w-30 ${className}`}/>
              </div>
            ))}

          </div>
        </div>
      </section>
    </Section>
  );
}
