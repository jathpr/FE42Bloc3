import { useEffect, useState } from 'react'
import { Post, getPosts } from './posts'
import { RenderPost } from './RenderPost'

type Props = {search: string}

export const RenderPostsList = ({search}: Props) => {

    const [cards, setCards] = useState<Post[]>([])
  
    useEffect(() => { getPosts({ 'limit': 3, 'search': search }).then(posts => setCards(posts)) }, [search])
   
    return <>
    <h3>POSTS</h3>
     {cards.map(item => <RenderPost post1={item} />)} </>
  }