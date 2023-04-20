import React from 'react';
import logo from './logo.svg';
<<<<<<< HEAD
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
=======
import './App.css';
import { Wrapper } from './hw_37/wrapper';

function App() {
  return (
    <Wrapper></Wrapper>
>>>>>>> 9861a03 (HW 37 Yury (#37))
  )
}

export default App;
