import { useEffect, useState } from "react"
import { RenderPost } from "./Post/Post"
import { getPosts, Post } from "./getPosts";

export const PostsList = () => {
    const [cards, setCards] = useState<Post[]>([])

    useEffect(() => {getPosts({}).then((resp) => setCards(resp))}, [])

    return <>
    {cards.map(post => <RenderPost post={post} key={post.id} />)}
    </>
}