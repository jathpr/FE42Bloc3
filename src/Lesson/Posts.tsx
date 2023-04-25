import React, { useEffect, useState } from "react";
import { Post, getPosts } from "../server/getPosts";

export const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

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
