import { useEffect } from "react"
import { RenderPost } from "./RenderPost";
import { useAppDispatch, useAppSelector } from "../../Store/store";
import { getPostsThunk } from "../../Store/post";
import './PostsList.css'

export const PostsList = () => {
    const postsList = useAppSelector(state => state.posts.posts)
    const dispatch = useAppDispatch()

    // useEffect(() => {
    //     getPosts({ 'limit': 4, 'search': searchResult }).then((resp) => dispatch(setPosts(resp)))
    // }, [searchResult])

    useEffect(() => {dispatch(getPostsThunk())}, [])

    return <div className="postsListDiv">
        {postsList.map(post => <RenderPost post={post} key={post.id} />)}
    </div>
}