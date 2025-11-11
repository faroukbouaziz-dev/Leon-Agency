import Hero from "../components/Hero";
import Header from "../components/Header";
import Partners from "../components/Partners";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import Animations from "@/components/Animations";
import CookieConsent from "@/components/CookieConsent";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Partners />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      <Animations />
      <CookieConsent />
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        toastClassName="!bg-[var(--neutral)]"
      />
    </>
  );
}
