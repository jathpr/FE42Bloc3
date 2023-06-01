import { useContext } from 'react';
import { Post } from "./posts";
import style from "./RenderPost.module.css";
import { ThemeContext } from "../Components/ThemeProvider";

export const RenderPost = (props: {post: Post}) => {
  const { theme } = useContext(ThemeContext)
  return (
    <>
        <div className={theme === 'light'? style.post:style.post_dark}>
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
