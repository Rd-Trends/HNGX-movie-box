import { ButtonProps, ButtonSize, ButtonVariant } from "@/Type";
import clsx from "clsx";
import React from "react";

const Button = ({
  children,
  variant = ButtonVariant.Primary,
  size = ButtonSize.Medium,
  rounded = false,
  fullWIdth = false,
  className = "",
  ...attributes
}: ButtonProps) => {
  const buttonvariants = {
    primary: " bg-primary-color-100 text-white",
    secondary: " bg-primary-color-10 text-primary-text-color",
  };

  const buttonSize = {
    small: "px-2 py-[6px] text-xs rounded-rounded-[3rem]",
    medium: "px-4 py-3 text-xl rounded-[10px]",
  };

  const classname = clsx(
    " flex items-center justify-center hover:opacity-80",
    buttonvariants[variant],
    buttonSize[size],
    rounded && "rounded-full aspect-square",
    fullWIdth && "w-full",
    className
  );
  return (
    <button className={classname} {...attributes}>
      {children}
    </button>
  );
};

export default Button;
