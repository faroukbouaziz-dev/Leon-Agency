"use client";
import Image from "next/image";
import BootImg from "@/assets/boot.png";
import { useEffect, useRef, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { BsSend } from "react-icons/bs";
import { ai_boot } from "@/actions/chat";
import { bootPrompt } from "@/data/data";

const ChatBoot = () => {
  const [chat, setChat] = useState(false);
  const [userGreeted, setUserGreeted] = useState(false);
  const [inputValue, setInputValue] = useState(false);
  const chatBtn = useRef<HTMLButtonElement | null>(null);
  const chatBox = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (chat) {
      if (!chatBox.current?.innerHTML) {
        responseGen(bootPrompt).then(() => setUserGreeted(true));
      }
      if (screen.width <= 500) {
        document.querySelector("header")?.classList.add("hidden");
        chatBtn.current?.classList.add("hidden");
        document.body.style.overflowY = "hidden";
      }
    } else {
      document.querySelector("header")?.classList.remove("hidden");
      chatBtn.current?.classList.remove("hidden");
      document.body.style.overflowY = "scroll";
    }
  }, [chat]);

  const responseGen = async (msg: string) => {
    try {
      chatBox.current?.insertAdjacentHTML(
        "beforeend",
        `<div class="loading m-3 flex max-w-[60%] flex-col gap-3 rounded-2xl rounded-bl-none bg-[var(--neutral)] p-4">
          <div class="h-2 w-full animate-pulse bg-neutral-500"></div>
          <div class="h-2 w-full animate-pulse bg-neutral-500"></div>
          <div class="h-2 w-1/2 animate-pulse bg-neutral-500"></div>
        </div>`,
      );

      const res = await ai_boot(msg);
      const resMsg = document.createElement("p");
      resMsg.innerText = res as string;
      resMsg.className =
        "m-3 max-w-[60%] rounded-2xl rounded-bl-none bg-[var(--neutral)] p-2";

      document.querySelector(".loading")?.remove();
      chatBox.current?.appendChild(resMsg);
    } catch (err) {
      console.error(err);
    }
  };

  const handleMsg = (e: React.SyntheticEvent | string) => {
    setInputValue(false);
    if (userGreeted) setUserGreeted(false);
    let msg;
    if (typeof e !== "string") {
      e.preventDefault();
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      msg = formData.get("message") as string;
      form.reset();
    } else {
      msg = e;
    }
    chatBox.current?.insertAdjacentHTML(
      "beforeend",
      `<p class="m-3 max-w-[60%] w-fit rounded-2xl rounded-br-none bg-[var(--primary)] p-2 ml-auto">${msg}</p>`,
    );
    responseGen(msg.trim());
  };

  return (
    <div>
      <button ref={chatBtn} onClick={() => setChat(true)}>
        <Image
          src={BootImg}
          alt="boot"
          className="fixed right-5 bottom-6 z-10 w-1/5 max-w-22"
        />
      </button>
      <div
        className={`fixed !inset-0 z-10 flex h-svh flex-col items-center bg-[var(--background)] shadow-[0_1px_15px_var(--foreground-transparent)] md:!inset-[initial] md:!right-5 md:!bottom-5 md:h-[550px] md:w-[350px] md:max-w-[350px] md:rounded-2xl ${
          chat ? "block" : "hidden"
        }`}
      >
        <div className="flex w-[95%] items-center justify-between border-b-1 border-b-neutral-600 py-3 md:px-2 md:py-4">
          <div className="flex items-center gap-2">
            <Image src={BootImg} alt="boot" className="w-13" />
            <span className="font-medium text-[var(--foreground)]">
              Leon Bot
            </span>
          </div>
          <button
            onClick={() => {
              setChat(false);
              document.body.style.overflowY = "scroll";
            }}
          >
            <IoCloseOutline size={32} className="text-[var(--foreground)]" />
          </button>
        </div>
        <div ref={chatBox} className="h-full w-[95%] flex-1 overflow-y-scroll">
          {userGreeted && (
            <div className="mt-10 flex flex-col items-center gap-3">
              <button
                onClick={() => handleMsg("What services do you offer?")}
                className="rounded-lg rounded-br-none bg-[var(--primary)] p-2"
              >
                What services do you offer?
              </button>
              <button
                onClick={() => handleMsg("Can I get a free consultation?")}
                className="rounded-lg rounded-br-none bg-[var(--primary)] p-2"
              >
                Can I get a free consultation?
              </button>
              <button
                onClick={() => handleMsg("What apps do you build?")}
                className="rounded-lg rounded-br-none bg-[var(--primary)] p-2"
              >
                What apps do you build?
              </button>
            </div>
          )}
        </div>
        <form
          onSubmit={handleMsg}
          className="mb-5 flex w-[95%] items-center justify-self-center rounded-full bg-[var(--neutral)] pr-1 pl-3 text-[var(--foreground)] shadow-[0_0.2px_1px_var(--foreground)] md:mb-3"
        >
          <input
            autoSave="false"
            type="text"
            name="message"
            placeholder="Message"
            className="h-12 w-full focus:outline-0"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setInputValue(e.target.value.trim().length > 0);
            }}
          />
          <button
            disabled={!inputValue}
            type="submit"
            className={`${inputValue ? "" : "btn-disabled"} rounded-full bg-[var(--primary)] p-2.5`}
          >
            <BsSend size={20} className="!m-0 ml-2 text-white" />
          </button>
        </form>
      </div>
    </div>
  );
};
export default ChatBoot;
