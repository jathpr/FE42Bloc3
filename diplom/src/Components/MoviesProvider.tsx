import { useContext, useState } from "react"
import React from "react";
import { PropsMovie, getMovies } from "./Movies/getMovies";
import { SearchContext } from "./Search/SearchProvider";


export const MoviesProvider = ({ children }: { children: React.ReactNode }) => {
    const [moviesArray, setMoviesArray] = useState<PropsMovie[]>([])
    const { searchString } = useContext(SearchContext)

    getMovies(searchString).then(movies => setMoviesArray(movies))

    return <MoviesContext.Provider value={{ moviesArray, setMoviesArray }}>
        {children}
    </MoviesContext.Provider>
}

export const MoviesContext = React.createContext<{ 
    moviesArray: PropsMovie[], setMoviesArray: (a: []) => void } >({
        moviesArray: [], setMoviesArray: ()=>{}})
