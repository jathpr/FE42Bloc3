const DOMAIN = "https://studapi.teachmeskills.by";
const POSTS = "/blog/posts";

export type OnePost = {
    author?: number;
    date?: string;
    description?: string;
    id?: number;
    image?: string;
    lesson_num?: number;
    text?: string;
    title?: string;
};

type PostsResponse = {
    count: number;
    next: string;
    previous?: string;
    results: OnePost[];
};

type PostsParams = { limit?: number, search?: string };

export const getPosts = async ({ limit, search }: PostsParams) => {
    const postsUrl = new URL(DOMAIN + POSTS);
    if (limit) postsUrl.searchParams.set("limit", String(limit));
    if (search) postsUrl.searchParams.set("search", String(search));
    const response = await fetch(postsUrl);
    const posts: PostsResponse = await response.json();
    return posts.results;
};

export const getPost = async (postId: string) => {
    const postUrl = new URL(DOMAIN + POSTS + '/' + postId);
    const response = await fetch(postUrl);
    const post: OnePost = await response.json();
    return post
}