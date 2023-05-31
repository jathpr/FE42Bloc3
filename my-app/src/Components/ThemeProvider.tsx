import { useContext, useState } from "react";
import React from "react";

export const ThemeContext = React.createContext<{ theme: string, setTheme: (s: string) => void }>({ theme: 'light', setTheme: () => { } })

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState('light')

    return <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
    </ThemeContext.Provider>
}


export const Toggle = () => {
    const [value, setValue] = useState('dark')
    const { theme, setTheme } = useContext(ThemeContext)

    const change = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
        setValue(value === 'light' ? 'dark' : 'light')
    }    

    return <button onClick={() => change() }>{value}</button>
}