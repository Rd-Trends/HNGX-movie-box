import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/components/icons";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className=" py-16 space-y-8 flex flex-col items-center">
      <div className=" flex items-center space-x-6">
        <Link href="">
          <FacebookIcon />
        </Link>
        <Link href="">
          <InstagramIcon />
        </Link>
        <Link href="">
          <TwitterIcon />
        </Link>
        <Link href="">
          <YoutubeIcon />
        </Link>
      </div>
      <div className=" flex flex-col space-y-4 md:flex-row items-center md:space-y-0 md:space-x-6">
        <Link href="#" className=" text-[#111827] text-lg font-bold">
          Conditions of use
        </Link>
        <Link href="#" className=" text-[#111827] text-lg font-bold">
          Privacy Policy
        </Link>
        <Link href="#" className=" text-[#111827] text-lg font-bold">
          Press room
        </Link>
      </div>
      <p className=" text-[#6B7280] text-lg font-bold">
        &copy; {new Date().getFullYear()} MovieBox by Rd
      </p>
    </footer>
  );
};

export default Footer;
