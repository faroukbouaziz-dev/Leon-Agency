import Logo from "./svg/Logo";
import { FiMoon } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";
import Callicon from "./svg/Callicon";

const Header = () => {
  return (
    <header className="header glass-bg costume-container">
      <Logo className="fill-primary w-8 md:w-14" />

      <nav className="glass-bg absolute left-1/2 hidden -translate-x-1/2 rounded-4xl px-3 py-[0.3rem] md:block">
        <ul className="flex uppercase">
          <li>
            <a href="/" className="link link-box active">
              Home
            </a>
          </li>
          <li>
            <a href="" className="link link-box">
              About
            </a>
          </li>
          <li>
            <a href="" className="link link-box">
              Services
            </a>
          </li>
          <li>
            <a href="" className="link link-box">
              Portfolio
            </a>
          </li>
          <li>
            <a href="" className="link link-box">
              Testimonials
            </a>
          </li>
          <li>
            <a href="" className="link link-box">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-4">
        <button className="flex items-center gap-1 md:rounded-full md:bg-white/15 md:p-3 md:shadow-[inset_0px_0px_3px_1px_#fff,0px_0px_5px_1px_hsla(0,0%,0%,0.071)] md:backdrop-blur-[2px]">
          <FiMoon size={24} />
          <span className="hidden text-nowrap xl:block">Light mode</span>
        </button>
        <div className="md:hidden">
          <IoMenu size={24} />
        </div>
        <button className="btn-primary hidden items-center gap-1 xl:flex">
          <Callicon className="h-6 w-6" />
          <span>Book a call</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
