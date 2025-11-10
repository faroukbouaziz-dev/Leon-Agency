"use client";

import { FiMoon, FiSun } from "react-icons/fi";
import { IoCloseOutline, IoMenu } from "react-icons/io5";
import Image from "next/image";
import { useEffect, useState } from "react";
import CallBtn from "./CallBtn";
import Link from "next/link";

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

    const observer = new IntersectionObserver(
      (entries) => {
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
      },
      { threshold: 0.5 },
    );

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
        <Link href="/" aria-label="Agency homepage">
          <Image
            src="/icon.svg"
            alt="Agency logo"
            width={32}
            height={32}
            className="md:w-14!"
            priority
            fetchPriority="high"
          />
        </Link>

        <nav
          className="glass-bg absolute left-1/2 hidden -translate-x-1/2 rounded-4xl px-3 py-[0.3rem] md:block"
          aria-label="Navigation links"
        >
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
                <Link href={`#${link}`} className="link headerLink">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={handleThemeChange}
            className="btn-shinyswipe-effect btn-scale-effect flex items-center gap-1 before:hidden md:rounded-full md:bg-white/15 md:p-3 md:shadow-[inset_0px_0px_3px_1px_#fff,0px_0px_5px_1px_hsla(0,0%,0%,0.071)] md:backdrop-blur-[2px] md:before:block"
            aria-label={isLight ? "Activate dark mode" : "Activate light mode"}
            title={isLight ? "Activate dark mode" : "Activate light mode"}
            type="button"
          >
            {isLight ? (
              <FiMoon size={24} aria-hidden="true" />
            ) : isLight === false ? (
              <FiSun size={24} aria-hidden="true" />
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
            className="btn-scale-effect md:hidden"
            title="Open menu"
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
            aria-controls="menu-screen"
            type="button"
          >
            <IoMenu size={24} aria-hidden="true" />
          </button>
          <CallBtn className="hidden items-center gap-1 xl:flex" />
        </div>
      </header>
      <div
        id="menu-screen"
        aria-modal="true"
        aria-hidden={!isMenuOpen}
        className={`fixed inset-0 z-50 h-svh bg-(--background) pt-6 ${
          isMenuOpen ? "block opacity-100" : "hidden opacity-0"
        }`}
      >
        <button
          className="absolute top-3 right-5"
          onClick={() => {
            setIsMenuOpen(false);
            document.body.style.overflowY = "scroll";
          }}
          aria-label="close menu"
          aria-pressed={!isMenuOpen}
          title="close menu"
          type="button"
        >
          <IoCloseOutline size={32} aria-hidden="true" />
        </button>
        <ul className="flex h-full flex-col items-center justify-center gap-4">
          {[
            "home",
            "about",
            "services",
            "portfolio",
            "testimonials",
            "contact",
          ].map((link) => (
            <li key={link}>
              <Link
                href={`#${link}`}
                className="heading2 headerLink"
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                  document.body.style.overflowY = "scroll";
                }}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Header;
