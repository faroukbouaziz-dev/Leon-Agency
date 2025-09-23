import { testimonialsData } from "@/data/data";
import Image from "next/image";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Testimonials = () => {
  const currentClients = testimonialsData.slice(0, 3);

  return (
    <section className="section section-m section-p">
      <h2 className="heading2">Testimonials</h2>
      <div className="flex flex-col gap-5 md:flex-row md:justify-around md:px-[7%]">
        <div className="relative">
          <div className="flex flex-col gap-6 lg:gap-18">
            {currentClients.map((client) => (
              <button
                key={client.id}
                className={
                  "flex w-fit items-center gap-2 md:gap-3" +
                  (client.id === 2 ? " active-client" : "")
                }
              >
                <Image
                  src={client.picture}
                  alt="client"
                  className="h-15 w-15 rounded-full lg:h-20 lg:w-20"
                />
                <div>
                  <p className="label mb-1 text-left lg:mb-2">{client.name} </p>
                  <p className="sublabel">{client.job} </p>
                </div>
              </button>
            ))}
          </div>
          <div className="half-circel"></div>
        </div>
        <div className="text-big relative w-10/12 self-center md:w-1/2 lg:w-6/11 lg:max-w-4xl">
          <FaQuoteLeft className="mr-3 inline -translate-y-2" />
          <p className="inline">{currentClients[1].testimonial}</p>
          <FaQuoteRight className="ml-3 inline -translate-y-1" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
