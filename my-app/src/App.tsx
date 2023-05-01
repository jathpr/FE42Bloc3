import React, { useEffect, useState } from 'react';
import './App.css';
import { Title } from './Title';
// import { Button } from './Button/Button';
import { Button } from './Button/ButtonClass';
import { Tabs } from './Tabs/Tabs';
import { RenderPostsList } from './hw-38/RenderPostsList';
import { Registration } from './Registration';
import { Auth } from './Auth';
import { Search } from './Search';
import { Post, getPosts } from './hw-38/posts';
import { RenderPost } from './hw-38/RenderPost';

type User = {
  login: string,
  password: string
}

type Pages = 'auth' | 'reg'

const tabNames = ['All', 'My favourites', 'Popular']

export const App = () => {
  const [users, setUsers] = useState<User[]>([])
  const [page, setPage] = useState<Pages>('reg')

  useEffect(() => { getPosts({}).then(posts => setCards(posts)) }, [])

  const addUser = (login: string, password: string) => {
    setUsers([...users, { login, password }])
  }

  const checkUser = (login: string, password: string) => {
    const result = users.find(user => (user.login === login) && (user.password === password))
    console.log("🚀 ~ file: App.tsx:28 ~ checkUser ~ result:", result)
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
      <Button visible handleClick={() => console.log('ok')} />
      <Tabs tabs={tabNames} activeTab='My favourites' />
      <RenderPostsList />
      {page === 'reg' && <Registration onReg={addUser} />}
      {page === 'auth' && <Auth onAuth={checkUser} onSignUp={navToReg} />}
    </div>
  );
}

