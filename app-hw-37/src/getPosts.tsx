import React, { ReactNode } from 'react';
const POSTSURL = "https://studapi.teachmeskills.by/blog/posts"

type Post = {
	id: number,
	image?: string,
	text: string,
	date: string,
	lesson_num: number,
	title: string,
	description: string,
	author: number
}

type PostsResponse = {
	count: number;
	next?: string;
	previous?: string;
	results: Post[];
}

export const getPosts = async (limit: number, searchValue: string) => {
	const postsUrl = new URL(POSTSURL);
	if (searchValue) postsUrl.searchParams.set("search", searchValue);
	if (limit) postsUrl.searchParams.set("limit", String(limit));
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