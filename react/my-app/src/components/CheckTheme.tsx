import { useContext, useState } from "react"
import "../styles/checkTheme.css"
import { ThemeContext } from "../tools/themeContext"

type ChangeProps = {
    changeTheme: () => void
}

export const CheckTheme = ({ changeTheme }: ChangeProps) => {

    const theme = useContext(ThemeContext)
    const lightBack = { background: "var(--var-lightBack)" }
    const darkBack = { background: "var(--var-darkBack)" }
    const lightToggle = { background: "var(--var-fontcolor)" }
    const darkToggle = { background: "var(--var-primaryColor)" }

    return (
        <div style={theme === "light" ? lightBack : darkBack} className="toggle__wrapper">
            <span style={theme === "light" ? lightBack : darkBack} className="toggle__text">light or a dark?</span>
            <input style={theme === "light" ? lightToggle : darkToggle} className="toggle" type="checkbox" onChange={() => changeTheme()} />
        </div>
    )
}
