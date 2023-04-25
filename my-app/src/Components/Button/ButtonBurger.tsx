import React, { useState } from 'react'
import style from './ButtonBurger.module.css'

type Props = {
    touched?: boolean,
    handleClick: () => void
}

export const Button = ({ touched, handleClick }: Props) => {

    const [isTouched, setIsTouched] = useState(touched)

    const click = () => {
        handleClick()
        setIsTouched(!isTouched)
    }
    return <button className={style.button} onClick={click}>
        {isTouched ? <>
            <hr className={style.burgerSpan}></hr>
            <hr className={style.burgerSpan}></hr>
            <hr className={style.burgerSpan}></hr></> :
            <span className={style.closeSpan}>✖</span>}
    </button>
}