import LionSide from "@/assets/svg/lionSide.svg";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub, FiSmartphone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import NewsLetter from "./NewsLetter";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative mt-18.75 overflow-hidden bg-(--secondary) p-4 pt-4 text-(--foreground)! lg:mt-32">
      <div className="items-start gap-10 md:flex xl:gap-40!">
        <NewsLetter />
        <div className="2xs:justify-evenly mt-5 flex min-w-sm items-center md:items-start">
          <ul className="flex flex-col gap-3 text-center uppercase">
            <li>
              <Link href="#home">Home</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#services">Services</Link>
            </li>
            <li>
              <Link href="#portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="#testimonials">Testimonials</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
          <div className="mx-5 h-60 w-0.5 bg-(--background)! md:h-55 lg:mx-10" />
          <div className="flex max-w-[45%] flex-col items-center justify-center">
            <ul>
              <li className="footer-contact">
                <MdOutlineEmail size={24} aria-hidden="true" />
                <p>leon.info@agency</p>
              </li>
              <li className="footer-contact">
                <IoLocationOutline size={24} aria-hidden="true" />
                <p>Algeria, Msila</p>
              </li>
              <li className="footer-contact">
                <FiSmartphone size={24} aria-hidden="true" />
                <p>+213674155893</p>
              </li>
            </ul>
            <ul className="mt-8 flex items-center gap-2">
              <li>
                <a
                  href="https://github.com/faroukbouaziz-dev"
                  target="_blank"
                  aria-label="Agency github"
                  title="Agency github"
                >
                  <FiGithub size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/faroukbou_dev"
                  target="_blank"
                  aria-label="Agency x twitter"
                  title="Agency x twitter"
                >
                  <FaXTwitter size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/faroukbouaziz.dev"
                  target="_blank"
                  aria-label="Agency instagram"
                  title="Agency instagram"
                >
                  <FaInstagram size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@faroukbouaziz.dev"
                  target="_blank"
                  aria-label="Agency tiktok"
                  title="Agency tiktok"
                >
                  <FaTiktok size={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-5 xl:mt-0!">
        <p>
          © Portfolio templates were designed by{" "}
          <Link href="https://www.freepik.com/" className="underline">
            Freepik
          </Link>
        </p>
        <p>© 2025 Leon Agency. All rights reserved.</p>
      </div>
      <h2 className="heading2 2xs:leading-15! mt-5 mb-0! leading-12! md:leading-20! lg:mt-10! lg:leading-24! xl:leading-30!">
        Leon Agency
      </h2>
      <LionSide
        className="absolute right-0 bottom-0 -mr-3 ml-auto hidden w-50 sm:block! lg:w-75 xl:w-80"
        aria-hidden="true"
      />
    </footer>
  );
};

export default Footer;
