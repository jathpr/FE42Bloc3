import { useEffect, useState } from 'react';
import './App.css'
import { Button } from './Components/BurgerMenu/ButtonBurger';
import { Registration } from './Components/Registration/Registration';
import { Authorization } from './Components/Authorization/Authorization';
import { LanguageContext } from './Lessons/languageContext';
import { PostsList } from './Components/Post/PostsList';
import { Search } from './Components/Search/Search';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { RenderPost } from './Components/Post/RenderPost';
import { User } from './Components/User/User';
import { Menu } from './Components/BurgerMenu/Menu';



type User = {
  login: string | null,
  password: string | null,
  username: string | null
}

export const App = () => {
  const [users, setUsers] = useState<User[]>([])
  const [searchResult, setSearchResult] = useState('')
  const [user, setUser] = useState<User>({ login: null, password: null, username: null })

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

  const checkUser = (login: string, password: string) => {
    const findUser = users.find(user => user.login === login && user.password === password)
    if (findUser) {
      navigate('/Posts')
    }
    else alert('Wrong data')
  }

  const changeSearchResult = (result: string) => {
    setSearchResult(result)
  }

  return (
    <>
      <header className='header'>
        <div>
          <Button touched handleClick={() => console.log('OK')} />
        </div>
        <div>
          <Search onSearch={changeSearchResult} />
        </div>
        <div>
          <User username={user.username} />
        </div>
      </header>
      <body>
        <div className='container'>
          <div>
            <Menu isRegistred={true}/>
          </div>
          <div>
            <Routes>
              <Route path='Reg' element={<Registration onReg={addUser} />} />
              <Route path='Auth' element={<Authorization onAuth={checkUser} />} />
            </Routes>
          </div>
          <div>
            <Routes>
              <Route path='Posts'>
                <Route index element={<PostsList searchResult={searchResult} />} />
                <Route path=':postId' element={<RenderPost />} />
              </Route>
            </Routes>
          </div>
        </div>
      </body>
    </>
  );
}

