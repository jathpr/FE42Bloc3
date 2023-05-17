import React, { ReactNode } from 'react';
import './card.css';
import { useAppDispatch, useAppSelector } from '../Store/store';
import { Link } from 'react-router-dom';
import { setCurrentImg } from '../Store/images';

type PostCard = {
	id: number,
	image?: string,
	text: string,
	date: string,
	lesson_num: number,
	title: string,
	description: string,
	author: number
}

type Cardprops = {
	cardinfo: PostCard,
	showFullScreen: (id: number) => void
}

export const Card = ({ cardinfo, showFullScreen }: Cardprops) => {
	const dispatch = useAppDispatch()
	const theme = useAppSelector((state) => state.theme.themeColor)

	return (
		<button className='post' onClick={() => showFullScreen(cardinfo.id)} style={theme === 'light' ? { background: 'white' } : { background: '#423e3e' }}>
			<div className="post__img-wrapper">
				<Link to='/posts/img'><img src={cardinfo.image} alt={cardinfo.text} onClick={() => dispatch(setCurrentImg(cardinfo.image ? cardinfo.image : '#'))} /></Link>
			</div>
			<div className="post__text">
				<p className="post__date">{cardinfo.date}</p>
				<h3 className="post__title" style={theme === 'light' ? { color: 'rgb(75, 73, 73)' } : { color: 'white' }}>{cardinfo.title}</h3>
				<p className='post__desc'>{cardinfo.description}</p>
				<p className='post__author' style={theme === 'light' ? { color: 'rgb(75, 73, 73)' } : { color: 'white' }}>Author: {cardinfo.author} {cardinfo.text}</p>
			</div>
		</button>
	)
}