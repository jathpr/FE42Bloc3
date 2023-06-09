import { useContext,useState } from "react"
import styles from './Theme.module.css'
import { ThemeContext } from "../ThemeProvider"


export const ThemeButton = () => {
    const {theme, setTheme} = useContext(ThemeContext)

    const [isLight, setIsLight] = useState('Light')
    const click = () => {
        setTheme(theme==='light'?'dark':'light')
        setIsLight(isLight==='Light'?'Dark':'Light')
      };
    return (
    <button className={theme==='light'?styles.changeThemeButton:styles.changeThemeButton_dark} onClick={click}>{isLight}
    </button>
    )
}
