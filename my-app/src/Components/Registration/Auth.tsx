import { useState } from "react";
import style from "./Auth.module.css";

type Props = {
  onAuth: (Login: string, password: string) => void;
  onSignUp: () => void;
};

export const Auth = ({ onAuth, onSignUp }: Props) => {
  const [login, setLogin] = useState("");
  const [password, setPass] = useState("");

  return (
    <>
      <div className={style.auth_wrapper}>login
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
        <button
          className={style.button_auth}onClick={() => onAuth(login, password)}>Auth</button>
        <button className={style.button_auth} onClick={() => onSignUp()}>Sign Up</button>
      </div>
    </>
  );
};
