import { useContext } from 'react'
import { ThemeContext } from '../Context/themeContext'
import './Title.css'

export const Title = () => {
    const theme = useContext(ThemeContext)

    return <h1 className={theme === 'light' ? 'titleDark' : 'titleLight'}>Sign In</h1>
}