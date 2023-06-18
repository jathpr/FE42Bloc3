import style from './Movie.module.css'
import { Movie } from './getMovies'

export const RenderMovie = (props: { film: Movie }) => {
    return <>
        <div className={style.movieItem_wrapper}>
            <div className={style.movieItem_item}>
                <div className={style.movieItem_img}>
                    <img src={props.film.Poster} alt="poster" />
                    <div className={style.movieItem_rate}>{props.film.ImdbRating}</div>
                </div>
                <p className={style.movie_title}>{props.film.Title}</p>
            </div>
        </div>
    </>
}
