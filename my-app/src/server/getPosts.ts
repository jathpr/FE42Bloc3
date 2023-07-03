const DOMAIN = "https://studapi.teachmeskills.by";
const POSTS = "/blog/posts/";

export type OnePost = {
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
   isFavorite?: boolean;
};

// export type OnePost = {
//    id: number,
//    image: string,
//    text: string,
//    date: string,
//    lesson_num: number,
//    title: string,
//    description: string,
//    author: number
// }

export type PostsResponse = {
   count: number;
   next: string;
   previous?: string;
   results: OnePost[];
};

type PostsParams = { limit?: number };

export const getPosts = async ({ limit }: PostsParams) => {
   const postsUrl = new URL(DOMAIN + POSTS);
   if (limit) postsUrl.searchParams.set("limit", String(limit));
   const response = await fetch(postsUrl);
   const posts: PostsResponse = await response.json();
   return posts.results;
};

export const getPost = async (postId?: string) => {
   const postsUrl = new URL(DOMAIN + POSTS + postId);
   // if (limit) postsUrl.searchParams.set("limit", String(limit));
   const response = await fetch(postsUrl);
   const post: OnePost = await response.json();
   return post;
};