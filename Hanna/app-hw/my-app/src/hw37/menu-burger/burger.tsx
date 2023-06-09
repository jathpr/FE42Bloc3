import React, {ReactNode} from 'react';
import './menu.css';
import burger from '../../img/Hamburger_icon.svg.png'
import close from '../../img/close.png'

type Props = {
	defaultState?: boolean,
	click: () => void,
	children: ReactNode
}
type State = { opened: boolean }

export class Burger extends React.Component <Props, State> {
    state = { opened: !!this.props.defaultState }
    handleClick = () => {
        this.props.click()
        this.setState( {opened: !this.state.opened} )
    }
    render() {
        return (
            <>
                <button className='menu__burger' onClick={this.handleClick}>
                {toggleImg(this.state.opened)}
                </button>
            </>
        )
    }
}

const toggleImg = (defaultState:boolean) => defaultState ? <img src={close} /> : <img src={burger} />