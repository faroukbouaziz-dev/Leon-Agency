import LionSide from "@/assets/svg/lionSide.svg";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub, FiSmartphone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import NewsLetter from "./NewsLetter";

const Footer = () => {
  return (
    <footer className="relative mt-[4.6875rem] overflow-hidden bg-[var(--secondary)] p-4 pt-4 !text-[var(--background)] lg:mt-[8rem]">
      <div className="items-start gap-10 md:flex xl:!gap-40">
        <NewsLetter />
        <div className="2xs:justify-evenly mt-5 flex min-w-sm items-center md:items-start">
          <ul className="flex flex-col gap-3 text-center uppercase">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="mx-5 h-60 w-0.5 !bg-[var(--background)] md:h-55 lg:mx-10" />
          <div className="flex max-w-[45%] flex-col items-center justify-center">
            <ul>
              <li className="footer-contact">
                <MdOutlineEmail size={24} />
                <p>leon.info@agency</p>
              </li>
              <li className="footer-contact">
                <IoLocationOutline size={24} />
                <p>Algeria, Msila</p>
              </li>
              <li className="footer-contact">
                <FiSmartphone size={24} />
                <p>+213674155893</p>
              </li>
            </ul>
            <ul className="mt-8 flex items-center gap-2">
              <li>
                <a href="https://github.com/faroukbouaziz-dev" target="_blank">
                  <FiGithub size={24} />
                </a>
              </li>
              <li>
                <a href="https://x.com/faroukbou_dev" target="_blank">
                  <FaXTwitter size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/faroukbouaziz.dev"
                  target="_blank"
                >
                  <FaInstagram size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@faroukbouaziz.dev"
                  target="_blank"
                >
                  <FaTiktok size={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-5 xl:!mt-0">
        <p>
          © Portfolio templates were designed by{" "}
          <a href="https://www.freepik.com/" className="underline">
            Freepik
          </a>
        </p>
        <p>© 2025 Leon Agency. All rights reserved.</p>
      </div>
      <h2 className="heading2 2xs:!leading-15 mt-5 !mb-0 !leading-12 md:!leading-20 lg:!mt-10 lg:!leading-24 xl:!leading-30">
        Leon Agency
      </h2>
      <LionSide className="absolute right-0 bottom-0 -mr-3 ml-auto hidden w-50 sm:!block lg:w-75 xl:w-80" />
    </footer>
  );
};

export default Footer;
