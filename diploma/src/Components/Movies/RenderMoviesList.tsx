import { useContext, useEffect, useState } from 'react'
import { Movie, getMovies } from './movies'
import { RenderMovie } from './RenderMovie'
// import { SearchContext } from '../Components/SearchProvider'


export const RenderMoviesList = () => {
    const [cards, setCards] = useState<Movie[]>([])
    //   const {searchString} = useContext(SearchContext)
    
    
    useEffect(() => {getMovies({limit: 3 }).then(movies=> setCards(movies))}, [])
    // console.log (movie)

    return <>
    {cards}
     {/* {cards .map(item => <RenderMovie movie={item}  />)}  */}
     </>
} 