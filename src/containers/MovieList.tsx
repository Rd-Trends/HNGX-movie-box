"use client";

import MovieCard from "@/components/MovieCard";
import { useGetMoviesGenres, useGetPopularMovies } from "@/http/movies/query";
import Footer from "@/layout/Footer";
import Navbar from "@/layout/Navbar";
import { getGenreNames } from "@/utils/getGenreNames";
import React, { useCallback, useEffect } from "react";
import ReactPaginate from "react-paginate";

const MovieList = () => {
  const [page, setPage] = React.useState(1);
  const { data: popularMovies } = useGetPopularMovies(page);
  const { data: genres, isLoading: isGenresLoading } = useGetMoviesGenres();

  const totalPages =
    popularMovies?.total_pages && popularMovies?.total_pages < 500
      ? popularMovies?.total_pages
      : 500 || 0;

  const handlePageClick = useCallback((data: { selected: number }) => {
    setPage(data.selected + 1);
  }, []);

  const getGenres = useCallback(
    (ids: number[]) => {
      return getGenreNames(ids, genres?.genres!);
    },
    [genres]
  );

  useEffect(() => {
    if (page) {
      window.scrollTo(0, 0);
    }
  }, [page]);

  return (
    <div>
      <div className=" custom-container h-full w-full bg-[rgba(0,_0,_0,_0.8)]">
        <Navbar />
      </div>
      <main className=" custom-container mt-12 space-y-8">
        <h2 className=" text-4xl font-bold text-black">Popular Movies</h2>
        <div className=" grid grid-cols-2 gap-4 md:gap-8 md:grid-cols-3 lg:grid-cols-4 lg:gap-12">
          {!!popularMovies?.results?.length &&
            popularMovies.results.map((movie) => {
              return (
                <MovieCard key={movie.id} movie={movie} getGenres={getGenres} />
              );
            })}
        </div>
      </main>

      <ReactPaginate
        containerClassName=" flex justify-center items-center mt-16 space-x-4"
        pageLinkClassName="text-white text-sm bg-[#1f2937] px-3 py-2 rounded-md"
        activeLinkClassName=" bg-[#BE123C] text-white"
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={totalPages}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
      <Footer />
    </div>
  );
};

export default MovieList;
