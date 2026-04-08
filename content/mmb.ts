import imageDefault from "@/public/mmb/bg/image-hero.webp";
import viniciusBrunetti from "@/public/person/vini.webp";
import floorPlanBuilding from "@/public/mmb/bg/bg-planta-base.png";
import lorenzetti from "@/public/mmb/logos/lorenzetti.png";
import amanco from "@/public/mmb/logos/amanco.png";
import biancogres from "@/public/mmb/logos/biancogres.png";
import logoCompleta from "@/public/logo-completa.png";

import theOne from "@/public/theone/theone.png";
import theOneComplete from "@/public/theone/theonehorizontal.png";
import theOneBuilding from "@/public/theone/theonebuilding.png"

export default {
  hero: {
    imagedefault: imageDefault,
    description: `Construímos obras sólidas, seguras e com acabamento de alto
              padrão. Mais de 15 anos de experiência na construção civil,
              entregando qualidade, pontualidade e transparência em cada
              projeto.`,
    title: {
      line1: "Realizando",
      line2: "Sonhos",
    },
    badge: "construção civil",
  },
  aboutVinicius: {
    image: viniciusBrunetti,
    title: {
      line1: "Vinicius",
      line2: "Brunetti",
    },
    badge: "Engenheiro Fundador",
    description: `Mais do que erguer paredes, meu compromisso é edificar conquistas.
              Acredito que cada projeto é a materialização de um sonho, por
              isso, uno a precisão da engenharia à dedicação de quem entende o
              valor de cada detalhe.`,
  },
  aboutMMB: {
    image: floorPlanBuilding,
    title: "Sobre a MMB Empreendimentos",
    description: `              
              Somos uma empresa especializada em construção civil, com
              acabamento em alto padrão, assinada pelo Engenheiro Civil Vinícius
              Brunetti./n
              Iniciamos nossas atividades com esta marca em 2021, mas já são 15
              anos de experiência no ramo de construção e projetos estruturais./n
              Nossa missão é realizar o sonho dos que desejam um empreendimento
              de qualidade, com preço justo, entregue com pontualidade e
              transparência`,
    metrics: [
      { value: "15+", label: "Anos de experiência" },
      { value: "500+", label: "Clientes satisfeitos" },
      { value: "100+", label: "Projetos concluídos" },
    ],
  },
  ventures: {
    title: "Empreendimentos",
    projects: [
      {
        id: 1,
        image: theOneBuilding,
        logo: { image: theOne, alt: "The One Logo", bgColor: "bg-[#B18B42]" },
        title: theOneComplete,
        tipo: "Apartamento",
        andares: "18 pavimentos",
        unidades: "120 unidades",
        entrega: "2027/Dez",
        endereco: "Rua das Palmeiras, 1200 — Jardim Europa, São Paulo, SP",
        button: {
          link: "",
          label: "Conheça o THE ONE"
        }
      },
      {
        id: 2,
        image: theOneBuilding,
        logo: { image: theOne, alt: "The One Logo", bgColor: "bg-[#B18B42]" },
        title: theOneComplete,
        tipo: "Apartamento",
        andares: "18 pavimentos",
        unidades: "120 unidades",
        entrega: "2027/Dez",
        endereco: "Rua das Palmeiras, 1200 — Jardim Europa, São Paulo, SP",
        button: {
          link: "",
          label: "Conheça o THE ONE"
        }
      },
      {
        id: 3,
        image: theOneBuilding,
        logo: { image: theOne, alt: "The One Logo", bgColor: "bg-[#B18B42]" },
        title: theOneComplete,
        tipo: "Apartamento",
        andares: "18 pavimentos",
        unidades: "120 unidades",
        entrega: "2027/Dez",
        endereco: "Rua das Palmeiras, 1200 — Jardim Europa, São Paulo, SP",
        button: {
          link: "",
          label: "Conheça o THE ONE"
        }
      },
      {
        id: 4,
        image: theOneBuilding,
        logo: { image: theOne, alt: "The One Logo", bgColor: "bg-[#B18B42]" },
        title: theOneComplete,
        tipo: "Apartamento",
        andares: "18 pavimentos",
        unidades: "120 unidades",
        entrega: "2027/Dez",
        endereco: "Rua das Palmeiras, 1200 — Jardim Europa, São Paulo, SP",
        button: {
          link: "",
          label: "Conheça o THE ONE"
        }
      },
    ],
  },
  partners: {
    title: "Parceiros",
    partners: [
      { image: lorenzetti, alt: "Lorenzetti", className: "" },
      { image: biancogres, alt: "Biancogres", className: "" },
      { image: amanco, alt: "Amanco", className: "" },
      { image: lorenzetti, alt: "Lorenzetti", className: "" },
      { image: lorenzetti, alt: "Lorenzetti", className: "" },
      { image: lorenzetti, alt: "Lorenzetti", className: "" },
      { image: lorenzetti, alt: "Lorenzetti", className: "" },
      { image: lorenzetti, alt: "Lorenzetti", className: "" },
    ],
  },
  footer: {
    image: logoCompleta,
    description: `Construímos obras sólidas, seguros e com acabamento de alto
              padrão. Mais de 15 anos de experiência na construção civil,
              entregando qualidade, pontualidade e transparência em cada
              projeto.`,
    address: {
      label: "R. Agnelo Guimarães, 326 - Três Barras, Linhares - ES, 29907-030",
      link: "https://maps.app.goo.gl/1cXBFHWLuZvypEWPA",
    },
    phone: {
      label: "(27) 99999-9999",
      link: "https://wa.me/5527999999999",
    },
    social: {
      label: "@mmbempreendimentos",
      link: "https://www.instagram.com/mmbempreendimentos?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
  },
};
