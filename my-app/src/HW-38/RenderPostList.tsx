import { useContext, useEffect, useState } from 'react'
import { Post, getPosts } from './posts'
import { RenderPost } from './RenderPost'
import { SearchContext } from '../Components/SearchProvider'


export const RenderPostsList = () => {
    const [cards, setCards] = useState<Post[]>([])

  const {searchString} = useContext(SearchContext)

  
    useEffect(() => {getPosts({limit: 3, 'search': searchString }).then(posts=> setCards(posts))}, [searchString])

    return <>
     {cards.map(item => <RenderPost post={item} />)} </>
} 