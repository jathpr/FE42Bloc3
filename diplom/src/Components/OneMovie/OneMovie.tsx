import style from './OneMovie.module.css'

export const RenderMovie = () => {
    // export const RenderMovie = (props: { film: OneMovie }) => {
    return <>
        <div className={style.movieItem_wrapper}>
            {/* <div className={style.movieItem_item}>
                <div className={style.movieItem_img}>
                    <img src={props.film.Poster} alt="poster" />
                    <div className={style.movieItem_rate}>{props.film.ImdbRating}</div>
                </div>
                <p className={style.movie_title}>{props.film.Title}</p>
                <p className={style.movie_genre}>{props.film.genre}</p>
            </div> */}
        </div>
    </>
}
