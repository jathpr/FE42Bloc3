const DOMAIN = " http://www.omdbapi.com/?i=tt3896198&apikey=e33f378";
const IMG = "https://img.omdbapi.com/?i=tt3896198&apikey=e33f378"
const POSTS = "/blog/posts";

export type Movie = {
    Title?: string;
    Year?: number;
    Released?: string;
  };
  
  type MoviesResponse = {
    results: Movie[];
  };
  
  type MoviesParams = { limit?: number, search?: string };
  
  export const getMovies = async ({ limit, search }: MoviesParams) => {
    const moviesUrl = new URL(DOMAIN);
    // if (limit) moviesUrl.searchParams.set("limit", String(limit));
    // if (search) moviesUrl.searchParams.set("search", String(search));
    const response = await fetch(moviesUrl);
    const movies: MoviesResponse = await response.json();
    return movies.results;
};