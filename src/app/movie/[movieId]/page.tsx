import { dehydrate, Hydrate } from "@tanstack/react-query";
import getQueryClient from "../../getQueryClient";
import MovieContainer from "@/containers/MovieContainer";
import { getMovieById, getMovieTrailerById } from "@/http/movies/service";
import { Metadata, ResolvingMetadata } from "next";
import { BASEiMAGE_URL } from "@/constants/endpoints";
import { Movie } from "@/Type/Movie";

type Props = {
  params: { movieId: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.movieId;

  // fetch data
  const movie: Movie = await getMovieById(id);

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: movie.title,
    description: movie.overview,
    openGraph: {
      images: [`${BASEiMAGE_URL}${movie.poster_path}`, ...previousImages],
    },
  };
}

export default async function HydratedPosts({ params }: Props) {
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
