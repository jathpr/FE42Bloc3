import React from 'react'
import style from './ButtonBurger.module.css'

type Props = {
    touched?: boolean,
    handleClick: () => void
}

type State = { opened: boolean }

export class Button extends React.Component <Props, State> {
    state = {opened: !!this.props.touched}
    click = () =>{
        this.props.handleClick()
        this.setState({opened: !this.state.opened})
    }
    render() {
        return <button className={style.button} onClick={this.click}>
            {this.state.opened ? <>
                <hr className={style.burgerSpan}></hr>
                <hr className={style.burgerSpan}></hr>
                <hr className={style.burgerSpan}></hr></> :
                <span className={style.closeSpan}>✖</span>}
        </button>
    }
}