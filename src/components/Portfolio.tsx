"use client";

import { portfolioData } from "@/data/data";
import Uixux from "@/assets/svg/Icons/uiux.svg";
import Apps from "@/assets/svg/Icons/apps.svg";
import Graphic from "@/assets/svg/Icons/graphic.svg";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const PortfolioSlider = dynamic(() => import("@/components/PortfolioSlider"), {
  ssr: false,
});

const Portfolio = () => {
  const [shouldRender, setShouldRender] = useState(false);
  const [currFilter, setCurrFilter] = useState(portfolioData.apps);
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

    obs.observe(document.querySelector("#portfolio")!);
    obs.observe(document.querySelector("#services")!);
    obs.observe(document.querySelector("#testimonials")!);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
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

    const filterBtns = Array.from(activeBtn.parentElement!.children!);
    filterBtns?.forEach((btn) => {
      btn.classList.remove("active");
    });
    activeBtn.classList.add("active");
  };

  return (
    <section className="section px-0!" id="portfolio">
      <h2 className="heading2 anim-typewriter xs:px-4 px-2.5 xl:px-5">
        Our work
      </h2>
      <div className="mx-auto mb-8 flex w-fit flex-wrap items-center justify-center gap-3 lg:mb-14 xl:gap-5">
        <button
          onClick={handleFilter}
          value={0}
          className="btn-shinyswipe-effect btn-secondary glass-bg"
          aria-label="Show UIUX design portfolio pictures"
          title="Show UIUX design portfolio pictures"
        >
          <Uixux aria-hidden="true" />
          UI/UX
        </button>
        <button
          onClick={handleFilter}
          value={1}
          className="btn-shinyswipe-effect btn-secondary glass-bg active fill-(--primary) before:block!"
          aria-label="Show App development portfolio pictures"
          title="Show App developmentportfolio pictures"
        >
          <Apps aria-hidden="true" />
          Apps
        </button>
        <button
          onClick={handleFilter}
          value={2}
          className="btn-shinyswipe-effect btn-secondary glass-bg"
          aria-label="Show graphic design portfolio pictures"
          title="Show graphic design portfolio pictures"
        >
          <Graphic aria-hidden="true" />
          Graphic
        </button>
      </div>
      <div className={isSmallScreen ? "px-5" : ""}>
        {shouldRender && <PortfolioSlider currFilter={currFilter} />}
      </div>
    </section>
  );
};

export default Portfolio;
