import { useState } from "react";
import style  from "./Registration.module.css";

type Props = {
    onReg: (Login: string, password: string, email: string)=>void
}

export const Registration = ({onReg}: Props)=>{
    const [login, setLogin] = useState('')
    const [ password, setPass] = useState('')
    const [ email, setEmail] = useState('')

    return (
      <>
        <div className={style.registration_wrapper}>login
          <input
            className={style.input}
            value={login}
            placeholder="Login"
            onChange={(e) => {
              setLogin(e.currentTarget.value);
            }}
          /> password
          <input
            className={style.input}
            value={password}
            placeholder="Password"
            onChange={(e) => {
              setPass(e.currentTarget.value);
            }}
          />
          email
          <input
            className={style.input}
            value={email}
            placeholder="email"
            onChange={(e) => {
              setEmail(e.currentTarget.value);
            }}
          />
          <button className={style.button_registration} onClick={() => onReg(login, password, email)}>Registration</button>
        </div>
      </>
    );
}