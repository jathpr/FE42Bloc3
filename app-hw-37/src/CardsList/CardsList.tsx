import React, { ReactNode } from 'react';
import { useState, useEffect } from 'react';
import { getPosts } from '../getPosts';
import { Title } from '../Title/Title';
import { Card } from './Card';
import './card.css';

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

export const CardsList = (props: Props) => {
	const [postList, setPostList] = useState<Post[]>([])
	useEffect(() => { getPosts(6).then(data => setPostList(data)) }, [])
	return (<>
		<Title>Blog</Title>
		<div className='cards-list' >
			{postList.map((post: Post) => <Card key={post.id} cardinfo={post} showFullScreen={props.showFullScreenCard}></Card>)}
		</div></>)
}