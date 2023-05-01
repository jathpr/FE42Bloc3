import React from "react";
import styles from "../css/Navigation.module.css";
import { Registration } from "./Registration";
import { PostsList } from "./PostsList";
import { Auth } from "./Auth";
import { OnePost } from "../server/getPosts";
import { PostPage } from "./PostPage";

type Props = {}

type User = {
   login: string,
   pass: string,
   username: string
}

type State = {
   page: 'auth' | 'reg' | 'postsList' | 'postPage',
   user: User,
   selectedPost: OnePost
}

const LOGIN = 'user'
const PASS = 'user'
const DEFAULT_USER = {
   login: 'user',
   pass: 'user',
   username: 'Artem Malkin'
}

export class Navigation extends React.Component {
   // page: 'auth',
   state = {
      page: 'auth',
      user: {
         login: null,
         pass: null,
         username: null
      },
      selectedPost: null

   }

   // (login: string, pass: string, username: string) 
   onReg = (login: string, pass: string) => {
      if (!login) return
      if (!pass) return

      // change username - we need to get it from registration
      this.setState({
         ...this.state,
         page: 'postsList',
         user: {
            login: login,
            pass: pass,
            username: DEFAULT_USER.username
         }
      })
   }

   onAuth = (login: string, pass: string) => {
      // change username - we need to get it from server by login and password
      if (login === LOGIN && pass === PASS) this.setState({
         ...this.state,
         page: 'postsList',
         user: {
            login: login,
            pass: pass,
            username: DEFAULT_USER.username
         }
      })

      return
   }

   onPostClick = (post: OnePost, e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
      this.setState({
         ...this.state,
         page: 'postPage',
         selectedPost: post
      })
   }

   // console.log()

   render(): React.ReactNode {
      return <>
         {this.state.page === 'auth' && <Auth onAuth={this.onAuth} />}
         {/* {this.state.page === 'reg' && <Registration onReg={this.onReg} />} */}
         {this.state.page === 'postsList' && <PostsList username={this.state.user.username} onPostClick={this.onPostClick} />}
         {this.state.selectedPost && <PostPage username={this.state.user.username} post={this.state.selectedPost} />}
         {/* {(this.state.page === 'postsList' && this.state.selectedPost) ? <PostPage username={this.state.user.username} post={this.state.selectedPost} /> : <PostsList username={this.state.user.username} onPostClick={this.onPostClick} />} */}
      </>
   }
}