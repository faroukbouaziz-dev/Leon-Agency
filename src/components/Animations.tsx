"use client";

import { followingDotCursor } from "cursor-effects";
import gsap from "gsap";
import { useLayoutEffect } from "react";

const Animations = () => {
  useLayoutEffect(() => {
    const overlay = document.querySelector(".overlay");
    const lion = document.querySelector(".lion");
    const rightFang = document.querySelector(".rightFang");
    const leftFang = document.querySelector(".leftFang");
    const heading = document.querySelector(".heading1");
    const cta = document.querySelector(".heroCta");
    const projectsNum = document.querySelector(".projectsNum");
    const happyClientsNum = document.querySelector(".happyClientsNum");

    const cursor = followingDotCursor({
      color: "#10cbb8",
    });

    const mainVisualAnimation = () => {
      if (!lion || !rightFang || !leftFang || !heading || !cta) {
        console.error("mainVisualAnimation received null instead of ref");
        return;
      }

      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1 },
      });

      tl.from([lion, rightFang, leftFang], {
        opacity: 0,
        y: -200,
        autoAlpha: 0,
      }).from(
        [heading, cta],
        {
          opacity: 0,
          y: 150,
          stagger: 1,
          autoAlpha: 0,
        },
        "<",
      );

      return tl;
    };

    const counterAnimation = (counter: HTMLElement | null, end: number) => {
      if (!counter) {
        console.error("counterAnimation received null instead of HTMLElement");
        return;
      }

      const num = counter.querySelector(".num") as HTMLElement;
      const plus = counter.querySelector(".plus") as HTMLElement;
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
          delay: 0.5,
          duration: 0.8,
          ease: "power4.out",
        },
      );

      return tl;
    };

    const ctx = gsap.context(() => {
      const master = gsap.timeline({
        onStart: () => {
          gsap.to(overlay, {
            xPercent: 100,
            opacity: 0,
            duration: 1,
            ease: "power4.inOut",
            onComplete: () => {
              gsap.set(overlay, { display: "none" });
              document.body.style.overflow = "auto";
            },
          });
        },
      });
      const mainTl = mainVisualAnimation();
      const projectsTl = counterAnimation(projectsNum as HTMLElement, 120);
      const clientsTl = counterAnimation(happyClientsNum as HTMLElement, 50);

      if (mainTl && projectsTl && clientsTl)
        master.add(mainTl, "+=1").add([projectsTl, clientsTl], ">");
    });

    return () => {
      ctx.revert();
      cursor.destroy();
    };
  }, []);

  return <></>;
};

export default Animations;
