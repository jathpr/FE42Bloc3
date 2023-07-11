import { useParams } from 'react-router-dom'
import style from './OneMovie.module.css'
import { useEffect, useState } from 'react'
import { PropsOneMovie, getOneMovie } from '../Movies/getMovies'

export const OneMovie = () => {
    const { movieID } = useParams()
    const [movie, setMovie] = useState<PropsOneMovie>()
    console.log("🚀 ~ file: OneMovie.tsx:9 ~ OneMovie ~ movie:", movie)

    useEffect(() => { movieID && getOneMovie(movieID).then(mov => setMovie(mov)) }, [movieID])

    if (!movie) return null
    return <>
        <div className={style.movieItem_item}>
            <img className={style.movieItem_img} src={movie.Poster} alt="poster" />
            <div className={style.movieItem_rate}>{movie.imdbRating}</div>
            <h2 className={style.movie_title}>{movie.Title}</h2>
            <h3 className={style.movie_subtitle}>Genres:</h3>
            <p className={style.movie_text}>{movie.Genre}</p>
            <h3 className={style.movie_subtitle}>What is it movie about:</h3>
            <p className={style.movie_text}>{movie.Plot}</p>
            <h3 className={style.movie_subtitle}>Runtime:</h3>
            <p className={style.movie_text}>{movie.Runtime}</p>
            <h3 className={style.movie_subtitle}>Actors:</h3>
            <p className={style.movie_text}>{movie.Actors}</p>
        </div>
    </>
}
