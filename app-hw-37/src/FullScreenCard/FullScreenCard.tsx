import React, { ReactNode } from 'react';
import { useState, useEffect } from 'react';
import { getPost } from '../getPosts';
import './fullScreenCard.css';
import { Link, useParams } from 'react-router-dom';
import { useAppSelector } from '../Store/store';

export const FullScreenCard = () => {
	const params = useParams()
	const post = useAppSelector((state) => state.posts.posts.find((post) => String(post.id) === params.postId))
	const theme = useAppSelector((state) => state.theme.themeColor)

	if (!post) {
		return <h2>Post not found</h2>
	}
	return (<>
		<Link to='/posts'><button className='back-btn'>← Back to posts</button></Link>
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