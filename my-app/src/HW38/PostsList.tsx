import React from "react"
import { Post, RenderPost } from "./Post"

const URL = 'https://studapi.teachmeskills.by/blog/posts/?limit=3';

type State = { posts: Post[] }
export class PostsList extends React.Component<State> {
    state: State = { posts: [] }

    componentDidMount(): void {
        fetch(URL)
            .then(response => response.json())
            .then(data => this.setState({ posts: data.results }))
    }

    render() {
        return this.state.posts.map(post => <RenderPost post={post} key={post.id} />)
    }
}