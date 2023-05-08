import { useEffect, useState } from "react"
import { OnePost } from "../server/getPosts"
import styles from "../css/PostsList.module.css";
import { Post } from "./Post";
import { searchPosts } from "../server/searchPosts";

type Props = {
   searchInputValue: string,
   onPostClick: (post: OnePost, e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void,

}

export const SearchPostsList = ({ searchInputValue, onPostClick }: Props) => {

   const [posts, setPosts] = useState<OnePost[]>([])

   useEffect(() => {
      searchPosts({ search: searchInputValue })
         .then(serverPosts => setPosts(serverPosts))
   }, [posts])

   return <>
      <ul className={styles['posts-list']}>
         {posts.map((post: OnePost) => <li onClick={(e) => onPostClick(post, e)} key={post.id} className={styles['one-post']}><Post post={post} /></li>)}
      </ul>
   </>

}