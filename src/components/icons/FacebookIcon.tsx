import * as React from "react";
import { SVGProps } from "react";

const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={28}
    fill="none">
    <g clipPath="url(#a)">
      <path
        fill="#111827"
        d="M21.429 1.714H2.57A2.571 2.571 0 0 0 0 4.286v18.857a2.571 2.571 0 0 0 2.571 2.571h7.353v-8.16H6.55v-3.84h3.375v-2.927c0-3.33 1.982-5.168 5.018-5.168 1.454 0 2.974.259 2.974.259v3.268h-1.675c-1.65 0-2.165 1.024-2.165 2.075v2.493h3.684l-.589 3.84h-3.095v8.16h7.353A2.571 2.571 0 0 0 24 23.143V4.286a2.571 2.571 0 0 0-2.571-2.572Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v27.429H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default FacebookIcon;
