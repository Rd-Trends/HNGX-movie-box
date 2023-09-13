import * as React from "react";
import { SVGProps } from "react";

const YoutubeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={22}
    fill="none">
    <path
      fill="#111827"
      d="M22.902 5.218a2.86 2.86 0 0 0-2.012-2.025C19.116 2.714 12 2.714 12 2.714s-7.116 0-8.89.479a2.86 2.86 0 0 0-2.012 2.025C.622 7.004.622 10.73.622 10.73s0 3.727.476 5.513a2.817 2.817 0 0 0 2.012 1.993c1.774.478 8.89.478 8.89.478s7.116 0 8.89-.478a2.817 2.817 0 0 0 2.012-1.993c.476-1.786.476-5.512.476-5.512s0-3.727-.476-5.513Zm-13.23 8.896V7.347l5.948 3.384-5.947 3.383Z"
    />
  </svg>
);
export default YoutubeIcon;
