import { useEffect, useState } from "react";
import { Post, getPosts } from "../tools/getPosts";
import { CardPost } from "./CardPost";
import "../styles/post.css";

export const Posts = () => {

    const [cards, setCards] = useState<Post[]>([])

    useEffect(() => { getPosts({"limit": 50}).then((posts) => setCards(posts)) }, [])

    return <>{cards.map((item) => <CardPost post={item} />)}</> 
}
