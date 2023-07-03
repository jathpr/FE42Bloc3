import { useContext, useEffect, useState } from "react";
import styles from "../css/PostPage.module.css";
import { ThemeContext } from "./Context/themeContext";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/store";
import { Favorites } from "./Favorites";
import { Likes } from "./Likes";
import { getPostByIdThunk } from "../store/post";

export const PostPage = () => {

   const theme = useContext(ThemeContext);

   const dateClassName = theme === 'light' ? styles['post__date'] : `${styles['post__date']} ${styles['dark-theme-text']}`
   const titleClassName = theme === 'light' ? styles['post__title'] : `${styles['post__title']} ${styles['dark-theme-text']}`
   const textClassName = theme === 'light' ? styles['post__text'] : `${styles['post__text']} ${styles['dark-theme-text']}`
   const authorClassName = theme === 'light' ? styles['post__author'] : `${styles['post__author']} ${styles['dark-theme-text']}`

   const { postId } = useParams();

   const post = useAppSelector((state) => state.posts.post)
   // const post = useAppSelector((state) => state.posts.posts.find(postFromArr => postFromArr.id === Number(postId)))
   // const post = posts.find(postFromArr => postFromArr.id === Number(postId))
   const dispatch = useAppDispatch()

   useEffect(() => {
      // postId && getPost(postId)
      //    .then(postFromServer => {
      //       setPost(postFromServer)
      //    })

      // post = posts.find(postFromArr => postFromArr.id === Number(postId))

      dispatch(getPostByIdThunk(postId))
   }, [postId])

   if (!post) return (<h2 className={titleClassName}>Post not found</h2>)

   return <>
      <div className={styles.post}>
         <p className={dateClassName}>{post.date}</p>
         <h2 className={titleClassName}>{post.title}</h2>
         <div className={styles['post__img--wrapper']}><img className={styles['post__img']} src={post.image} alt="post image" /></div>
         <p className={textClassName}>{post.text}</p>
         <p className={authorClassName}>{post.author}</p>
      </div>
      <div className={styles['options-panel']}>
         <Likes postId={post.id} />
         <Favorites postId={post.id} />
      </div>

   </>
}