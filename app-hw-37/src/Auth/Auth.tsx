import React, { ReactNode, useEffect } from 'react';
import { useState } from 'react';
import { Title } from '../Title/Title';
import './auth.css'
import { Link, redirect, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../Store/store';
import { useDispatch } from 'react-redux';
import { handleAuth, setUserLogin, setUserPassword, authRedirection } from '../Store/auth';


export const Auth = () => {
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')
	const dispatch = useAppDispatch()
	const theme = useAppSelector((state) => state.theme.themeColor)

	return (
		<>
			<Title>Sign In</Title>
			<form className='auth'>
				<label className="auth__label" htmlFor='login' style={theme === 'light' ? { color: 'rgb(75, 73, 73)' } : { color: 'white' }}>Login</label>
				<input className="auth__input" type="text" id="login" placeholder='Your Login' value={login} onChange={(event) => setLogin(event.target.value)} />
				<label className="auth__label" htmlFor='password' style={theme === 'light' ? { color: 'rgb(75, 73, 73)' } : { color: 'white' }}>Password</label>
				<input className="auth__input" type="password" id="password" placeholder='Your Password' value={password} onChange={(event) => setPassword(event.target.value)} />
				<button className="auth__button" type="submit" value="Submit" onClick={() => {
					dispatch(handleAuth({ login: login, pass: password }))
					dispatch(authRedirection())
				}}>Submit</button>
			</form>
			<div className='reg__link'>
				<p>Don't have an account?</p>
				<Link to='/registration' className="reg__button">Sign Up</Link>
			</div>
		</>)
}