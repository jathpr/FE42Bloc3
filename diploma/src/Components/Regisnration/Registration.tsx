import { useState } from "react";
import style from "./Registration.module.css";
import {Link, Route, Routes } from 'react-router-dom';


type Props = {
  onReg: (Login: string, password: string, email: string) => void;
  onSignUp: () => void;
};

export const Registration = ({ onReg }: Props) => {
  const [name, setName] = useState("");
  const [password, setPass] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <div className={style.sign_in_page}>
        <div className={style.auth}>
        <p className={style.sign_in}>Sign Up</p>
        <p className={style.password}>Name</p>
          <input
            className={style.input}
            value={name}
            placeholder="Name"
            onChange={(e) => {setName(e.currentTarget.value)}}
          />
        <p className={style.password}>Email</p>
          <input
            className={style.input}
            value={email}
            placeholder="Email"
            onChange={(e) => {setEmail(e.currentTarget.value)}}
          />
        <p className={style.password}>Password</p>
          <input
            className={style.input}
            value={password}
            placeholder="Password"
            onChange={(e) => {
              setPass(e.currentTarget.value);
            }}
          />
            <p className={style.password}>Confirm password</p>
          <input
            className={style.input}
            value={password}
            placeholder="Confirm password"
            onChange={(e) => {
              setPass(e.currentTarget.value);
            }}
          />
          <button
            className={style.button_auth}onClick={() => onReg(name, password, email)}>Sign Up
          </button>
          <p className={style.have_account}>Already have an account? {<Link to ='/auth'> Sign in.</Link>}   </p>
           {<Routes>
          <Route path="auth" />
        </Routes>}
        </div>
      </div>
    </>
  );
};


