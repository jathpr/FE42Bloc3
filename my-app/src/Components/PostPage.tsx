import { useContext } from "react";
import styles from "../css/PostPage.module.css";
import { OnePost } from "../server/getPosts";
import { Header } from "./Header";
import { ThemeContext } from "./Context/themeContext";

type Props = {
   post: OnePost
}

export const PostPage = ({ post }: Props) => {

   const theme = useContext(ThemeContext);

   const dateClassName = theme === 'light' ? styles['post__date'] : `${styles['post__date']} ${styles['dark-theme-text']}`
   const titleClassName = theme === 'light' ? styles['post__title'] : `${styles['post__title']} ${styles['dark-theme-text']}`
   const textClassName = theme === 'light' ? styles['post__text'] : `${styles['post__text']} ${styles['dark-theme-text']}`
   const authorClassName = theme === 'light' ? styles['post__author'] : `${styles['post__author']} ${styles['dark-theme-text']}`

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