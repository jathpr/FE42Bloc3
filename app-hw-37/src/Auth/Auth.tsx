import React, { ReactNode } from 'react';
import { useState } from 'react';
import { Title } from '../Title/Title';
import './auth.css'
type Props = {
	check: (login: string, password: string) => void
}

export const Auth = (props: Props) => {
	const [account, setAccount] = useState({ login: '', password: '' })

	const handleAuth = () => {
		props.check(account.login, account.password)
	}

	return (
		<>
			<Title>Sign In</Title>
			<form className='auth'>
				<label className="auth__label" htmlFor='login'>Login</label>
				<input className="auth__input" type="text" id="login" placeholder='Your Login' value={account.login} onChange={(event) => setAccount({ login: event.target.value, password: account.password })} />
				<label className="auth__label" htmlFor='password'>Password</label>
				<input className="auth__input" type="password" id="password" placeholder='Your Password' value={account.password} onChange={(event) => setAccount({ login: account.login, password: event.target.value })} />
				<button className="auth__button" type="submit" value="Submit" onClick={handleAuth}>Submit</button>
			</form>
		</>)
}