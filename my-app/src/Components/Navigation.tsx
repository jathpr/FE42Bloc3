import React, { useContext, useState } from "react";
import styles from "../css/Navigation.module.css";
import { Registration } from "./Registration";
import { PostsList } from "./PostsList";
import { Auth } from "./Auth";
import { OnePost } from "../server/getPosts";
import { PostPage } from "./PostPage";
import { ChangeThemeContext, ThemeContext } from "./Context/themeContext";
import { SearchPostsList } from "./SearchPostsList";
import { Header } from "./Header";

type User = {
   login: string | null,
   pass: string | null,
   username: string | null
}

export const Navigation = () => {
   const changeTheme = useContext(ChangeThemeContext);
   const theme = useContext(ThemeContext);

   const [users, setUsers] = useState<User[]>([])

   const [page, setPage] = useState('auth');
   const [user, setUser] = useState<User>({ login: null, pass: null, username: null });
   const [selectedPost, setSelectedPost] = useState<OnePost | null>(null);
   const [searchInputValue, setSearchInputValue] = useState('')


   const onReg = (login: string, pass: string, username: string) => {
      if (!login) return
      if (!pass) return
      if (!username) return

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

   const onSearchClick = (inputValue: string) => {

      if (page !== 'auth' && page !== 'reg') {
         setPage('searchPosts')
         setSearchInputValue(inputValue)
         console.log(inputValue)
      }

   }

   document.body.style.backgroundColor = theme === 'light' ? '#F3F3F3' : '#141414';

   return <>
      <Header username={(page !== 'auth' && page !== 'reg') ? user.username : null} clickSearch={onSearchClick} />
      {page === 'auth' && <Auth onAuth={onAuth} onRegClick={onRegClick} />}
      {page === 'reg' && <Registration onReg={onReg} onAuthClick={onAuthClick} />}
      {page === 'postsList' && <PostsList onPostClick={onPostClick} />}
      {page === 'searchPosts' && <SearchPostsList searchInputValue={searchInputValue} onPostClick={onPostClick}></SearchPostsList>}
      {selectedPost && <PostPage post={selectedPost} />}
      <button onClick={changeTheme}>Change theme</button>
   </>
}