import React from "react";

type ExampleProps = {};

type ExampleState = {
  posts: Post[];
};

type Post = { id: string };

export class Example extends React.Component<ExampleProps, ExampleState> {
  state: ExampleState = { posts: [] };

  componentDidMount() {
    fetch(MY_URL)
      .then((r) => r.json())
      .then((data) => this.setState(data));
  }

  render() {
    return this.state.posts.map((post) => <Post post={post} />);
  }
}
