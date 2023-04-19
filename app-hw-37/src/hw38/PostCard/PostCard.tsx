import React, { ReactNode } from 'react';
import './postCard.css';
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

type Postprops = {
	postinfo: Post
}

type Poststate = {
	poststate: Post
}

export class PostCard extends React.Component<Postprops, Poststate>{
	state = { poststate: this.props.postinfo }
	render() {
		return (
			<div className='card' id={String(this.state.poststate.id)}>
				<div className='card__text'>
					<p className='card__date'>{this.state.poststate.date}</p>
					<h2 className='card__title'>{this.state.poststate.title}</h2>
					<p className='card__desc'>{this.state.poststate.description}</p>
					<p className='card__author'>Author: {this.state.poststate.author} {this.state.poststate.text}</p>
				</div>
				<div className='card__img-wrapper'>
					<img src={this.state.poststate.image} alt={this.state.poststate.text} />
				</div>
			</div>
		)
	}
}