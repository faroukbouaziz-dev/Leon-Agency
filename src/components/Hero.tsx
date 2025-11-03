import LeftFang from "@/assets/svg/hero/LeftFang.svg";
import Lion from "@/assets/svg/hero/Lion.svg";
import RightFang from "@/assets/svg/hero/RightFang.svg";
import CallBtn from "./CallBtn";
import ChatBot from "./ChatBot";

const Hero = () => {
  return (
    <section
      className="section relative mt-0 flex h-svh items-end justify-between pb-2"
      id="home"
    >
      <div className="overlay absolute inset-0 z-50 flex items-center justify-center bg-[var(--secondary)]">
        <p className="text-5xl font-bold">Hello, There!</p>
      </div>
      <div className="parent-center w-[60%] max-w-[500px] min-w-[242px] [@media(max-height:520px)]:!top-[40%]">
        <div className="relative">
          <Lion className="lion fill-secondary w-ful h-auto" />
          <RightFang className="rightFang fill-bg-color absolute top-[39%] left-[38%] z-10 w-[20%]" />
          <LeftFang className="leftFang fill-bg-color absolute top-[39%] left-[58.2%] z-10 w-[20%]" />

          <div className="parent-center hxl:!top-[56%] h2xl:!top-[60%] !top-[52.5%] md:!top-[53%] lg:!top-[54%] xl:!top-[57%]">
            <h1 className="text-primary heading1 text-nowrap uppercase [word-spacing:-10px]">
              Leon Agency
            </h1>
          </div>
          <div className="parent-center !top-[70%] sm:!top-[65%] lg:!top-[70%]">
            <CallBtn className="heroCta flex items-center gap-1 xl:hidden" />
          </div>
        </div>
      </div>
      <div className="xs:max-w-[200px] flex max-w-[165px] flex-col gap-3 md:max-w-[290px]">
        <div>
          <div className="projectsNum numbers">
            <span className="num">0</span>
            <span className="plus inline-block"></span>
          </div>
          <p className="text-small">
            Projects Delivered: From startups to global brands.
          </p>
        </div>
        <div>
          <div className="happyClientsNum numbers">
            <span className="num">0</span>
            <span className="plus inline-block"></span>
          </div>
          <p className="text-small">
            Happy Clients: Across 12 countries world wide.
          </p>
        </div>
      </div>
      <ChatBot />
    </section>
  );
};

export default Hero;
