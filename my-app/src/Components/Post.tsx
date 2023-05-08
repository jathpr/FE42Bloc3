import React from "react";
import styles from "../css/Post.module.css";
import { OnePost } from "../server/getPosts";

type Props = {
   post: OnePost
}

export const Post = ({ post }: Props) => {
   return <div className={styles.post}>
      <div className={styles['post__text']}>
         <p>{post.date}</p>
         <h2>{post.title}</h2>
         <p>{post.text}</p>
      </div>
      <div className={styles['post__img--wrapper']}>
         <img src={post.image} alt="" />
      </div>
   </div>
}