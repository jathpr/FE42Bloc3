import React, { useState } from "react";
import styles from "../css/Auth.module.css";
import { Title } from "./Title";
import { Header } from "./Header";

type Props = {
   onAuth: (login: string, pass: string) => void,
   onRegClick: () => void
}
export const Auth = ({ onAuth, onRegClick }: Props) => {

   const [login, setLogin] = useState('');
   const [pass, setPass] = useState('');

   const handleAuth = () => {
      onAuth(login, pass)
   }

   const handleReg = () => {
      onRegClick();
   }

   return <>
      <Header username={null} />
      <div className={styles.auth}>
         <Title>Sign In</Title>
         <input placeholder="Enter email" className={styles['auth__input']} value={login} type="text" onChange={(e) => {
            setLogin(e.target.value)
         }} />
         <input placeholder="Enter password" className={styles['auth__input']} value={pass} type="text" onChange={(e) => {
            setPass(e.target.value)
         }} />
         <button className={styles['auth__btn']} onClick={handleAuth}>Sign in</button>
         <button className={styles['auth__btn']} onClick={handleReg}>Register</button>
      </div>
   </>
}