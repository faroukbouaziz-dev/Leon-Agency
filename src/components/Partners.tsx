import * as Brands from "@/assets/svg/Partners";
import Marquee from "react-fast-marquee";

const Logos = () => {
  return (
    <section className="section !px-0">
      <h2 className="text-big mb-5 text-center lg:mb-10">
        Trusted by world&apos;s top brands
      </h2>
      <Marquee
        pauseOnClick
        loop={0}
        speed={150}
        gradient
        gradientWidth={50}
        gradientColor="var(--background)"
      >
        {Object.entries(Brands).map(([name, Icon]) => (
          <Icon
            key={name}
            className="mx-5 max-h-6 shrink-0 fill-[var(--secondary)] lg:max-h-8"
          />
        ))}
      </Marquee>
    </section>
  );
};

export default Logos;
