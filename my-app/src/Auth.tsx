import { useState } from "react"

type Props = {
    onAuth: (login: string, password: string) => void,
    onSignUp: () => void
 }

export const Auth = ({onAuth, onSignUp}: Props) => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    return <>
    <input value={login} onChange={(e) => { setLogin(e.currentTarget.value)}} />
    <input value={password} onChange={(e) => { setPassword(e.currentTarget.value)}} />
    <button onClick={() => onAuth(login, password)}>Auth</button>
    <button onClick={() => onSignUp()}>sign up</button>
    </>

}