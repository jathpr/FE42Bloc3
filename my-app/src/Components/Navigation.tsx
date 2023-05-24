import React, { useContext, useEffect, useState } from "react";
import styles from "../css/Navigation.module.css";
import { Registration } from "./Registration";
import { PostsList } from "./PostsList";
import { Auth } from "./Auth";
import { OnePost } from "../server/getPosts";
import { PostPage } from "./PostPage";
import { ChangeThemeContext, ThemeContext } from "./Context/themeContext";
import { SearchPostsList } from "./SearchPostsList";
import { Header } from "./Header";
import { Routes, Route, useNavigate } from "react-router-dom";

type User = {
   login?: string,
   pass?: string,
   username?: string
}

const TEST_USER = {
   login: 'user',
   pass: 'user',
   username: 'Artem Malkin'
}

export const Navigation = () => {
   const changeTheme = useContext(ChangeThemeContext);
   const theme = useContext(ThemeContext);

   const [users, setUsers] = useState<User[]>([TEST_USER])

   const [page, setPage] = useState('auth');
   const [user, setUser] = useState<User>({});
   const [selectedPost, setSelectedPost] = useState<OnePost | null>(null);
   const [searchInputValue, setSearchInputValue] = useState('')


   const onReg = (login: string, pass: string, username: string) => {
      if (!login) return
      if (!pass) return
      if (!username) return

      const userFound = users.find(user => user.login === login);
      if (userFound) return

      const newUser: User = {
         login: login,
         pass: pass,
         username: username
      }

      setUsers([...users, newUser])

      setPage('auth');
      setUser(newUser)
   }

   const onAuth = (login: string, pass: string) => {

      const userFound = users.find(user => user.login === login);

      if (userFound) {
         if (pass === userFound.pass) {

            setPage('postsList');
            setUser(userFound)
         }
      }

      return
   }

   const onPostClick = (post: OnePost, e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {

      setPage('postPage');
      setSelectedPost(post);
   }

   const onRegClick = () => {
      setPage('reg')
   }

   const onAuthClick = () => {
      setPage('auth')
   }

   const navigate = useNavigate()

   const onSearchClick = (inputValue: string) => {
      // console.log('Component Navigation, onSearchClick:', inputValue);
      setPage('postsList')
      setSearchInputValue(inputValue)
      // console.log(' 2 Component Navigation, onSearchClick:', inputValue);
      if (inputValue) {
         // console.log('if (searchInputValue)');

         navigate('/posts')
      }

   }

   document.body.style.backgroundColor = theme === 'light' ? '#F3F3F3' : '#141414';

   return <>
      <Header username={(page !== 'auth' && page !== 'reg') ? user.username : undefined} clickSearch={onSearchClick} />
      <Routes>
         <Route path="auth" element={<Auth onAuth={onAuth} onRegClick={onRegClick} />} />
         <Route path="reg" element={<Registration onReg={onReg} onAuthClick={onAuthClick} />} />
         <Route path="posts">
            <Route index element={<PostsList searchInputValue={searchInputValue} onPostClick={onPostClick} />} />
            <Route path=":postId" element={<PostPage />} />
         </Route>
      </Routes>
   </>
}