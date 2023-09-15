import { useQuery } from "@tanstack/react-query";
import {
  getMovieById,
  getMoviesGenres,
  getPopularMovies,
  getSearchedMovies,
  getTopRatedMovies,
} from "./service";
import { MovieDetails, MovieResults } from "@/Type/Movie";
import { GenreResult } from "@/Type/Genre";
import {
  MOVIES_GENRES,
  POPUPAR_MOVIES,
  TOP_RATED_MOVIES,
} from "@/constants/queryKey";

export const useGetPopularMovies = (page = 1) => {
  return useQuery<MovieResults>({
    queryKey: [...POPUPAR_MOVIES, page],
    queryFn: () => getPopularMovies(page),
    keepPreviousData: true,
  });
};

export const useGetTopRatedMovies = (page = 1) => {
  return useQuery<MovieResults>({
    queryKey: [...TOP_RATED_MOVIES, page],
    queryFn: () => getTopRatedMovies(page),
    keepPreviousData: true,
  });
};

export const useGetMoviesGenres = () => {
  return useQuery<GenreResult>({
    queryKey: [...MOVIES_GENRES],
    queryFn: getMoviesGenres,
  });
};

export const useGetMovieById = (id: string) => {
  return useQuery<MovieDetails>({
    queryKey: ["movie", id],
    queryFn: () => getMovieById(id),
  });
};

export const useSearchMovies = (query: string) => {
  return useQuery<MovieResults>({
    queryKey: ["search", query],
    queryFn: () => getSearchedMovies(query),
    suspense: false,
  });
};
