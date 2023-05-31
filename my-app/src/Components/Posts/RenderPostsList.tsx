import { RenderPost } from './RenderPost'
import { usePost } from '../../usePost'

export const RenderPostsList = () => {
    const cards = usePost()
   
    return <>
    <h3>POSTS</h3>
     {cards.map(item => <RenderPost post1={item} />)} </>
  }