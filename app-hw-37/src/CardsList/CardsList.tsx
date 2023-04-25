import React, { ReactNode } from 'react';
import { Title } from '../Title/Title';
import { Card } from './Card';
import './card.css';
import { PostCard } from '../PostCard/PostCard';

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
type listProps = {
	posts: Post[],
	showFullScreenCard: (id: number) => void
}
export class CardsList extends React.Component<listProps> {
	state = { page: 'Main' }
	render() {
		return (<>
			<Title>Blog</Title>
			<div className='cards-list' >
				{this.props.posts.map((post) => <Card key={post.id} showFullScreen={this.props.showFullScreenCard} cardinfo={post}></Card>)}
			</div>
		</>)
	}

}