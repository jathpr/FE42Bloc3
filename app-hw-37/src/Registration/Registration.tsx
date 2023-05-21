import React, { ReactNode, useEffect } from 'react';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../Store/store';
import { Title } from '../Title/Title';
import '../Auth/auth.css'
import { addUser } from '../Store/auth';
import { useNavigate } from 'react-router-dom';

export const Registration = () => {
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')

	const theme = useAppSelector((state) => state.theme.themeColor)
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	return (
		<>
			<Title>Sign Up</Title>
			<form className='auth'>
				<label className="auth__label" htmlFor='login' style={theme === 'light' ? { color: 'rgb(75, 73, 73)' } : { color: 'white' }}>Login</label>
				<input className="auth__input" type="text" id="login" placeholder='Your Login' value={login} onChange={(event) => setLogin(event.target.value)} />
				<label className="auth__label" htmlFor='password' style={theme === 'light' ? { color: 'rgb(75, 73, 73)' } : { color: 'white' }}>Password</label>
				<input className="auth__input" type="password" id="password" placeholder='Your Password' value={password} onChange={(event) => setPassword(event.target.value)} />
				<button className="auth__button" type="submit" value="Submit" onClick={() => {
					dispatch(addUser({ login: login, pass: password }))
					navigate('/')
				}}>Sign Up</button>
			</form>
		</>)
}