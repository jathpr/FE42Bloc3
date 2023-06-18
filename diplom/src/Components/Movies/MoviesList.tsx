import { useEffect, useState, useContext } from "react"
import { Movie, getMovies } from "./getMovies"
import { RenderMovie } from "./RenderMovie"
import { SearchContext } from "../Search/SearchProvider"

export const MoviesList = () => {
    const [page, setPage] = useState(1)
    const [films, setFilm] = useState<Movie[]>([])
    const { searchString } = useContext(SearchContext)

    useEffect(() => { searchString && getMovies(searchString, page).then(movies => setFilm([...films, ...movies])) }, [searchString, page])

    return <>
        {films.map(item => <RenderMovie film={item} />)}
        <button onClick={() => setPage(page + 1)}>Show more</button> </>
}
