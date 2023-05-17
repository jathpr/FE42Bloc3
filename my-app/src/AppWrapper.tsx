import { App } from './App';
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Store/store';
import { ChangeThemeContext, ThemeContext } from './Components/Context/themeContext';
import { useState } from 'react';

export const AppWrapper = () => {
    const [theme, setTheme] = useState('light')

    return (
        <ThemeContext.Provider value={theme}>
            <ChangeThemeContext.Provider value={() => {setTheme(theme === 'light' ? 'dark' : 'light')}}>
                <Provider store={store}>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </Provider>
            </ChangeThemeContext.Provider>
        </ThemeContext.Provider>
    )
}