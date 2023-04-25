import React, { ReactNode } from 'react';
import '../Menu/menu.css';
import { ReactComponent as Bars } from "./bars-solid.svg"
import { ReactComponent as Xmark } from "./xmark-solid.svg"

type Props = {
	children: ReactNode,
	btnState: boolean,
	click: () => void
}
export class Burger extends React.Component<Props>  {
	render() {
		return (
			<button className="menu__btn" onClick={this.props.click}>
				<input id="menu__toggle" type="checkbox" />
				{changeSvg(this.props.btnState)}
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