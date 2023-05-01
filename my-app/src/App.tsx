import React, { useEffect, useRef, useState } from 'react';
import './App.css'
import { Button } from './Components/BurgerMenu/ButtonBurger';
import { Registration } from './Components/Registration/Registration';
import { Authorization } from './Components/Authorization/Authorization';
import { LanguageContext } from './Lessons/languageContext';
import { PostsList } from './Components/Post/PostsList';
import { Search } from './Components/Search/Search';



type User = {
  login: string,
  password: string
}

type Pages = 'Auth' | 'Reg' | 'Posts'

type SearchResult = { result: string }

export const App = () => {
  const [users, setUsers] = useState<User[]>([])
  const [page, setPage] = useState<Pages>('Reg')
  const [searchResult, setSearchResult] = useState('')

  const addUser = (login: string, password: string) => {
    setUsers([...users, { login, password }])
  }

  const checkUser = (login: string, password: string) => {
    const findUser = users.find(user => user.login === login && user.password === password)
    // if (findUser) {
      setPage('Posts')
    // }
    // else alert('Wrong data')
  }

  const navToReg = () => {
    setPage('Reg')
  }

  useEffect(() => { setPage('Auth') }, [users])

  const changeSearchResult = (result: string) => {
    setSearchResult(result)
  }

  // useEffect(() => {setSearchResult('')})

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
            {page === 'Reg' && <Registration onReg={addUser} />}
            {page === 'Auth' && <Authorization onAuth={checkUser} onSignUp={navToReg} />}
          </div>
          <div>
            {page === 'Posts' && <><p>Search results: {searchResult}</p>
            <PostsList searchResult={searchResult} /></>
            }
          </div>
        </div>
      </body>
    </>
  );
}

