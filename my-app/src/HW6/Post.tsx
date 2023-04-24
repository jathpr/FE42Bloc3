import React from "react";
import styles from "./css/Post.module.css";

export type OnePost = {
   id: number,
   image: string,
   text: string,
   date: string,
   lesson_num: number,
   title: string,
   description: string,
   author: number
}

type Props = {
   post: OnePost
}

export class Post extends React.Component<Props> {

   render() {
      return <div className={styles.post}>
         <div className={styles['post__text']}>
            <p>{this.props.post.date}</p>
            <h2>{this.props.post.title}</h2>
            <p>{this.props.post.text}</p>
         </div>
         <div className={styles['post__img--wrapper']}>
            <img src={this.props.post.image} alt="" />
         </div>
      </div>
   }
}