import { useContext, useState } from 'react';
import './App.css'
import { Button } from './Components/BurgerMenu/ButtonBurger';
import { Registration } from './Components/Registration/Registration';
import { Authorization } from './Components/Authorization/Authorization';
import { PostsList } from './Components/Post/PostsList';
import { Search } from './Components/Search/Search';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { User } from './Components/User/User';
import { Menu } from './Components/BurgerMenu/Menu';
import { RenderOnePost } from './Components/Post/OnePost';
import { ChangeThemeContext, ThemeContext } from './Components/Context/themeContext';
import { ThemeButton } from './Components/ThemeButton/ThemeButton';



type User = {
  login: string | null,
  password: string | null,
  username: string | null
}

export const App = () => {
  const [users, setUsers] = useState<User[]>([])
  const [searchResult, setSearchResult] = useState('')
  const [user, setUser] = useState<User>({ login: null, password: null, username: null })
  const [showMenu, setShowMenu] = useState(false)

  const navigate = useNavigate()

  const addUser = (login: string, password: string, username: string) => {

    const newUser: User = {
      login: login,
      password: password,
      username: username
    }

    setUsers([...users, newUser])
    setUser(newUser)
  }

  const navigateFromUser = (login: string, password: string) => {
    const findUser = users.find(user => user.login === login && user.password === password)
    if (findUser) {
      navigate('/Posts')
    }
    else alert('Wrong data')
  }

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
          {showMenu ? <Menu username={user.username} /> : ''}
          <div>
            <Routes>
              <Route path='Reg' element={<Registration onReg={addUser} />} />
              <Route path='Auth' element={<Authorization onAuth={navigateFromUser} />} />
              <Route path='Posts/*'>
                <Route index element={<PostsList searchResult={searchResult} />} />
                <Route path=':postId' element={<RenderOnePost />} />
              </Route>
            </Routes>
          </div>
        </div>
      </body>
    </>
  );
}

