import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`h-[5000px] ${manrope.variable} ${knockbold.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
