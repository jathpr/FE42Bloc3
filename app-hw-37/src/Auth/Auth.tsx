import React, { ReactNode } from 'react';
import { useState, useContext } from 'react';
import { Title } from '../Title/Title';
import './auth.css'
import { ThemeContext } from '../ThemeContext';

type Props = {
	check: (login: string, password: string) => void
}

export const Auth = (props: Props) => {
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')

	const handleAuth = () => {
		props.check(login, password)
	}
	const theme = useContext(ThemeContext)
	return (
		<>
			<Title>Sign In</Title>
			<form className='auth'>
				<label className="auth__label" htmlFor='login' style={theme === 'light' ? { color: 'rgb(75, 73, 73)' } : { color: 'white' }}>Login</label>
				<input className="auth__input" type="text" id="login" placeholder='Your Login' value={login} onChange={(event) => setLogin(event.target.value)} />
				<label className="auth__label" htmlFor='password' style={theme === 'light' ? { color: 'rgb(75, 73, 73)' } : { color: 'white' }}>Password</label>
				<input className="auth__input" type="password" id="password" placeholder='Your Password' value={password} onChange={(event) => setPassword(event.target.value)} />
				<button className="auth__button" type="submit" value="Submit" onClick={handleAuth}>Submit</button>
			</form>
		</>)
}