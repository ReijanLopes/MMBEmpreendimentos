"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Observer } from "gsap/src/Observer";

import AboutViniciusBrunetti from "./about-vinicius-brunett";
import AboutMMB from "./about-mmb";
import Hero from "./hero";
import Ventures from "./ventures";
import Partners from "./partners";
import Footer from "./footer";
import Menu from "./menu";

gsap.registerPlugin(Observer);

function debounce<T extends (...args: any[]) => void>(fn: T, delay: number) {
  let timer: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

export default function TesteScrollSections() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [jsActive, setJsActive] = useState(false);

  useEffect(() => {
    setJsActive(true);
  }, []);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const panels = gsap.utils.toArray<HTMLElement>(".panel");
    let currentSection = 0;
    let isAnimating = false;
    let activeContentTl: gsap.core.Timeline | null = null;

    // VARIÁVEL DE CONTROLE PARA TRACKPAD
    let lastScrollTime = 0;
    const scrollDelay = 600; // Tempo em milissegundos para ignorar novos comandos de scroll

    // --- 1. SETUP INICIAL ---
    gsap.set(
      ".left-animation, .right-animation, .bottom-animation, .top-animation",
      {
        opacity: 0,
        overwrite: "auto",
      },
    );
    gsap.set(".left-animation", { x: -50 });
    gsap.set(".right-animation", { x: 50 });
    gsap.set(".bottom-animation", { y: 50 });
    gsap.set(".top-animation", { y: -50 });

    const tl = gsap.timeline({ paused: true });
    panels.forEach((panel, i) => {
      if (i < panels.length - 1) {
        tl.to(panel, { yPercent: -100, duration: 1, ease: "none" });
      }
    });

    // --- 2. FUNÇÕES DE ANIMAÇÃO ---

    function animateContent(index: number) {
      const currentPanel = panels[index];
      const elements = currentPanel.querySelectorAll(
        ".left-animation, .right-animation, .bottom-animation, .top-animation",
      );

      if (activeContentTl) activeContentTl.kill();

      if (elements.length > 0) {
        activeContentTl = gsap.timeline();
        activeContentTl.to(elements, {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
          overwrite: "auto",
        });
      }
    }

    function resetContent(indexToKeep: number) {
      panels.forEach((panel, i) => {
        if (i !== indexToKeep) {
          const elements = panel.querySelectorAll(
            ".left-animation, .right-animation, .bottom-animation, .top-animation",
          );
          gsap.killTweensOf(elements);
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
      const isSpecialSection = index === 4;
      const isFooter = index === 5;
      gsap.to(".header-text-animation", {
        color: isSpecialSection ? "#0d3a2e" : "#ffffff",
        duration: 0.4,
        ease: "power2.inOut",
      });
      gsap.to(".header-fill-animation", {
        fill: isSpecialSection ? "#0d3a2e" : "#ffffff",
        duration: 0.4,
        ease: "power2.inOut",
      });

      gsap.to(".header-hidden-animation", {
        duration: 0.4,
        opacity: isFooter ? 0 : 1,
        ease: "power2.inOut",
      });
    }

    function goToSection(index: number) {
      const now = Date.now();

      // Bloqueia se já estiver animando OU se o tempo desde o último scroll for muito curto
      if (isAnimating || now - lastScrollTime < scrollDelay) return;
      if (index === currentSection) return;

      const targetIndex = Math.max(0, Math.min(index, panels.length - 1));

      // Atualiza o tempo do último disparo aceito
      lastScrollTime = now;
      isAnimating = true;

      handleThemeChange(targetIndex);

      gsap.to(tl, {
        progress: targetIndex / (panels.length - 1),
        duration: 0.8,
        ease: "power3.inOut",
        onComplete: () => {
          currentSection = targetIndex;
          isAnimating = false;
          animateContent(targetIndex);
          resetContent(targetIndex);
        },
      });
    }

    // --- 3. DISPARO INICIAL ---
    const timeout = setTimeout(() => {
      handleThemeChange(0);
      animateContent(0);
    }, 100);

    const shouldIgnore = (target: Element | null) => {
      return !!target?.closest(".swiper, .carousel-container");
    };


    const debouncedUp = debounce((self) => {
      console.log(
        "debouncedUp",
        Math.abs(self.deltaX) >= Math.abs(self.deltaY),
        Math.abs(self.deltaX),
        Math.abs(self.deltaY),
      );
      if (shouldIgnore(self.target)) return;
      if (Math.abs(self.deltaX) >= Math.abs(self.deltaY)) {
        return;
      } else {
        goToSection(currentSection - 1);
      }
    }, 50);
    const debouncedDown = debounce((self) => {
      console.log(
        "debouncedDown",
        Math.abs(self.deltaX) >= Math.abs(self.deltaY),
        Math.abs(self.deltaX),
        Math.abs(self.deltaY),
      );
      if (shouldIgnore(self.target)) return;
      if (Math.abs(self.deltaX) >= Math.abs(self.deltaY)) {
        return;
      } else {
        goToSection(currentSection + 1);
      }
    }, 50);


    // --- 4. OBSERVERS (Tolerância aumentada para Trackpads) ---
    const observer = Observer.create({
      target: containerRef.current,
      type: "wheel",
      preventDefault: false,
      tolerance: 80, // Ignora micro-movimentos do trackpad
      onUp: (self) => debouncedUp(self), // Mobile pode ser mais sensível
      onDown: (self) => debouncedDown(self),
    });

    const observerTouch = Observer.create({
      target: containerRef.current,
      type: "touch",
      preventDefault: false,
      tolerance: 40,
      onUp: (self) => debouncedDown(self), // Mobile pode ser mais sensível
      onDown: (self) => debouncedUp(self),
    });

    return () => {
      observer.kill();
      observerTouch.kill();
      clearTimeout(timeout);
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

  return (
    <div
      ref={containerRef}
      style={{ touchAction: "pan-x pinch-zoom" }}
      className="relative w-full min-h-screen bg-black overflow-hidden"
    >
      <Menu />
      {contents.map((content, idx) => (
        <section
          key={idx}
          style={{ zIndex: contents.length - idx }}
          className="panel absolute top-0 left-0 w-full h-screen flex items-center justify-center overflow-hidden"
        >
          {content}
        </section>
      ))}
    </div>
  );
}
