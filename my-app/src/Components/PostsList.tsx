import React, { useEffect, useState } from "react";
import styles from "../css/PostsList.module.css";
import { Post } from "./Post";
import { OnePost, getPosts } from "../server/getPosts";
import { searchPosts } from "../server/searchPosts";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/store";
import { setPosts } from "../store/post";
import { PopupImg } from "./PopupImg";

type Props = {
   searchInputValue?: string,
   // onPostClick: (post: OnePost, e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void
}

export const PostsList = ({ searchInputValue }: Props) => {

   // const [posts, setPosts] = useState<OnePost[]>([]);

   const posts = useAppSelector(state => state.posts.posts)
   const postImg = useAppSelector(state => state.posts.postImg)
   const dispatch = useAppDispatch()

   // const [searchValue, setSearchValue] = useState(searchInputValue)


   useEffect(() => {
      console.log('effect', searchInputValue);

      if (searchInputValue) {
         searchPosts({ search: searchInputValue })
            // .then(serverPosts => setPosts(serverPosts))
            .then(serverPosts => dispatch(setPosts(serverPosts)))
      }
      else {
         getPosts({ limit: 8 })
            .then((serverPosts: OnePost[]) => {
               // setPosts(serverPosts)
               dispatch(setPosts(serverPosts))
            })
      }
   }, [searchInputValue])

   // useEffect(() => {
   //    console.log('effect-1');


   //    getPosts({ limit: 8 })
   //       .then((serverPosts: OnePost[]) => {
   //          setPosts(serverPosts)
   //       })

   // }, [])

   // useEffect(() => {
   //    console.log('effect', searchValue);

   //    if (searchValue) {
   //       searchPosts({ search: searchValue })
   //          .then(serverPosts => setPosts(serverPosts))
   //    }

   // }, [searchValue])




   const showImgPopup = () => {
      console.log('state in list', postImg.id)
      console.log('state in list', postImg.image)
   }

   return <>
      {/* <p>{postImg.id}</p> */}
      <ul className={styles['posts-list']}>
         {posts.map((post: OnePost) => <li className={styles['one-post']} key={post.id}><Post post={post} onImgClick={showImgPopup} /></li>)}
         {/* {posts.map((post: OnePost) => <Link className={styles['one-post']} to={'/posts/' + post.id}><li key={post.id}><Post post={post} /></li></Link>)} */}
         {/* {posts.map((post: OnePost) => <li onClick={(e) => onPostClick(post, e)} key={post.id} className={styles['one-post']}><Post post={post} /></li>)} */}
      </ul>
      <PopupImg />
   </>
}