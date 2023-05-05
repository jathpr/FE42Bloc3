import React from 'react';

/*export const lightTheme = {
	background: 'rgb(238, 236, 236)',
	color: 'black'
}
export const darkTheme = {
	background: 'rgb(36, 35, 35)',
	color: 'white'
}*/

export const ThemeContext = React.createContext('light');
export const ChangeThemeContext = React.createContext(() => { })
