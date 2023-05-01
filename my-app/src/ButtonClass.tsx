import { useState } from 'react';
import styles from './button.module.css';

type Props = {
    visible: boolean;
    handleClick: () => void;
}

export const Button = ({ visible, handleClick }: Props) => {
    const [isVisible, setIsVisible] = useState(visible)

    const click = () => {
        handleClick()
        setIsVisible(!isVisible)
    }

    return (
        <div className={styles.button_wrapper}>
        <button className={styles.button} onClick={click}>{isVisible ? <Burger /> : <Close />}  </button>
        </div>
    )
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


