import React from "react";
import { Post } from "./PostsLesson3";

export class PostList extends React.Component {
    state:{posts: Post[]} = { posts: [] }

    componentDidMount(): void {
        fetch('https://studapi.teachmeskills.by/blog/posts/')
            .then(response => response.json())
            .then(data => this.setState({posts: data.results}))
    }

    render() {
        return this.state.posts.map(post => <Post post={post} key={post.id}/>)
    }
}