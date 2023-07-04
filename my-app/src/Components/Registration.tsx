import { useState } from "react";
import styles from "../css/Registration.module.css";
import { Title } from "./Title";
import { Link, useActionData } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/store";
import { regUserThunk, setUserEmail, setUserPassword, setUserUsername } from "../store/auth";
import { UserForReg } from "../server/auth";

type Props = {
   onReg: ({ email, password, username }: UserForReg) => void,
   // onAuthClick: () => void
}

export const Registration = () => {

   // const [email, setEmail] = useState('')
   // const [pass, setPass] = useState('')
   // const [username, setUsername] = useState('')

   const email = useAppSelector(state => state.auth.userEmail)
   const pass = useAppSelector(state => state.auth.userPassword)
   const username = useAppSelector(state => state.auth.userUsername)

   const dispatch = useAppDispatch()

   const handleReg = () => {
      // onReg(email, pass, username)

      // dispatch(addUser({
      //    email: email,
      //    password: pass,
      //    username: username
      // }))

      dispatch(regUserThunk({
         email: email,
         password: pass,
         username: username
      }))
   }

   // const goToAuthGage = () => {
   //    onAuthClick()
   // }

   return <>
      <div className={styles.reg}>
         <Title>Registration</Title>
         <input placeholder="Enter email" value={email} type="text" className={styles['reg__input']} onChange={(e) => {
            // setEmail(e.target.value)
            dispatch(setUserEmail(e.target.value))
         }} />
         <input placeholder="Enter username" value={username} type="text" className={styles['reg__input']} onChange={(e) => {
            // setUsername(e.target.value)
            dispatch(setUserUsername(e.target.value))
         }} />
         <input placeholder="Enter password" value={pass} type="text" className={styles['reg__input']} onChange={(e) => {
            // setPass(e.target.value)
            dispatch(setUserPassword(e.target.value))
         }} />
         <button className={styles['reg__btn']} onClick={handleReg}>Register</button>
         <Link to='/auth'><button className={styles['reg__btn']}>Sign In</button></Link>
         {/* <button className={styles['reg__btn']} onClick={goToAuthGage}>Sign In</button> */}
      </div>

   </>
}