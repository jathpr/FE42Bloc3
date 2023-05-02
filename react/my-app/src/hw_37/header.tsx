import { useContext, useState } from "react"
import { CheckTheme } from "../hw_41/CheckTheme"
import { ButtonMenu } from "./ButtonHeader"
import { ChangeTheme, ThemeContext } from "../hw_41/themeContext"
import { Search } from "../hw_41/Search"
import "./header.css"
import { Title } from "./Title"

export const Header = () => {

    const changeTheme = useContext(ChangeTheme)

    const theme = useContext(ThemeContext)
    const lightStyle = { background: "var(--var-lightBack)" }
    const darkStyle = { background: "var(--var-darkBack)" }

    return (
        <header style={theme === "light" ? lightStyle : darkStyle} className="header">
            <div style={theme === "light" ? lightStyle : darkStyle} className="header-wrapper">
                <nav style={theme === "light" ? lightStyle : darkStyle} className="header__nav">
                    <CheckTheme changeTheme={() => changeTheme()} />
                    {/* <ButtonMenu defaultState handleClick={() => console.log('aaaaaaa')} /> */}
                </nav>
                <Search />
                <Title />
            </div>
        </header>
    )
}
