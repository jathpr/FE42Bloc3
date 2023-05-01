import { useState } from "react"
import style from './registration.module.css';

type Props = {
    onReg: (login: string, password: string) => void
}

export const Registration = ({ onReg }: Props) => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    return <>
        <div className={style.registr_wrapper}>
            <span className={style.registr_login}>Login</span>
            <input className={style.registr_input} value={login} onChange={(e) => { setLogin(e.currentTarget.value) }} />
            <span className={style.registr_password}>Password</span>
            <input className={style.registr_input} value={password} onChange={(e) => { setPassword(e.currentTarget.value) }} />
            <button className={style.registr_button} onClick={() => onReg(login, password)}>Registration</button>
        </div>
    </>

}