const DOMAIN = "http://www.omdbapi.com/?apikey=d098f760";

export type Movie = {
title: string,
year: string,
released: string,
};


export const getMovies = async () => {
  const response = await fetch(DOMAIN);
  const films = await response.json();
  return [films];
};
