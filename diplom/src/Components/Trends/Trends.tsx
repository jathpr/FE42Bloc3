import style from './Trends.module.css'

export const Trends = () => {
    return (
        <div className={style.trends_wrapper}>
            <div className={style.trends_item}>
                <div className={style.trends_img}>
                    <img src="Rectangle.jpg" alt="poster" />
                    <div className={style.trands_rate}>10</div>
                </div>
                <p className={style.movie_title}>title</p>
                <p className={style.movie_genre}>genre</p>
            </div>
            <div className={style.trends_item}>
                <div className={style.trends_img}>
                    <img src="Rectangle.jpg" alt="poster" />
                    <div className={style.trands_rate}>10</div>
                </div>
                <p className={style.movie_title}>title</p>
                <p className={style.movie_genre}>genre</p>
            </div>
            <div className={style.trends_item}>
                <div className={style.trends_img}>
                    <img src="Rectangle.jpg" alt="poster" />
                    <div className={style.trands_rate}>10</div>
                </div>
                <p className={style.movie_title}>title</p>
                <p className={style.movie_genre}>genre</p>
            </div>
            <div className={style.trends_item}>
                <div className={style.trends_img}>
                    <img src="Rectangle.jpg" alt="poster" />
                    <div className={style.trands_rate}>10</div>
                </div>
                <p className={style.movie_title}>title</p>
                <p className={style.movie_genre}>genre</p>
            </div>
     
        </div>
    )
}