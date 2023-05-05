import { useState } from "react";
import style  from "./Registration.module.css";

type Props = {
    onReg: (Login: string, password: string)=>void
}

export const Registration = ({onReg}: Props)=>{
    const [login, setLogin] = useState('')
    const [ password, setPass] = useState('')

    return (
      <>
        <div className={style.registration_wrapper}>login
          <input
            className={style.input}
            value={login}
            onChange={(e) => {
              setLogin(e.currentTarget.value);
            }}
          /> password
          <input
            className={style.input}
            value={password}
            onChange={(e) => {
              setPass(e.currentTarget.value);
            }}
          />
          <button className={style.button_registration} onClick={() => onReg(login, password)}>Registration</button>
        </div>
      </>
    );
}