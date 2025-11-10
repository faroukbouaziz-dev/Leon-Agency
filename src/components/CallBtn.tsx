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
        type="button"
        ref={ref}
        onClick={() => {
          if (window.Calendly) {
            window.Calendly.initPopupWidget({
              url: "https://calendly.com/bouazizfarouk3/30min",
            });
            return;
          }

          if (!document.getElementById("calendly-style")) {
            const link = document.createElement("link");
            link.id = "calendly-style";
            link.rel = "preload";
            link.href =
              "https://assets.calendly.com/assets/external/widget.css";
            document.head.appendChild(link);
          }

          const script = document.createElement("script");
          script.src = "https://assets.calendly.com/assets/external/widget.js";
          script.async = true;
          script.onload = () => {
            window.Calendly?.initPopupWidget({
              url: "https://calendly.com/bouazizfarouk3/30min",
            });
          };
          document.body.appendChild(script);
        }}
        className={`${className} btn-primary`}
      >
        <Callicon className="h-6 w-6" aria-hidden="true" />
        <span>Book a call</span>
      </button>
    );
  },
);

CallBtn.displayName = "CallBtn";

export default CallBtn;
