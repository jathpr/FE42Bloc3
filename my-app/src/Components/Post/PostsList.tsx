import { useEffect, useState } from "react"
import { RenderPost } from "./RenderPost";
import { OnePost, getPosts } from "./getPosts";
import { useNavigate } from "react-router-dom";

type Props = { searchResult: string }

export const PostsList = ({ searchResult }: Props) => {
    const [cards, setCards] = useState<OnePost[]>([])

    useEffect(() => {
        getPosts({ 'limit': 4, 'search': searchResult }).then((resp) => setCards(resp))
    }, [searchResult])

    const navigate = useNavigate()

    return <>
        {cards.map(post => <li onClick={() => navigate('/Posts/' + post.id)}><RenderPost post={post} key={post.id} /></li>)}
    </>
}