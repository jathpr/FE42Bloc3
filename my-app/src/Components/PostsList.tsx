import React, { MouseEventHandler, useEffect, useState } from "react";
import styles from "../css/PostsList.module.css";
import { Post } from "./Post";
import { OnePost, getPosts } from "../server/getPosts";
import { Header } from "./Header";

type Props = {
   // posts: OnePost[]
   username: string | null,
   onPostClick: (post: OnePost, e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void
}

export const PostsList = ({ username, onPostClick }: Props) => {

   const [posts, setPosts] = useState<OnePost[]>([]);

   useEffect(() => {
      getPosts({ limit: 8 })
         .then((serverPosts: OnePost[]) => {
            setPosts(serverPosts)
         })
   }, [])

   return <>
      <Header username={username} />
      <ul className={styles['posts-list']}>
         {posts.map((post: OnePost) => <li onClick={(e) => onPostClick(post, e)} key={post.id} className={styles['one-post']}><Post post={post} /></li>)}
      </ul>
   </>
}