"use client";

import Newsletter from "@/assets/svg/Icons/newsletter.svg";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";

const NewsLetter = () => {
  const [submitable, setSubmitable] = useState(false);

  const emailInput = useRef<HTMLInputElement>(null);

  const handleInputChange = () => {
    const email = emailInput.current?.value.trim();
    setSubmitable(email ? true : false);
  };

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get("email") as string;

    const isEmailValid =
      email && email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g);

    if (isEmailValid) {
      toast("Subscribed successfully!", { type: "success" });
    } else
      toast("Subscribtion faild due to invalid email!", { type: "warning" });
  };

  return (
    <form className="py-4 lg:w-120" onSubmit={submitHandler}>
      <label htmlFor="newsletter">
        Subscribe to our newsletter and get daily updates
      </label>
      <input
        ref={emailInput}
        onChange={handleInputChange}
        type="email"
        name="email"
        id="newsletter"
        placeholder="Email"
        className="input mt-3 !border-[var(--background)]"
      />
      <button
        type="submit"
        className={`btn-primary mt-3 ml-auto ${!submitable ? "btn-disabled" : ""}`}
      >
        <Newsletter className="h-6 w-6" />
        <span>Subcribe</span>
      </button>
    </form>
  );
};

export default NewsLetter;
