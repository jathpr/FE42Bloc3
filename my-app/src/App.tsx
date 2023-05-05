import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Title } from "./Title";
import { ButtonComponent } from "./HW_37/BurgerMenu"
import { Tabs } from "./HW_37/Tabs"
import { RenderPostsList } from './HW-38/RenderPostList';
import { Registration } from './Components/Registration/Registration';
import { Auth } from './Components/Registration/Auth';

type User = {
  login: string,
  password: string,
}
type Pages = "auth"|"reg"
export const App  = () => {
  const [users, setUsers] = useState <User[]>([]) 
  const [page, setPage] = useState<Pages>("reg")
  const addUser = (login: string, password: string) => {
    setUsers([...users, {login, password}])
  }
const checkUser = (login: string, password: string)=>{
  const result = users.find(user=>user.login===login&&user.password===password)
  console.log(result)
} 
useEffect(()=> { setPage("auth") }, [users])
const navToReg = () => {
  setPage('reg')
}

  return (
    <div>
      {/* <Title /> */}
      {/* <ButtonComponent enabled /> */}
      {/* <Tabs tabs={['All', 'My favorites', 'Popular']} activeTab='All' /> */}
      {/* <RenderPostsList /> */}
      {page === "reg" && <Registration onReg={addUser}/>}
      {page === "auth" && <Auth onAuth= {checkUser} onSignUp={navToReg}/>}

    </div>
  );
}