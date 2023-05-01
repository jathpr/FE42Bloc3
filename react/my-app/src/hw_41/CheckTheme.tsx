import { useState } from "react"
import "./checkTheme.css"

type ChangeProps = {
    changeTheme: () => void
}

export const CheckTheme = ({ changeTheme }: ChangeProps) => {

        return (
            <div className="toggle__wrapper">
                <span className="toggle__text">light or a dark?</span>
                <input className="toggle" type="checkbox" onChange={() => changeTheme()} />
            </div>
        )
}
