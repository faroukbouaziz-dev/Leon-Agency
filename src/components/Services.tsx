import { servicesData } from "@/data/data";
import ServicesCard from "./ServicesCard";

const Services = () => {
  return (
    <section className="section" id="services">
      <h2 className="heading2 anim-typewriter">Capabilities</h2>
      {servicesData.map((service, i) => (
        <ServicesCard
          key={service.id}
          service={service}
          className={`${i === 0 ? "" : "border-t-2"} sticky top-0`}
        />
      ))}
    </section>
  );
};

export default Services;
