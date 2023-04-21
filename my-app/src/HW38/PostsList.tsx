import React from "react"
import { Post } from "./Posts"

export class PostsList extends React.Component {
    state: { posts: Post[] } = { posts: [] }

    componentDidMount(): void {
        fetch('https://studapi.teachmeskills.by/blog/posts/?limit=3')
            .then(response => response.json())
            .then(data => this.setState({ posts: data.results }))
    }

        render() {
            return this.state.posts.map(post => <Post post={post} key={post.id} />)
        }
    }

// export const posts = [
//     {
//         "id": 4,
//         "image": "https://tms-studapi-dev.s3.amazonaws.com/media/unnamed_5c5gF9H.jpeg",
//         "text": "Hi",
//         "date": "2021-10-07",
//         "lesson_num": 22,
//         "title": "b-52",
//         "description": "default default default default default default default default default default default default default default default default default default default default default default default default default default default",
//         "author": 97
//     },
//     {
//         "id": 5,
//         "image": "https://tms-studapi-dev.s3.amazonaws.com/media/unnamed_MQSTowL.jpeg",
//         "text": "Test",
//         "date": "2021-10-07",
//         "lesson_num": 59,
//         "title": "b-52",
//         "description": "default default default default default default default default default default default default default default default default default default default default default default default default default default default",
//         "author": 97
//     },
//     {
//         "id": 6,
//         "image": "https://tms-studapi-dev.s3.amazonaws.com/media/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2021-10-07_%D0%B2_10.12.21.png",
//         "text": "Hello",
//         "date": "2021-10-07",
//         "lesson_num": 44,
//         "title": "b-52",
//         "description": "default default default default default default default default default default default default default default default default default default default default default default default default default default default",
//         "author": 99
//     }
// ]

// export class PostsList extends React.Component {
// 	render() {
// 		return (<div>
// 			{posts.map((post) => <Post postInfo={post}/>)}
// 		</div>)
// 	}
// }