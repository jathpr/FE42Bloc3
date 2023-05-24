import { useState, useContext, useEffect } from "react"
import { Post, getPosts } from "./Components/Posts/posts"
import { SearchContext } from "./Components/SearchProvider"

export const usePost = () => {
    const [cards, setCards] = useState<Post[]>([])

    const {searchString} = useContext(SearchContext)

  
    useEffect(() => { getPosts({ 'limit': 3, 'search': searchString }).then(posts => setCards(posts)) }, [searchString])
 
    return cards
}