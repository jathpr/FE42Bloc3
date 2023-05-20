const DOMAIN = "https://studapi.teachmeskills.by";
const POSTS = "/blog/posts/";

export type Post = {
    id: number;
    author: number;
    description?: string,
    image?: string;
    text: string,
    date: string,
    title?: string,
}

type PostsResponse = {
    count: number;
    next: string;
    previous?:string,
    results: Post[];
};

type PostParams = { limit?: number};

export const getPosts = async ({limit}: PostParams) => {
    const postsUrl = new URL(DOMAIN+POSTS);
    if (limit) postsUrl.searchParams.set("limit", String(limit));
    const response = await fetch(postsUrl);
    const posts: PostsResponse = await response.json();
    return posts.results;
}