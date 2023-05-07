import React, { ReactNode } from 'react';
import { useState, useEffect } from 'react';
import { CardsList } from '../CardsList/CardsList';
import { FullScreenCard } from '../FullScreenCard/FullScreenCard';
import { Routes, Route } from 'react-router-dom';

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
type Props = {
	searchValue: string
}

export const Main = ({ searchValue }: Props) => {
	const [page, setPage] = useState('List')
	const [fullScreenPostId, setFullScreenPostId] = useState(0)

	const handleFullScreenPost = (postId: number) => {
		setPage('FullScreen')
		setFullScreenPostId(postId)
	}
	const returnToList = () => {
		setPage('List')
	}
	return (<>
		<Routes>
			<Route path='/'>
				<Route index element={<CardsList searchValue={searchValue} showFullScreenCard={handleFullScreenPost}></CardsList>}></Route>
				<Route path=':postId' element={<FullScreenCard id={fullScreenPostId} goBack={returnToList}></FullScreenCard>}></Route>
			</Route>
		</Routes>
		{/* {page === 'List' && <CardsList searchValue={searchValue} showFullScreenCard={handleFullScreenPost}></CardsList>}
		{page === 'FullScreen' && <FullScreenCard id={fullScreenPostId} goBack={returnToList}></FullScreenCard>} */}
	</>)
}