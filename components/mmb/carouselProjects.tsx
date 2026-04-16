import { useMemo } from "react";

import content from "@/content/mmb";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from "next/image";

export default function CarouselProjects({
  open,
  setOpen,
}: {
  open: number | null;
  setOpen: (id: number | null) => void;
}) {
  const carouselContent = useMemo(() => {
    const carouselProject = content.ventures.projects.find(
      (project) => project.id === open,
    );
    return carouselProject;
  }, [open]);

  return (
    <section
      className={`${open !== null ? "flex" : "hidden"}  h-svh w-svw fixed z-9999 items-center justify-center top-0 left-0`}
    >
      <div
        className="bg-black/40 w-full h-full"
        onClick={() => setOpen(null)}
      ></div>
      <div className="bg-white p-4 rounded-2xl absolute max-w-160 w-full flex items-center justify-center">
         <Swiper
          spaceBetween={10}
          modules={[Pagination, Navigation]}
            style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-theme-color': '#fff',
        }}
          loop
          autoplay
          slidesPerView={1}
          navigation={true}
          className="w-full"
        >
            {carouselContent?.carousel.map((image, index) => (
                <SwiperSlide key={index} className="w-full h-full flex items-center justify-center">
                    <Image src={image} alt={`Imagem ${index + 1}`} className="h-full object-cover rounded-lg" />
                </SwiperSlide>
            ))}

        </Swiper>
      </div>
    </section>
  );
}
