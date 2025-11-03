import { servicesData } from "@/data/data";
import ServicesCard from "./ServicesCard";

const Services = () => {
  return (
    <section className="section" id="services">
      <h2 className="heading2">Capabilities</h2>
      {servicesData.map((service, i) => (
        <ServicesCard
          key={service.id}
          service={service}
          className={`${i === 0 ? "" : "border-t-2"} sticky ${i === 0 ? "top-10" : i === 1 ? "top-45" : i === 2 ? "top-83" : "top-100"}`}
        />
      ))}
    </section>
  );
};

export default Services;
