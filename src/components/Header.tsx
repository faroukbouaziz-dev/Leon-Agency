"use client";

import { FiMoon, FiSun } from "react-icons/fi";
import { IoCloseOutline, IoMenu } from "react-icons/io5";
import Image from "next/image";
import { useEffect, useState } from "react";
import CallBtn from "./CallBtn";

const Header = () => {
  const [isLight, setIsLight] = useState<boolean | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const htmlElmntClss = document.documentElement.classList;

    const isLightSet = htmlElmntClss.contains("light");
    const isDarkSet = htmlElmntClss.contains("dark");
    const isLightPreferred = window.matchMedia(
      "(prefers-color-scheme: light)",
    ).matches;

    setIsLight(isLightSet || (!isDarkSet && isLightPreferred));
  }, []);

  useEffect(() => {
    const links = document.querySelectorAll(".headerLink");
    const sections = document.querySelectorAll(".section");

    if (!links || !sections) {
      console.error(
        "No .headerLink or .section elements found to apply sections observing",
      );
      return;
    }
    if (!(links instanceof NodeList) || !(sections instanceof NodeList)) {
      console.error(
        "Links or sections aren't NodeLists  to apply sections observing",
      );
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((sec) => {
        if (!sec.isIntersecting) return;

        links.forEach((link) => {
          const linkTxt = link.textContent.toLocaleLowerCase().trim();
          if (!linkTxt) return;

          if (sec.target.id === linkTxt) {
            link.classList.add("active");
            window.history.replaceState(null, "", `#${linkTxt}`);
          } else {
            link.classList.remove("active");
          }
        });
      });
    });

    sections.forEach((s) => observer.observe(s));

    return () => {
      sections.forEach((s) => observer.unobserve(s));
    };
  }, []);

  const handleThemeChange = () => {
    const newTheme = !isLight;

    setIsLight(newTheme);
    document.cookie = `isLight=${newTheme}; path=/; max-age=31536000`;

    const htmlElmntClss = document.documentElement.classList;
    if (isLight) {
      htmlElmntClss.remove("light");
      htmlElmntClss.add("dark");
    } else {
      htmlElmntClss.remove("dark");
      htmlElmntClss.add("light");
    }
  };

  return (
    <>
      <header className="header glass-bg section">
        <Image
          src="/icon.svg"
          alt="Logo"
          width={32}
          height={32}
          className="fill-primary md:!w-14"
        />

        <nav className="glass-bg absolute left-1/2 hidden -translate-x-1/2 rounded-4xl px-3 py-[0.3rem] md:block">
          <ul className="flex uppercase">
            {[
              "home",
              "about",
              "services",
              "portfolio",
              "testimonials",
              "contact",
            ].map((link) => (
              <li key={`desk-${link}`}>
                <a href={`#${link}`} className="link headerLink">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={handleThemeChange}
            className="flex items-center gap-1 md:rounded-full md:bg-white/15 md:p-3 md:shadow-[inset_0px_0px_3px_1px_#fff,0px_0px_5px_1px_hsla(0,0%,0%,0.071)] md:backdrop-blur-[2px]"
          >
            {isLight ? (
              <FiMoon size={24} />
            ) : isLight === false ? (
              <FiSun size={24} />
            ) : (
              ""
            )}
            <span className="hidden text-nowrap xl:block">
              {isLight ? "Dark mode" : isLight === false ? "Light mode" : ""}
            </span>
          </button>
          <button
            onClick={() => {
              setIsMenuOpen(true);
              document.body.style.overflowY = "hidden";
            }}
            className="md:hidden"
          >
            <IoMenu size={24} />
          </button>
          <CallBtn className="hidden items-center gap-1 xl:flex" />
        </div>
      </header>
      <div
        className={`fixed inset-0 z-50 h-svh bg-[var(--background)] pt-6 ${
          isMenuOpen ? "block opacity-100" : "hidden opacity-0"
        }`}
      >
        <button
          className="absolute top-3 right-5"
          onClick={() => {
            setIsMenuOpen(false);
            document.body.style.overflowY = "scroll";
          }}
        >
          <IoCloseOutline size={32} />
        </button>
        <ul className="flex flex-col items-center gap-4">
          {[
            "home",
            "about",
            "services",
            "portfolio",
            "testimonials",
            "contact",
          ].map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                className="heading2 headerLink"
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                  document.body.style.overflowY = "scroll";
                }}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Header;
