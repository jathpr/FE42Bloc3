import style from './Movie.module.css'
import { Movie } from './getMovies'

export const RenderMovie = (props: { film: Movie }) => {
    return <>
        <div className={style.movieItem_wrapper}>
            <div className={style.movieItem_item}>
                <div className={style.movieItem_img}>
                    <img src={props.film.image} alt="poster" />
                    <div className={style.movieItem_rate}>10</div>
                </div>
                <p className={style.movie_title}>{props.film.title}</p>
                <p className={style.movie_genre}>{props.film.genre}</p>
            </div>
        </div>
    </>
}
