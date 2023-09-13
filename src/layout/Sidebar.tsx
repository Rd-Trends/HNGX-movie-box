import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import { CalendarIcon, LogoutIcon, TvShowIcon } from "@/components/icons";
import HomeIcon from "@/components/icons/HomeIcon";
import VideoIcon from "@/components/icons/VideoIcon";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import path from "node:path/posix";

const Sidebar = () => {
  const pathName = usePathname();

  return (
    <div className=" w-56 h-screen bg-white py-8 flex flex-col justify-between rounded-r-[45px] border-r-2 border-[rgba(0, 0, 0, 0.30)] ">
      <div className=" mx-4">
        <Logo color="text-black" />
      </div>
      <nav>
        <Link
          href="/"
          className={clsx(
            " py-4 px-8 w-full flex items-center space-x-3 border-r border-transparent font-semibold hover:bg-primary-color-10  ",
            pathName === "/" ? "bg-primary-color-10" : ""
          )}>
          <HomeIcon />
          <span>Home</span>
        </Link>
        <Link
          href="/"
          className={clsx(
            " py-4 px-8 w-full flex items-center space-x-3 border-r-4 border-transparent font-semibold hover:bg-primary-color-10 ",
            pathName.includes("movie")
              ? "bg-primary-color-10 text-primary-color-100 border-r-primary-color-100"
              : ""
          )}>
          <VideoIcon />
          <span>Movies</span>
        </Link>
        <Link
          href="/"
          className={clsx(
            " py-4 px-8 w-full flex items-center space-x-3 border-r border-transparent font-semibold hover:bg-primary-color-10 "
          )}>
          <TvShowIcon />
          <span>TV Series</span>
        </Link>
        <Link
          href="/"
          className={clsx(
            " py-4 px-8 w-full flex items-center space-x-3 border-r border-transparent font-semibold hover:bg-primary-color-10 "
          )}>
          <CalendarIcon />
          <span>Upcoming</span>
        </Link>
      </nav>
      <div className=" p-4 mx-4 border border-primary-color-70 rounded-[20px] bg-primary-color-10 space-y-2">
        <p className=" text-base font-semibold">
          Play movie quizes and earn free tickets
        </p>
        <span className=" text-xs font-medium">50k people are playing now</span>
        <button className=" outline-none border-none bg-primary-color-20 text-xs py-1 px-4 text-primary-color-100 rounded-xl">
          Start playing
        </button>
      </div>
      <button className=" border-none flex items-center space-x-2 mx-4 outline-none text-[20px] font-semibold text-[#666] ">
        <LogoutIcon />
        <span>Log out</span>
      </button>
    </div>
  );
};

export default Sidebar;
