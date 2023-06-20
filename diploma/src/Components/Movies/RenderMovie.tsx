import { Movie } from "./movies";
import style from './Movies.module.css'
import { Link } from "react-router-dom";

export const RenderMovie = (props: {movie: Movie}) => {

  return (
        <div className={style.movie}> <Link to = {'/' + props.movie.imdbID} >
            <img src={props.movie.Poster} />
            <h2>{props.movie.Title}</h2>
            <p>{props.movie.Year}</p>
            <p> {props.movie.Genre}</p>
            <p>{props.movie.Type}</p>
        </Link>
        </div>
  );
};  