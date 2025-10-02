import Callicon from "@/assets/svg/Icons/Callicon.svg";
import { FaDribbble, FaLinkedinIn } from "react-icons/fa";
import { FaUpwork, FaXTwitter } from "react-icons/fa6";
import { FiSend, FiSmartphone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
const Contact = () => {
  return (
    <section className="section">
      <h2 className="heading2">Let&apos;s talk</h2>
      <div className="xs:gap-25 flex flex-col items-center justify-around gap-15 md:flex-row md:gap-0">
        <div className="w-full max-w-lg md:w-[40%]">
          <div className="card-spacing-variant flex items-center justify-between border-b-2 !pt-0">
            <h3 className="heading3 arbitrary-heading3">Live Meeting</h3>
            <button className="btn-primary flex items-center gap-1">
              <Callicon className="h-6 w-6" />
              <span>Book a call</span>
            </button>
          </div>
          <div className="card-spacing-variant border-b-2">
            <h3 className="heading3 arbitrary-heading3 mb-3 lg:mb-6">
              Get in Touch
            </h3>
            <ul className="pl-3">
              <li className="mb-1.5 flex items-center gap-2 lg:mb-4">
                <MdOutlineEmail size={32} />
                <p className="label-active">leon.info@agency</p>
              </li>
              <li className="mb-1.5 flex items-center gap-2 lg:mb-4">
                <IoLocationOutline size={32} />
                <p className="label-active">Algeria, Msila</p>
              </li>
              <li className="mb-1.5 flex items-center gap-2 lg:mb-4">
                <FiSmartphone size={32} />
                <p className="label-active">+213674155893</p>
              </li>
            </ul>
          </div>
          <div className="card-spacing-variant flex items-center justify-between border-b-2">
            <h3 className="heading3 arbitrary-heading3">Social links</h3>
            <ul className="flex items-center gap-2">
              <li>
                <FaXTwitter size={28} />
              </li>
              <li>
                <FaUpwork size={28} />
              </li>
              <li>
                <FaDribbble size={28} />
              </li>
              <li>
                <FaLinkedinIn size={28} />
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full max-w-lg md:w-[40%]">
          <div>
            <h3 className="heading3 mb-5 md:mb-10">Send a Message</h3>
            <div className="flex items-center gap-1 justify-self-end">
              <span className="label-active">Feedback</span>
              <div className="relative h-5 w-12 rounded-2xl bg-gray-300">
                <div className="absolute -top-0.5 h-6 w-6 rounded-full bg-[#9097a3]"></div>
              </div>
            </div>
          </div>
          <form className="flex flex-col items-end gap-4">
            <input type="text" className="input" placeholder="Name" />
            <input type="Email" className="input" placeholder="Email" />
            <select className="input !px-1 text-[#9097a3]">
              <option disabled>Industry</option>
              <option value="tech">Technology</option>
              <option value="design">Design</option>
              <option value="finance">Finance</option>
            </select>
            <input type="text" className="input" placeholder="Company name" />
            <select className="input !px-1 text-[#9097a3]">
              <option disabled>UI/UX</option>
              <option value="tech">App Development</option>
              <option value="design">Graphic Design</option>
              <option value="finance">Digital Marketing</option>
            </select>
            <textarea className="input h-25" placeholder="Message"></textarea>
            <button type="submit" className="btn-primary mt-3">
              <FiSend className="h-6 w-6" />
              <span>Submit</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
