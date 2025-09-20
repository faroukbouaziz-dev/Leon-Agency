import LeftFang from "./svg/hero/LeftFang";
import Lion from "./svg/hero/Lion";
import MouseDown from "./svg/hero/MouseDown";
import RightFang from "./svg/hero/RightFang";
import Callicon from "./svg/Callicon";

const Hero = () => {
  return (
    <section className="xs:px-4 section flex h-svh items-end justify-between px-2.5 pb-2 xl:px-5">
      <div className="parent-center !w-[60%] max-w-[546px] min-w-[242px] [@media(max-height:520px)]:!top-[40%]">
        <div className="relative">
          <Lion className="fill-secondary h-auto w-full" />
          <RightFang className="fill-bg-color absolute top-[39%] left-[38%] z-10 w-[20%]" />
          <LeftFang className="fill-bg-color absolute top-[39%] left-[58.2%] z-10 w-[20%]" />

          <h1 className="font-knockbold text-primary heading1 parent-center hxl:!top-[56%] h2xl:!top-[58.5%] 2xl:!top-[59%]\ !top-[52.5%] text-nowrap uppercase [word-spacing:-10px] md:!top-[53%] lg:!top-[54%] xl:!top-[57%]">
            Leon Agency
          </h1>
          <button className="btn-primary parent-center absolute !top-[70%] flex items-center gap-1 sm:!top-[65%] lg:!top-[70%] xl:hidden">
            <Callicon className="h-6 w-6" />
            <span>Book a call</span>
          </button>
        </div>
      </div>
      <div className="xs:max-w-[200px] flex max-w-[165px] flex-col gap-3 md:max-w-[290px]">
        <div>
          <span className="numbers">120+</span>
          <p className="text-small">
            Prjects Delivered: From startups to global brands.
          </p>
        </div>
        <div>
          <span className="numbers">50+</span>
          <p className="text-small">
            Happy Clients Across 12 countries world wide.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <MouseDown className="xs:w-9 h-14 w-7 xl:w-11" />
        <div>
          <p className="label mb-1">Scroll down</p>
          <p className="sublabel">to see more</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
