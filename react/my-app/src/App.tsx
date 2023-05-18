import React from 'react';
import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { ChangeTheme, ThemeContext } from './tools/themeContext';
import { Wrapper } from './components/wrapper';

function App() {

  const [theme, setTheme] = useState("light")

  return (
    <ThemeContext.Provider value={theme}>
      <ChangeTheme.Provider value={() => theme === "light" ? setTheme("dark") : setTheme("light")}>
        <Wrapper />
      </ChangeTheme.Provider>
    </ThemeContext.Provider>
  )
}

export default App;
