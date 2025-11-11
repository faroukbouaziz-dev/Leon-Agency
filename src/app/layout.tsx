import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { getThemePreference } from "@/lib/cookies";
import Script from "next/script";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const knockbold = localFont({
  variable: "--font-knockbold",
  src: "../../public/fonts/knockbold.otf",
});

export const metadata: Metadata = {
  title: "Leon Agency",
  description:
    "Leon Agency is a creative digital agency specializing in UI/UX design, app development, graphic design, and digital marketing. We help businesses grow through design and technology that drive real impact.",
  openGraph: {
    title: "Leon | Creative Agency",
    description:
      "Leon Agency is a creative digital agency specializing in UI/UX design, app development, graphic design, and digital marketing. We help businesses grow through design and technology that drive real impact.",
    url: "https://domain.com",
    images: [
      {
        url: "https://domain.com/assets/services/uiux/uiux3.jpg",
        width: 1200,
        height: 630,
        alt: "Leon | Creative Agency",
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isLight = await getThemePreference();
  const jsonLd = {
    "@type": "Organization",
    name: "Leon Agency",
    url: "https://domain.com",
    logo: "https://domain.com/logo.png",
    description:
      "Leon Agency is a creative digital agency specializing in UI/UX design, app development, graphic design, and digital marketing. We help businesses grow through design and technology that drive real impact.",
    foundingDate: "2025",
    founders: [
      {
        "@type": "Person",
        name: "Leon Agency Team",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Msila",
      addressLocality: "Msila",
      addressCountry: "DZ",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+213674155893",
      contactType: "customer service",
      email: "leon.info@agency",
    },
    sameAs: [
      "https://github.com/leonagency",
      "https://twitter.com/leonagency",
      "https://instagram.com/leonagency",
      "https://tiktok.com/@leonagency",
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "UI/UX Design",
          description:
            "We craft intuitive, user-friendly interfaces balancing aesthetics with functionality.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "App Development",
          description:
            "We develop scalable, high-performance web and mobile apps.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Graphic Design",
          description:
            "From logos to full brand identities, our visuals help brands stand out.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Digital Marketing",
          description:
            "We deliver measurable growth through SEO, social media, and advertising.",
        },
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "50",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Johny Smith" },
        reviewBody:
          "Leon Agency expertly transformed our concept into a reality with their creative expertise. The outcome was beyond expectations.",
        reviewRating: { "@type": "Rating", ratingValue: "5" },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Daniel Kim" },
        reviewBody:
          "From idea to launch, Leon Agency guided us every step of the way. Their development team is top-notch and reliable.",
        reviewRating: { "@type": "Rating", ratingValue: "5" },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Liam O'Connor" },
        reviewBody:
          "Leon Agency delivered a functional app that scaled smoothly as our users grew.",
        reviewRating: { "@type": "Rating", ratingValue: "5" },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={isLight ? "light" : isLight === false ? "dark" : ""}
    >
      <body className={`${manrope.variable} ${knockbold.variable} antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K8GKQ35X"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K8GKQ35X');`,
          }}
        />
        <Script
          id="jsonLd"
          strategy="afterInteractive"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
