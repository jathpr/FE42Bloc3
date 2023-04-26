import React, { ReactNode } from 'react';
import './card.css'
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

export const Card = (props: Cardprops) => {
	const handleClick = () => {
		props.showFullScreen(props.cardinfo.id)
	}
	return (
		<button className='post' id={String(props.cardinfo.id) + '-1'} onClick={handleClick}>
			<div className="post__img-wrapper">
				<img src={props.cardinfo.image} alt={props.cardinfo.text} />
			</div>
			<div className="post__text">
				<p className="post__date">{props.cardinfo.date}</p>
				<h3 className="post__title">{props.cardinfo.title}</h3>
				<p className='post__desc'>{props.cardinfo.description}</p>
				<p className='post__author'>Author: {props.cardinfo.author} {props.cardinfo.text}</p>
			</div>
		</button>
	)
}