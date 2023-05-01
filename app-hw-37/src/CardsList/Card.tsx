import React, { ReactNode } from 'react';
import './card.css';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

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
	const handleClick = () => {
		showFullScreen(cardinfo.id)
	}
	const theme = useContext(ThemeContext)
	return (
		<button className='post' id={String(cardinfo.id) + '-1'} onClick={handleClick} style={theme === 'light' ? { background: 'white' } : { background: '#423e3e' }}>
			<div className="post__img-wrapper">
				<img src={cardinfo.image} alt={cardinfo.text} />
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