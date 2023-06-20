import { useContext, useEffect, useState } from 'react'
import {  Movie, getMovies } from './movies'
import { RenderMovie } from './RenderMovie'
import { Search } from '../Search/Search'
import { SearchContext } from '../Search/SearchProvider'
import style from './Movies.module.css'



export const RenderMoviesList = () => {
    const [cards, setCards] = useState<Movie[]>([])
    const {searchString} = useContext(SearchContext) 

    useEffect(() => {searchString && getMovies(searchString).then(movie=> setCards(movie))}, [searchString])

    return <div className={style.movielist_wrapper}>
     { cards.map(item => <RenderMovie movie={item}  />)}
</div>
    } 