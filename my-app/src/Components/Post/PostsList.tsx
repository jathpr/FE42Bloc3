import { useEffect, useState } from "react"
import { RenderPost } from "./RenderPost";
import { Post, getPosts } from "../getPosts";


export const PostsList = () => {
    const [cards, setCards] = useState<Post[]>([])

    useEffect(() => {getPosts({'limit': 4, 'search': 'ast'}).then((resp) => setCards(resp))}, [])

    return <>
    {cards.map(post => <RenderPost post={post} key={post.id} />)}
    </>
}