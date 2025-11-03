"use client";

import LeftFang from "@/assets/svg/hero/LeftFang.svg";
import Lion from "@/assets/svg/hero/Lion.svg";
import RightFang from "@/assets/svg/hero/RightFang.svg";
import CallBtn from "./CallBtn";
import ChatBot from "./ChatBot";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { followingDotCursor } from "cursor-effects";

const Hero = () => {
  const lion = useRef<SVGSVGElement>(null);
  const rightFang = useRef<SVGSVGElement>(null);
  const leftFang = useRef<SVGSVGElement>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  const cta = useRef<HTMLButtonElement>(null);
  const projectsNum = useRef<HTMLDivElement>(null);
  const happyClientsNum = useRef<HTMLDivElement>(null);

  useEffect(() => {
    followingDotCursor({
      color: "#10cbb8",
    });

    const counterAnimation = (
      ref: React.RefObject<HTMLElement | null>,
      end: number,
    ) => {
      if (!ref.current) {
        console.error("counterAnimation received null instead of ref");
        return;
      }

      const num = ref.current.querySelector(".num") as HTMLElement;
      const plus = ref.current.querySelector(".plus") as HTMLElement;
      plus.textContent = "+";

      const obj = { val: 0 };
      const tl = gsap.timeline();

      tl.to(obj, {
        val: end,
        duration: 3,
        ease: "power2.out",
        onUpdate: () => {
          num.textContent = Math.floor(obj.val).toString();
        },
      }).fromTo(
        plus,
        { y: 20, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power4.out",
        },
      );

      return tl;
    };

    const mainVisualAnimation = () => {
      if (
        !lion.current ||
        !rightFang.current ||
        !leftFang.current ||
        !heading.current ||
        !cta.current
      ) {
        console.error("mainVisualAnimation received null instead of ref");
        return;
      }

      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1 },
      });

      tl.from([lion.current, rightFang.current, leftFang.current], {
        opacity: 0,
        y: -200,
      }).from(
        [heading.current, cta.current],
        {
          opacity: 0,
          y: 150,
          stagger: 1,
        },
        "<",
      );

      return tl;
    };

    const master = gsap.timeline();
    const mainTl = mainVisualAnimation();
    const projectsTl = counterAnimation(projectsNum, 120);
    const clientsTl = counterAnimation(happyClientsNum, 50);

    if (mainTl && projectsTl && clientsTl)
      master.add(mainTl).add([projectsTl, clientsTl], ">");
  }, []);

  return (
    <section
      className="section mt-0 flex h-svh items-end justify-between pb-2"
      id="home"
    >
      <div className="parent-center w-[60%] max-w-[500px] min-w-[242px] [@media(max-height:520px)]:!top-[40%]">
        <div className="relative">
          <Lion ref={lion} className="fill-secondary w-ful h-auto" />
          <RightFang
            ref={rightFang}
            className="fill-bg-color absolute top-[39%] left-[38%] z-10 w-[20%]"
          />
          <LeftFang
            ref={leftFang}
            className="fill-bg-color absolute top-[39%] left-[58.2%] z-10 w-[20%]"
          />

          <div className="parent-center hxl:!top-[56%] h2xl:!top-[60%] !top-[52.5%] md:!top-[53%] lg:!top-[54%] xl:!top-[57%]">
            <h1
              ref={heading}
              className="text-primary heading1 text-nowrap uppercase [word-spacing:-10px]"
            >
              Leon Agency
            </h1>
          </div>
          <div className="parent-center !top-[70%] sm:!top-[65%] lg:!top-[70%]">
            <CallBtn ref={cta} className="flex items-center gap-1 xl:hidden" />
          </div>
        </div>
      </div>
      <div className="xs:max-w-[200px] flex max-w-[165px] flex-col gap-3 md:max-w-[290px]">
        <div>
          <div ref={projectsNum} className="numbers">
            <span className="num">0</span>
            <span className="plus inline-block"></span>
          </div>
          <p className="text-small">
            Projects Delivered: From startups to global brands.
          </p>
        </div>
        <div>
          <div ref={happyClientsNum} className="numbers">
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
