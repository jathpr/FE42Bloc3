import React, { ReactNode } from 'react';
import { Auth } from '../Auth/Auth';
import { Reg } from '../Reg/Reg';
import { CardsList } from '../../hw38/CardsList/CardsList';
import { PostCard } from '../../hw38/PostCard/PostCard';

const LOGIN = 'CoolDude'
const PASSWORD = 'react'

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

type State = {
	page: string,
	userAccount: {
		login: string,
		password: string
	},
	posts: Post[],
	id: number
}

export class Navigation extends React.Component {
	state: State = { page: 'Auth', userAccount: { login: '', password: '' }, posts: [], id: 0 }
	componentDidMount() {
		fetch('https://studapi.teachmeskills.by/blog/posts/')
			.then(response => response.json())
			.then(data => this.setState({ posts: data.results }))
			.catch((error) => console.log(error))
	}
	authCheck = (login: string, password: string) => {
		if (login === LOGIN && password === PASSWORD) {
			this.setState({ page: 'Success', userAccount: { login, password } })
		} else {
			this.setState({ page: 'Fail', userAccount: { login, password } })
		}
	}
	movetoOtherPage = (page: string) => {
		this.setState({ page: page, userAccount: { login: '', password: '' } })
	}
	showFullScreenPost = (id: number) => {
		this.setState({ page: 'FullScreen', id: id })
	}
	movetoMain = () => {
		this.setState({ page: 'Main' })
	}
	render() {
		return <>
			{this.state.page === 'Auth' && <Auth check={this.authCheck}></Auth>}
			{this.state.page === 'Success' && <Reg wasSuccessed={true} animateBtn={this.movetoOtherPage}></Reg>}
			{this.state.page === 'Fail' && <Reg wasSuccessed={false} animateBtn={this.movetoOtherPage}></Reg>}
			{this.state.page === 'Main' && <CardsList showFullScreenCard={this.showFullScreenPost} posts={this.state.posts} />}
			{this.state.page === 'FullScreen' && <PostCard goBack={this.movetoMain} postinfo={this.state.posts[this.state.id - 1]}></PostCard>}
		</>
	}
}