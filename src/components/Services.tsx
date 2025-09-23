import { servicesData } from "@/data/data";
import ServicesCard from "./ServicesCard";

const Services = () => {
  return (
    <section className="section">
      <h2 className="heading2">Capabilities</h2>
      {servicesData.map((service) => (
        <ServicesCard key={service.id} service={service} />
      ))}
    </section>
  );
};

export default Services;
