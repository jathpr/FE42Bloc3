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
	postinfo: Post,
	goBack: () => void
}

export class PostCard extends React.Component<Postprops>{
	state = { poststate: this.props.postinfo }
	render() {
		return (<>
			<button className='back-btn' onClick={this.props.goBack}>← Back to posts</button>
			<div className='card' id={String(this.props.postinfo.id)}>
				<h2 className='card__title'>{this.props.postinfo.title}</h2>
				<p className='card__date'>{this.props.postinfo.date}</p>
				<div className='card__img-wrapper'>
					<img src={this.state.poststate.image} alt={this.props.postinfo.text} />
				</div>
				<div className='card__text'>
					<p className='card__desc'>{this.props.postinfo.description}</p>
					<p className='card__author'>Author: {this.props.postinfo.author} {this.props.postinfo.text}</p>
				</div>
			</div>
		</>)
	}
}