import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { getThemePreference } from "@/lib/cookies";

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
    "Overhauling my very first web project with a modern, minimal UI while keeping its original identity. Built with Next.js, TypeScript, and Tailwind CSS.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isLight = await getThemePreference();

  return (
    <html
      lang="en"
      className={isLight ? "light" : isLight === false ? "dark" : ""}
    >
      <body className={`${manrope.variable} ${knockbold.variable} antialiased`}>
        {children}

        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        ></link>
        <script
          src="https://assets.calendly.com/assets/external/widget.js"
          type="text/javascript"
          async
        ></script>
      </body>
    </html>
  );
}
