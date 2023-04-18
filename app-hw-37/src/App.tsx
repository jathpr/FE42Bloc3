import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { Container } from './components/Container';
import { TaskNum } from './components/TaskNum';
import { Title } from './components/Title';
import { Menu } from './components/Menu';
import { Tabs } from './components/Tabs';
import { PostCard } from './hw38/PostCard/PostCard';
import { CardsList } from './hw38/CardsList/CardsList';

export const App = () => (
	<Container>
		<h1>HW37</h1>
		<TaskNum>Task 1</TaskNum>
		<Title></Title>
		<TaskNum>Task 2</TaskNum>
		<Menu></Menu>
		<TaskNum>Task 3</TaskNum>
		<Tabs enabled titles={['Husky', 'Akita', 'Pug']} activeTab='Husky'></Tabs>
		<h1>HW38</h1>
		<section className='posts'>
			<div className='first-task'>
				<TaskNum>Task 1</TaskNum>
				<PostCard postinfo={posts[0]}></PostCard>
				<PostCard postinfo={posts[1]}></PostCard>
				<PostCard postinfo={posts[2]}></PostCard>
			</div>
			<div className='second-task'>
				<TaskNum>Task 2</TaskNum>
				<CardsList />
			</div>
		</section>
	</Container>
)


const posts = [
	{
		"id": 1,
		"image": "https://tms-studapi-dev.s3.amazonaws.com/media/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2021-08-04_%D0%B2_16.11.10.png",
		"text": "фыв",
		"date": "2021-10-06",
		"lesson_num": 123,
		"title": "фывфывфыв",
		"description": "default default default default default default default default default default default default default default default default default default default default default default default default default default default",
		"author": 7
	},
	{
		"id": 2,
		"image": "https://tms-studapi-dev.s3.amazonaws.com/media/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2021-08-04_%D0%B2_17.37.38.png",
		"text": "Text",
		"date": "2021-10-07",
		"lesson_num": 48,
		"title": "Title",
		"description": "default default default default default default default default default default default default default default default default default default default default default default default default default default default",
		"author": 7
	},
	{
		"id": 3,
		"image": "https://tms-studapi-dev.s3.amazonaws.com/media/unnamed.jpeg",
		"text": "Hello!",
		"date": "2021-10-07",
		"lesson_num": 23,
		"title": "B-52!",
		"description": "default default default default default default default default default default default default default default default default default default default default default default default default default default default",
		"author": 97
	}
]