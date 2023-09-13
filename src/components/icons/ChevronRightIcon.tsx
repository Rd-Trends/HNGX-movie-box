import * as React from "react";
import { SVGProps } from "react";

const ChevronRightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={21}
    fill="none">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m7.5 4.667 5.833 5.833L7.5 16.333"
    />
  </svg>
);
export default ChevronRightIcon;
