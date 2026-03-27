"use client";

import { zodResolver } from "@hookform/resolvers/zod";

import { GridBackground } from "../background/grid-background";
import Section from "../section";
import Space from "./space";
import { contactSchema, ContactSchema } from "@/schemas/contactSchema";
import { useForm } from "react-hook-form";

export default function Contact() {
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
    <Section classNameBg="bg-[#002F17] min-h-screen relative" className="flex">
      <GridBackground />
      <Space />
      <section className="relative z-10">
        {/* Right Side - Contact Form */}

        <h2 className="text-2xl font-bold mb-8 text-white bottom-animation">
          Entre em contato
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-2 lg:space-y-4 text-[16px]!"
        >
          <div className="grid grid-cols-2 gap-2 lg:gap-4">
            <input
              type="text"
              placeholder="Nome"
              {...register("name")}
              className={`bottom-animation border px-4 text-gray-900 py-3 bg-white rounded-lg ${
                errors.name ? "border-red-500" : ""
              }  placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white`}
            />
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              className={`bottom-animation border px-4 text-gray-900 py-3 bg-white rounded-lg ${
                errors.email ? "border-red-500" : ""
              }  placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white`}
            />
          </div>
          <input
            type="text"
            placeholder="Assunto"
            {...register("subject")}
            className={`bottom-animation border w-full text-gray-900 px-4 py-3 bg-white rounded-lg ${
              errors.subject ? "border-red-500" : ""
            }  placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white`}
          />
          <textarea
            placeholder="Sua mensagem"
            rows={6}
            {...register("message")}
            className={`bottom-animation border w-full text-gray-900 px-4 py-3 bg-white rounded-lg ${
              errors.message ? "border-red-500" : ""
            }  placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white resize-none`}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className={`bottom-animation w-full text-black ${
              isSubmitting
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-white hover:bg-gray-100"
            } font-bold py-3 rounded-lg transition-colors`}
          >
            {isSubmitting ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </section>
    </Section>
  );
}
