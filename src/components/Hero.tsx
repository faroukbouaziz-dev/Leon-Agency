import LeftFang from "@/assets/svg/hero/LeftFang.svg";
import Lion from "@/assets/svg/hero/Lion.svg";
import RightFang from "@/assets/svg/hero/RightFang.svg";
import CallBtn from "./CallBtn";
import ChatBoot from "./ChatBoot";

const Hero = () => {
  return (
    <section
      className="section mt-0 flex h-svh items-end justify-between pb-2"
      id="home"
    >
      <div className="parent-center w-[60%] max-w-[500px] min-w-[242px] [@media(max-height:520px)]:!top-[40%]">
        <div className="relative">
          <Lion className="fill-secondary w-ful h-auto" />
          <RightFang className="fill-bg-color absolute top-[39%] left-[38%] z-10 w-[20%]" />
          <LeftFang className="fill-bg-color absolute top-[39%] left-[58.2%] z-10 w-[20%]" />

          <h1 className="text-primary heading1 parent-center hxl:!top-[56%] h2xl:!top-[60%] !top-[52.5%] text-nowrap uppercase [word-spacing:-10px] md:!top-[53%] lg:!top-[54%] xl:!top-[57%]">
            Leon Agency
          </h1>
          <CallBtn className="parent-center absolute !top-[70%] flex items-center gap-1 sm:!top-[65%] lg:!top-[70%] xl:hidden" />
        </div>
      </div>
      <div className="xs:max-w-[200px] flex max-w-[165px] flex-col gap-3 md:max-w-[290px]">
        <div>
          <span className="numbers">120+</span>
          <p className="text-small">
            Projects Delivered: From startups to global brands.
          </p>
        </div>
        <div>
          <span className="numbers">50+</span>
          <p className="text-small">
            Happy Clients: Across 12 countries world wide.
          </p>
        </div>
      </div>
      <ChatBoot />
    </section>
  );
};

export default Hero;
