import React from "react";
import styles from "./css/PostsList.module.css";
import { OnePost, Post } from "./Post";

type Props = {
   posts: OnePost[]
}

export class PostsList extends React.Component<Props> {

   render() {
      return <ul className={styles['posts-list']}>
         {this.props.posts.map(post => <li key={String(post.id) + this.props.posts.indexOf(post)} className={styles['one-post']}><Post post={post} /></li>)}
      </ ul>
   }
}