import React from 'react';
import styles from './button.module.css';

type Props = {
    visible: boolean;
    handleClick: () => void;
}

type State = {
    opened: boolean
}
export class ButtonComponent extends React.Component<Props, State> {
    state = {opened: !!this.props.visible}
    
    click = () => {
        this.props.handleClick()
        this.setState({opened: !this.state.opened})
    }

    render () {
        return (
            <button className={styles.button} onClick={this.click}>{this.state.opened ? <Burger /> : <Close />}  </button>
        )
    }

}
function Burger() {
    return (
        <div>
            <span className={styles.burger_line_first}></span>
            <span className={styles.burger_line_second}></span>
            <span className={styles.burger_line_third}></span>
        </div>
    );
}

const Close = () => (
    <div>
        <span className={styles.close_line_first}></span>
            <span className={styles.close_line_second}></span>
    </div>
)