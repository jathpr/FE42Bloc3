import { useEffect, useState } from 'react'
import { Post, getPosts } from './posts'
import { RenderPost } from './RenderPost'



export const RenderPostsList = () => {

    const [cards, setCards] = useState<Post[]>([])
  
    useEffect(() => {getPosts({}).then(posts=> setCards(posts))}, [])
  
    return <>
    <h3>POSTS</h3>
     {cards.map(item => <RenderPost post1={item} />)} </>
  }