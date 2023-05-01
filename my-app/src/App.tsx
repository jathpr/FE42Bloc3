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

type User = {
  login: string,
  password: string
}

type Pages = 'auth' | 'reg' | 'content';

const tabNames = ['All', 'My favourites', 'Popular']

export const App = () => {
  const [users, setUsers] = useState<User[]>([])
  const [page, setPage] = useState<Pages>('reg')
  const [cards, setCards] = useState<Post[]>([])
  const [searchString, setSearchString] = useState('')

  useEffect(() => { getPosts({}).then(posts => setCards(posts)) }, [])

  const addUser = (login: string, password: string) => {
    setUsers([...users, { login, password }])
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
      {/* <Button visible handleClick={() => console.log('ok')} /> */}
      <Title />
      {/* <Button visible handleClick={() => console.log('ok')} /> */}
      <Title />
      {/* <Button visible handleClick={() => console.log('ok')} /> */}
      <Title />
      {/* <Button visible handleClick={() => console.log('ok')} /> */}
      <Title />
      {/* <Button visible handleClick={() => console.log('ok')} /> */}
      <Title />
      {/* <Button visible handleClick={() => console.log('ok')} /> */}
      <Title />
      {/* <Button visible handleClick={() => console.log('ok')} /> */}
      <Title />
      {/* <Button visible handleClick={() => console.log('ok')} /> */}
      <Title />
      {/* <Button visible handleClick={() => console.log('ok')} /> */}
      <Title />
      <Button visible handleClick={() => console.log('ok')} />
      <Tabs tabs={tabNames} activeTab='My favourites' />
      <RenderPostsList />
      {page === 'reg' && <Registration onReg={addUser} />}
      {page === 'auth' && <Auth onAuth={checkUser} onSignUp={navToReg} />}
    </div>
  );
}

