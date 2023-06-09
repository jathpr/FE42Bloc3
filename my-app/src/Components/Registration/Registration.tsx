import { useContext, useState } from "react"
import style from './registration.module.css';
import { ThemeContext } from "../ThemeProvider";

type Props = {
    onReg: (login: string, password: string, email: string) => void
}

export const Registration = ({ onReg }: Props) => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const { theme } = useContext(ThemeContext)

    return <>
        <div className={theme === 'light' ? style.registr_wrapper : style.registr_wrapper_dark}>
            <span className={style.registr_login}>Login</span>
            <input className={style.registr_input} value={login} onChange={(e) => { setLogin(e.currentTarget.value) }} />
            <span className={style.registr_password}>Password</span>
            <input className={style.registr_input} value={password} onChange={(e) => { setPassword(e.currentTarget.value) }} />
            <button className={style.registr_button} onClick={() => onReg(login, password, email)}>Registration</button>
            <input value={email} onChange={(e) => { setEmail(e.currentTarget.value) }} />

        </div>
    </>

}