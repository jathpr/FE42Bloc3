import React from 'react'
import { Post, PostArray } from './Posts'
import { RenderPost } from './RenderPost'

export const RenderPostsList = (props: { array: Post[] }) => {
    return <> 
    {props.array.map(post => <RenderPost item={post} key={post.id}/>)  }
    </>
}