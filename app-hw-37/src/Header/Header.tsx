import React from 'react';
import './header.css';
import { SelectedUser } from '../SelectedUser/SelectedUser';
import { Link } from 'react-router-dom';
import { ReactComponent as Light } from "./light-btn.svg";
import { ReactComponent as Dark } from "./dark-btn.svg";
import { useContext } from 'react';
import { ChangeThemeContext, ThemeContext } from '../ThemeContext';

type Props = {
	menuState: boolean,
	isAuthorised: boolean,
	handleLogOut: () => void
}

export const Header = ({ menuState, isAuthorised, handleLogOut }: Props) => {
	const changeTheme = useContext(ChangeThemeContext)
	const theme = useContext(ThemeContext)
	return (
		<div style={theme === 'light' ? { background: 'white' } : { background: 'rgb(36, 35, 35)' }} className={'header' + (!menuState ? ' header--active' : '')}>
			{isAuthorised ? <SelectedUser></SelectedUser> : null}
			<ul className='header__nav'>
				<Link to='/' className='nav__nav-link'><li className='nav__nav-item' style={theme === 'light' ? { color: 'rgb(75, 73, 73)' } : { color: 'white' }}>Home</li></Link>
				{isAuthorised ? <Link to='posts' className='nav__nav-link'><li className='nav__nav-item' style={theme === 'light' ? { color: 'rgb(75, 73, 73)' } : { color: 'white' }}>Posts</li></Link> : null}
			</ul>
			<div className='other-compon-wrapper'>
				<div className='themes-btn-wrapper'>
					<button className='themes-btn' style={theme === 'light' ? { background: 'white' } : { background: 'rgb(36, 35, 35)' }} onClick={() => changeTheme('light')}><Light style={theme === 'light' ? { fill: 'gray' } : { fill: 'white' }} /></button>
					<button className='themes-btn' style={theme === 'light' ? { background: 'white' } : { background: 'rgb(36, 35, 35)' }} onClick={() => changeTheme('dark')}><Dark style={theme === 'dark' ? { fill: 'gray' } : { fill: 'black' }} /></button>
				</div>
				<Link to='/' className='auth-btn' onClick={() => isAuthorised ? handleLogOut() : null}>{isAuthorised ? 'Log Out' : 'Log In'}</Link>
			</div>
		</div>)
} 