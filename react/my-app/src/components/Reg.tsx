import { useContext, useState } from "react"
import { ThemeContext } from "../tools/themeContext"
import "../index.css"
import "../styles/reg.css"
import { Link } from "react-router-dom"

type RegProps = {
    onReg: (login: string, password: string) => void
    onAuth: () => void
}

export const Reg = ({ onReg, onAuth }: RegProps) => {

    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    const theme = useContext(ThemeContext)

    const lightWrapperStyle = { background: "var(--var-lightBack)" }
    const darkWrapperStyle = { background: "var(--var-darkBack)" }
    const lightTitleStyle = { background: "var(--var-lightBack)", color: "var(--var-fontcolor)" }
    const darkTitleStyle = { background: "var(--var-darkBack)", color: "var(--var-primaryColor)" }
    const lightButtonStyle = { background: "var(--var-lightButton)" }
    const darkButtonStyle = { background: "var(--var-darkButton)" }

    return (
        <div style={theme === "light" ? lightWrapperStyle : darkWrapperStyle} className="reg-wrapper">
            <p style={theme === "light" ? lightTitleStyle : darkTitleStyle} className="reg__title">Registration</p>
            <input className="reg__inputs reg__items" placeholder="login" value={login} onChange={(e) => setLogin(e.target.value)} />
            <input className="reg__inputs reg__items" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input className="reg__inputs reg__items" placeholder="some input" />
            <input className="reg__inputs reg__items" placeholder="some input" />
            <input className="reg__inputs reg__items" placeholder="some input" />
            <Link to={"/auth"} className="link reg__items">
                <button style={theme === "light" ? lightButtonStyle : darkButtonStyle} className="button checkToAuth " onClick={() => onAuth()}>You have account? Sign in!</button>
            </Link>
            <button className="button reg__button reg__items" onClick={() => onReg(login, password)}>Registration</button>
        </div >
    )
}
