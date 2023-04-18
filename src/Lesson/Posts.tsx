import React from "react";

type Props = { initialCount?: number };

type State = { posts?: { text: string; id: number }[] };

const URL = "https://studapi.teachmeskills.by/blog/posts/?limit=3";

export class Posts extends React.Component<Props, State> {
  componentDidMount(): void {
    fetch(URL)
      .then((resp) => resp.json())
      .then((posts) => {
        this.setState({ posts: posts.results });
      });
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
