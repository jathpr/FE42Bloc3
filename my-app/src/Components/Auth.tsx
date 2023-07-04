import React, { useState } from "react";
import styles from "../css/Auth.module.css";
import { Title } from "./Title";
import { Header } from "./Header";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/store";
import { handleAuthThunk, setUserEmail, setUserPassword } from "../store/auth";

type Props = {
   onAuth: (email: string, pass: string) => void,
   // onRegClick: () => void
}
export const Auth = ({ onAuth }: Props) => {

   // const [email, setEmail] = useState('');
   // const [pass, setPass] = useState('');

   const email = useAppSelector(state => state.auth.userEmail)
   const pass = useAppSelector(state => state.auth.userPassword)
   const username = useAppSelector(state => state.auth.userUsername)

   const dispatch = useAppDispatch()

   const handleAuthComponent = () => {
      // onAuth(email, pass)
      dispatch(handleAuthThunk({
         email: email,
         password: pass
      }))
   }

   // const handleReg = () => {
   //    onRegClick();
   // }

   return <>
      <div className={styles.auth}>
         <Title>Sign In</Title>
         <input placeholder="Enter email" className={styles['auth__input']} value={email} type="text" onChange={(e) => {
            // setEmail(e.target.value)
            dispatch(setUserEmail(e.target.value))
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