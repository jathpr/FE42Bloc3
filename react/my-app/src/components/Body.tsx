import { useContext, useState } from "react"
import { CardsWrapper } from "./PostsWrapper"
import { Auth } from "./Auth"
import { Reg } from "./Reg"
import { ThemeContext } from "../tools/themeContext"

type User = {
    login: string,
    password: string
}

type Pages = "auth" | "reg" | "content"

export const Body = () => {

    const [users, setUsers] = useState<User[]>([{ login: "", password: "" }])
    const [page, setPage] = useState<Pages>("auth")

    const goToReg = () => setPage("reg")
    const goToAuth = () => setPage("auth")

    const theme = useContext(ThemeContext)
    const lightStyle = { background: "var(--var-lightBack)" }
    const darkStyle = { background: "var(--var-darkBack)" }

    const regUser = (login: string, password: string) => {
        setUsers([...users, { login, password }])
        setPage("auth")
    }

    const checkUser = (login: string, password: string) => {
        const findUser = users.find(user => user.login === login && user.password === password)
        if (findUser) {
            setPage("content")
        } else {
            alert("check login & password")
        }
    }

    return (
        <div style={theme === "light" ? lightStyle : darkStyle} className="body">
            {page === "auth" && <Auth onAuth={checkUser} onReg={() => goToReg()} />}
            {page === "reg" && <Reg onReg={regUser} onAuth={() => goToAuth()} />}
            {page === "content" && <CardsWrapper />}
        </div>)
}
