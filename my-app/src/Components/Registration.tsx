import React, { useState } from "react";
import styles from "../css/Registration.module.css";
import { Header } from "./Header";
import { Title } from "./Title";

type Props = {
   onReg: (login: string, pass: string, username: string) => void,
   onAuthClick: () => void
}

type State = {
   login: string,
   pass: string
}

export const Registration = ({ onReg, onAuthClick }: Props) => {

   const [login, setLogin] = useState('')
   const [pass, setPass] = useState('')
   const [username, setUsername] = useState('')

   const handleReg = () => {
      onReg(login, pass, username)
   }

   const goToAuthGage = () => {
      onAuthClick()
   }

   return <>
      <Header username={null} />
      <div className={styles.reg}>
         <Title>Registration</Title>
         <input placeholder="Enter email" value={login} type="text" className={styles['reg__input']} onChange={(e) => {
            setLogin(e.target.value)
         }} />
         <input placeholder="Enter username" value={username} type="text" className={styles['reg__input']} onChange={(e) => {
            setUsername(e.target.value)
         }} />
         <input placeholder="Enter password" value={pass} type="text" className={styles['reg__input']} onChange={(e) => {
            setPass(e.target.value)
         }} />
         <button className={styles['reg__btn']} onClick={handleReg}>Register</button>
         <button className={styles['reg__btn']} onClick={goToAuthGage}>Sign In</button>
      </div>

   </>
}