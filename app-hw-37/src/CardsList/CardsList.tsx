import React, { ReactNode } from 'react';
import { useState, useEffect } from 'react';
import { getPosts } from '../getPosts';
import { Title } from '../Title/Title';
import { Card } from './Card';
import './card.css';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../Store/store';
import { getPostsThunk, setPosts } from '../Store/post';
import { Tabs } from '../Tabs/Tabs';

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

type Props = {
	showFullScreenCard: (id: number) => void,
	isFavourites?: boolean,
	isPopular?: boolean
}

export const CardsList = ({ showFullScreenCard, isFavourites, isPopular }: Props) => {
	const dispatch = useAppDispatch()
	const searchInputValue = useAppSelector((state) => state.search.searchValue)

	useEffect(() => { dispatch(getPostsThunk(searchInputValue)) }, [searchInputValue])

	const postsList = useAppSelector((state) => state.posts.posts)
	const favourites = useAppSelector((state) => state.favsPosts.favPosts)



	if (isFavourites) {
		return (<>
			<Title>Favourites</Title>
			<Tabs tabs={[{ tabName: 'All', tabLink: '/posts' }, { tabName: 'My favourites', tabLink: '/favourites' }, { tabName: 'Popular', tabLink: '/popular' }]}></Tabs>
			<div className='cards-list' >
				{favourites.length === 0 ? <h3 className="post__title">Nothing is here</h3> : favourites.map((post: Post) => <Card key={post.id} cardinfo={post} showFullScreen={showFullScreenCard}></Card>)}
			</div>
		</>)
	}
	if (isPopular) {
		return (<>
			<Title>Popular</Title>
			<Tabs tabs={[{ tabName: 'All', tabLink: '/posts' }, { tabName: 'My favourites', tabLink: '/favourites' }, { tabName: 'Popular', tabLink: '/popular' }]}></Tabs>
			<div className='cards-list' >
				<h3 className="post__title">Nothing is here</h3>
			</div>
		</>)
	}

	return (<>
		<Title>{searchInputValue === '' ? 'Blog' : 'Search results "' + searchInputValue + '"'}</Title>
		<Tabs tabs={[{ tabName: 'All', tabLink: '/posts' }, { tabName: 'My favourites', tabLink: '/favourites' }, { tabName: 'Popular', tabLink: '/popular' }]}></Tabs>
		<div className='cards-list' >
			{postsList.map((post: Post) => <Card key={post.id} cardinfo={post} showFullScreen={showFullScreenCard}></Card>)}
		</div>
	</>)
}