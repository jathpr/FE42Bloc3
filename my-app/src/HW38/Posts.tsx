// import React from "react"
import './Posts.css'

export type Post = {
    id: number,
    image: string,
    text: string,
    date: string,
    lesson_num: number,
    title: string,
    description: string,
    author: number
}

export const Post = (props: { post: Post }) => (
    <div className="mainDiv">
        <div className="textDiv">
            <time>{props.post.date}</time>
            <h3>{props.post.title}</h3>
            <p>{props.post.description}</p>
        </div>
        <div className="imgDiv">
            <img src={props.post.image} alt={props.post.text}></img>
        </div>
    </div>
)

// type PostsProps = { postInfo: Props }

// type State = { postState: Props }

// export class Post extends React.Component<PostsProps> {
//     // state = { postState: this.props.postInfo }
//     render() {
//         return (
//             <div className="" key={this.props.postInfo.id}>
//                 <div>
//                     <p>{this.props.postInfo.date}</p>
//                     <p>{this.props.postInfo.description}</p>
//                 </div>
//                 <div>
//                     <img src={this.props.postInfo.image} alt={this.props.postInfo.text}></img>
//                 </div>
//             </div>
//         )
//     }
// }