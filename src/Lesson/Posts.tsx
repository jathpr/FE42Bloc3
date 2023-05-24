import React, { useEffect, useState } from "react";
import { Post, getPosts } from "../server/getPosts";
import { use42Dispatch } from "../store/store";
import { fetchPosts, getPostsThunk } from "../features/counterSlice";

export const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const dispatch = use42Dispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      {posts?.map((post) => (
        <li key={post.id}>{post.text}</li>
      ))}
      <button
        onClick={() => {
          getPosts({ limit: 3 }).then((posts) => setPosts(posts));
        }}
      >
        Get Posts
      </button>
    </div>
  );
};
