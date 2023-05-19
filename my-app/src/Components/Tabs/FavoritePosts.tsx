import { useAppSelector } from "../../Store/store"
import { RenderPost } from "../Post/RenderPost"

export const FavoritePosts = () => {
    const posts = useAppSelector(state => state.posts.favorites)

    return <div>
        {posts.map(post => <RenderPost post={post} />)}
    </div>
}