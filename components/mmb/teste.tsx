"use client";

import { Fragment, useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

import AboutViniciusBrunetti from "./about-vinicius-brunett";
import AboutMMB from "./about-mmb";
import Hero from "./hero";
import Ventures from "./ventures";
import Partners from "./partners";
import Footer from "./footer";
import Menu from "./menu";

import { Observer } from "gsap/src/Observer";
gsap.registerPlugin(Observer);

export default function TesteScrollSections() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [jsActive, setJsActive] = useState(false);

  useEffect(() => {
    setJsActive(true);
  }, []);

  useLayoutEffect(() => {
    const panels = gsap.utils.toArray<HTMLElement>(".panel");
    let currentSection = 0;
    let isAnimating = false;

    // 1. A timeline base deve ser linear (ease: "none")
    const tl = gsap.timeline({ paused: true });
    panels.forEach((panel, i) => {
      if (i < panels.length - 1) {
        // CORREÇÃO: ease removido/setado como "none" aqui
        tl.to(panel, { yPercent: -100, duration: 0.8, ease: "none" });
      }
    });

    function animateContent(index: number) {
      const currentPanel = panels[index];

      // Criamos uma timeline nova para esta seção específica
      const sectionTl = gsap.timeline();

      // 1. Buscamos todos os elementos que tenham QUALQUER uma das 3 classes
      const elements = currentPanel.querySelectorAll(
        ".left-animation, .right-animation, .bottom-animation, .top-animation",
      );

      if (elements.length > 0) {
        // 2. Animamos todos em uma única sequência
        sectionTl.to(elements, {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.2,
        });
      }
    }

    function resetContent(indexToKeep: number) {
      panels.forEach((panel, i) => {
        if (i !== indexToKeep) {
          gsap.set(panel.querySelectorAll(".left-animation"), {
            x: -50,
            opacity: 0,
          });
          gsap.set(panel.querySelectorAll(".right-animation"), {
            x: 50,
            opacity: 0,
          });
          gsap.set(panel.querySelectorAll(".bottom-animation"), {
            y: 50,
            opacity: 0,
          });
          gsap.set(panel.querySelectorAll(".top-animation"), {
            y: -50,
            opacity: 0,
          });
        }
      });
    }

    function handleThemeChange(index: number) {
      // A Section 5 corresponde ao índice 4 (Hero=0, About1=1, About2=2, Ventures=3, Partners=4)
      // Se o seu Footer for a 6ª, ajuste o número conforme a ordem do seu array 'contents'
      const isSpecialSection = index === 4;

      gsap.to(".header-text-animation", {
        color: isSpecialSection ? "#0d3a2e" : "#ffffff",
        duration: 0,
        ease: "power2.inOut",
      });

      gsap.to(".header-fill-animation", {
        fill: isSpecialSection ? "#0d3a2e" : "#ffffff",
        duration: 0,
        ease: "power2.inOut",
      });

      // Dica: Se o seu Menu ou outros elementos fixos precisarem mudar também:
      // gsap.to(".menu-item", { color: isSpecialSection ? "#fff" : "#000" });
    }

    function goToSection(index: number) {
      if (isAnimating) return;

      // Impede que a animação tente rodar se já estivermos na mesma seção
      if (index === currentSection) return;

      index = Math.max(0, Math.min(index, panels.length - 1));
      isAnimating = true;

      // 2. O easing real acontece apenas aqui
      gsap.to(tl, {
        onStart: () => {
          handleThemeChange(index);
        },
        progress: index / (panels.length - 1),
        duration: 0.8, // Ajuste a duração ao seu gosto
        ease: "power3.inOut", // inOut geralmente fica mais natural em scroll hijacking
        onComplete: () => {
          currentSection = index;
          isAnimating = false;

          animateContent(index);
          resetContent(index);
        },
      });
    }
    handleThemeChange(0);
    animateContent(0);
    resetContent(0);
    // 3. Observer unificado e otimizado
    const observer = Observer.create({
      target: containerRef.current,
      type: "wheel", // Lida com mouse, trackpad e mobile de uma vez
      preventDefault: true,
      onUp: () => goToSection(currentSection - 1), // Scroll para cima
      onDown: () => goToSection(currentSection + 1), // Scroll para baixo
      tolerance: 10, // Adiciona uma pequena tolerância para evitar disparos acidentais
    });

    const observerTouch = Observer.create({
      target: containerRef.current,
      type: "touch,pointer", // Lida com mouse, trackpad e mobile de uma vez
      preventDefault: true,
      onUp: () => goToSection(currentSection + 1), // Scroll para cima
      onDown: () => goToSection(currentSection - 1), // Scroll para baixo
      tolerance: 10, // Adiciona uma pequena tolerância para evitar disparos acidentais
    });

    return () => {
      observer.kill();
      observerTouch.kill();
    };
  }, []);

  const contents = [
    <Hero key="hero" />,
    <AboutViniciusBrunetti key="about1" />,
    <AboutMMB key="about2" />,
    <Ventures key="ventures" />,
    <Partners key="partners" />,
    <Footer key="footer" />,
  ];
  // if (!jsActive) {
  //   return (
  //     <Fragment>
  //       <Menu />
  //       <Hero key="hero" />
  //       <AboutViniciusBrunetti key="about1" />
  //       <AboutMMB key="about2" />
  //       <Ventures key="ventures" />
  //       <Partners key="partners" />
  //       <Footer key="footer" />
  //     </Fragment>
  //   );
  // }

  return (
    <div ref={containerRef} className="relative w-full min-h-screen">
      <Menu />
      {contents.map((content, idx) => (
        <section
          key={idx}
          style={{ zIndex: contents.length - idx }}
          className={`panel absolute top-0 w-full flex items-center overflow-y-auto justify-center shadow`}
        >
          {content}
        </section>
      ))}
    </div>
  );
}
