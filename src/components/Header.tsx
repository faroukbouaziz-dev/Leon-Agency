"use client";

import { FiMoon, FiSun } from "react-icons/fi";
import { IoClose, IoMenu } from "react-icons/io5";
import Image from "next/image";
import { useEffect, useState } from "react";
import CallBtn from "./CallBtn";

const Header = () => {
  const [lightTheme, setLightTheme] = useState<boolean | null>(null);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    const isLightSet = document.documentElement.classList.contains("light");
    const isDarkSet = document.documentElement.classList.contains("dark");
    const prefersLight = window.matchMedia(
      "(prefers-color-scheme: light)",
    ).matches;

    setLightTheme(isLightSet || (!isDarkSet && prefersLight));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const headerLinks = document.querySelectorAll(".headerLink");
      const secObserver = new IntersectionObserver((sections) => {
        sections.forEach((sec) => {
          if (sec.isIntersecting) {
            headerLinks.forEach((link) => {
              if (sec.target.id !== link.textContent.toLocaleLowerCase()) {
                link.classList.remove("active");
              } else {
                link.classList.add("active");
                window.history.replaceState(null, "", `#${link.textContent}`);
              }
            });
          }
        });
      });

      const sections = document.querySelectorAll(".section");
      sections.forEach((sec) => {
        secObserver.observe(sec!);
      });

      return () => {
        sections.forEach((section) => secObserver.unobserve(section));
      };
    }, 0);
  }, []);

  return (
    <>
      <header className="header glass-bg section">
        <Image
          src="/icon.svg"
          alt="Logo"
          width={32}
          height={32}
          className="fill-primary md:w-14"
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
              <li key={`$desktop-${link}`}>
                <a href={`#${link}`} className="link headerLink">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              if (lightTheme) {
                document.documentElement.classList.remove("light");
                document.documentElement.classList.add("dark");
              } else {
                document.documentElement.classList.remove("dark");
                document.documentElement.classList.add("light");
              }
              document.cookie = `lightTheme=${!lightTheme}; path=/; max-age=31536000`;
              setLightTheme(!lightTheme);
            }}
            className="flex items-center gap-1 md:rounded-full md:bg-white/15 md:p-3 md:shadow-[inset_0px_0px_3px_1px_#fff,0px_0px_5px_1px_hsla(0,0%,0%,0.071)] md:backdrop-blur-[2px]"
          >
            {lightTheme ? (
              <FiMoon size={24} />
            ) : lightTheme === false ? (
              <FiSun size={24} />
            ) : (
              ""
            )}
            <span className="hidden text-nowrap xl:block">
              {lightTheme
                ? "Dark mode"
                : lightTheme === false
                  ? "Light mode"
                  : ""}
            </span>
          </button>
          <div
            onClick={() => {
              setMenuOpened(!menuOpened);
              document.body.style.overflowY = "hidden";
            }}
            className="md:hidden"
          >
            <IoMenu size={24} />
          </div>
          <CallBtn className="hidden items-center gap-1 xl:flex" />
        </div>
      </header>
      <div
        className={`fixed inset-0 z-50 h-svh bg-[var(--background)] pt-6 ${
          menuOpened ? "block opacity-100" : "hidden opacity-0"
        }`}
      >
        <button
          className="absolute top-3 right-5"
          onClick={() => {
            setMenuOpened(!menuOpened);
            document.body.style.overflowY = "scroll";
          }}
        >
          <IoClose size={32} />
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
                  setMenuOpened(!menuOpened);
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
