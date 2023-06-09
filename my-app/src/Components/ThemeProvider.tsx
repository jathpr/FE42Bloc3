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
    const { theme, setTheme } = useContext(ThemeContext)


    return <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light') }>{theme}</button>
}