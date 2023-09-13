import React from "react";
import Link from "next/link";
import { LogoIcon } from "./icons";
import clsx from "clsx";

const Logo = ({ color = "text-white" }: { color?: string }) => {
  return (
    <Link href="/" className=" flex items-center ">
      <LogoIcon />
      <span
        className={clsx(
          " block ml-4 font-bold text-[24px] leading-[100%]",
          color
        )}>
        Moviebox
      </span>
    </Link>
  );
};

export default Logo;
