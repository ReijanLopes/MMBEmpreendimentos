"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Observer } from "gsap/src/Observer";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

import AboutViniciusBrunetti from "./about-vinicius-brunett";
import AboutMMB from "./about-mmb";
import Hero from "./hero";
import Ventures from "./ventures";
import Partners from "./partners";
import Footer from "./footer";
import Menu from "./menu";

gsap.registerPlugin(Observer, ScrollTrigger, ScrollSmoother);

export default function ScrollSections() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [jsActive, setJsActive] = useState(false);

  useEffect(() => {
    setJsActive(true);

    const raf = requestAnimationFrame(() => {
      const ctx = gsap.context(() => {
        const sections = gsap.utils.toArray<HTMLElement>(".scroll-section");
        const images = gsap.utils.toArray<HTMLElement>(".scroll-section .bg");
        const outerWrappers = gsap.utils.toArray<HTMLElement>(
          ".scroll-section .outer",
        );
        const innerWrappers = gsap.utils.toArray<HTMLElement>(
          ".scroll-section .inner",
        );

        if (!sections.length) return;

        let currentIndex = -1;
        let animating = false;

        gsap.set(outerWrappers, { yPercent: 100 });
        gsap.set(innerWrappers, { yPercent: -100 });

        function gotoSection(index: number, direction: number) {
          if (index < 0 || index >= sections.length) return;

          animating = true;

          const fromTop = direction === -1;
          const dFactor = fromTop ? -1 : 1;

          const tl = gsap.timeline({
            defaults: {
              duration: 2.0,
              ease: "power1.inOut",
            },
            onComplete: () => {
              animating = false;
            },
          });

          if (currentIndex >= 0) {
            gsap.set(sections[currentIndex], { zIndex: 0 });
          }

          gsap.set(sections[index], {
            autoAlpha: 1,
            zIndex: 1,
          });

          tl.fromTo(
            [outerWrappers[index], innerWrappers[index]],
            {
              yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor),
            },
            {
              yPercent: 0,
            },
            0,
          ).fromTo(
            images[index],
            {
              yPercent: 15 * dFactor,
            },
            {
              yPercent: 0,
            },
            0,
          );

          currentIndex = index;
        }

        Observer.create({
          target: containerRef.current,
          type: "wheel,touch,pointer",
          wheelSpeed: -1,
          tolerance: 10,
          preventDefault: true,
          // passive: false,
          onDown: () => {
            if (!animating) gotoSection(currentIndex - 1, -1);
          },
          onUp: () => {
            if (!animating) gotoSection(currentIndex + 1, 1);
          },
        });

        gotoSection(0, 1);
      }, containerRef);

      return () => ctx.revert();
    });

    return () => cancelAnimationFrame(raf);
  }, []);

  const contents = [
    <Hero key="hero" />,
    <AboutViniciusBrunetti key="about1" />,
    <AboutMMB key="about2" />,
    <Ventures key="ventures" />,
    <Partners key="partners" />,
    <Footer key="footer" />,
  ];
  if (!jsActive) {
    return (
      <Fragment>
        <Menu />
        <Hero key="hero" />
        <AboutViniciusBrunetti key="about1" />
        <AboutMMB key="about2" />
        <Ventures key="ventures" />
        <Partners key="partners" />
        <Footer key="footer" />
      </Fragment>
    );
  }

  return (
    <div ref={containerRef} className="relative h-screen w-full text-white">
      <Menu />
      {contents.map((content, idx) => (
        <section
          key={idx}
          className="scroll-section fixed top-0 h-full w-full shadow-xl/30"
        >
          <div className="outer h-full w-full overflow-hidden">
            <div className="inner h-full w-full overflow-hidden">
              <div
                className="bg absolute h-full w-full"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.1) 100%)",
                }}
              >
                {content}
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
