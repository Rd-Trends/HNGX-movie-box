import apiClient from "../api";

export const getPopularMovies = () => {
  return apiClient.get("/movie/popular").then((res) => res.data);
};

export const getTopRatedMovies = () => {
  return apiClient.get("/movie/top_rated").then((res) => res.data);
};

export const getMoviesGenres = () => {
  return apiClient.get("/genre/movie/list").then((res) => res.data);
};

export const getMovieById = (id: string) => {
  return apiClient
    .get(`/movie/${id}?append_to_response=videos`)
    .then((res) => res.data);
};

export const getMovieTrailerById = (id: string) => {
  return apiClient.get(`/movie/${id}/videos`).then((res) => res.data);
};

export const getSearchedMovies = (query: string) => {
  return apiClient.get(`/search/movie?query=${query}`).then((res) => res.data);
};
