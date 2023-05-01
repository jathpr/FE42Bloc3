import React from 'react';
import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { Wrapper } from './hw_37/wrapper';
import { ChangeTheme, ThemeContext } from './hw_41/themeContext';

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
