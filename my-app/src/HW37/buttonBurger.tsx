import { ReactNode } from "react"
import style from './buttonBurger.module.css'

type Props = {
    children: ReactNode,
    touched?: boolean,
    handleClick: () => void
}

export const Button = ({children, touched, handleClick}: Props) => (
    <button className={style.button} onClick={handleClick} disabled={!touched}>{children}</button>
)