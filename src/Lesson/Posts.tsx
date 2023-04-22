import React from "react";
import { Post, getPosts } from "../server/getPosts";

type Props = { initialCount?: number };

type State = { posts?: Post[] };

export class Posts extends React.Component<Props, State> {
  componentDidMount() {
    getPosts({ limit: 3 }).then((posts) => this.setState({ posts }));
  }

  render() {
    return (
      <div>
        {this.state?.posts?.map((post) => (
          <li key={post.id}>{post.text}</li>
        ))}
      </div>
    );
  }
}
