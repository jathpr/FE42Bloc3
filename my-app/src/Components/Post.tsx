import { useContext } from "react";
import styles from "../css/Post.module.css";
import { OnePost } from "../server/getPosts";
import { ThemeContext } from "./Context/themeContext";

type Props = {
   post: OnePost
}

export const Post = ({ post }: Props) => {

   const theme = useContext(ThemeContext)

   const lightTextNode = <div className={styles['post__text']}>
      <p>{post.date}</p>
      <h2>{post.title}</h2>
      <p>{post.text}</p>
   </div>

   const darkTextNode = <div className={`${styles['post__text']} ${styles['dark-theme-text']}`}>
      <p>{post.date}</p>
      <h2 className={styles['dark-theme-text']}>{post.title}</h2>
      <p>{post.text}</p>
   </div>

   return <div className={styles.post}>
      {theme === 'light' ? lightTextNode : darkTextNode}
      <div className={styles['post__img--wrapper']}>
         <img src={post.image} alt="" />
      </div>
   </div>
}