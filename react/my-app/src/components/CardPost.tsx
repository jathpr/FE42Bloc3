import { Post } from "../tools/getPosts";
import "../styles/post.css";
import { useParams } from "react-router-dom";
import { Likes } from "./classwork_44/Likes";

export const CardPost = (cardProps: { post: Post }) => {

    const params = useParams();
    // console.log(params)

    return (
        <div className="card-item">
            <h3 className="card__title">{cardProps.post.title}</h3>
            <img className="card__image" src={cardProps.post.image} />
            <p className="card__text">{cardProps.post.text}</p>
            <p className="card__description">{cardProps.post.description}</p>
            <span className="card__date">{cardProps.post.date}</span>
            <Likes postId={cardProps.post.id}/>
        </div>
    )
}
