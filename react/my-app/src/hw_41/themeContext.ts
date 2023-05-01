import React from "react";

export const themes = {
    light: 'light',
    dark: 'dark',
}

export const ThemeContext = React.createContext({})

export const ChangeTheme = React.createContext(() => { })