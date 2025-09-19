import * as React from "react";
import { SVGProps } from "react";
const MouseDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 40 60"
    {...props}
  >
    <rect
      width={37.044}
      height={56}
      x={1}
      y={1}
      fill="#F7F7F7"
      stroke="#1C1C1C"
      strokeWidth={2}
      rx={18.522}
    />
    <path
      fill="#1C1C1C"
      d="M19.669 38.354a.5.5 0 0 0 .707 0l3.182-3.182a.5.5 0 0 0-.707-.707l-2.829 2.828-2.828-2.828a.5.5 0 1 0-.707.707l3.182 3.182ZM20.022 17h-.5v21h1V17h-.5Z"
    />
    <circle cx={20.022} cy={16} r={2.502} fill="#000" stroke="#1C1C1C" />
  </svg>
);
export default MouseDown;
