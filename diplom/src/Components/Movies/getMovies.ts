const DOMAIN = "http://www.omdbapi.com/";
const movieUrl = new URL(DOMAIN)
movieUrl.searchParams.set('apikey', 'd098f760')


export type Movie = {
  Title: string,
  Poster: string,
  ImdbRating: string,
};

export type OneMovie = {
  Title: string,
  Year: string,
  Released: string,
  Runtime: string,
  Genre: string,
  Actors: string,
  Plot: string,
  Language: string,
  Country: string,
  Awards: string,
  Poster: string,
  imdbRating: string,
}

export const getMovies = async (search: string, page: number) => {

  if (search) movieUrl.searchParams.set("s", search);
  movieUrl.searchParams.set("page", String(page));
  const response = await fetch(movieUrl);

  const films = await response.json();
  return films.Search;
};
