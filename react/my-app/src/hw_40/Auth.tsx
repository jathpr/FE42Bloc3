import { useState } from "react";
import "./auth.css";

type AuthProps = {
    onAuth: (login: string, password: string) => void
    onReg: () => void
}

export const Auth = ({ onAuth, onReg }: AuthProps) => {

    const [login, setLogin] = useState("")
    const [pass, setPass] = useState("")

    return (
        <div className="auth-wrapper">
            <p className="auth__title">Sign in!</p>
            <input className="auth__inputs auth__items" placeholder="login" value={login} onChange={(e) => setLogin(e.target.value)} />
            <input className="auth__inputs auth__items" placeholder="password" value={pass} onChange={(e) => setPass(e.target.value)} />
            <button className="button reg auth__items" onClick={() => onReg()}>You doesn't have account?<span className="reg-text">Registration</span></button>
            <button className="button auth__button auth__items" onClick={() => onAuth(login, pass)}>Let me in!</button>
        </div>
    )
}
