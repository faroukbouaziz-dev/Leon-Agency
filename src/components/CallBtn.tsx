"use client";
import Callicon from "@/assets/svg/Icons/Callicon.svg";
import { forwardRef } from "react";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

type CallBtnProps = {
  className?: string;
};

const CallBtn = forwardRef<HTMLButtonElement, CallBtnProps>(
  ({ className }, ref) => {
    return (
      <button
        ref={ref}
        onClick={() => {
          window.Calendly?.initPopupWidget({
            url: "https://calendly.com/bouazizfarouk3/30min",
          });
        }}
        className={`${className} btn-primary`}
      >
        <Callicon className="h-6 w-6" />
        <span>Book a call</span>
      </button>
    );
  },
);

CallBtn.displayName = "CallBtn";

export default CallBtn;
