import { useContext } from "react"
import { CheckTheme } from "./CheckTheme"
import { ChangeTheme, ThemeContext } from "../tools/themeContext"
import { Search } from "./Search"
import { Title } from "../components/Title"
import "../styles/header.css"
import { SignIn } from "./SignIn"

export const Header = () => {

    const changeTheme = useContext(ChangeTheme)

    const theme = useContext(ThemeContext)
    const lightStyle = { background: "var(--var-lightBack)" }
    const darkStyle = { background: "var(--var-darkBack)" }

    return (
        <header style={theme === "light" ? lightStyle : darkStyle} className="header">
            <div style={theme === "light" ? lightStyle : darkStyle} className="header-wrapper">
                <Title />
                <nav style={theme === "light" ? lightStyle : darkStyle} className="header__nav">
                    <CheckTheme changeTheme={() => changeTheme()} />
                    <SignIn />
                </nav>
            </div>
        </header>
    )
}
