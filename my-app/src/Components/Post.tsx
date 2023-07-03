import { useContext, useEffect } from "react";
import styles from "../css/Post.module.css";
import { OnePost } from "../server/getPosts";
import { ThemeContext } from "./Context/themeContext";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/store";
import { savePostImg } from "../store/post";
import { Likes } from "./Likes";
import { Favorites } from "./Favorites";

type Props = {
   post: OnePost,
   onImgClick: () => void
}

export const Post = ({ post, onImgClick }: Props) => {

   const postImg = useAppSelector(state => state.posts.postImg)
   const dispatch = useAppDispatch()

   // useEffect(() => {

   // }, [post])

   const theme = useContext(ThemeContext)

   const lightTextNode = <Link to={'/posts/' + post.id}><div className={styles['post__text']}>
      <p>{post.date}</p>
      <h2>{post.title}</h2>
      <p>{post.text}</p>
   </div></Link>

   const darkTextNode = <Link to={'/posts/' + post.id}><div className={`${styles['post__text']} ${styles['dark-theme-text']}`}>
      <p>{post.date}</p>
      <h2 className={styles['dark-theme-text']}>{post.title}</h2>
      <p>{post.text}</p>
   </div></Link>


   const showPopup = () => {
      dispatch(savePostImg({ id: post.id, image: post.image, visibility: true }))

      // console.log(post.id)
      // console.log(post.image)

      // console.log('state', postImg.id)
      // console.log('state', postImg.image)

      onImgClick();
   }

   return <>
      <div className={styles.post}>
         {theme === 'light' ? lightTextNode : darkTextNode}
         <div onClick={showPopup} className={styles['post__img--wrapper']}>
            <img src={post.image} alt="" />
         </div>
      </div>
      <Likes postId={post.id} />
      <Favorites postId={post.id} />
   </>
}