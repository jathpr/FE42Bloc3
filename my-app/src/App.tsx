import { ButtonHamburger } from "./Components/ButtonHamburger";
import { Tabs } from "./Components/Tabs";
import { Title } from "./Components/Title";
import { User } from "./Components/User";
import { PostsList } from "./Components/PostsList";
import { Navigation } from "./Components/Navigation";
import { ChangeThemeContext, ThemeContext } from "./Components/Context/themeContext";
import { useState } from "react";

export const App = () => {

  const [theme, setTheme] = useState('light')
  const themeToSet = theme === 'light' ? 'dark' : 'light';

  console.log(theme)

  return (
    <ThemeContext.Provider value={theme}>
      <ChangeThemeContext.Provider value={() => { setTheme(themeToSet) }}>
        <Navigation />
      </ChangeThemeContext.Provider>
    </ThemeContext.Provider>
  );
};


export default App;
