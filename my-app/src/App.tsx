import { useEffect, useState } from 'react';
import './App.css';
import { Title } from './Components/Title/Title';
import { Tabs } from './Components/Tabs/Tabs';
import { Registration } from './Components/Registration/Registration';
import { Auth } from './Components/Authorization/Auth';
import { Post, getPosts } from './Components/Posts/posts';
import { Link, Route, Routes } from "react-router-dom"
import { RenderPostsList } from './Components/Posts/RenderPostsList';
import { Header } from './Components/Header/Header';
import { Search } from './Components/Header/Search';
import React from 'react';
import { Toggle } from './Components/ThemeProvider';

type User = {
  login: string,
  password: string,
  email?: string
}

type Pages = 'auth' | 'reg' | 'content';

const tabNames = ['All', 'My favourites', 'Popular']

export const App = () => {
  const [users, setUsers] = useState<User[]>([])
  const [page, setPage] = useState<Pages>('reg')
  const [cards, setCards] = useState<Post[]>([])
  const [theme, setTheme] = useState('light')

  useEffect(() => { getPosts({}).then(posts => setCards(posts)) }, [])

  const addUser = (login: string, password: string, email: string) => {
    setUsers([...users, { login, password }])
    // const newUser = {login, password, email}
    // return regUsers()
  }

  const checkUser = (login: string, password: string) => {
    (users.find(user => (user.login === login) && (user.password === password))) ? setPage('content') : setPage('reg')
  }

  useEffect(() => { setPage('auth') }, [users])

  const navToReg = () => {
    setPage('reg')
  }



  return (
    <div>
      {/* <Link to ='/reg'>link reg</Link>
      <Link to ='/auth'>link auth</Link>
      <Routes >
        <Route path='reg' element={<Registration onReg={addUser} />}/>
        <Route path='auth' element= {<Auth onAuth={checkUser} onSignUp={navToReg} />}/>
      </Routes> */}

      <Toggle />
      {page === 'reg' && <Registration onReg={addUser} />}
      {page === 'auth' && <Auth onAuth={checkUser} onSignUp={navToReg} />}

      {page === 'content' && <>
        <Title />
        <Header />
        <Tabs tabs={tabNames} activeTab='My favourites' />
        <RenderPostsList />
      </>}

    </div>
  );
}

function regUsers() {
  throw new Error('Function not implemented.');
}

