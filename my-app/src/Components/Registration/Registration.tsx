import { useState } from "react"
import './Registration.css'
import { Title } from "../Title/Title"
import { useNavigate } from "react-router-dom"

type Props = {
    onReg: (login: string, password: string) => void
}

export const Registration = ({ onReg }: Props) => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    return <>
        <Title />
        <div className="regWrapper">
            <input className="regInput" type='text' placeholder="Your Name" value={login} onChange={(e) => { setLogin(e.currentTarget.value) }} />
            <input className="regInput" type='text' placeholder="Your Password" value={password} onChange={(e) => { setPassword(e.currentTarget.value) }} />
            <button className="regButton" onClick={() => {
                onReg(login, password)
                navigate('/Auth')
            }}>Registration</button>
        </div>
    </>
}
