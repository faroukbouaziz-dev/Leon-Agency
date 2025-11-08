"use client";

import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const PortfolioSlider = ({ currFilter }: { currFilter: StaticImageData[] }) => {
  return (
    <Swiper
      className="mb-8 lg:mb-14"
      effect="coverflow"
      grabCursor
      centeredSlides
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      speed={1200}
      coverflowEffect={{
        rotate: 50,
        stretch: 50,
        depth: 200,
      }}
      pagination={{ clickable: true }}
      modules={[EffectCoverflow, Pagination, Autoplay]}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
      }}
    >
      {currFilter.map((img, i) => (
        <SwiperSlide key={i}>
          <Image
            src={img}
            alt={`Portfolio image ${i + 1}`}
            width={800}
            height={600}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="h-[250px] w-full rounded-2xl object-cover lg:h-[400px]"
            priority={i === 0}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PortfolioSlider;
