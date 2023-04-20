import React from "react"

type Props = {
    defaultState: boolean,
    handleClick: () => void
}

type State = {
    opened: boolean
}

export class ButtonMenu extends React.Component <Props, State> {
    state = {opened: !!this.props.defaultState}
    click = () => {
        this.props.handleClick()
        this.setState({opened: !this.state.opened})
    }
    render() {
        return <button className="header__button" onClick={this.click}>
            {this.state.opened ? <span>=</span> : <span>X</span>}
        </button>
    }
}
