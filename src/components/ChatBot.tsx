"use client";
import Image from "next/image";
import BootImg from "@/assets/boot.png";
import { useEffect, useRef, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { BsSend } from "react-icons/bs";
import { aiChat } from "@/actions/chat";
import { toast } from "react-toastify";
import VanillaTilt from "vanilla-tilt";

const ChatBot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [inputHasValue, setInputHasValue] = useState(false);
  const [isUserGreeted, setIsUserGreeted] = useState(false);

  const chatBtn = useRef<HTMLButtonElement | null>(null);
  const chatBox = useRef<HTMLDivElement | null>(null);
  const suggestedMsgs = useRef<HTMLDivElement | null>(null);
  const userId = useRef(crypto.randomUUID());

  useEffect(() => {
    if (chatBtn.current)
      VanillaTilt.init(chatBtn.current, {
        max: 40,
        speed: 400,
        reverse: true,
        "full-page-listening": true,
      });
  }, []);

  useEffect(() => {
    const isSmallScreen = window.innerWidth <= 768;
    const bodyClss = document.body.classList;

    if (isChatOpen) {
      if (!isUserGreeted) {
        responseGen("Greet me").then(() => {
          setIsUserGreeted(true);
        });
      }
      if (isSmallScreen) bodyClss.add("overflow-hidden");
      return;
    }

    if (isSmallScreen) bodyClss.remove("overflow-hidden");
  }, [isChatOpen, isUserGreeted]);

  const responseGen = async (msg: string) => {
    chatBox.current?.insertAdjacentHTML(
      "beforeend",
      `<div class="loading m-3 flex max-w-[60%] flex-col gap-3 rounded-2xl rounded-bl-none bg-(--neutral) p-4">
        <div class="h-2 w-full animate-pulse bg-neutral-500"></div>
        <div class="h-2 w-full animate-pulse bg-neutral-500"></div>
        <div class="h-2 w-1/2 animate-pulse bg-neutral-500"></div>
      </div>`,
    );
    const res = await aiChat(userId.current, msg);
    const resMsg = document.createElement("p");
    resMsg.className = `m-3 max-w-[60%] rounded-2xl rounded-bl-none ${!res.success ? "bg-red-600" : "bg-[var(--neutral)]"} p-2`;

    resMsg.innerText = res.success
      ? res.aiReply
      : "Sorry I can't reply now due to internal error, pleas try again aftre few seconds";

    document.querySelector(".loading")?.remove();
    chatBox.current?.appendChild(resMsg);
    chatBox.current?.scrollTo({
      top: chatBox.current.scrollHeight,
      behavior: "smooth",
    });
  };

  const handleMsg = (e: React.SyntheticEvent) => {
    if ((chatBox.current?.getElementsByTagName("p") || []).length <= 4) {
      suggestedMsgs.current?.classList.add("hidden");
    }

    let msg;
    if (e.type === "submit") {
      e.preventDefault();

      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      msg = (formData.get("message") as string).trim();

      form.reset();
      setInputHasValue(false);
    } else {
      msg = (e.currentTarget.textContent ?? "").trim();
    }

    if (msg) {
      const msgBox = document.createElement("p");
      msgBox.className =
        "m-3 max-w-[60%] w-fit rounded-2xl rounded-br-none bg-[var(--primary)] p-2 ml-auto break-words";
      msgBox.textContent = msg;
      chatBox.current?.appendChild(msgBox);

      responseGen(msg.trim());
      return;
    }

    toast("Message is empty!", { type: "warning" });
  };

  const hadndleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputHasValue(e.target.value.trim().length > 0);
  };

  return (
    <div className="section fixed z-10 flex w-full justify-end">
      <button
        ref={chatBtn}
        onClick={() => setIsChatOpen(true)}
        className="mr-5 mb-5 w-1/5 max-w-22 duration-200 hover:scale-105"
      >
        <Image
          src={BootImg}
          alt="ChatBot image"
          width={88}
          height={88}
          sizes="(max-width: 400px) 64px, 88px"
          className="h-auto w-auto"
          priority
        />
      </button>
      <div
        className={`fixed inset-0! z-50 flex h-svh flex-col items-center bg-(--background) shadow-xs shadow-neutral-500 md:inset-[initial]! md:right-5! md:bottom-5! md:h-[550px] md:w-[350px] md:max-w-[350px] md:rounded-2xl ${
          isChatOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex w-[95%] items-center justify-between border-b border-b-neutral-600 py-3 md:px-2 md:py-4">
          <div className="flex items-center gap-2">
            <Image
              src={BootImg}
              alt="ChatBot image"
              width={52}
              height={52}
              loading="lazy"
              className="h-auto w-auto"
            />
            <span className="font-medium text-(--foreground)">Leon Bot</span>
          </div>
          <button onClick={() => setIsChatOpen(false)}>
            <IoCloseOutline size={32} className="text-(--foreground)" />
          </button>
        </div>
        <div ref={chatBox} className="h-full w-[95%] flex-1 overflow-y-scroll">
          {isUserGreeted && (
            <div
              ref={suggestedMsgs}
              className="mt-10 flex flex-col items-center gap-3"
            >
              <button
                onClick={handleMsg}
                className="rounded-lg rounded-br-none bg-(--primary) p-2"
              >
                What services do you offer?
              </button>
              <button
                onClick={handleMsg}
                className="rounded-lg rounded-br-none bg-(--primary) p-2"
              >
                Can I get a free consultation?
              </button>
              <button
                onClick={handleMsg}
                className="rounded-lg rounded-br-none bg-(--primary) p-2"
              >
                What apps do you build?
              </button>
            </div>
          )}
        </div>
        <form
          onSubmit={handleMsg}
          className="mb-5 flex w-[95%] items-center justify-self-center rounded-full bg-(--neutral) pr-1 pl-3 text-(--foreground) shadow-[0_0.2px_1px_var(--foreground)] md:mb-3"
        >
          <input
            autoSave="false"
            type="text"
            name="message"
            placeholder="Message"
            className="h-12 w-full focus:outline-0"
            onChange={hadndleInputChange}
          />
          <button
            disabled={!inputHasValue}
            type="submit"
            className={`${inputHasValue ? "" : "btn-disabled"} rounded-full bg-(--primary) p-2.5`}
          >
            <BsSend size={20} className="m-0! ml-2 text-white" />
          </button>
        </form>
      </div>
    </div>
  );
};
export default ChatBot;
