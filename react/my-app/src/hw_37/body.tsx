// import { Posts } from "../hw_38/Posts"
import { useContext, useState } from "react"
import { CardsWrapper } from "../hw_38/PostsWrapper"
import { Auth } from "../hw_40/Auth"
import { setConstantValue } from "typescript"
import { Reg } from "../hw_41/Reg"
import { ThemeContext } from "../hw_41/themeContext"

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
