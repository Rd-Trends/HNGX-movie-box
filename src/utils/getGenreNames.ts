import { Genre } from "@/Type/Genre";

// return genre name from genre id
export const getGenreNames = (ids: number[], genres: Genre[]) => {
  const genreNames = ids.map((id) => {
    const genre = genres.find((genre) => genre.id === id);
    return genre?.name || "";
  });
  return genreNames.join(", ");
};
