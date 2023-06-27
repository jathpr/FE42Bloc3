import { useEffect, useState, useContext } from "react"
import { PropsMovie, getMovies } from "./getMovies"
import { RenderMovie } from "./RenderMovie"
import { SearchContext } from "../Search/SearchProvider"
import style from './MovieList.module.css'
import { FilterContext } from "../Filter/FilterProvider"

export const MoviesList = () => {
    const [page, setPage] = useState(1)
    const [films, setFilm] = useState<PropsMovie[]>([])
    console.log("🚀 ~ file: MoviesList.tsx:11 ~ MoviesList ~ films:", films)
    const { searchString } = useContext(SearchContext)
    const {year} = useContext(FilterContext)



    useEffect(() => { searchString && getMovies(searchString).then(movies => setFilm(movies)) }, [searchString])
    useEffect(() => { getMovies(searchString, page).then(movies => setFilm([...films, ...movies])) }, [page])
    useEffect(() => { getMovies(searchString, page, year).then(movies => setFilm(movies)) }, [year])
   

    if (!year) return null
    if (!films) return null
    return <>
        <div className={style.movies_container}>
            {films.map(item => <RenderMovie film={item} />)}
        </div>
        <button className={style.button} onClick={() => setPage(page + 1)}>Show more</button> </>

    {/* <button className={films.length >9 ? style.button : style.button_none} onClick={() => setPage(String(Number(page) + 1))}>Show more</button> </> */ }


}
