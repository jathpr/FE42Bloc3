import { useState } from "react"
import style from './Auth.module.css';
import { Link } from "react-router-dom"


type Props = {
    onAuth: (login: string, password: string) => void,
    onSignUp: () => void
}

export const Auth = ({ onAuth, onSignUp }: Props) => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    return <>
        <div className={style.auth_wrapper}>
            <input className={style.auth_input} placeholder="Login" value={login} onChange={(e) => { setLogin(e.currentTarget.value) }} />
            <input className={style.auth_input} placeholder="Password" value={password} onChange={(e) => { setPassword(e.currentTarget.value) }} />
            <button className={style.auth_button} onClick={() => onAuth(login, password)}>Auth</button>
            <button className={style.auth_button} onClick={() => onSignUp()}>sign up</button>
        </div>
    </>

}
