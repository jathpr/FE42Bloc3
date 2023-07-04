import { PostsResponse } from "./getPosts";

const DOMAIN = "https://studapi.teachmeskills.by";
const POSTS = "/blog/posts";
const POSTS_USER = "/blog/posts/my_posts/";


type PostsParams = { search?: string, limit?: string };

export const searchPosts = async ({ search, limit }: PostsParams) => {
   const postsUrl = new URL(DOMAIN + POSTS);
   if (limit) postsUrl.searchParams.set("limit", String(limit));
   else postsUrl.searchParams.set("limit", '100');
   if (search) postsUrl.searchParams.set("search", String(search));
   // console.log(postsUrl);

   const response = await fetch(postsUrl);
   const posts: PostsResponse = await response.json();
   return posts.results;
};

export const searchUserPosts = async ({ search, limit }: PostsParams) => {
   const postsUrl = new URL(DOMAIN + POSTS_USER);
   if (limit) postsUrl.searchParams.set("limit", String(limit));
   else postsUrl.searchParams.set("limit", '100');
   if (search) postsUrl.searchParams.set("search", String(search));
   // console.log(postsUrl);

   const response = await fetch(postsUrl);
   const posts: PostsResponse = await response.json();
   return posts.results;
};