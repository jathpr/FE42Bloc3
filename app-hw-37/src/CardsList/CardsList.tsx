import { useEffect } from 'react';
import Button from '@mui/material/Button';
import { Title } from '../Title/Title';
import { Card } from './Card';
import './card.css';
import { useAppDispatch, useAppSelector } from '../Store/store';
import { getPostsThunk } from '../Store/post';
import { Tabs } from '../Tabs/Tabs';
import { Post } from '../getPosts';
import { SelectedUser } from '../SelectedUser/SelectedUser';

type Props = {
	showFullScreenCard: (id: number) => void,
	isFavourites?: boolean,
	isPopular?: boolean
}

export const CardsList = ({ showFullScreenCard, isFavourites, isPopular }: Props) => {
	const dispatch = useAppDispatch()
	const searchInputValue = useAppSelector((state) => state.search.searchValue)

	useEffect(() => { dispatch(getPostsThunk({ limit: 6, searchValue: searchInputValue })) }, [searchInputValue])

	const postsList = useAppSelector((state) => state.posts.posts)
	const favourites = useAppSelector((state) => state.favsPosts.favPosts)
	const theme = useAppSelector((state) => state.theme.themeColor)
	const popularPosts = useAppSelector((state) => state.posts.popularPosts)
	if (isFavourites) {
		return (<>
			<Title>Favourites</Title>
			<Tabs tabs={[{ tabName: 'All', tabLink: '/posts' }, { tabName: 'My favourites', tabLink: '/favourites' }, { tabName: 'Popular', tabLink: '/popular' }]}></Tabs>
			<div className='cards-list' >
				{favourites.length === 0 ? <h3 className="post__title" style={theme === 'light' ? { color: 'rgb(75, 73, 73)' } : { color: 'white' }}>Nothing is here</h3> : favourites.map((post: Post) => <Card key={post.id} cardinfo={post} showFullScreen={showFullScreenCard}></Card>)}
			</div>
		</>)
	}
	if (isPopular) {
		return (<>
			<Title>Popular</Title>
			<Tabs tabs={[{ tabName: 'All', tabLink: '/posts' }, { tabName: 'My favourites', tabLink: '/favourites' }, { tabName: 'Popular', tabLink: '/popular' }]}></Tabs>
			<div className='cards-list' >
				{popularPosts.length === 0 ? <h3 className="post__title" style={theme === 'light' ? { color: 'rgb(75, 73, 73)' } : { color: 'white' }}>Nothing is here</h3> : popularPosts.map((post: Post) => <Card key={post.id} cardinfo={post} showFullScreen={showFullScreenCard}></Card>)}
			</div>
		</>)
	}

	return (<>
		<Title>{searchInputValue === '' ? 'Blog' : 'Search results "' + searchInputValue + '"'}</Title>
		<Tabs tabs={[{ tabName: 'All', tabLink: '/posts' }, { tabName: 'My favourites', tabLink: '/favourites' }, { tabName: 'Popular', tabLink: '/popular' }]}></Tabs>
		<div className='cards-list' >
			{postsList.map((post: Post) => <Card key={post.id} cardinfo={post} showFullScreen={showFullScreenCard}></Card>)}
		</div>
		<Button variant='outlined' onClick={() => {
			dispatch(getPostsThunk({ limit: 6 + postsList.length, searchValue: searchInputValue }))
		}}>Show more</Button>
	</>)
}