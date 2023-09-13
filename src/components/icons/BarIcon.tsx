import * as React from "react";
import { SVGProps } from "react";

const BarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3.6 8.4a1.2 1.2 0 0 1 1.2-1.2h14.4a1.2 1.2 0 0 1 0 2.4H4.8a1.2 1.2 0 0 1-1.2-1.2Zm0 7.2a1.2 1.2 0 0 1 1.2-1.2h14.4a1.2 1.2 0 0 1 0 2.4H4.8a1.2 1.2 0 0 1-1.2-1.2Z"
      clipRule="evenodd"
    />
  </svg>
);
export default BarIcon;
