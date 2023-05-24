import { useState } from 'react';
import './App.css';
import { ChangeTheme, ThemeContext } from './tools/themeContext';
import { Wrapper } from './components/wrapper';
import { BrowserRouter } from 'react-router-dom';
import { MainPage } from './components/MainPage';
import { Provider } from 'react-redux';
import { store } from './components/classwork_44/store';

function App() {

  const [theme, setTheme] = useState("light")

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <ChangeTheme.Provider value={() => theme === "light" ? setTheme("dark") : setTheme("light")}>
          <BrowserRouter>
            <Provider store={store}>
              <Wrapper />
            </Provider>
          </BrowserRouter>
        </ChangeTheme.Provider>
      </ThemeContext.Provider>
    </>
  )
}

export default App;
