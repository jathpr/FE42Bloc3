import { ReactNode } from 'react';
import styles from './button.module.css';

type Props = {
    visible: boolean;
    handleClick?: () => void;
}
export const Button = ({ visible, handleClick }: Props) => {
    return <button className={styles.button} disabled={!visible} onClick={handleClick}>{visible ? <Burger /> : <Close />}  </button>
}

const Burger = () => (
    <div>
        <span className={styles.burger_line_first}></span>
        <span className={styles.burger_line_second}></span>
        <span className={styles.burger_line_third}></span>
    </div>
)

const Close = () => (
    <div>
        <span className={styles.close_line_first}></span>
        <span className={styles.close_line_second}></span>
    </div>
)