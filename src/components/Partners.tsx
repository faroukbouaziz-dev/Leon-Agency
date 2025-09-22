import * as Brands from "@/assets/svg/Partners";

const Logos = () => {
  return (
    <section className="section section-m">
      <h2 className="text-big mb-5 text-center">
        Trusted by world's top brands
      </h2>
      <div className="relative">
        <div className="flex items-center justify-center gap-8 overflow-hidden lg:gap-12">
          {Object.entries(Brands).map(([name, Icon]) => (
            <Icon key={name} className="brand" />
          ))}
        </div>
        <div className="absolute top-0 flex h-full w-full items-center justify-between">
          <div className="linear-bg h-full w-[70]"></div>
          <div className="linear-bg h-full w-[70] rotate-180"></div>
        </div>
      </div>
    </section>
  );
};

export default Logos;
