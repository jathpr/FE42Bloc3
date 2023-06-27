import { Route, Routes } from "react-router-dom";
import style  from "./Content.module.css";
import { Trends } from "../Trends/Trends";
import { Filter } from "../Filter/Filter";
import { MovieDetails } from "../Movies/Movie.Details";
import { RenderMoviesList } from "../Movies/RenderMoviesList";
import { useEffect } from "react";

export const Content = () => {
  return <div className={style.conten}>
    <Routes>
      <Route path="/" element={<RenderMoviesList />}></Route>
      <Route path="/trends" element={<Trends></Trends>}></Route>
      <Route path="/filter" element={<Filter></Filter>}></Route>
      <Route path="/:movieId" element={<MovieDetails ></MovieDetails>}></Route>
    </Routes>
  </div>;
};