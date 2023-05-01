import { useContext, useState } from "react"
import { CheckTheme } from "../sandbox/CheckTheme"
import { ButtonMenu } from "./ButtonHeader"
import { ChangeTheme, ThemeContext } from "../sandbox/themeContext"

type themePages = "light" | "dark"

export const Header = () => {

    const changeTheme = useContext(ChangeTheme)

    return (
        <header className="header">
            <CheckTheme changeTheme={() => changeTheme()} />
            {/* <ButtonMenu defaultState handleClick={() => console.log('aaaaaaa')}/> */}
            <Title />
        </header>
    )
}

const Title = () => <div className="header__title">BL<span className="header__lambdaTitle">λ</span>CK MESA<span className="header__posttitle">research facility</span></div>
