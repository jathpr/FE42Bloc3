import { MovieItem } from '../MovieItem/MovieItem'
import style from './Trends.module.css'

export const Trends = ()=> {
    return <div className={style.trends_wrapper}>
        <MovieItem/>
        <MovieItem/>
        <MovieItem/>
        <MovieItem/>
    </div>
}