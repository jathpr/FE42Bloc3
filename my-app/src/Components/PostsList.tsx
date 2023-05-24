import React, { useEffect, useState } from "react";
import styles from "../css/PostsList.module.css";
import { Post } from "./Post";
import { OnePost, getPosts } from "../server/getPosts";
import { searchPosts } from "../server/searchPosts";
import { Link } from "react-router-dom";

type Props = {
   searchInputValue?: string,
   onPostClick: (post: OnePost, e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void
}

export const PostsList = ({ searchInputValue, onPostClick }: Props) => {

   const [posts, setPosts] = useState<OnePost[]>([]);

   // const [searchValue, setSearchValue] = useState(searchInputValue)


   useEffect(() => {
      console.log('effect', searchInputValue);

      if (searchInputValue) {
         searchPosts({ search: searchInputValue })
            .then(serverPosts => setPosts(serverPosts))
      }
      else {
         getPosts({ limit: 8 })
            .then((serverPosts: OnePost[]) => {
               setPosts(serverPosts)
            })
      }
   }, [posts])

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

   return <>
      <ul className={styles['posts-list']}>
         {posts.map((post: OnePost) => <Link className={styles['one-post']} to={'/posts/' + post.id}><li key={post.id}><Post post={post} /></li></Link>)}
         {/* {posts.map((post: OnePost) => <li onClick={(e) => onPostClick(post, e)} key={post.id} className={styles['one-post']}><Post post={post} /></li>)} */}
      </ul>
   </>
}