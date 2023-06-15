const DOMAIN = "http://www.omdbapi.com/?i=tt3896198&apikey=d098f760";

export type Movie = {
title: string,
year: string,
released: string,
image: string,
genre: string,
};


export const getMovies = async () => {
  const response = await fetch(DOMAIN);
  const films = await response.json();
  console.log("🚀 ~ file: getMovies.ts:13 ~ getMovies ~ films:", films)
  return [films];
};
