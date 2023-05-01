import React from "react";
import styles from "../css/PostPage.module.css";
import { OnePost } from "../server/getPosts";
import { Header } from "./Header";

type Props = {
   username: string | null
   post: OnePost
}

export class PostPage extends React.Component<Props>{
   render(): React.ReactNode {
      return <>
         <Header username={this.props.username} />
         <div className={styles.post}>
            <p className={styles['post__date']}>{this.props.post.date}</p>
            <h2 className={styles['post__title']}>{this.props.post.title}</h2>
            <div className={styles['post__img--wrapper']}><img className={styles['post__img']} src={this.props.post.image} alt="post image" /></div>
            <p className={styles['post__text']}>{this.props.post.text}</p>
            <p className={styles['post__author']}>{this.props.post.author}</p>
         </div>
      </>
   }
}