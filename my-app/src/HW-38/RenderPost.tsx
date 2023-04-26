import React from "react";
import { Post } from "./Posts";
import style from "./RenderPost.module.css";

export const RenderPost = (props: {item: Post}) => {
  return (
    <>
        <div className={style.post}>
          <div className={style.post_wrapper}>
            <p>{props.item.date}</p>
            <h2>{props.item.title}</h2>
            <p>{props.item.text}</p>
          </div>
            <img className={style.post__img} height='200px' src={props.item.image} />
        </div>
    </>
  );
};
