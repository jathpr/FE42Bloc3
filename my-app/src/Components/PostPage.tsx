import React from "react";
import styles from "../css/PostPage.module.css";
import { OnePost } from "../server/getPosts";
import { Header } from "./Header";

type Props = {
   username: string | null
   post: OnePost
}

export const PostPage = ({ username, post }: Props) => {
   return <>
      <Header username={username} />
      <div className={styles.post}>
         <p className={styles['post__date']}>{post.date}</p>
         <h2 className={styles['post__title']}>{post.title}</h2>
         <div className={styles['post__img--wrapper']}><img className={styles['post__img']} src={post.image} alt="post image" /></div>
         <p className={styles['post__text']}>{post.text}</p>
         <p className={styles['post__author']}>{post.author}</p>
      </div>
   </>
}