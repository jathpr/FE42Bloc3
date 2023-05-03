import React, { useState } from "react";
import styles from "../css/Navigation.module.css";
import { Registration } from "./Registration";
import { PostsList } from "./PostsList";
import { Auth } from "./Auth";
import { OnePost } from "../server/getPosts";
import { PostPage } from "./PostPage";

type Props = {}

type User = {
   login: string | null,
   pass: string | null,
   username: string | null
}

type State = {
   page: 'auth' | 'reg' | 'postsList' | 'postPage',
   user: User,
   selectedPost: OnePost
}

let users: User[] = [];

const DEFAULT_USER = {
   login: 'user',
   pass: 'user',
   username: 'Artem Malkin'
}

export const Navigation = () => {

   const [page, setPage] = useState('auth');
   const [user, setUser] = useState<User>({ login: null, pass: null, username: null });
   const [selectedPost, setSelectedPost] = useState<OnePost | null>(null);

   const onReg = (login: string, pass: string, username: string) => {
      if (!login) return
      if (!pass) return
      if (!username) return

      const newUser: User = {
         login: login,
         pass: pass,
         username: username
      }

      users.push(newUser);

      setPage('auth');
      setUser({
         login: login,
         pass: pass,
         username: username
      })
   }

   const onAuth = (login: string, pass: string) => {

      const userFound = users.find(user => user.login === login);

      if (userFound) {
         if (pass === userFound.pass) {

            setPage('postsList');
            setUser({
               login: login,
               pass: pass,
               username: userFound.username
            })
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

   return <>
      {page === 'auth' && <Auth onAuth={onAuth} onRegClick={onRegClick} />}
      {page === 'reg' && <Registration onReg={onReg} onAuthClick={onAuthClick} />}
      {page === 'postsList' && <PostsList username={user.username} onPostClick={onPostClick} />}
      {selectedPost && <PostPage username={user.username} post={selectedPost} />}
   </>
}