import { useState } from "react"

type Props = {
    onReg: (login: string, password: string) => void
}

export const Registration = ({onReg}: Props) => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    return <>
    <input value={login} onChange={(e) => { setLogin(e.currentTarget.value)}} />
    <input value={password} onChange={(e) => { setPassword(e.currentTarget.value)}} />
    <button onClick={() => onReg(login, password)}>Registration</button>
    </>

}