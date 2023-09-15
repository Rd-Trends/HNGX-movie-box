import * as React from "react";
import { SVGProps } from "react";
const FavouriteIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3.172 5.483c1.562-1.521 4.094-1.521 5.656 0L10 6.623l1.172-1.14c1.562-1.521 4.094-1.521 5.656 0a3.823 3.823 0 0 1 0 5.508L10 17.64l-6.828-6.65a3.823 3.823 0 0 1 0-5.507Z"
      clipRule="evenodd"
    />
  </svg>
);
export default FavouriteIcon;
