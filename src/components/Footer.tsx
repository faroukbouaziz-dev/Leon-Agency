import Newsletter from "@/assets/svg/Icons/newsletter.svg";
import LionSide from "@/assets/svg/lionSide.svg";
import { FaDribbble, FaLinkedinIn } from "react-icons/fa";
import { FaUpwork, FaXTwitter } from "react-icons/fa6";
import { FiSmartphone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="section relative overflow-hidden bg-[var(--secondary)] pt-4 !text-[var(--background)]">
      <div className="items-start gap-10 md:flex xl:!gap-40">
        <form className="py-4 lg:w-120">
          <label htmlFor="newsletter">
            Subscribe to our newsletter and get daily updates
          </label>
          <input
            type="email"
            id="newsletter"
            placeholder="Email"
            className="input mt-3 !border-[var(--background)]"
          />
          <button type="submit" className="btn-primary mt-3 ml-auto">
            <Newsletter className="h-6 w-6" />
            <span>Subcribe</span>
          </button>
        </form>
        <div className="mt-5 flex min-w-sm items-center justify-evenly md:items-start">
          <ul className="flex flex-col gap-3 text-center uppercase">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Portfolio</a>
            </li>
            <li>
              <a href="">Testimonials</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
          <div className="h-60 w-0.5 !bg-[var(--background)] md:h-55 lg:mx-10" />
          <div className="max-w-[45%]">
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
                <FaXTwitter size={24} />
              </li>
              <li>
                <FaUpwork size={24} />
              </li>
              <li>
                <FaDribbble size={24} />
              </li>
              <li>
                <FaLinkedinIn size={24} />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-5 xl:!mt-0">
        <p>© Portfolio templates were designed by Freepik</p>
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
