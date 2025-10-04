import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cookies } from "next/headers";

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
  const cookie = await cookies();
  const lightTheme = JSON.parse(cookie.get("lightTheme")?.value ?? "");
  console.log(lightTheme);
  return (
    <html
      lang="en"
      className={lightTheme ? "light" : lightTheme === false ? "dark" : ""}
    >
      <body className={`${manrope.variable} ${knockbold.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
