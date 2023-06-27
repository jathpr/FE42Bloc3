const DOMAIN = " http://www.omdbapi.com/";
const IMG = "https://img.omdbapi.com/?i=tt3896198&apikey=e33f378"
const movieUrl = new URL (DOMAIN)
movieUrl.searchParams.set('apikey', 'e33f378')
export type Movie = {
    Genre?: string;
    Title?: string;
    Year?: number;
    Released?: string;
    Poster?: string;
    imdbID?: string;
    imdbRating?: string
    Type?: string
  };
  export type OneMovie = {
    Plot?: string;
    Genre?: string;
    Title?: string;
    Year?: number;
    Released?: string;
    Poster?: string;
    imdbID?: string;
    imdbRating?: string
    Type?: string
  }
  export const getMovies = async (search: string, page: number, year: string) => {
    if (search) movieUrl.searchParams.set("s", search)
    movieUrl.searchParams.set("page", String(page))
    movieUrl.searchParams.set("y", year)
    console.log("🚀 ~ file: movies.ts:30 ~ getMovies ~ year:", year)
    const response = await fetch(movieUrl);
    const movies = await response.json();
    return movies.Search;
};
 export const getOneMovie = async (movieId:string) => {
   const oneMovieUrl = new URL (DOMAIN)
   oneMovieUrl.searchParams.set('apikey', 'e33f378')
  oneMovieUrl.searchParams.set("i", movieId);
  const response = await fetch(oneMovieUrl);
  const oneMovie:OneMovie = await response.json();
  return oneMovie;
 }