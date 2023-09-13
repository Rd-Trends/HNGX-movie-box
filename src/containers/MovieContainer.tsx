"use client";

import Logo from "@/components/Logo";
import { BarIcon, StarIcon, TwoTickIcon } from "@/components/icons";
import { useGetMovieById } from "@/http/movies/query";
import Sidebar from "@/layout/Sidebar";
import { getMovieTrailer } from "@/utils/getMovieTrailer";
import clsx from "clsx";
import React, { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { convertMinutesToHoursAndMinutes } from "@/utils/parseRuntimeMinute";
import Button from "@/components/Button";
import ListIcon from "@/components/icons/ListIcon";
import { ButtonVariant } from "@/Type";

const MovieContainer = ({ movieId }: { movieId: string }) => {
  const { data, isLoading, isError, error } = useGetMovieById(movieId);
  const ReactPlayer = dynamic(() => import("react-player/lazy"), {
    ssr: false,
  });

  const movieTrailer = useMemo(() => getMovieTrailer(data), [data]);
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className=" relative flex flex-col md:flex-row overflow-x-hidden min-h-screen">
      <aside
        className={clsx(
          "absolute bottom-0 top-0 h-full left-0  z-10  md:static transition-transform",
          showSidebar ? "translate-x-0" : "translate-x-[-100%] md:translate-x-0"
        )}>
        <Sidebar />
      </aside>
      <div>
        <div className="flex items-center justify-between px-4 py-4 md:hidden">
          <Logo color=" text-black" />
          <button className="" onClick={() => setShowSidebar((prev) => !prev)}>
            <BarIcon />
          </button>
        </div>
      </div>
      <main className=" w-screen overflow-y-auto p-4 md:p-8 space-y-4">
        {!!movieTrailer ? (
          <div className="w-auto h-[450px]">
            <ReactPlayer
              url={movieTrailer}
              width="100%"
              height="100%"
              className="react-player"
            />
          </div>
        ) : (
          <p className=" font-bold text-3xl mb-8">No Trailer available</p>
        )}
        <div className=" flex flex-col lg:flex-row lg:items-center lg:space-x-4 justify-between">
          <div className=" flex space-x-3 items-center flex-wrap">
            <div className=" flex items-center space-x-2">
              <h1
                data-testid="movie-title"
                className=" text-xl font-bold text-primary-text-color">
                {data?.title}
              </h1>
              <span>•</span>
            </div>

            <div className=" flex items-center space-x-2">
              <span
                data-testid="movie-release-date"
                className=" text-xl font-bold text-primary-text-color">
                {data?.release_date}
              </span>
              <span>•</span>
            </div>

            <div className=" flex items-center space-x-2">
              <span
                data-testid="movie-runtime"
                className=" text-xl font-bold text-primary-text-color">
                {convertMinutesToHoursAndMinutes(data?.runtime)}
              </span>
              <span>•</span>
            </div>
            <div className=" flex items-center space-x-3">
              {data?.genres.map((genre) => (
                <span
                  className=" py-1 px-3 text-sm rounded-[15px] border border-[#F8E7EB]"
                  key={genre.id}>
                  {genre.name}
                </span>
              ))}
            </div>
          </div>

          <div className=" flex items-center">
            <StarIcon />
            <span className=" text-xl text-gray-400">
              {data?.vote_average}{" "}
            </span>
            <span className=" text-lg text-primary-text-color pl-1">
              | {data?.vote_count}
            </span>
          </div>
        </div>

        <div className="flex flex-col space-y-4 lg:flex-row lg:justify-between lg:space-x-8 lg:space-y-0 ">
          <div className=" lg:w-2/3">
            <p data-testid="movie-overview" className=" text-xl">
              {data?.overview}
            </p>
          </div>

          <div className=" lg:w-1/3">
            <Button fullWIdth className=" mb-2">
              <TwoTickIcon />
              <span className="pl-2">See Showtimes</span>
            </Button>
            <Button variant={ButtonVariant.Secondary} fullWIdth>
              <ListIcon />
              <span className="pl-2">More watch options</span>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MovieContainer;
