import { useEffect, useState } from "react"
import { Movie, getMovies } from "./getMovies"
import { RenderMovie } from "./RenderMovie"

export const MoviesList = () => {

    const [films, setFilm] = useState<Movie[]>([])

    useEffect(() => { getMovies().then(mov => setFilm(mov)) }, [])

    return <>
       {films.map(item => <RenderMovie film={item} />)} </>
}
