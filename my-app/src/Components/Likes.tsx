import { increaseDislikes, increaseLikes } from "../store/post";
import { useAppDispatch, useAppSelector } from "../store/store"


export const Likes = ({ postId }: { postId: number }) => {

   const post = useAppSelector(state => state.posts.posts.find(p => p.id === postId))
   const dispatch = useAppDispatch();

   const addLike = () => {
      dispatch(increaseLikes(postId))
   }

   const addDislike = () => {
      dispatch(increaseDislikes(postId))
   }

   return <div>
      <button onClick={addLike}>Like</button><span>{post?.likes || 0}</span>
      <button onClick={addDislike}>Dislike</button><span>{post?.dislikes || 0}</span>
   </div>
}