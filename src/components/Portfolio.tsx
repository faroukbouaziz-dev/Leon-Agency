import Uixux from "@/assets/svg/Icons/uiux.svg";
import Apps from "@/assets/svg/Icons/apps.svg";
import Graphic from "@/assets/svg/Icons/graphic.svg";
import Image from "next/image";
import App1 from "@/assets/portfolio/apps/1.jpg";
import App2 from "@/assets/portfolio/apps/2.jpg";
import App3 from "@/assets/portfolio/apps/3.jpg";

const Portfolio = () => {
  return (
    <section className="section section-m section-p">
      <h2 className="heading2">Our work</h2>
      <div className="mx-auto mb-8 flex w-fit flex-wrap items-center justify-center gap-3 lg:mb-14 xl:gap-5">
        <button className="btn-secondary glass-bg">
          <Uixux />
          UI/UX
        </button>
        <button className="btn-secondary glass-bg active">
          <Apps className="fill-primary" />
          Apps
        </button>
        <button className="btn-secondary glass-bg">
          <Graphic />
          Graphic
        </button>
      </div>
      <div className="relative mb-8 lg:mb-14">
        <div className="xs:gap-4 flex justify-center gap-2 overflow-hidden perspective-distant transform-3d lg:gap-0">
          <Image
            src={App1}
            alt="portfolio img"
            className="portfolio-img md:translate-x-8 md:rotate-y-30"
          />
          <Image
            src={App2}
            alt="portfolio img"
            className="portfolio-img z-10"
          />
          <Image
            src={App3}
            alt="portfolio img"
            className="portfolio-img md:-translate-x-8 md:-rotate-y-30"
          />
        </div>
        <div className="absolute top-0 flex h-full w-full items-center justify-between">
          <div className="linear-bg h-[110%] w-[150]"></div>
          <div className="linear-bg h-[110%] w-[150] rotate-180"></div>
        </div>
      </div>
      <div className="mx-auto flex w-fit gap-5">
        <button className="text-5xl">&lt;</button>
        <button className="text-5xl">&gt;</button>
      </div>
    </section>
  );
};

export default Portfolio;
