import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Container } from './hw37/Container/Container';
import { TaskNum } from './hw37/TaskNum/TaskNum';
import { Title } from './hw37/Title/Title';
import { Menu } from './hw37/Menu/Menu';
import { Tabs } from './hw37/Tabs/Tabs';
import { PostCard } from './hw38/PostCard/PostCard';
import { CardsList } from './hw38/CardsList/CardsList';
import { Navigation } from './hw39/Navigation/Navigation';
import { Auth } from './hw39/Auth/Auth';
import { Reg } from './hw39/Reg/Reg';

export const App = () => (
	<>
		{/*<h1>HW37</h1>
		<TaskNum>Task 1</TaskNum>
		 <Title></Title>
		<TaskNum>Task 2</TaskNum>
		<Menu defaultState></Menu>
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
		</section> */}
		<Menu defaultState></Menu>
		<Container>
			<Navigation></Navigation>
		</Container>
	</>
)