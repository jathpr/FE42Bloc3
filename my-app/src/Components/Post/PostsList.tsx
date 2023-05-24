import { useEffect } from "react"
import { RenderPost } from "./RenderPost";
import { getPosts } from "./getPosts";
import { Link} from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Store/store";
import { setPosts } from "../../Store/post";

type Props = { searchResult: string }

export const PostsList = ({ searchResult }: Props) => {
    const postsList = useAppSelector(state => state.posts.posts)
    const dispatch = useAppDispatch()

    useEffect(() => {
        getPosts({ 'limit': 4, 'search': searchResult }).then((resp) => dispatch(setPosts(resp)))
    }, [searchResult])

    return <>
        {postsList.map(post => <Link to={'/Posts/' + post.id}><RenderPost post={post} key={post.id} /></Link>)}
    </>
}