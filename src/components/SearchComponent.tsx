import React, { useCallback, useEffect, useMemo } from "react";
import { IMDBIcon, RottenTomatoesIcon, SearchIcon } from "./icons";
import { useGetMoviesGenres, useSearchMovies } from "@/http/movies/query";
import { getGenreNames } from "@/utils/getGenreNames";
import Link from "next/link";
import { resolveImageSrc } from "@/utils/imageLoader";
import Image from "next/image";
import { BASEiMAGE_URL_500 } from "@/constants/endpoints";
import Loader from "./Loader";

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = React.useState("");

  const { data: genres, isLoading: isGenresLoading } = useGetMoviesGenres();
  const { data: searchResult, isLoading } =
    useSearchMovies(debouncedSearchQuery);

  const searchedMovies = useMemo(() => {
    return !!searchResult?.results?.length ? searchResult?.results : [];
  }, [searchResult]);

  const getGenres = useCallback(
    (ids: number[]) => {
      return getGenreNames(ids, genres?.genres!);
    },
    [genres]
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  return (
    <div className=" relative flex flex-col items-center w-full md:max-w-md lg:max-w-lg">
      <label className=" relative flex items-center w-full md:max-w-md lg:max-w-lg ">
        <input
          data-testid="search-input"
          placeholder="what do yo want to watch?"
          className=" bg-transparent py-[6px] px-[10px] pr-[50px] border-2 rounded-md border-[#d1d5db] text-white placeholder:text-white w-full outline-none  "
          onChange={handleSearch}
        />
        <button className=" absolute  top--1/2 translate-y--1/2 right-[10px] ">
          <SearchIcon />
        </button>
      </label>

      {!!debouncedSearchQuery && (
        <div
          data-testid="search-result"
          className=" absolute top-12 bg-white py-4 px-4 space-y-4 rounded-md left-0 right-0 max-h-96 overflow-y-auto shadow-xl z-10">
          <p>
            SEARCH RESULT FOR:{" "}
            <strong>{debouncedSearchQuery.toUpperCase()}</strong>
          </p>

          {isLoading && (
            <div className=" flex items-center justify-center">
              <Loader />
            </div>
          )}

          {!isLoading && !searchedMovies?.length && (
            <div className=" text-center">
              <span className=" text-lg font-bold">No result found</span>
            </div>
          )}

          <div className="space-y-4">
            {!!searchedMovies?.length &&
              searchedMovies.map((movie) => (
                <Link
                  key={movie.id}
                  href={`/movie/${movie.id}`}
                  data-testid="movie-card"
                  className=" flex space-x-4 no-underline">
                  <Image
                    data-testid="movie-poster"
                    src={resolveImageSrc(movie?.poster_path)}
                    alt=""
                    className=" aspect-square"
                    width={100}
                    height={50}
                  />
                  <div>
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
                    <div className=" flex items-center space-x-4 justify-between ">
                      <span className=" flex items-center">
                        <IMDBIcon />
                        <span className="pl-[10px]">{movie?.vote_average}</span>
                      </span>
                      <span className=" flex items-center">
                        <RottenTomatoesIcon />
                        <span className="pl-[10px]">
                          {Math.round(movie?.vote_average * 10)}%
                        </span>
                      </span>
                    </div>
                    <p className=" text-[#9CA3AF] mt-2 text-xs font-bold">
                      {getGenres(movie?.genre_ids)}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
