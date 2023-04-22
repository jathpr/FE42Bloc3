const DOMAIN = "https://studapi.teachmeskills.by";
const POSTS = "/blog/posts";

export type Post = {
  author: number;
  date: string;
  description?: string;
  id: number;
  image?: string;
  lesson_num?: number;
  text: string;
  title?: string;
};

type PostsResponse = {
  count: number;
  next: string;
  previous?: string;
  results: Post[];
};

type PostsParams = { limit?: number };

export const getPosts = async ({ limit }: PostsParams) => {
  const postsUrl = new URL(DOMAIN + POSTS);
  if (limit) postsUrl.searchParams.set("limit", String(limit));
  const response = await fetch(postsUrl);
  const posts: PostsResponse = await response.json();
  return posts.results;
};
