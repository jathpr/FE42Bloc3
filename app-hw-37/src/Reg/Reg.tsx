import React, { ReactNode } from 'react';
import { Title } from '../Title/Title';
import './reg.css'

type Props = {
	wasSuccessed: boolean,
	animateBtn: (page: string) => void
}
export class Reg extends React.Component<Props>{
	changeElement = (bool: boolean, trueEl: string, falseEl: string) => {
		if (bool) {
			return trueEl
		} else {
			return falseEl
		}
	}
	animateButton = () => {
		if (this.props.wasSuccessed) {
			this.props.animateBtn('Main')
		} else {
			this.props.animateBtn('Auth')
		}
	}
	render() {
		return (
			<>
				<Title>{this.changeElement(this.props.wasSuccessed, 'Congratulations', 'Failure')}</Title>
				<div className='notification'>
					<p>{this.changeElement(this.props.wasSuccessed, 'You successfully entered your account!', "Login or Password isn't correct. Try again!")}</p>
					<button className='notification__button' onClick={this.animateButton}>{this.changeElement(this.props.wasSuccessed, 'Go to my posts', 'Back')}</button>
				</div>
			</>
		)
	}
}