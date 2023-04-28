import React, { useEffect, useRef, useState } from 'react';
import './App.css'
import { Button } from './Components/Button/ButtonBurger';
import { Registration } from './Components/Registration/Registration';
import { Authorization } from './Components/Authorization/Authorization';
import { LanguageContext } from './Lessons/languageContext';
import { PostsList } from './Components/Post/PostsList';



type User = {
  login: string,
  password: string
}

type Pages = 'Auth' | 'Reg' | 'Posts'

export const App = () => {
  const [users, setUsers] = useState<User[]>([])
  const [page, setPage] = useState<Pages>('Reg')

  const addUser = (login: string, password: string) => {
    setUsers([...users, { login, password }])
    // setPage('Auth')
  }

  const checkUser = (login: string, password: string) => {
    const findUser = users.find(user => user.login === login && user.password === password)
    if (findUser){
      setPage('Posts')
    }
    else alert('Wrong data')
  }

  const navToReg = () => {
    setPage('Reg')
  }

  useEffect(() => { setPage('Auth') }, [users])

  function TextInputWithFocusButton() {
  const inputEl = useRef<HTMLInputElement>(null);
  const onButtonClick = () => {
    // `current` указывает на смонтированный элемент `input`
    inputEl.current?.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Установить фокус на поле ввода</button>
    </>
  );
}

  return (
    <>
    {TextInputWithFocusButton()}
      <header className='header'>
        <div>
          <Button touched handleClick={() => console.log('OK')} />
        </div>
      </header>
      <body>
        <div className='container'>
          <div>
            {page === 'Reg' && <Registration onReg={addUser} />}
            {page === 'Auth' && <Authorization onAuth={checkUser} onSignUp={navToReg} />}
          </div>
          <div>
            {page === 'Posts' && <PostsList />}
          </div>
        </div>
      </body>
    </>
  );
}

