import React, { ReactNode } from 'react';
import { useState, useEffect } from 'react';
import { getPosts } from '../getPosts';
import { Title } from '../Title/Title';
import { Card } from './Card';
import './card.css';
import { Link, redirect, useNavigate } from 'react-router-dom';

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
	searchValue: string
}

export const CardsList = ({ showFullScreenCard, searchValue }: Props) => {
	const [postList, setPostList] = useState<Post[]>([])

	useEffect(() => { getPosts(6, searchValue).then(data => setPostList(data)) }, [searchValue])
	const navigate = useNavigate()
	return (<>
		<Title>{searchValue === '' ? 'Blog' : 'Search results "' + searchValue + '"'}</Title>
		<ul className='cards-list' >
			{postList.map((post: Post) => <li className='card-item' onClick={() => {
				navigate('/posts/' + post.id)
				/* console.log('Ok') */
			}}><Card key={post.id} cardinfo={post} showFullScreen={showFullScreenCard}></Card></li>)}
		</ul></>)
}