import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Container } from './Container/Container';
import { TaskNum } from './TaskNum/TaskNum';
import { Title } from './Title/Title';
import { Menu } from './Menu/Menu';
import { Tabs } from './Tabs/Tabs';
import { FullScreenCard } from './FullScreenCard/FullScreenCard';
import { CardsList } from './CardsList/CardsList';
import { Navigation } from './Navigation/Navigation';
import { Auth } from './Auth/Auth';
import { Reg } from './Reg/Reg';
import { Main } from './Main/Main';

export const App = () => (
	<>
		<Menu defaultState></Menu>
		<Container>
			<Navigation></Navigation>
		</Container>
	</>
)