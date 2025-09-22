import Hero from "../components/Hero";
import Header from "../components/Header";
import Partners from "../components/Partners";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Partners />
      <About />
      <Services />
      <Portfolio />
    </>
  );
}
