import { useState } from 'react';
import { Title } from '../Title/Title';
import './auth.css'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../Store/store';
import { handleAuth } from '../Store/auth';
import Button from '@mui/material/Button';
import useUpdateEffect from '../customHooks';

export const Auth = () => {
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const theme = useAppSelector((state) => state.theme.themeColor)
	const isAuthorised = useAppSelector((state) => state.auth.isAuthorised)
	useUpdateEffect(() => { isAuthorised ? navigate('/success') : navigate('/fail') }, [isAuthorised])
	return (
		<>
			<Title>Sign In</Title>
			<form className='auth'>
				<label className="auth__label" htmlFor='login' style={theme === 'light' ? { color: 'rgb(75, 73, 73)' } : { color: 'white' }}>Login</label>
				<input className="auth__input" type="text" id="login" placeholder='Your Login' value={login} onChange={(event) => setLogin(event.target.value)} />
				<label className="auth__label" htmlFor='password' style={theme === 'light' ? { color: 'rgb(75, 73, 73)' } : { color: 'white' }}>Password</label>
				<input className="auth__input" type="password" id="password" placeholder='Your Password' value={password} onChange={(event) => setPassword(event.target.value)} />
				<button className="auth__button" type="submit" value="Submit" onClick={(e) => {
					e.preventDefault()
					dispatch(handleAuth({ login: login, pass: password }))
				}}>Submit</button>
			</form>
			<div className='reg__link'>
				<p>Don't have an account?</p>
				<Button variant='outlined' href='/registration'>Sign Up</Button>
			</div>
		</>)
}