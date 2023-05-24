import { useDispatch } from "react-redux"
import { Post } from "../../tools/getPosts"
import { increaseDislike, increaseLike } from "./post"
import { useAppDispatch, useAppSelector } from "./store"

export const Likes = (likeProps: { postId: number }) => {

    const dispatch = useAppDispatch()
    const post = useAppSelector((state) => state.posts.posts.find(item => item.id === likeProps.postId))

    return (
        <div>
            <button onClick={() => {
                const action = increaseLike(likeProps.postId)
                console.log(action)
                return dispatch(action)
            }}>like</button>

            <span>{post?.likes || "0"}</span>

            <button onClick={() => {
                const action = increaseDislike(likeProps.postId)
                console.log(action)
                return dispatch(action)
            }}>dislike</button>

            <span>{post?.dislikes || "0"}</span>
        </div>
    )
}
