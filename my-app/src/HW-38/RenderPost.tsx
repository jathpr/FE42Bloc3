import { Post } from "./posts";
import style from "./RenderPost.module.css";

export const RenderPost = (props: {post: Post}) => {
  return (
    <>
        <div className={style.post}>
          <div className={style.post_wrapper}>
            <p>{props.post.date}</p>
            <h2>{props.post.title}</h2>
            <p>{props.post.text}</p>
          </div>
            <img className={style.post__img} height='200px' src={props.post.image} />
        </div>
    </>
  );
};
