import { useContext } from 'react';
import { Movie, getMovies } from "./movies";
// import style from "./RenderPost.module.css";

export const RenderMovie = (props: {movie: Movie}) => {
  return (
    <>
        <div >
            <p>{props.movie.Year}</p>
            <h2>{props.movie.Title}</h2>
            <p>{props.movie.Released}</p>
        </div>
    </>
  );
};