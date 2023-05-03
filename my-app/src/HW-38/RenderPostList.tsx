import { useEffect, useState } from 'react'
import { Post, getPosts } from './posts'
import { RenderPost } from './RenderPost'

export const RenderPostsList = () => {
    const [cards, setCards] = useState<Post[]>([])
  
    useEffect(() => {getPosts({limit: 3}).then(posts=> setCards(posts))}, [])

    return <>
     {cards.map(item => <RenderPost post={item} />)} </>
} 