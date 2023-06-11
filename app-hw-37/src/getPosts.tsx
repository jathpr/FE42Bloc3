import React, { ReactNode } from 'react';
const POSTSURL = "https://studapi.teachmeskills.by/blog/posts/"
const MYPOSTSURL = "https://studapi.teachmeskills.by/blog/posts/my_posts/"

export type Post = {
	id: number,
	image?: string,
	text: string,
	date: string,
	lesson_num: number,
	title: string,
	description: string,
	author: number,
	likes?: number,
	dislikes?: number
}

type PostsResponse = {
	count: number;
	next?: string;
	previous?: string;
	results: Post[];
}

export type PostParams = {
	limit?: number | undefined,
	searchValue?: string,
	offset?: number,
	ordering?: string
}

export const getPosts = async ({ limit, searchValue, offset, ordering }: PostParams) => {
	const postsUrl = new URL(POSTSURL);
	if (searchValue) postsUrl.searchParams.set("search", searchValue);
	if (limit) postsUrl.searchParams.set("limit", String(limit));
	if (offset) postsUrl.searchParams.set("offset", String(offset));
	if (ordering) postsUrl.searchParams.set("ordering", String(ordering));
	const response = await fetch(postsUrl);
	const posts: PostsResponse = await response.json();
	return posts.results;
};

export const getPost = async (id: string) => {
	const postUrl = new URL(POSTSURL + '/' + id);
	const response = await fetch(postUrl);
	const post = await response.json();
	return post
}

export const getMyPosts = async (limit: number) => {
	const myPostsUrl = new URL(MYPOSTSURL)
	if (limit) myPostsUrl.searchParams.set("limit", String(limit));
	const response = await fetch(myPostsUrl);
	const posts: PostsResponse = await response.json();
	return posts.results;
}