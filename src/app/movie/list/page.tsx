import { dehydrate, Hydrate } from "@tanstack/react-query";
import getQueryClient from "../../getQueryClient";

import {
  getMoviesGenres,
  getPopularMovies,
  getTopRatedMovies,
} from "@/http/movies/service";
import {
  MOVIES_GENRES,
  POPUPAR_MOVIES,
  TOP_RATED_MOVIES,
} from "@/constants/queryKey";
import MovieList from "@/containers/MovieList";

export default async function HydratedPosts() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery([...POPUPAR_MOVIES], () =>
    getPopularMovies()
  );
  await queryClient.prefetchQuery([...TOP_RATED_MOVIES], () =>
    getTopRatedMovies()
  );
  await queryClient.prefetchQuery([...MOVIES_GENRES], getMoviesGenres);
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <MovieList />
    </Hydrate>
  );
}
