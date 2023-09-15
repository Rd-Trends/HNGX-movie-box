import { Movie } from "@/Type/Movie";
import { BASEiMAGE_URL_500 } from "@/constants/endpoints";
import Image from "next/image";
import React from "react";
import { IMDBIcon, RottenTomatoesIcon } from "./icons";
import { FavouriteIcon } from "./icons";
import { resolveImageSrc } from "@/utils/imageLoader";
import Link from "next/link";

type MovieCardProps = {
  movie: Movie;
  getGenres: (ids: number[]) => string;
};

const MovieCard = ({ movie, getGenres }: MovieCardProps) => {
  return (
    <Link
      href={`/movie/${movie.id}`}
      data-testid="movie-card"
      className=" relative space-y-3 no-underline">
      <Image
        data-testid="movie-poster"
        src={resolveImageSrc(movie?.poster_path)}
        alt=""
        className=""
        width={500}
        height={750}
      />
      <p
        data-testid="movie-release-date"
        className=" text-[#9CA3AF] text-xs font-bold">
        {movie?.release_date}
      </p>
      <h3
        data-testid="movie-title"
        className=" text-lg font-bold text-[#111827]">
        {movie?.title}
      </h3>
      <div className=" flex space-x-4 items-center justify-between ">
        <span className=" flex items-center">
          <IMDBIcon />
          <span className="pl-[10px]">{movie?.vote_average}</span>
        </span>
        <span className=" flex items-center">
          <RottenTomatoesIcon />
          <span className="pl-[10px]">{movie?.vote_average * 10}%</span>
        </span>
      </div>
      <p className=" text-[#9CA3AF] text-xs font-bold">
        {getGenres(movie?.genre_ids)}
      </p>
      <button
        onClick={(e) => e.preventDefault()}
        className="absolute flex items-center justify-center w-[30px] p-0 aspect-square rounded-full bg-[rgba(243,_244,_246,_0.50)] [backdrop-filter:blur(1px)] text-[#D1D5DB] hover:scale-[1.2] hover:text-primary-color-100 hover:bg-primary-color-70 focus:bg-primary-color-70 active:bg-primary-color-70 top-4 right-4 border-none outline-none">
        <FavouriteIcon />
      </button>
    </Link>
  );
};

export default MovieCard;
