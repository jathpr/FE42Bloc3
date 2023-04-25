import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Container } from './Container/Container';
import { TaskNum } from './TaskNum/TaskNum';
import { Title } from './Title/Title';
import { Menu } from './Menu/Menu';
import { Tabs } from './Tabs/Tabs';
import { PostCard } from './PostCard/PostCard';
import { CardsList } from './CardsList/CardsList';
import { Navigation } from './Navigation/Navigation';
import { Auth } from './Auth/Auth';
import { Reg } from './Reg/Reg';

export const App = () => (
	<>
		<Menu defaultState></Menu>
		<Container>
			<Navigation></Navigation>
		</Container>
	</>
)