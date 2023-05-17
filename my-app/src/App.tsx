import { useContext, useState } from 'react';
import './App.css'
import { Button } from './Components/BurgerMenu/ButtonBurger';
import { Search } from './Components/Search/Search';
import { User } from './Components/User/User';
import { Menu } from './Components/BurgerMenu/Menu';
import { ChangeThemeContext, ThemeContext } from './Components/Context/themeContext';
import { ThemeButton } from './Components/ThemeButton/ThemeButton';
import { Navigation } from './Components/Navigation/Navigation';



type User = {
  login: string | null,
  password: string | null,
  username: string | null
}

export const App = () => {
  const [searchResult, setSearchResult] = useState('')
  const [user, setUser] = useState<User>({ login: null, password: null, username: null })
  const [showMenu, setShowMenu] = useState(false)

  const recreateSearchResult = (result: string) => {
    setSearchResult(result)
  }

  const onBurgerButtonClick = (isTouched: boolean) => {
    setShowMenu(isTouched)
  }

  const theme = useContext(ThemeContext)
  const changeTheme = useContext(ChangeThemeContext);
  document.body.style.backgroundColor = theme === 'light' ? 'rgb(236, 236, 236)' : 'rgb(45, 45, 45)';

  return (
    <>
      <header className='header'>
        <Button touched handleClick={onBurgerButtonClick} />
        <Search onSearch={recreateSearchResult} />
        <User username={user.username} />
      </header>
      <body>
        <div className='container'>
          <ThemeButton changeThemeClick={changeTheme} />
          {showMenu && <Menu username={user.username} />}
          <Navigation searchResult={searchResult} setUser={setUser}/>
        </div>
      </body>
    </>
  );
}

