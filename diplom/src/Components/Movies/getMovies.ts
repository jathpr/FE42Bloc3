const DOMAIN = "http://www.omdbapi.com/";
const movieUrl = new URL(DOMAIN)
movieUrl.searchParams.set('apikey', 'd098f760')

export type PropsMovie = {
  Title: string,
  Poster: string,
  imdbRating: string,
  imdbID?: string
};

export type PropsOneMovie = PropsMovie & {
  Released: string,
  Runtime: string,
  Genre: string,
  Actors: string,
  Plot: string,
  Language: string,
  Country: string,
  Awards: string,
  Poster: string,
  Year: string
}

export const getMovies = async (search?: string, page?: number, year?: string, type?: string) => {
  if (year) movieUrl.searchParams.set("y", year);
  if (search) movieUrl.searchParams.set("s", search);
  if (page) movieUrl.searchParams.set("page", String(page));
  if (type) movieUrl.searchParams.set("type", type);
  const response = await fetch(movieUrl);
  const films = await response.json();
  return films.Search;
};

export const getOneMovie = async (movieId: string) => {
  const oneMovieUrl = new URL(DOMAIN)
  oneMovieUrl.searchParams.set('apikey', 'd098f760')
  if (movieId) oneMovieUrl.searchParams.set('i', movieId)
  const response = await fetch(oneMovieUrl);
  const movie: PropsOneMovie = await response.json();
  return movie;
}
