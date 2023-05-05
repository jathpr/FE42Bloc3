import React, { ReactNode } from 'react';
import { useState, useEffect } from 'react';
import { CardsList } from '../CardsList/CardsList';
import { FullScreenCard } from '../FullScreenCard/FullScreenCard';

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
		{page === 'List' && <CardsList searchValue={searchValue} showFullScreenCard={handleFullScreenPost}></CardsList>}
		{page === 'FullScreen' && <FullScreenCard id={fullScreenPostId} goBack={returnToList}></FullScreenCard>}
	</>)
}