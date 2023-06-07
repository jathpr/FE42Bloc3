import style from './Movie.module.css'
import { Movie } from './getMovies'

export const RenderMovie = (props: { film: Movie }) => {
    return <>
        <div className={style.wrapper}>
            <div>
                <p className={style.text}>{props.film.title}</p>
                <p className={style.text}>{props.film.year}</p>
                <p className={style.text}>{props.film.released}</p>
            </div>
            {/* <img src={props.post1.image} className={style.image} /> */}
        </div>
    </>
}
