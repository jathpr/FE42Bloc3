import { useContext } from "react"
import { ThemeContext } from "../hw_41/themeContext"
import "./header.css"


export const Title = () => {

    const theme = useContext(ThemeContext)
    const lightBack = { background: "var(--var-lightBack)" }
    const darkBack = { background: "var(--var-darkBack)" }
    const lightFont = { color: "var(--var-lightFont)" }
    const darkFont = { color: "var(--var-darkFont)" }

    return (
        <div style={theme === "light" ? lightBack : darkBack } className="header__title">BL
            <span style={theme === "light" ? lightBack : darkBack} className="header__lambdaTitle">λ</span>
            CK MESA
            <span style={theme === "light" ? lightBack : darkBack} className="header__posttitle">research facility</span>
        </div>
    )
}
