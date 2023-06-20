import { useState } from "react";
import style from "./Auth.module.css";
import { Link } from "react-router-dom";

type Props = {
  onAuth: (Login: string, password: string) => void;
  onSignIn: () => void;  
};


export const Auth = ({ onAuth}: Props) => {
  
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
 
  return (
    <>
    <div className={style.sign_in_page}>
        <div className={style.auth}>
          <div className={style.auth_wrapper}>
            <p className={style.sign_in}>Sign In</p>
            <p className={style.password}>Email</p>
          <input
          className={style.input}
          value={email}
          onChange={(e) => {setEmail(e.currentTarget.value)}}/>
            <p className={style.password}>Password</p>
          <input
          className={style.input}
          value={password}
          onChange={(e) =>{setPass(e.currentTarget.value)}}/>
          <button className={style.button_auth}onClick={() => onAuth(email, password)}>Sign In</button>
          
          <p className={style.have_account}>Don't have an account? {<Link to ='/reg'> Sign Up</Link>}   </p>
        </div>
      </div>
    </div>
    </>
  );
};
