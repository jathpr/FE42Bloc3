import React, { useEffect, useState } from "react";
import styles from "../css/PostsList.module.css";
import { Post } from "./Post";
import { OnePost, getPosts } from "../server/getPosts";

type Props = {
   onPostClick: (post: OnePost, e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void
}

export const PostsList = ({ onPostClick }: Props) => {

   const [posts, setPosts] = useState<OnePost[]>([]);


   useEffect(() => {
      getPosts({ limit: 8 })
         .then((serverPosts: OnePost[]) => {
            setPosts(serverPosts)
         })
   }, [])

   return <>
      <ul className={styles['posts-list']}>
         {posts.map((post: OnePost) => <li onClick={(e) => onPostClick(post, e)} key={post.id} className={styles['one-post']}><Post post={post} /></li>)}
      </ul>
   </>
}