import React, { useCallback, useMemo } from "react";
import MovieCard from "./MovieCard";
import Link from "next/link";
import { ChevronRightIcon } from "./icons";
import { useGetMovies, useGetMoviesGenres, useGetTopRatedMovies } from "@/http/movies/query";
import { getGenreNames } from "@/utils/getGenreNames";

const FeaturedMovies = () => {
  const { data: popularMovies, isLoading } = useGetTopRatedMovies();
  const { data: genres, isLoading: isGenresLoading } = useGetMoviesGenres();

  const featuredMovies = useMemo(() => {
    return !!popularMovies?.results?.length
      ? popularMovies?.results?.splice(0, 10)
      : [];
  }, [popularMovies]);

  const getGenres = useCallback(
    (ids: number[]) => {
      return getGenreNames(ids, genres?.genres!);
    },
    [genres]
  );

  return (
    <div className="custom-container my-12 space-y-8">
      <div className=" flex flex-col justify-center space-y-4 md:space-y-0 md:flex-row items-center md:justify-between">
        <h2 className=" text-4xl font-bold text-black">Featured Movies</h2>
        <Link href="" className="flex items-center text-primary-color-100">
          <span className=" pr-2">See more </span>
          <ChevronRightIcon />
        </Link>
      </div>
      <div className="  grid grid-cols-2 gap-4 md:gap-8 md:grid-cols-3 lg:grid-cols-4 lg:gap-12">
        {!!featuredMovies?.length &&
          featuredMovies.map((movie) => {
            return (
              <MovieCard key={movie.id} movie={movie} getGenres={getGenres} />
            );
          })}
      </div>
    </div>
  );
};

export default FeaturedMovies;
