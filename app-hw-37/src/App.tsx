import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { Container } from './components/Container';
import { TaskNum } from './components/TaskNum';
import { Title } from './components/Title';
import { Menu } from './components/Menu';
import { Tabs } from './components/Tabs';

export const App = () => (
	<Container>
		<TaskNum>Task 1</TaskNum>
		<Title></Title>
		<TaskNum>Task 2</TaskNum>
		<Menu></Menu>
		<TaskNum>Task 3</TaskNum>
		<Tabs enabled titles={['Husky', 'Akita', 'Pug']} activeTab='Husky'></Tabs>
	</Container>
)