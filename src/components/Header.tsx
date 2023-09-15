import React from "react";
import { IMDBIcon, PlayIcon, RottenTomatoesIcon } from "./icons";
import Button from "./Button";
import { Movie } from "@/Type/Movie";
import clsx from "clsx";
import Link from "next/link";

type HeaderProps = {
  activeMovie?: Movie;
  activeHeroImageIndex: number;
  changeActiveHeroImageIndex: (index: number) => void;
};

const Header = ({
  activeMovie,
  activeHeroImageIndex,
  changeActiveHeroImageIndex,
}: HeaderProps) => {
  return (
    <header className=" h-full flex flex-col md:flex-row items-center justify-between py-[4rem]">
      <div className=" text-white max-w-[400px] space-y-4">
        {activeMovie && (
          <>
            <h1 className=" text-5xl leading-[56px] font-bold">
              {activeMovie?.title}
            </h1>
            <div className=" flex items-center space-x-8">
              <span className=" flex items-center">
                <IMDBIcon />
                <span className="pl-[10px]">{activeMovie?.vote_average}</span>
              </span>
              <span className=" flex items-center">
                <RottenTomatoesIcon />
                <span className="pl-[10px]">
                  {activeMovie?.vote_average * 10}%
                </span>
              </span>
            </div>
            <p className=" text-sm leading-[18px] font-medium">
              {activeMovie?.overview}
            </p>
          </>
        )}
        <Link
          className=" w-fit flex items-center hover:opacity-80 px-4 py-3 text-xl rounded-[10px] bg-primary-color-100 text-white"
          href={`/movie/${activeMovie?.id}`}>
          <PlayIcon /> <span className="pl-2">Watch Trailer</span>
        </Link>
      </div>
      <div className=" flex md:flex-col space-x-4 items-end mt-12 md:mt-0 md:space-x-0 ">
        {Array.from({ length: 5 }).map((_, index) => {
          return (
            <button
              key={"hero-image" + index}
              onClick={() => changeActiveHeroImageIndex(index)}
              className={clsx(
                "flex flex-col items-center space-y-1 md:flex-row md:space-x-4 md:space-y-0 cursor-pointer outline-none border-none",
                activeHeroImageIndex === index
                  ? " text-white"
                  : "text-[#9CA3AF]"
              )}>
              {activeHeroImageIndex === index && (
                <div className=" h-[20px] w-[3px] md:rotate-90 bg-white"></div>
              )}
              <span>{index + 1}</span>
            </button>
          );
        })}
      </div>
    </header>
  );
};

export default Header;
