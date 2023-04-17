import { ReactNode } from 'react';
import styles from './button.module.css';

type Props = {
    visible: boolean;
    handleClick?: () => void;
}
export const Button = ({ visible, handleClick}: Props) => (
    <button className={styles.button} disabled={!visible} onClick={handleClick}>
        <span className={styles.burger_line_first}></span>
        <span className={styles.burger_line_second}></span>
        <span className={styles.burger_line_third}></span>

        {/* <span className={styles.close_line_first}></span>
        <span className={styles.close_line_second}></span> */}
    </button>
)

