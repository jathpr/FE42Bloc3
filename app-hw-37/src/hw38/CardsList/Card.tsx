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
type CardState = {
	cardstate: PostCard
}
export class Card extends React.Component<Cardprops, CardState>{
	state = { cardstate: this.props.cardinfo }
	handleClick = () => {
		this.props.showFullScreen(this.props.cardinfo.id)
	}
	render() {
		return (
			<button className='post' id={String(this.state.cardstate.id) + '-1'} onClick={this.handleClick}>
				<div className="post__img-wrapper">
					<img src={this.state.cardstate.image} alt={this.state.cardstate.text} />
				</div>
				<div className="post__text">
					<p className="post__date">{this.state.cardstate.date}</p>
					<h3 className="post__title">{this.state.cardstate.title}</h3>
					<p className='post__desc'>{this.state.cardstate.description}</p>
					<p className='post__author'>Author: {this.state.cardstate.author} {this.state.cardstate.text}</p>
				</div>
			</button>
		)
	}
}