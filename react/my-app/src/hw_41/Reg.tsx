import { useState } from "react"
import "./reg.css"

type RegProps = {
    onReg: (login: string, password: string) => void
    onAuth: () => void
}

export const Reg = ({ onReg, onAuth }: RegProps) => {
    
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className="reg-wrapper">
            <p className="reg__title">Registration</p>
            <input className="reg__inputs reg__items" placeholder="login" value={login} onChange={(e) => setLogin(e.target.value)} />
            <input className="reg__inputs reg__items" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input className="reg__inputs reg__items" placeholder="some input" />
            <input className="reg__inputs reg__items" placeholder="some input" />
            <input className="reg__inputs reg__items" placeholder="some input" />
            <button className="button checkToAuth auth__items" onClick={() => onAuth()}>You have account?<span className="button__spanText">Sign in!</span></button>
            <button className="button reg__button reg__items" onClick={() => onReg(login, password)}>Registration</button>
        </div>
    )
}
