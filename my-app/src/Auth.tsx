import { useState } from "react"
import style from './Auth.module.css';


type Props = {
    onAuth: (login: string, password: string) => void,
    onSignUp: () => void
}

export const Auth = ({ onAuth, onSignUp }: Props) => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    return <>
        <div className={style.auth_wrapper}>
            <span className={style.auth_login}>Login</span>
            <input className={style.auth_input} value={login} onChange={(e) => { setLogin(e.currentTarget.value) }} />
            <span className={style.auth_password}>Password</span>
            <input className={style.auth_input} value={password} onChange={(e) => { setPassword(e.currentTarget.value) }} />
            <button className={style.auth_button} onClick={() => onAuth(login, password)}>Auth</button>
            <button className={style.auth_button} onClick={() => onSignUp()}>sign up</button>
        </div>
    </>

}