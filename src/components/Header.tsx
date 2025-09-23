import { FiMoon } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";
import Callicon from "@/assets/svg/Icons/Callicon.svg";
import Image from "next/image";

const Header = () => {
  return (
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
          <li>
            <a href="/" className="link active">
              Home
            </a>
          </li>
          <li>
            <a href="" className="link">
              About
            </a>
          </li>
          <li>
            <a href="" className="link">
              Services
            </a>
          </li>
          <li>
            <a href="" className="link">
              Portfolio
            </a>
          </li>
          <li>
            <a href="" className="link">
              Testimonials
            </a>
          </li>
          <li>
            <a href="" className="link">
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
