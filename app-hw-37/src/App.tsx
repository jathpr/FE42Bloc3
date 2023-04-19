import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Container } from './hw37/Container/Container';
import { TaskNum } from './hw37/TaskNum/TaskNum';
import { Title } from './hw37/Title/Title';
import { Menu } from './hw37/Menu/Menu';
import { Tabs } from './hw37/Tabs/Tabs';

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