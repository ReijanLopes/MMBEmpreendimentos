"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Observer } from "gsap/src/Observer";

gsap.registerPlugin(Observer);

export default function ScrollSections() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      let sections = gsap.utils.toArray<HTMLElement>("section");
      let images = gsap.utils.toArray<HTMLElement>(".bg");
      let headings = gsap.utils.toArray<HTMLElement>(".section-heading");
      let outerWrappers = gsap.utils.toArray<HTMLElement>(".outer");
      let innerWrappers = gsap.utils.toArray<HTMLElement>(".inner");

      let currentIndex = -1;
      let animating = false;

      gsap.set(outerWrappers, { yPercent: 100 });
      gsap.set(innerWrappers, { yPercent: -100 });

      function gotoSection(index: number, direction: number) {
        if (index < 0 || index >= sections.length) return
        animating = true;

        let fromTop = direction === -1;
        let dFactor = fromTop ? -1 : 1;

        let tl = gsap.timeline({
          defaults: { duration: 1.25, ease: "power1.inOut" },
          onComplete: () => {
            animating = false;
          },
        });

        if (currentIndex >= 0) {
          gsap.set(sections[currentIndex], { zIndex: 0 });

          tl.to(images[currentIndex], { yPercent: -15 * dFactor }).set(
            sections[currentIndex],
            { autoAlpha: 0 },
          );
        }

        gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });

        tl.fromTo(
          [outerWrappers[index], innerWrappers[index]],
          {
            yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor),
          },
          {
            yPercent: 0,
          },
          0,
        ).fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0);

        currentIndex = index;
      }

      Observer.create({
        type: "wheel,touch,pointer",
        wheelSpeed: -1,
        onDown: () => !animating && gotoSection(currentIndex - 1, -1),
        onUp: () => !animating && gotoSection(currentIndex + 1, 1),
        tolerance: 10,
        preventDefault: true,
      });

      gotoSection(0, 1);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden text-white"
    >
      <section className="fixed top-0 h-full w-full invisible first">
        <div className="outer h-full w-full overflow-hidden">
          <div className="inner h-full w-full overflow-hidden">
            <div
              className="bg absolute flex items-center justify-center h-full w-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.1) 100%), url(/img1.jpg)",
              }}
            >
              <h2 className="section-heading text-[clamp(1rem,6vw,10rem)] font-semibold text-center">
                Scroll Down
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="fixed top-0 h-full w-full invisible second">
        <div className="outer h-full w-full overflow-hidden">
          <div className="inner h-full w-full overflow-hidden">
            <div
              className="bg absolute flex items-center justify-center h-full w-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.1) 100%), url(/img2.jpg)",
              }}
            >
              <h2 className="section-heading text-[clamp(1rem,6vw,10rem)] font-semibold">
                Animated with GSAP
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="fixed top-0 h-full w-full invisible third">
        <div className="outer h-full w-full overflow-hidden">
          <div className="inner h-full w-full overflow-hidden">
            <div
              className="bg absolute flex items-center justify-center h-full w-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.1) 100%), url(/img3.jpg)",
              }}
            >
              <h2 className="section-heading text-[clamp(1rem,6vw,10rem)] font-semibold">
                GreenSock
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
