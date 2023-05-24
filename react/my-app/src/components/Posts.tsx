import { useEffect, useState } from "react";
import { Post, getPosts } from "../tools/getPosts";
import { CardPost } from "./CardPost";
import "../styles/post.css";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "./classwork_44/store";
import { setPosts } from "./classwork_44/post";


export const Posts = () => {
    const [cards, setCards] = useState<Post[]>([])
    const dispatch = useAppDispatch()

    useEffect(() => {
        getPosts({ "limit": 10 }).then((posts) => {
            dispatch(setPosts(posts))
            return setCards(posts);
        })
    }, [])
    // useEffect(() => { getPosts({ "limit": 50 }).then((posts) => console.log(posts)) }, [])

    const navigate = useNavigate()

    return (
        <>
            <div className="cards-wrapper">
                {/* {cards.map((item) => <li onClick={() => navigate("/posts/" + item.id)}><CardPost post={item} /></li>)} */}
                {cards.map((item) => <li ><CardPost post={item} /></li>)}
            </div>
        </>
    )
}
