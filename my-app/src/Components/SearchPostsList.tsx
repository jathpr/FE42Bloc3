import { useEffect, useState } from "react"
import { OnePost } from "../server/getPosts"
import styles from "../css/PostsList.module.css";
import { Post } from "./Post";
import { searchPosts } from "../server/searchPosts";
import { setPosts } from "../store/post";
import { useAppSelector, useAppDispatch } from "../store/store";
import { PopupImg } from "./PopupImg";

type Props = {
   searchInputValue: string,
   onPostClick: (post: OnePost, e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void,

}

export const SearchPostsList = ({ searchInputValue, onPostClick }: Props) => {

   // const [posts, setPosts] = useState<OnePost[]>([])
   const activeTab = useAppSelector(state => state.tabs.tab)
   const posts = useAppSelector(state => {
      if (activeTab === 'Popular') {
         return state.posts.posts.filter(p => p.isFavorite)
      }
      else if (activeTab === 'My favorites') {
         return state.posts.posts.filter(p => p.likes)
         // return state.posts.posts.filter(p => p.likes || p.dislikes)
      }
      else
         return state.posts.posts
   })

   // const posts = useAppSelector((state => state.posts.posts))
   const dispatch = useAppDispatch()

   useEffect(() => {
      searchPosts({ search: searchInputValue })
         .then(serverPosts => dispatch(setPosts(serverPosts)))
      // .then(serverPosts => setPosts(serverPosts))
   }, [posts])

   const showImgPopup = () => {

   }

   return <>
      <ul className={styles['posts-list']}>
         {posts.map((post: OnePost) => <li onClick={(e) => onPostClick(post, e)} key={post.id} className={styles['one-post']}><Post post={post} onImgClick={showImgPopup} /></li>)}
      </ul>
      <PopupImg />
   </>

}