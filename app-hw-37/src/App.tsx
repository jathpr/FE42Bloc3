import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { useState, useContext } from 'react';
import { ThemeContext, ChangeThemeContext } from './ThemeContext';
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
import { useNavigate } from 'react-router-dom';

export const App = () => {
	const [theme, setTheme] = useState('light')
	const [searchValue, setSearchValue] = useState('')
	const [auth, setAuth] = useState(false)

	const navigate = useNavigate()
	const getSearchValue = (value: string) => {
		setSearchValue(value)
	}
	const getAuth = () => {
		setAuth(true)
	}
	const handleLogOut = () => {
		setAuth(false)
		navigate('/')
	}
	return (<ThemeContext.Provider value={theme}>
		<ChangeThemeContext.Provider value={(btnValue: 'light' | 'dark') => setTheme(btnValue)}>
			<Menu defaultState giveSearchValue={getSearchValue} isAuthorised={auth} handleLogOut={handleLogOut}></Menu>
			<div className='context__wrapper' style={theme === 'light' ? { background: 'rgb(238, 236, 236)' } : { background: 'rgb(36, 35, 35)' }}>
				<Container>
					<Navigation searchValue={searchValue} getAuthorised={getAuth} isAuthorised={auth}></Navigation>
				</Container>
			</div>
		</ChangeThemeContext.Provider>
	</ThemeContext.Provider >
	)
}