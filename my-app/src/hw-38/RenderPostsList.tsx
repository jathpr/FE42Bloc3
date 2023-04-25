import React from 'react'
import { Post, postsList } from './PostsList'
import { RenderPost } from './RenderPost'



// export class RenderPostsList extends React.Component {
//     state:{post: Post[]} = {post: postsList}

//     render() {
//         return this.state.post.map(post => <RenderPost post1={post} key={post.id} />)
//     }
// }


export const RenderPostsList = (props: { array: Post[] }) => {
    return <> 
    {props.array.map(post => <RenderPost post1={post} key={post.id}/>)  }
    
    </>
}

