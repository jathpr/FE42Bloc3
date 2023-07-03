import React, { useState } from "react";
import styles from "../css/Auth.module.css";
import { Title } from "./Title";
import { Header } from "./Header";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/store";
import { handleAuth, setUserLogin, setUserPassword } from "../store/auth";

type Props = {
   onAuth: (login: string, pass: string) => void,
   // onRegClick: () => void
}
export const Auth = ({ onAuth }: Props) => {

   // const [login, setLogin] = useState('');
   // const [pass, setPass] = useState('');

   const login = useAppSelector(state => state.auth.userLogin)
   const pass = useAppSelector(state => state.auth.userPassword)
   const username = useAppSelector(state => state.auth.userUsername)

   const dispatch = useAppDispatch()

   const handleAuthComponent = () => {
      // onAuth(login, pass)
      dispatch(handleAuth({
         login: login,
         pass: pass
      }))
   }

   // const handleReg = () => {
   //    onRegClick();
   // }

   return <>
      <div className={styles.auth}>
         <Title>Sign In</Title>
         <input placeholder="Enter email" className={styles['auth__input']} value={login} type="text" onChange={(e) => {
            // setLogin(e.target.value)
            dispatch(setUserLogin(e.target.value))
         }} />
         <input placeholder="Enter password" className={styles['auth__input']} value={pass} type="text" onChange={(e) => {
            // setPass(e.target.value)
            dispatch(setUserPassword(e.target.value))
         }} />
         <Link to='/posts'><button className={styles['auth__btn']} onClick={handleAuthComponent}>Sign in</button></Link>
         <Link to='/reg'><button className={styles['auth__btn']}>Register</button></Link>
      </div>
   </>
}