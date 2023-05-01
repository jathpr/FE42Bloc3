import React, { ReactNode } from 'react';
import { Title } from '../Title/Title';
import './reg.css'
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

type Props = {
	wasSuccessed: boolean,
	animateBtn: (page: string) => void
}

export const Reg = (props: Props) => {
	const animateButton = () => {
		props.wasSuccessed ? props.animateBtn('Main') : props.animateBtn('Auth')
	}
	const theme = useContext(ThemeContext)
	return (
		<>
			<Title>{props.wasSuccessed ? 'Congratulations' : 'Failure'}</Title>
			<div className='notification'>
				<p style={theme === 'light' ? { color: 'black' } : { color: 'white' }}>{props.wasSuccessed ? 'You successfully entered your account!' : "Login or Password isn't correct. Try again!"}</p>
				<button className='notification__button' onClick={animateButton}>{props.wasSuccessed ? 'Go to my posts' : 'Back'}</button>
			</div>
		</>
	)
}