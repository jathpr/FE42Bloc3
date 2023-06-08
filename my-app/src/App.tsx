import { useEffect, useState } from 'react';
import './App.css';
import { Title } from './Components/Title/Title';
import { Tabs } from './Components/Tabs/Tabs';
import { Registration } from './Components/Registration/Registration';
import { Auth, LoginUserProps, checkUsers, saveTokens } from './Components/Authorization/Auth';
import { Post, getPosts } from './Components/Posts/posts';
import { Link, Route, Routes, useNavigate } from "react-router-dom"
import { RenderPostsList } from './Components/Posts/RenderPostsList';
import { Header } from './Components/Header/Header';
import { User, regUser } from './Components/Server/regUser';


type Pages = 'auth' | 'reg' | 'content';

const tabNames = ['All', 'My favourites', 'Popular']

export const App = () => {
  const [users, setUsers] = useState<User[]>([])
  const [page, setPage] = useState<Pages>('reg')
  const [cards, setCards] = useState<Post[]>([])

  useEffect(() => { getPosts({}).then(posts => setCards(posts)) }, [])

  const addUser = (username: string, password: string, email: string) => {
    // setUsers([...users, { login, password, email }])
    const newUser = { username, password, email }
    regUser(newUser)
  }

  const checkUser = (login: string, password: string) => {
    // (users.find(user => (user.username === login) && (user.password === password))) ? setPage('content') : setPage('reg')
    (users.find(user => (user.username === login) && (user.password === password))) ? <Link to={'/header'} /> : <Link to={'/auth'} />
  }

  useEffect(() => { <Link to={'/auth'} /> }, [users])

  const navToAuth = useNavigate()
  const navToReg = () => {
    // setPage('reg')
    navToAuth('/auth')
  }

const handlerCheck = (user:LoginUserProps)=>{
  const tokens = await checkUsers(user)
  saveTokens(tokens)
}



  return (
    <div>
      {/* {page === 'reg' && <Registration onReg={addUser} />}
      {page === 'auth' && <Auth onAuth={checkUser} onSignUp={navToReg} />}

      {page === 'content' && <>
        <Title />
        <Header />
        <Tabs tabs={tabNames} activeTab='My favourites' />
        <RenderPostsList /> </>} */}

        <Link to={'/onload'}>
          onload
        </Link>
        
      <Routes>
        <Route path='/reg' element={<Registration onReg={addUser} />} />
        <Route path='/auth' element={<Auth onAuth={checkUser} onSignUp={navToReg} />} />
        <Route path='//activate/:uid/:token' element={<Auth onAuth={checkUser} onSignUp={navToReg} />} />
        <Route path='/posts' element={<RenderPostsList />} />
        <Route path='/header' element={<Header />} />

        {/* <Title />
          <Header />
          <Tabs tabs={tabNames} activeTab='My favourites' /> */}

      </Routes>
    </div>
  );
}

