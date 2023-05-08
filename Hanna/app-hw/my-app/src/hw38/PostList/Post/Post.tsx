import React, { ReactNode } from 'react';
import './Post.css';

export type Post = {
    'image'?: string,
    'text': string,
    'date': string,
    'title': string,
}

export const Post = (props: {post: Post}) => (
    <div className='post__wrapper'>
        <p className='date'>{props.post.date}</p>
        <h2 className='title'>{props.post.title}</h2>
        <p className='text'>{props.post.text}</p>
        <div className='image'>
            <img src={props.post.image}/>
        </div>
    </div>
)
