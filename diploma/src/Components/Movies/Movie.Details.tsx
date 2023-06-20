import style from "./Movies.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { OneMovie, getOneMovie } from "./movies";

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [oneMovie, setOneMovie] = useState<OneMovie>();
  useEffect(() => {movieId && getOneMovie(movieId).then((oneMovie) => setOneMovie(oneMovie))}, [movieId]);
  if (!oneMovie) return null;
  return (
    <div className={style.onemovie}>
      <img src={oneMovie.Poster} />
      <h2>{oneMovie.Title}</h2>
      <p>{oneMovie.Year}</p>
      <p>
        {oneMovie.Released} {oneMovie.Genre}
      </p>
    </div>
  );
};
