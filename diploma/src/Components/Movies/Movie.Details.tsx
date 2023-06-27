import style from "./Movies.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { OneMovie, getOneMovie } from "./movies";

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [oneMovie, setOneMovie] = useState<OneMovie>();
  const [active, setActive] = useState(true)
  const [activeImg, setActiveImg] = useState(true)
  useEffect(() => {movieId && getOneMovie(movieId).then((oneMovie) => setOneMovie(oneMovie))}, [movieId]);
  if (!oneMovie) return null;
  return (
    <div className={active?style.onemovie:style.onemovieclick} onClick = {()=>setActive(!active)}>
      <img className={active?style.poster:style.posterclick} onClick = {()=>setActiveImg(!activeImg)} src={oneMovie.Poster} width={400} />
      <h2 className={style.h2}>{oneMovie.Title}</h2>
      <p>{oneMovie.Year}</p>
      <p>{oneMovie.Released} {oneMovie.Genre}</p>
      <p>{oneMovie.Plot}</p>
      <div className={style.rating}>{oneMovie.imdbRating}</div>
    </div>
  );
};
