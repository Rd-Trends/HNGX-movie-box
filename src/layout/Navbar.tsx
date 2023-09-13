import { ButtonSize } from "@/Type";
import Button from "@/components/Button";
import Logo from "@/components/Logo";
import SearchComponent from "@/components/SearchComponent";
import { BarIcon, SearchIcon } from "@/components/icons";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className=" py-[10px] space-y-4">
      <nav className=" flex items-center justify-between space-x-8">
        <Logo />
        <div className=" hidden md:block w-full md:max-w-md lg:max-w-lg">
          <SearchComponent />
        </div>

        <div className=" flex items-center">
          <Link
            href="#"
            className=" text-white font-bold text-base hover:text-primary-color-100">
            Sign in
          </Link>
          <Button rounded className=" ml-2 text-white" size={ButtonSize.Small}>
            <BarIcon />
          </Button>
        </div>
      </nav>
      <div className="md:hidden">
        <SearchComponent />
      </div>
    </div>
  );
};

export default Navbar;
