import { useContext, useState } from "react";
import "../styles/auth.css";
import { ThemeContext } from "../tools/themeContext";
import "../index.css"

type AuthProps = {
    onAuth: (login: string, password: string) => void
    onReg: () => void
}

export const Auth = ({ onAuth, onReg }: AuthProps) => {

    const [login, setLogin] = useState("")
    const [pass, setPass] = useState("")

    const theme = useContext(ThemeContext)

    const lightWrapperStyle = { background: "var(--var-lightBack)" }
    const darkWrapperStyle = { background: "var(--var-darkBack)" }
    const lightTitleStyle = { background: "var(--var-lightBack)", color: "var(--var-fontcolor)" }
    const darkTitleStyle = { background: "var(--var-darkBack)", color: "var(--var-primaryColor)" }
    const lightButtonStyle = { background: "var(--var-lightButton)" }
    const darkButtonStyle = { background: "var(--var-darkButton)" }

    return (
        <div style={theme === "light" ? lightWrapperStyle : darkWrapperStyle} className="auth-wrapper">
            <p style={theme === "light" ? lightTitleStyle : darkTitleStyle} className="auth__title">Sign in!</p>
            <input className="auth__inputs auth__items" placeholder="login" value={login} onChange={(e) => setLogin(e.target.value)} />
            <input className="auth__inputs auth__items" placeholder="password" value={pass} onChange={(e) => setPass(e.target.value)} />
            <button style={theme === "light" ? lightButtonStyle : darkButtonStyle} className="button checkToReg auth__items" onClick={() => onReg()}>You doesn't have account?<span className="button__spanText">Registration</span></button>
            <button className="button auth__button auth__items" onClick={() => onAuth(login, pass)}>Let me in!</button>
        </div>
    )
}
