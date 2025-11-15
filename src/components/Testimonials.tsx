"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const TestimonialsSlider = dynamic(
  () => import("@/components/TestimonialsSlider"),
  {
    ssr: false,
  },
);

const Testimonials = () => {
  const [shouldRender, setShouldRender] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          obs.disconnect();
        }
      });
    });

    obs.observe(document.querySelector("#testimonials")!);
    obs.observe(document.querySelector("#portfolio")!);
    obs.observe(document.querySelector("#contact")!);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="section px-0!" id="testimonials">
      <h2 className="heading2 anim-typewriter xs:px-4 px-2.5 xl:px-5">
        Testimonials
      </h2>
      <div className={isSmallScreen ? "px-5" : ""}>
        {shouldRender && <TestimonialsSlider />}
      </div>
    </section>
  );
};

export default Testimonials;
