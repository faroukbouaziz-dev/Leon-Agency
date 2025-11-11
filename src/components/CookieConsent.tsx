"use client";

import { useEffect, useState } from "react";

const CookieConsent = () => {
  const [isAccepted, setIsAccepted] = useState<boolean | null>(null);

  useEffect(() => {
    const cookieString = document.cookie
      .split("; ")
      .find((row) => row.startsWith("isCookiesAccepted="));
    if (cookieString) {
      const value = cookieString.split("=")[1];
      setIsAccepted(value === "true");
      document.getElementById("consent-box")?.classList.add("hidden!");
    }
  }, []);

  useEffect(() => {
    if (isAccepted) {
      const script = document.createElement("script");
      script.id = "gtm-script";
      script.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K8GKQ35X');`;
      document.body.appendChild(script);

      const noscript = document.createElement("noscript");
      noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K8GKQ35X" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
      document.body.appendChild(noscript);
    }
  }, [isAccepted]);

  const handleCookie = (isCookiesAccepted: boolean) => {
    setIsAccepted(isCookiesAccepted);
    document.cookie = `isCookiesAccepted=${isCookiesAccepted}; path=/; max-age=31536000`;

    const consentBox = document.getElementById("consent-box");
    consentBox?.classList.add("duration-300!");
    consentBox?.classList.add("translate-y-50!");
    consentBox?.classList.add("opacity-0!");
  };

  return (
    <div
      id="consent-box"
      className="fixed bottom-0 left-0 z-40 flex w-full flex-wrap items-center justify-between gap-3 border-t-2 bg-(--secondary) p-4"
    >
      <p> We use cookies to improve your experience. Do you accept cookies?</p>
      <div className="text-black">
        <button
          type="button"
          title="Accept cookie"
          className="mx-1 rounded-md bg-green-300 px-3 duration-150 hover:scale-105"
          onClick={() => handleCookie(true)}
          value="true"
        >
          Accept
        </button>
        <button
          type="button"
          title="Dont accept cookie"
          className="mx-1 rounded-md bg-white px-3"
          onClick={() => handleCookie(false)}
          value="false"
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
