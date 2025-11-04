"use client";

import { testimonialsData as clients } from "@/data/data";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials = () => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="section !px-0" id="testimonials">
      <h2 className="heading2 anim-typewriter xs:px-4 px-2.5 xl:px-5">
        Testimonials
      </h2>
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
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
        >
          {clients.map(({ id, picture, name, job, testimonial }) => (
            <SwiperSlide key={id}>
              <div className="2xs:p-5 flex h-[300px] w-full flex-col items-start gap-7 rounded-2xl bg-[var(--neutral)] p-3 lg:h-[400px] lg:w-[700px] lg:gap-12 lg:p-5 xl:gap-7">
                <div className="flex w-fit items-center gap-2 md:gap-3">
                  <Image
                    src={picture}
                    alt="clients[0]"
                    className="h-15 w-15 rounded-full lg:h-20 lg:w-20"
                  />
                  <div>
                    <p className="label mb-1 text-left lg:mb-2">{name} </p>
                    <p
                      className={
                        "sublabel" + (id === 2 ? " sublabel-active" : "")
                      }
                    >
                      {job}{" "}
                    </p>
                  </div>
                </div>
                <div className="text-big mx-auto lg:w-[80%]">
                  <FaQuoteLeft className="mr-3 inline -translate-y-2" />
                  <p className="inline">{testimonial}</p>
                  <FaQuoteRight className="ml-3 inline -translate-y-1" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
