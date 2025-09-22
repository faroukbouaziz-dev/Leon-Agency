import Uiux1 from "@/assets/services/uiux/uiux1.jpg";
import Uiux2 from "@/assets/services/uiux/uiux2.jpg";
import Uiux3 from "@/assets/services/uiux/uiux3.jpg";
import AppDev1 from "@/assets/services/appDev/appDev1.jpg";
import AppDev2 from "@/assets/services/appDev/appDev2.jpg";
import AppDev3 from "@/assets/services/appDev/appDev3.jpg";
import GraphicDes1 from "@/assets/services/graphicDes/graphicDes1.jpg";
import GraphicDes2 from "@/assets/services/graphicDes/graphicDes2.jpg";
import GraphicDes3 from "@/assets/services/graphicDes/graphicDes3.jpg";
import DigitalMark1 from "@/assets/services/digitalMark/digitalMark1.jpg";
import DigitalMark2 from "@/assets/services/digitalMark/digitalMark2.jpg";
import DigitalMark3 from "@/assets/services/digitalMark/digitalMark3.jpg";

export const servicesData = [
  {
    id: 1,
    title: "UI/UX",
    description:
      "We craft intuitive, user-friendly interfaces that balance aesthetics with functionality. From wireframes to polished designs, our process ensures your product feels seamless and engaging across every device.",
    images: {
      short: [Uiux1, Uiux2],
      long: Uiux3,
    },
  },
  {
    id: 2,
    title: "App Development",
    description:
      "We develop websites and mobile/desktop apps that are functional, scalable, and enjoyable to use. Our process covers everything from the first concept to launch, making sure your product not only does the job but also grows with your business and leaves users smiling.",
    images: {
      short: [AppDev1, AppDev2],
      long: AppDev3,
    },
  },
  {
    id: 3,
    title: "Graphic Design",
    description:
      "From logos to complete brand identities, we create visuals that capture attention and communicate your message clearly. Our designs are crafted to be memorable, versatile, and aligned with your brand's personality, ensuring you stand out in every medium.",
    images: {
      short: [GraphicDes1, GraphicDes2],
      long: GraphicDes3,
    },
  },
  {
    id: 4,
    title: "Digital Marketing",
    description:
      "We help your brand connect with the right audience through strategic digital campaigns. From SEO and social media to targeted ads, our approach blends creativity with data-driven insights, ensuring measurable growth and lasting engagement.",
    images: {
      short: [DigitalMark1, DigitalMark2],
      long: DigitalMark3,
    },
  },
];
