const DOMAIN = "https://studapi.teachmeskills.by";
const POSTS = "/blog/posts/";

export type Post = {
  author: number;
  date: string;
  description?: string;
  id: number;
  image?: string;
  lesson_num?: number;
  text: string;
  title?: string;
  likes?: number;
  dislikes?: number;
};

type PostsResponse = {
  count: number;
  next: string;
  previous?: string;
  results: Post[];
};

type PostResponse = {
  count: number;
  next: string;
  previous?: string;
  results: Post;
};

type PostsParams = {
  limit?: number,
  valueSearch?: string
};

export const getPosts = async ({ limit, valueSearch }: PostsParams) => {
  const postsUrl = new URL(DOMAIN + POSTS);
  if (limit) postsUrl.searchParams.set("limit", String(limit));
  if (valueSearch) postsUrl.searchParams.set("search", valueSearch);
  const response = await fetch(postsUrl);
  const posts: PostsResponse = await response.json();
  return posts.results;
};

export const getPost = async (postId: string) => {
  const postUrl = new URL(DOMAIN + POSTS + postId);
  const response = await fetch(postUrl);
  const post: PostResponse = await response.json();
  return post.results;
}