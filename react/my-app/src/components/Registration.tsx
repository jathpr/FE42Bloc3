import { useState } from "react";

type RegistrationProps = {
    onReg: (login: string, password: string) => void
}

export const Registration = ({ onReg }: RegistrationProps) => {

    const [login, setLogin] = useState('')
    const [pass, setPass] = useState('')

    return <>
        <input value={login} onChange={(e) => { setLogin(e.currentTarget.value) }} />
        <input value={pass} onChange={(e) => { setPass(e.currentTarget.value) }} />
        <button onClick={() => onReg(login, pass)}>Registration</button>
    </>
}


