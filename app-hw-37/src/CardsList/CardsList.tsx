import React, { ReactNode } from 'react';
import { useState, useEffect } from 'react';
import { getPosts } from '../getPosts';
import { Title } from '../Title/Title';
import { Card } from './Card';
import './card.css';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../Store/store';
import { setPosts } from '../Store/post';
import { setImages } from '../Store/images';

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
	showFullScreenCard: (id: number) => void
}

export const CardsList = ({ showFullScreenCard }: Props) => {
	const dispatch = useAppDispatch()

	const postsList = useAppSelector((state) => state.posts.posts)
	const searchInputValue = useAppSelector((state) => state.search.searchValue)

	useEffect(() => { getPosts(6, searchInputValue).then(data => dispatch(setPosts(data))) }, [searchInputValue])

	const images = postsList.map((post: Post) => post.image ? post.image : '#')
	dispatch(setImages(images))

	return (<>
		<Title>{searchInputValue === '' ? 'Blog' : 'Search results "' + searchInputValue + '"'}</Title>
		<ul className='cards-list' >
			{postsList.map((post: Post) => <Link to={'/posts/' + post.id} className='card-item'><Card key={post.id} cardinfo={post} showFullScreen={showFullScreenCard}></Card></Link>)}
		</ul>
	</>)
}