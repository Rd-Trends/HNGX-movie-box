import { dehydrate, Hydrate } from "@tanstack/react-query";
import getQueryClient from "../../getQueryClient";
import MovieContainer from "@/containers/MovieContainer";
import { getMovieById, getMovieTrailerById } from "@/http/movies/service";

export default async function HydratedPosts({
  params,
}: {
  params: { movieId: string };
}) {
  const queryClient = getQueryClient();
  queryClient.prefetchQuery(["movie", params.movieId], () =>
    getMovieById(params.movieId)
  );
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <MovieContainer movieId={params.movieId} />
    </Hydrate>
  );
}
