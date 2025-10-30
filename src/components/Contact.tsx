"use client";

import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub, FiSend, FiSmartphone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import CallBtn from "./CallBtn";
import { useCallback, useEffect, useRef, useState } from "react";
import Select from "react-select";
import { toast } from "react-toastify";
import { sendEmail } from "@/actions/sendEmail";

const Contact = () => {
  const [feedback, setFeedback] = useState(false);
  const [submitable, setSubmitable] = useState(false);

  const toggle = useRef<HTMLDivElement>(null);
  const nameInput = useRef<HTMLInputElement>(null);
  const emailInput = useRef<HTMLInputElement>(null);
  const msgInput = useRef<HTMLTextAreaElement>(null);

  const handleFeedback = async () => {
    toggle.current?.classList.toggle("left-7");
    toggle.current?.classList.toggle("!bg-blue-500");
    toggle.current?.parentElement?.classList.toggle("!bg-blue-200");
    setFeedback(!feedback);
  };

  const handleInputChange = useCallback(() => {
    const name = nameInput.current?.value;
    const email = emailInput.current?.value;
    const msg = msgInput.current?.value;
    if ((name && email && msg) || (feedback && msg)) {
      setSubmitable(true);
    } else {
      setSubmitable(false);
    }
  }, [feedback]);

  useEffect(() => handleInputChange(), [feedback, handleInputChange]);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const name = nameInput.current?.value;
    const email = emailInput.current?.value;
    const msg = msgInput.current?.value;

    const isNameValid = name && name?.length <= 50;
    const isMsgValid = msg && msg?.length >= 5 && msg?.length <= 1000;
    const isEmailValid =
      email &&
      email?.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g);

    if (
      (isNameValid && isEmailValid && isMsgValid) ||
      (feedback && isMsgValid)
    ) {
      const formData = new FormData(e.target as HTMLFormElement);

      const name = formData.get("name") as string;
      const email = (formData.get("email") as string) || "";
      const industry = (formData.get("industry") as string) || "";
      const company = (formData.get("company") as string) || "";
      const service = (formData.get("service") as string) || "";
      const message = formData.get("message") as string;

      toast.promise(
        sendEmail(
          {
            name,
            email,
            industry,
            company,
            service,
            message,
          },
          feedback,
        ),
        {
          pending: "Message is sending...",
          success: "Message sent successfully!",
          error: "Message sending failed, please try again!",
        },
      );
    } else {
      if (!isNameValid)
        toast(`"${name}" is not valid name!`, { type: "warning" });
      if (!isEmailValid)
        toast(`"${email}" is not valid email!`, { type: "warning" });
      if (!isMsgValid)
        toast(`"${msg}" is not valid message!`, { type: "warning" });
    }
  };

  const industryOps = [
    { value: "technology", label: "Technology & Startups" },
    { value: "ecommerce", label: "E-commerce & Retail" },
    { value: "fashion", label: "Fashion & Lifestyle" },
    { value: "creative", label: "Creative & Entertainment" },
    { value: "professional", label: "Professional Services" },
    { value: "architecture", label: "Architecture & Interior Design" },
    { value: "automotive", label: "Automotive & Motorsports" },
    { value: "education", label: "Education & Nonprofits" },
  ];
  const servicesOps = [
    { value: "uiux", label: "UI/UX" },
    { value: "app development", label: "App development" },
    { value: "digital marketing", label: "Digital marketing" },
    { value: "graphic design", label: "Graphic design" },
  ];

  return (
    <section className="section" id="contact">
      <h2 className="heading2">Let&apos;s talk</h2>
      <div className="xs:gap-25 flex flex-col items-center justify-around gap-15 md:flex-row md:items-start md:gap-0">
        <div className="w-full max-w-lg md:w-[40%]">
          <div className="card-spacing-variant flex items-center justify-between border-b-2 !pt-0">
            <h3 className="heading3 arbitrary-heading3">Live Meeting</h3>
            <CallBtn className="flex items-center gap-1" />
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
              <li className="duration-200 hover:scale-105">
                <a href="https://github.com/faroukbouaziz-dev" target="_blank">
                  <FiGithub size={28} />
                </a>
              </li>
              <li className="duration-200 hover:scale-105">
                <a href="https://x.com/faroukbou_dev" target="_blank">
                  <FaXTwitter size={28} />
                </a>
              </li>
              <li className="duration-200 hover:scale-105">
                <a
                  href="https://www.instagram.com/faroukbouaziz.dev"
                  target="_blank"
                >
                  <FaInstagram size={28} />
                </a>
              </li>
              <li className="duration-200 hover:scale-105">
                <a
                  href="https://www.tiktok.com/@faroukbouaziz.dev"
                  target="_blank"
                >
                  <FaTiktok size={28} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full max-w-lg md:w-[40%]">
          <div>
            <h3 className="heading3 mb-5 md:mb-10">Send a Message</h3>
            <button
              type="button"
              onClick={handleFeedback}
              className="mb-3 flex items-center gap-1 justify-self-end"
            >
              <span className="label-active">Feedback</span>
              <div className="relative h-5 w-12 rounded-2xl bg-gray-300 transition-all duration-300">
                <div
                  ref={toggle}
                  className="absolute -top-0.5 left-0 h-6 w-6 rounded-full bg-[#9097a3] transition-all duration-300"
                ></div>
              </div>
            </button>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-end gap-4"
          >
            <input
              required={!feedback}
              onChange={handleInputChange}
              ref={nameInput}
              type="text"
              className="input"
              placeholder="Name"
              name="name"
            />
            <input
              required={!feedback}
              onChange={handleInputChange}
              ref={emailInput}
              type="Email"
              className={`input ${feedback ? "hidden" : ""}`}
              placeholder="Email"
              name="email"
            />
            <Select
              name="industry"
              instanceId="industry-select"
              styles={{
                control: (base) => ({
                  ...base,
                  height: "100%",
                  border: "none",
                  boxShadow: "none",
                  backgroundColor: "transparent",
                }),
                menuList: (base) => ({
                  ...base,
                  backgroundColor: "var(--neutral)",
                }),
                option: (base, state) => ({
                  ...base,
                  color: state.isFocused
                    ? "var(--background)"
                    : "var(--foreground)",
                }),
                singleValue: (base) => ({
                  ...base,
                  color: "var(--foreground)",
                }),
              }}
              isClearable
              placeholder="industry.."
              options={industryOps}
              className={`input !px-0 ${feedback ? "hidden" : ""}`}
            ></Select>
            <input
              type="text"
              className={`input ${feedback ? "hidden" : ""}`}
              placeholder="Company name"
              name="company"
            />
            <Select
              name="service"
              instanceId="service-select"
              styles={{
                control: (base) => ({
                  ...base,
                  height: "100%",
                  border: "none",
                  boxShadow: "none",
                  backgroundColor: "transparent",
                }),
                menuList: (base) => ({
                  ...base,
                  backgroundColor: "var(--neutral)",
                }),
                option: (base, state) => ({
                  ...base,
                  color: state.isFocused
                    ? "var(--background)"
                    : "var(--foreground)",
                }),
                singleValue: (base) => ({
                  ...base,
                  color: "var(--foreground)",
                }),
              }}
              isClearable
              placeholder="Services.."
              options={servicesOps}
              className={`input !px-0 text-[#9097a3] ${feedback ? "hidden" : ""}`}
            ></Select>
            <textarea
              required
              onChange={handleInputChange}
              ref={msgInput}
              className="input h-25 min-h-15"
              placeholder="Message"
              name="message"
            ></textarea>
            <button
              type="submit"
              disabled={!submitable}
              className={`btn-primary mt-3 ${!submitable ? "btn-disabled" : ""}`}
            >
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
