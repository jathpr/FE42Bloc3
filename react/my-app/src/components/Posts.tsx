import { useEffect, useState } from "react";
import { CardPost } from "./Post";
import "../styles/post.css";
import { Post, getPosts } from "../tools/getPosts";

export const Posts = () => {

    const [cards, setCards] = useState<Post[]>([])

    useEffect(() => { getPosts({"limit": 50}).then((posts) => setCards(posts)) }, [])

    return <>{cards.map((item) => <CardPost post={item} />)}</> 
}
