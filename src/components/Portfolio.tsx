"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Uixux from "@/assets/svg/Icons/uiux.svg";
import Apps from "@/assets/svg/Icons/apps.svg";
import Graphic from "@/assets/svg/Icons/graphic.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { portfolioData } from "@/data/data";

const Portfolio = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currFilter, setCurrFilter] = useState(portfolioData.apps);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", () => handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleFilter = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    const activeBtn = e.currentTarget;
    const categories = [
      portfolioData.uiux,
      portfolioData.apps,
      portfolioData.graphic,
    ];
    const index = Number(activeBtn.value);
    setCurrFilter(categories[index]);

    const filterBtns = Array.from(activeBtn.parentElement?.children ?? []);
    filterBtns?.forEach((btn) => {
      btn.classList.remove("active");
    });
    activeBtn.classList.add("active");
  };

  return (
    <section className="section !px-0" id="portfolio">
      <h2 className="heading2 xs:px-4 px-2.5 xl:px-5">Our work</h2>
      <div className="mx-auto mb-8 flex w-fit flex-wrap items-center justify-center gap-3 lg:mb-14 xl:gap-5">
        <button
          onClick={handleFilter}
          value={0}
          className="btn-secondary glass-bg"
        >
          <Uixux />
          UI/UX
        </button>
        <button
          onClick={handleFilter}
          value={1}
          className="btn-secondary glass-bg active fill-[var(--primary)]"
        >
          <Apps />
          Apps
        </button>
        <button
          onClick={handleFilter}
          value={2}
          className="btn-secondary glass-bg"
        >
          <Graphic />
          Graphic
        </button>
      </div>
      <div className={isMobile ? "px-5" : ""}>
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
                alt={`portfolio image ${i + 1}`}
                className="h-[300px] w-full rounded-2xl object-cover lg:h-[400px]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;
