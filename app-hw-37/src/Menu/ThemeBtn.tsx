import React from 'react';
import { useContext } from 'react';
import { ChangeThemeContext } from '../ThemeContext';

export const ThemeBtn = () => {
	const changeTheme = useContext(ChangeThemeContext)
	return (
		<button className='theme__btn' onClick={changeTheme}>Change Theme</button>
	)
}