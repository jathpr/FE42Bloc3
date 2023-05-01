import { useContext, useState } from "react"
import { CheckTheme } from "../hw_41/CheckTheme"
import { ButtonMenu } from "./ButtonHeader"
import { ChangeTheme } from "../hw_41/themeContext"
import { Search } from "../hw_41/Search"

export const Header = () => {

    const changeTheme = useContext(ChangeTheme)


    return (
        <header className="header">
            <div className="header-wrapper">
                <CheckTheme changeTheme={() => changeTheme()} />
                {/* {page ===} */}
                <Search />
                {/* <ButtonMenu defaultState handleClick={() => console.log('aaaaaaa')}/> */}
                <Title />
            </div>
        </header>
    )
}

const Title = () => <div className="header__title">BL<span className="header__lambdaTitle">λ</span>CK MESA<span className="header__posttitle">research facility</span></div>
