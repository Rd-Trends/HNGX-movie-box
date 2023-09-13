import { MovieDetails } from "@/Type/Movie";

export const getMovieTrailer = (movie?: MovieDetails) => {
  if (movie?.videos?.results.length === 0) return "";
  const trailer = movie?.videos?.results.find((video) =>
    video?.name.includes("Official Trailer")
  );
  const url = trailer?.site.includes("YouTube")
    ? "https://www.youtube.com/watch?v="
    : " https://vimeo.com/";
  return trailer ? `${url}${trailer.key}` : "";
};
