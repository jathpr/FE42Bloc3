import { useState } from "react";
import styles from "../css/Registration.module.css";
import { Title } from "./Title";
import { Link } from "react-router-dom";

type Props = {
   onReg: (login: string, pass: string, username: string) => void,
   // onAuthClick: () => void
}

export const Registration = ({ onReg }: Props) => {

   const [login, setLogin] = useState('')
   const [pass, setPass] = useState('')
   const [username, setUsername] = useState('')

   const handleReg = () => {
      onReg(login, pass, username)
   }

   // const goToAuthGage = () => {
   //    onAuthClick()
   // }

   return <>
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
         <Link to='/auth'><button className={styles['reg__btn']}>Sign In</button></Link>
         {/* <button className={styles['reg__btn']} onClick={goToAuthGage}>Sign In</button> */}
      </div>

   </>
}