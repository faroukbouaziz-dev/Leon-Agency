"use client";

import { followingDotCursor } from "cursor-effects";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

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

    if (!overlay || !lion || !rightFang || !leftFang || !heading || !cta)
      return;

    const cursor = followingDotCursor({
      color: "#10cbb8",
    });

    const mainTl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 1 },
    });
    mainTl
      .from([lion, rightFang, leftFang], { opacity: 0, y: -200 })
      .from([heading, cta], { opacity: 0, y: 150, stagger: 0.6 }, "<");

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

    const overlayTl = gsap
      .timeline()
      .to(overlay.firstElementChild, {
        opacity: 0,
        delay: 0.8,
        duration: 0.7,
        ease: "power2.out",
      })
      .to(
        overlay,
        {
          xPercent: 100,
          opacity: 0,
          duration: 0.8,
          ease: "expo.inOut",
          onComplete: () => {
            gsap.set(overlay, { display: "none" });
            document.body.style.overflow = "auto";
          },
        },
        ">",
      );

    const projectsTl = counterAnimation(projectsNum as HTMLElement, 120);
    const clientsTl = counterAnimation(happyClientsNum as HTMLElement, 50);

    const master = gsap.timeline();
    if (mainTl && projectsTl && clientsTl)
      master.add(overlayTl).add(mainTl).add([projectsTl, clientsTl], "-=0.5");

    return () => cursor.destroy();
  }, []);

  useLayoutEffect(() => {
    const texts = document.querySelectorAll(".text-animation");
    texts.forEach((t) => {
      gsap.from(t, {
        scrollTrigger: {
          trigger: t,
          start: "top 70%",
          end: "top 30%",
          scrub: true,
        },
        opacity: 0,
        y: 50,
        duration: 2,
      });
    });
  }, []);

  useEffect(() => {
    const selector = ".anim-typewriter";
    const animatedElements = document.querySelectorAll<HTMLElement>(selector);

    const animate = () => {
      const widths = Array.from(animatedElements, (el) => el.scrollWidth);

      gsap.killTweensOf(selector);
      gsap.set(selector, { clearProps: "all" });

      animatedElements.forEach((el, i) => {
        const count = el.textContent.length;
        const width = widths[i];

        const tl = gsap.timeline({
          scrollTrigger: { trigger: el, start: "top 80%" },
        });

        tl.fromTo(
          el,
          { width: 0 },
          {
            width,
            duration: count * 0.2,
            ease: `steps(${count})`,
          },
        );

        tl.to(
          el,
          {
            borderRightColor: "transparent",
            repeat: -1,
            yoyo: true,
            duration: 0.5,
            ease: "none",
          },
          0,
        );
      });
    };

    animate();
    window.addEventListener("resize", animate);
    return () => window.removeEventListener("resize", animate);
  }, []);

  useLayoutEffect(() => {
    const path = document.querySelector<SVGPathElement>(
      ".AboutArrow_svg__logistic-arrow",
    );
    if (!path) return;

    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;

    gsap.to(path, {
      strokeDashoffset: 0,
      scrollTrigger: {
        trigger: path,
        start: "top 400%",
        end: "top 10%",
        scrub: true,
      },
      ease: "none",
    });
  }, []);

  return <></>;
};

export default Animations;
