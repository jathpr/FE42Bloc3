import { useState } from "react"
import './Authorization.css'
import { Title } from "../Title/Title"

type Props = {
    onAuth: (login: string, password: string) => void
    onSignUp: () => void
}

export const Authorization = ({ onAuth, onSignUp }: Props) => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    return <>
    <Title/>
        <div className="authWrapper">
            <input className="authInput" type='text' placeholder="Your Name" value={login} onChange={(e) => { setLogin(e.currentTarget.value) }} />
            <input className="authInput" type='text' placeholder="Your Password" value={password} onChange={(e) => { setPassword(e.currentTarget.value) }} />
            <button className="authButton" onClick={() => onAuth(login, password)}>Authorization</button>
            <button className="authButton" onClick={() => onSignUp()}>Sign Up</button>
        </div>
    </>
}
