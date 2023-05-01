import React, { ReactNode } from 'react';
import './Title.css';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

export const Title = (text: { children: string }) => {
	const theme = useContext(ThemeContext)
	return (<h1 className='title' style={theme === 'light' ? { color: 'rgb(75, 73, 73)' } : { color: 'white' }}>{text.children}</h1>)
}

