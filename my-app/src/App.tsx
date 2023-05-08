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



type User = {
  login: string,
  password: string
}

export const App = () => {
  const [users, setUsers] = useState<User[]>([])
  const [searchResult, setSearchResult] = useState('')

  const navigate = useNavigate()

  const addUser = (login: string, password: string) => {
    setUsers([...users, { login, password }])
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
      </header>
      <body>
        <div className='container'>
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

