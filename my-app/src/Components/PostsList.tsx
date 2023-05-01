import React, { MouseEventHandler } from "react";
import styles from "../css/PostsList.module.css";
import { Post } from "./Post";
import { OnePost, getPosts } from "../server/getPosts";
import { Header } from "./Header";

type Props = {
   // posts: OnePost[]
   username: string | null,
   onPostClick: (post: OnePost, e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void
}

export class PostsList extends React.Component<Props> {

   state: { posts: OnePost[] } = { posts: [] };

   componentDidMount() {
      getPosts({ limit: 8 })
         .then((serverPosts: OnePost[]) => {
            this.setState({ posts: serverPosts })
         })
   }

   handlePostClick = (e: MouseEventHandler<HTMLLIElement>) => {
      // this.props.onPostClick(post)
   }

   render() {
      return <>
         <Header username={this.props.username} />
         <ul className={styles['posts-list']}>
            {this.state.posts.map((post: OnePost) => <li onClick={(e) => this.props.onPostClick(post, e)} key={post.id} className={styles['one-post']}><Post post={post} /></li>)}
         </ ul>
      </>
   }
}