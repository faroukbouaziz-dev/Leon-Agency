import AboutArrow from "@/assets/svg/AboutArrow.svg";

const About = () => {
  return (
    <section className="section" id="about">
      <h2 className="heading2 anim-typewriter">Our Story</h2>
      <div className="relative">
        <AboutArrow
          className="h-[380px] w-full sm:h-[450px] lg:h-[500px] xl:h-[550px] 2xl:h-[580px]"
          aria-hidden="true"
        />
        <p className="text-animation text-big lef-0 xs:w-[220px] -mt-4 w-[180px] sm:w-[300px] lg:w-[350px] xl:w-[450] 2xl:w-[700px]">
          Born from a group of designers, developers and marketers at
          university, Leon Agency was founded on the belief that collaboration
          creates better digital experiences.
        </p>
        <p className="text-animation text-big xs:w-[180px] xs:top-20 absolute top-10 right-0 w-[150px] sm:w-[210px] md:w-[250px] lg:w-[300px] xl:w-[400px] 2xl:w-[500px]">
          We exist to help businesses establish and grow their digital presence
          with design and technology that drive real impact.
        </p>
      </div>
    </section>
  );
};

export default About;
