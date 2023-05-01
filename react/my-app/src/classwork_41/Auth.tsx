import { useState } from "react";

type AuthProps = {
    onAuth: (login: string, password: string) => void
    onSignUp: () => void
}

export const Auth = ({ onAuth, onSignUp }: AuthProps) => {

    const [login, setLogin] = useState('')
    const [pass, setPass] = useState('')

    return <>
        <input value={login} onChange={(e) => { setLogin(e.currentTarget.value) }} />
        <input value={pass} onChange={(e) => { setPass(e.currentTarget.value) }} />
        <button onClick={() => onAuth(login, pass)}>Let me in!</button>
        <button onClick={() => onSignUp()}>Sign in</button>
    </>
}

