import * as React from "react";
import { SVGProps } from "react";
const LeftFang = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    viewBox="0 0 50 50"
    preserveAspectRatio="true"
  >
    <path d="m10 3.57-.465-.893L0 0l4.651 29 .465-.446L10 3.569Z" />
  </svg>
);
export default LeftFang;
