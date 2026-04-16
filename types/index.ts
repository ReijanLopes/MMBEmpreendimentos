import { StaticImageData } from "next/image";

export interface MMBContent {
  hero: HeroSection;
  aboutVinicius: AboutViniciusSection;
  aboutMMB: AboutMMBSection;
  ventures: VenturesSection;
  partners: PartnersSection;
  footer: FooterSection;
}

// --- Sub-interfaces ---

interface HeroSection {
  imagedefault: StaticImageData;
  description: string;
  title: {
    line1: string;
    line2: string;
  };
  badge: string;
}

interface AboutViniciusSection {
  image: StaticImageData;
  title: {
    line1: string;
    line2: string;
  };
  badge: string;
  description: string;
}

interface AboutMMBSection {
  image: StaticImageData;
  title: string;
  description: string;
  metrics: Metric[];
}

interface Metric {
  value: string;
  label: string;
}

interface VenturesSection {
  title: string;
  projects: Project[];
}

export interface Project {
  id: number;
  image: StaticImageData;
  logo: {
    image: StaticImageData;
    alt: string;
    bgColor: string;
  };
  title: StaticImageData | string; // Caso o título seja uma imagem importada
  tipo: string;
  andares: string;
  unidades: string;
  entrega: string;
  endereco: string;
  button: {
    link: string;
    label: string;
  };
}

interface PartnersSection {
  title: string;
  partners: Partner[];
}

interface Partner {
  image: StaticImageData;
  alt: string;
  className: string;
}

interface FooterSection {
  image: StaticImageData;
  description: string;
  address: LinkInfo;
  phone: LinkInfo;
  social: LinkInfo;
}

interface LinkInfo {
  label: string;
  link: string;
}