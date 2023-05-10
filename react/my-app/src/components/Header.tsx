import { useContext, useState } from "react"
import { CheckTheme } from "./CheckTheme"
import { ChangeTheme, ThemeContext } from "../tools/themeContext"
import { Search } from "./Search"
import "../styles/header.css"
import { Title } from "../components/Title"

export const Header = () => {

    const changeTheme = useContext(ChangeTheme)

    const theme = useContext(ThemeContext)
    const lightStyle = { background: "var(--var-lightBack)" }
    const darkStyle = { background: "var(--var-darkBack)" }

    return (
        <header style={theme === "light" ? lightStyle : darkStyle} className="header">
            <div style={theme === "light" ? lightStyle : darkStyle} className="header-wrapper">
                <nav style={theme === "light" ? lightStyle : darkStyle} className="header__nav">
                    <Title />
                    <CheckTheme changeTheme={() => changeTheme()} />
                    {/* <ButtonMenu defaultState handleClick={() => console.log('aaaaaaa')} /> */}
                </nav>
                <Search />
            </div>
        </header>
    )
}
