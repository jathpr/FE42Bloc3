import { useEffect, useState } from "react"
import { RenderPost } from "./RenderPost";
import { Post, getPosts } from "../getPosts";

type Props = { searchResult?: string }

export const PostsList = ({ searchResult }: Props) => {
    const [cards, setCards] = useState<Post[]>([])

    useEffect(() => { getPosts({ 'limit': 4, 'search': searchResult }).then((resp) => setCards(resp)) }, [])

    return <>
        {cards.map(post => <RenderPost post={post} key={post.id} />)}
    </>
}