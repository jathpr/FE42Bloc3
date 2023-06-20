import { Route, Routes } from "react-router-dom";
import style  from "./Content.module.css";
import { Trends } from "../Trends/Trends";
import { Favorites } from "../Favorites/Favorites";
import { MovieDetails } from "../Movies/Movie.Details";
import { RenderMoviesList } from "../Movies/RenderMoviesList";
import { Movie, getMovies } from "../Movies/movies";
import {useEffect, useState} from 'react'

export const Content = (movie: Movie) => {
  const [ movieId, setMovieId] = useState('')
  return <div className={style.conten}>
    <Routes>
      <Route path="/" element={<RenderMoviesList />}></Route>
      <Route path="/trends" element={<Trends></Trends>}></Route>
      <Route path="/favorites" element={<Favorites></Favorites>}></Route>
      <Route path="/:movieId" element={<MovieDetails ></MovieDetails>}></Route>
    </Routes>
  </div>;
};