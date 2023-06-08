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
  title: string;
};

type PostsResponse = {
  count: number;
  next: string;
  previous?: string;
  results: Post[];
};

type PostsParams = { limit?: number, search?: string };

export type PostNext = Required<
  Pick<Post, "title">
>;

export const getPosts = async ({ limit, search }: PostsParams) => {
  const postsUrl = new URL(DOMAIN + POSTS);
  if (limit) postsUrl.searchParams.set("limit", String(limit));
  if (search) postsUrl.searchParams.set("search", String(search));
  const response = await fetch(postsUrl);
  const posts: PostsResponse = await response.json();
  return posts.results;
};

export const sendPost = async (post: PostNext) =>{
  const postUrl = new URL(DOMAIN + POSTS);
  const token = localStorage.getItem()
  const submit = await fetch(postUrl, {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {Authorization: `Bearer ${token}`}
  })
}