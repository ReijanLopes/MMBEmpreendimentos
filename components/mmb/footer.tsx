import { Instagram, MapPin, Phone } from "lucide-react";
import { GridBackground } from "../background/grid-background";
import Section from "../section";
import Image from "next/image";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactSchema } from "@/schemas/contactSchema";

import content from "@/content/mmb";
import Link from "next/link";

export default function Footer() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
  });

  async function onSubmit(data: ContactSchema) {
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        console.error(result);
        alert("Erro ao enviar mensagem");
        return;
      }

      reset();
    } catch (error) {
      console.error(error);
      alert("Erro inesperado");
    }
  }

  return (
    <Section
      classNameBg="bg-[#002F17] min-h-screen relative z-10"
      className="flex"
    >
      <GridBackground />
      <section className="relative z-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-12">
          {/* Left Side */}
          <div>
            <div className="mb-8">
              <div className="w-48 aspect-220/122 rounded-lg mb-6 flex items-center justify-center">
                <Image src={content.footer.image} alt="Logo completa" />
              </div>
            </div>

            <p className="text-sm leading-relaxed mb-8 text-gray-200">
              {content.footer.description}
            </p>

            <div className="gap-8 flex flex-col">
              <Link href={content.footer.address.link}><div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 shrink-0 mt-1 text-white" />
                <div>
                  <p className="text-white">Endereço</p>
                  <p className="text-sm font-semibold text-gray-200">
                   {content.footer.address.label}
                  </p>
                </div>
              </div></Link>
              <Link href={content.footer.phone.link}><div className="flex items-start gap-4">
                <Phone className="w-5 h-5 shrink-0 mt-1 text-white" />
                <div>
                  <p className="text-white">Telefone</p>
                  <p className="text-sm text-gray-200 font-semibold">
                    {content.footer.phone.label}
                  </p>
                </div>
              </div></Link>
              <Link href={content.footer.social.link}><div className="flex items-start gap-4">
                <Instagram className="w-5 h-5 shrink-0 mt-1 text-white" />
                <div>
                  <p className="text-white">Media social</p>
                  <p className="text-sm text-gray-200 font-semibold">
                    {content.footer.social.label}
                  </p>
                </div>
              </div></Link>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="hidden lg:block">
            <h2 className="text-2xl font-bold mb-8 text-white ">
              Entre em contato
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-2 text-[16px]!"
            >
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="Nome"
                  {...register("name")}
                  className={` border px-4 text-gray-900 py-3 bg-white rounded-lg ${
                    errors.name ? "border-red-500" : ""
                  }  placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white`}
                />
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email")}
                  className={` border px-4 text-gray-900 py-3 bg-white rounded-lg ${
                    errors.email ? "border-red-500" : ""
                  }  placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white`}
                />
              </div>
              <input
                type="text"
                placeholder="Assunto"
                {...register("subject")}
                className={` border w-full text-gray-900 px-4 py-3 bg-white rounded-lg ${
                  errors.subject ? "border-red-500" : ""
                }  placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white`}
              />
              <textarea
                placeholder="Sua mensagem"
                rows={6}
                {...register("message")}
                className={` border w-full text-gray-900 px-4 py-3 bg-white rounded-lg ${
                  errors.message ? "border-red-500" : ""
                }  placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white resize-none`}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className={` w-full text-black ${
                  isSubmitting
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-white hover:bg-gray-100"
                } font-bold py-3 rounded-lg transition-colors`}
              >
                {isSubmitting
                  ? isSubmitSuccessful
                    ? "Enviando..."
                    : "Enviado com sucesso"
                  : "Enviar"}
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
