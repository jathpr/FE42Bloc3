import React, { useEffect, useState } from 'react';
import './App.css';
import { Title } from './Title';
import { Button } from './ButtonClass';
import { Tabs } from './Tabs';
import { RenderPostsList } from './RenderPostsList';
import { Registration } from './Registration';
import { Auth } from './Auth';
import { Post, getPosts } from './posts';

type User = {
  login: string,
  password: string
}

type Pages = 'auth' | 'reg'

const tabNames = ['All', 'My favourites', 'Popular']

export const App = () => {
  const [users, setUsers] = useState<User[]>([])
  const [page, setPage] = useState<Pages>('reg')
  const [cards, setCards] = useState<Post[]>([])

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
        <Title />
        <Button visible handleClick={() => console.log('ok')} />
        <Tabs tabs={tabNames} activeTab='My favourites' />
        <RenderPostsList />
        {page === 'reg' && <Registration onReg={addUser} />}
        {page === 'auth' && <Auth onAuth={checkUser} onSignUp={navToReg} />}

    </div>
  );
}

