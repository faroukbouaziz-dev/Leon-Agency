import Image, { StaticImageData } from "next/image";

interface Service {
  id: number;
  title: string;
  description: string;
  images: {
    short: StaticImageData[];
    long: StaticImageData;
  };
}

const ServicesCard = ({
  service,
  className,
}: {
  service: Service;
  className: string;
}) => {
  return (
    <div
      className={`${className} xs:py-7 card-spacing service-card bg-[var(--background)]`}
    >
      <div className="xs:mb-10 mb-5 flex items-center gap-1.5 lg:gap-3">
        <span className="numbers">{service.id}</span>
        <h3 className="heading3">{service.title}</h3>
      </div>
      <div className="flex flex-col items-center gap-4 px-5 sm:flex-row-reverse md:px-10 lg:gap-6 lg:px-20 xl:gap-30 xl:px-30">
        <div className="2xs:h-72 xs:h-80 grid h-[210px] w-full grid-cols-2 grid-rows-2 gap-2 sm:h-[300px] sm:w-1/2 lg:h-[400px] lg:gap-4 xl:h-[480px]">
          <Image
            src={service.images.short[0]}
            alt="image"
            className="h-full w-full rounded-xl object-cover"
          />
          <Image
            src={service.images.short[1]}
            alt="image"
            className="h-full w-full rounded-xl object-cover"
          />
          <Image
            src={service.images.long}
            alt="image"
            className="col-span-2 h-full w-full rounded-xl object-cover"
          />
        </div>
        <p className="text-big w-11/12 text-center sm:w-1/2 sm:text-left">
          {service.description}
        </p>
      </div>
    </div>
  );
};

export default ServicesCard;
