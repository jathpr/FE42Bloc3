import React, { useEffect, useState } from "react";
import { CardPost } from "./CardPost";
import "./cards.css";
import { Post, getPosts } from "../classwork_40/getPosts";

export const Posts = () => {

    const [cards, setCards] = useState<Post[]>([])

    useEffect(() => { getPosts({"limit": 50}).then((posts) => setCards(posts)) }, [])

    return <>{cards.map((item) => <CardPost post={item} />)}</> 
}
