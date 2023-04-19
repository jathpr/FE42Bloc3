import React, { ReactNode } from 'react';
import '../Menu/menu.css';
import { ReactComponent as Bars } from "./bars-solid.svg"
import { ReactComponent as Xmark } from "./xmark-solid.svg"

type Props = {
	defaultState?: boolean,
	children: ReactNode
}
type State = { opened: boolean }
export class Burger extends React.Component<Props, State> {
	state = { opened: !!this.props.defaultState }
	handleClick = () => {
		this.setState({ opened: !this.state.opened })
	}
	render() {
		return (
			<button className="menu__btn" onClick={this.handleClick}>
				<input id="menu__toggle" type="checkbox" />
				{changeSvg(this.state.opened)}
			</button >)
	}
}

const changeSvg = (defaultState: boolean | undefined) => {
	if (defaultState) {
		return <Bars />
	} else {
		return <Xmark />
	}
}