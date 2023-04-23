import React, { ReactNode } from 'react';
import { Title } from '../../hw37/Title/Title';
import './auth.css'
type Props = {
	check: (login: string, password: string) => void
}
type State = {
	login: string,
	pass: string
}
export class Auth extends React.Component<Props, State> {
	state = { login: '', pass: '' }
	handleAuth = () => {
		this.props.check(this.state.login, this.state.pass)
	}
	render() {
		return (
			<>
				<Title>Sign In</Title>
				<form className='auth'>
					<label className="auth__label" htmlFor='login'>Login</label>
					<input className="auth__input" type="text" id="login" placeholder='Your Login' value={this.state.login} onChange={(event) => this.setState({ login: event.target.value })} />
					<label className="auth__label" htmlFor='password'>Password</label>
					<input className="auth__input" type="password" id="password" placeholder='Your Password' value={this.state.pass} onChange={(event) => this.setState({ pass: event.target.value })} />
					<button className="auth__button" type="submit" value="Submit" onClick={this.handleAuth}>Submit</button>
				</form>
			</>)
	}
}