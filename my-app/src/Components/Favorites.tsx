import { toggleFavorite } from "../store/post";
import { useAppDispatch, useAppSelector } from "../store/store"


export const Favorites = ({ postId }: { postId: number }) => {

   const post = useAppSelector(state => state.posts.posts.find(p => p.id === postId))
   const dispatch = useAppDispatch();

   const changeFavorite = () => {
      dispatch(toggleFavorite(postId))
   }

   return <div>
      <button onClick={changeFavorite}>Favorite</button><span>{post?.isFavorite ? 'В избранном' : ''}</span>
   </div>
}