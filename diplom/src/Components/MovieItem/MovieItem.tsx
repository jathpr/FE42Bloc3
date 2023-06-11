import style from './MovieItem.module.css'

export const MovieItem = () => {
    return (
        <div className={style.movieItem_wrapper}>
            <div className={style.movieItem_item}>
                <div className={style.movieItem_img}>
                    <img src="Rectangle.jpg" alt="poster" />
                    <div className={style.movieItem_rate}>10</div>
                </div>
                <p className={style.movie_title}>title</p>
                <p className={style.movie_genre}>genre</p>
            </div>
        </div>
    )
}