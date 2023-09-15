import {
  MOVIES_GENRES,
  POPUPAR_MOVIES,
  TOP_RATED_MOVIES,
} from "@/constants/endpoints";
import apiClient from "../api";

export const getPopularMovies = async (page = 1) => {
  const { data } = await apiClient.get(`${POPUPAR_MOVIES}?page=${page}`);
  return data;
};

export const getTopRatedMovies = async (page = 1) => {
  const { data } = await apiClient.get(`${TOP_RATED_MOVIES}?page=${page}`);
  return data;
};

export const getMoviesGenres = async () => {
  const { data } = await apiClient.get(`${MOVIES_GENRES}`);
  return data;
};

export const getMovieById = async (id: string) => {
  const { data } = await apiClient.get(
    `/movie/${id}?append_to_response=videos`
  );
  return data;
};

export const getMovieTrailerById = async (id: string) => {
  const res = await apiClient.get(`/movie/${id}/videos`);
  return res.data;
};

export const getSearchedMovies = async (query: string) => {
  const res = await apiClient.get(`/search/movie?query=${query}`);
  return res.data;
};
