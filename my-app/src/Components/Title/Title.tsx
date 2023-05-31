import { useContext } from 'react';
import styles from './title.module.css';
import { ThemeContext } from '../ThemeProvider';

export const Title = () => {
    const {theme} = useContext(ThemeContext)
    return (
        <div className={theme === 'light' ? styles.signin : styles.signin_dark}>Sign in</div>
    );
}