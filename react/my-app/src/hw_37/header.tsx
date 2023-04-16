import { ReactNode } from "react"

export const Header = () => (
    <header className="header">
        <ButtonHamburger enabled handleClick={() => console.log("what's gonna here?!")}>click</ButtonHamburger>
        <Title></Title>
    </header>
)

const Title = () => <div className="header__title">Sign In</div>

type Menu = {
    children?: ReactNode,
    enabled: boolean,
    handleClick: () => void
}

const ButtonHamburger = ({ children, enabled, handleClick }: Menu) => (
    <button value={'123123'} className="header__button" onClick={handleClick} disabled={!enabled}>
        {children}
        {/* <span className="burger__line"></span> */}
    </button>
)
