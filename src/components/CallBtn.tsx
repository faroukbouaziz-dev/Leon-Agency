"use client";
import Callicon from "@/assets/svg/Icons/Callicon.svg";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}
const CallBtn = ({ className }: { className: string }) => {
  return (
    <button
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
};

export default CallBtn;
