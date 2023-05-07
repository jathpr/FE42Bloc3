import React, { ReactNode } from 'react';
import { useState, useEffect, useContext } from 'react';
import { getPost } from '../getPosts';
import './fullScreenCard.css';
import { ThemeContext } from '../ThemeContext';
import { Link, useParams } from 'react-router-dom';

type Post = {
	id: number,
	image?: string,
	text: string,
	date: string,
	lesson_num?: number,
	title: string,
	description: string,
	author: number
}

type Props = {
	id: number,
	goBack: () => void
}
export const FullScreenCard = (props: Props) => {
	const [post, setPost] = useState<Post>({
		id: props.id,
		image: '',
		text: '',
		date: '',
		title: '',
		lesson_num: 0,
		description: '',
		author: 0
	})
	const params = useParams()
	useEffect(() => { params.postId && getPost(params.postId).then(post => setPost(post)) }, [])
	const theme = useContext(ThemeContext)
	return (<>
		<Link to='/posts'><button className='back-btn' onClick={props.goBack} >← Back to posts</button></Link>
		<div className='card' id={String(post.id)}>
			<h2 className='card__title' style={theme === 'light' ? { color: 'rgb(75, 73, 73)' } : { color: 'white' }}>{post.title}</h2>
			<p className='card__date'>{post.date}</p>
			<div className='card__img-wrapper'>
				<img src={post.image} alt={post.text} />
			</div>
			<div className='card__text'>
				<p className='card__desc'>{post.description}</p>
				<p className='card__author' style={theme === 'light' ? { color: 'rgb(75, 73, 73)' } : { color: 'white' }}>Author: {post.author} {post.text}</p>
			</div>
		</div>
	</>)
}