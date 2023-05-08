import { useContext, useEffect, useState } from "react";
import styles from "../css/PostPage.module.css";
import { OnePost, getPost } from "../server/getPosts";
import { Header } from "./Header";
import { ThemeContext } from "./Context/themeContext";
import { useParams } from "react-router-dom";

type Props = {
   post?: OnePost
}

export const PostPage = ({ post: postNotServer }: Props) => {

   const theme = useContext(ThemeContext);

   const dateClassName = theme === 'light' ? styles['post__date'] : `${styles['post__date']} ${styles['dark-theme-text']}`
   const titleClassName = theme === 'light' ? styles['post__title'] : `${styles['post__title']} ${styles['dark-theme-text']}`
   const textClassName = theme === 'light' ? styles['post__text'] : `${styles['post__text']} ${styles['dark-theme-text']}`
   const authorClassName = theme === 'light' ? styles['post__author'] : `${styles['post__author']} ${styles['dark-theme-text']}`

   const { postId } = useParams();
   const [post, setPost] = useState(postNotServer)
   // console.log(postId);

   useEffect(() => {
      postId && getPost(postId)
         .then(postFromServer => {
            setPost(postFromServer)
         })
   }, [postId])

   if (!post) return null


   return <>
      <div className={styles.post}>
         <p className={dateClassName}>{post.date}</p>
         <h2 className={titleClassName}>{post.title}</h2>
         <div className={styles['post__img--wrapper']}><img className={styles['post__img']} src={post.image} alt="post image" /></div>
         <p className={textClassName}>{post.text}</p>
         <p className={authorClassName}>{post.author}</p>
      </div>
   </>
}