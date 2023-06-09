import { useState } from "react"
import React from "react"

export const ThemeProvider = ({children}:{children: React.ReactNode}) => {
    const[theme, setTheme] = useState('')

    return <ThemeContext.Provider value = {{theme, setTheme}}>
        {children}
    </ThemeContext.Provider>
}

export const ThemeContext = React.createContext <{ theme: string, setTheme: (s:string) => void }>({theme:'light', setTheme: ()=>{}})