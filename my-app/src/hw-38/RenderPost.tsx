import React from 'react'
import style from './RenderPost.module.css'
import { Post } from './PostsList'



export const RenderPost = (props: {post1: Post}) => {
    return <>
        <div>
        <img src={props.post1.image} />
           <div>{props.post1.text}</div> 
           <div>{props.post1.date}</div> 
           {/* <div>{props.post.title}</div>  */}
        </div>
    </>
}

