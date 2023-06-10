import { RenderPost } from './RenderPost'
import { usePost } from '../../usePost'
import { Select } from '../Select'

export const RenderPostsList = () => {
    const cards = usePost()
   
    return <>
<Select />
    <h3>POSTS</h3>
    {!cards.length && 'Not found'}
     {cards.map(item => <RenderPost post1={item} />)} </>
  }