import { useState } from "react"
import style from './registration.module.css';
import { Link } from "react-router-dom"

type Props = {
    onReg: (login: string, password: string, email: string) => void
}

export const Registration = ({ onReg }: Props) => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    return <>
        <div className={style.registr_wrapper}>
            <input className={style.registr_input} placeholder="Login" value={login} onChange={(e) => { setLogin(e.currentTarget.value) }} />
            <input className={style.registr_input} placeholder="Password" value={password} onChange={(e) => { setPassword(e.currentTarget.value) }} />
            <input className={style.registr_input} placeholder="Email" value={email} onChange={(e) => { setEmail(e.currentTarget.value) }} />
                <Link to={'/auth'} className={style.registr_button} onClick={() => onReg(login, password, email)}>Registration</Link>
        </div>
    </>

}